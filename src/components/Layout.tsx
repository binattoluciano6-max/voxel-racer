import React from 'react';
import { Diamond, User } from 'lucide-react';

export const TopBar = ({ title }: { title: string }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-obsidian border-b-4 border-obsidian-low flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-flora-dark flex items-center justify-center border-b-4 border-flora-deep">
           <User className="text-white w-6 h-6" />
        </div>
        <h1 className="text-2xl font-display font-bold text-flora uppercase tracking-tighter">{title}</h1>
      </div>
      <div className="flex items-center gap-2 bg-obsidian-high px-4 py-2 border-b-4 border-obsidian-highest">
        <Diamond className="text-earth w-5 h-5 fill-current" />
        <span className="font-display font-bold text-white">1,250 EMERALDS</span>
      </div>
    </header>
  );
};

export const BottomNav = ({ activeTab }: { activeTab: string }) => {
  const tabs = [
    { id: 'home', label: 'HOME', icon: 'Home' },
    { id: 'garage', label: 'GARAGE', icon: 'Car' },
    { id: 'tracks', label: 'TRACKS', icon: 'Map' },
    { id: 'ranks', label: 'RANKS', icon: 'Trophy' },
    { id: 'shop', label: 'SHOP', icon: 'ShoppingCart' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-obsidian border-t-4 border-obsidian-low flex items-stretch justify-around px-4 pb-4 z-50">
      {/* Implementation will be in App.tsx for routing, but here's the UI structure */}
    </nav>
  );
};
