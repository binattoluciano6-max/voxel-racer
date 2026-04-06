import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Howl, Howler } from 'howler';

const SOUNDS = {
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  select: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  nav: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
  success: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
  error: 'https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3',
  engine: 'https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3', // Engine start
};

interface AudioContextType {
  playSound: (name: keyof typeof SOUNDS) => void;
  volume: number;
  setVolume: (v: number) => void;
  isMuted: boolean;
  setIsMuted: (m: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [volume, setVolumeState] = useState(0.5);
  const [isMuted, setIsMutedState] = useState(false);
  const soundsRef = useRef<{ [key: string]: Howl }>({});

  useEffect(() => {
    // Preload sounds
    Object.entries(SOUNDS).forEach(([key, url]) => {
      soundsRef.current[key] = new Howl({
        src: [url],
        volume: volume,
        preload: true,
      });
    });

    return () => {
      Object.values(soundsRef.current).forEach((sound: Howl) => sound.unload());
    };
  }, []);

  useEffect(() => {
    Howler.volume(isMuted ? 0 : volume);
  }, [volume, isMuted]);

  const playSound = (name: keyof typeof SOUNDS) => {
    const sound = soundsRef.current[name];
    if (sound) {
      sound.play();
    }
  };

  const setVolume = (v: number) => {
    setVolumeState(v);
  };

  const setIsMuted = (m: boolean) => {
    setIsMutedState(m);
  };

  return (
    <AudioContext.Provider value={{ playSound, volume, setVolume, isMuted, setIsMuted }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
