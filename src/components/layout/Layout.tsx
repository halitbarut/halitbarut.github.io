import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="w-full min-h-screen relative overflow-x-clip flex flex-col bg-background text-foreground font-sans">
      <SEO />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
