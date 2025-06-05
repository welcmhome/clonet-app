'use client';
import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'Switzer, sans-serif', background: 'linear-gradient(180deg, #f8fafc 0%, #eaf1ff 40%, #f8fafc 100%)', color: '#222' }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? 220 : 64,
        background: '#fff',
        borderRight: '1px solid #e5e7eb',
        transition: 'width 0.2s',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: sidebarOpen ? 'flex-start' : 'center',
        paddingTop: 24,
        boxSizing: 'border-box',
        zIndex: 10,
      }}>
        {/* Hamburger menu */}
        <button
          onClick={() => setSidebarOpen((open) => !open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginLeft: sidebarOpen ? 12 : 0,
            marginBottom: 32,
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {/* Hamburger icon */}
          <span style={{ display: 'inline-block', width: 24, height: 24 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect y="4" width="24" height="2" rx="1" fill="#222" />
              <rect y="11" width="24" height="2" rx="1" fill="#222" />
              <rect y="18" width="24" height="2" rx="1" fill="#222" />
            </svg>
          </span>
        </button>
        {/* Sidebar content placeholder */}
        <div style={{ width: '100%', marginTop: 8, paddingLeft: sidebarOpen ? 16 : 0, fontSize: 17, fontWeight: 600, letterSpacing: 0.01, color: '#222', display: sidebarOpen ? 'block' : 'none' }}>
          Lab
        </div>
      </div>
      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: 80, padding: '0 40px', boxSizing: 'border-box', borderBottom: '1px solid #e5e7eb', background: 'none', position: 'relative' }}>
          <a href="https://clonet.ai" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontFamily: 'ibrand, sans-serif', fontWeight: 400, fontSize: 28, letterSpacing: '0.01em', lineHeight: 1.1, display: 'inline-block', color: 'inherit' }}>clonet.</span>
          </a>
          <button onClick={handleSignOut} style={{ marginLeft: 'auto', background: '#111', color: '#fff', border: 'none', borderRadius: 20, padding: '10px 22px', fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'Switzer, sans-serif', boxShadow: '0 2px 8px 0 rgba(16,20,30,0.08)', transition: 'background 0.2s' }}>
            Sign Out
          </button>
        </div>
        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 24 }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
              You're logged in.
            </h1>
            <p style={{ fontSize: 18, fontWeight: 400 }}>
              This is a temporary dashboard while we build the full experience.<br />More coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 