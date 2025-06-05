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
        width: sidebarOpen ? 240 : 72,
        background: '#fff',
        borderRight: '1px solid #e5e7eb',
        transition: 'width 0.2s',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        zIndex: 10,
      }}>
        {/* Sidebar header: Hamburger + clonet logo */}
        <div style={{ display: 'flex', alignItems: 'center', height: 64, padding: sidebarOpen ? '0 20px' : '0 12px', borderBottom: '1px solid #f1f1f1', minWidth: 0 }}>
          <button
            onClick={() => setSidebarOpen((open) => !open)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginRight: sidebarOpen ? 18 : 0,
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <span style={{ display: 'inline-block', width: 24, height: 24 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect y="4" width="24" height="2" rx="1" fill="#222" />
                <rect y="11" width="24" height="2" rx="1" fill="#222" />
                <rect y="18" width="24" height="2" rx="1" fill="#222" />
              </svg>
            </span>
          </button>
          {sidebarOpen && (
            <span style={{ fontFamily: 'ibrand, sans-serif', fontWeight: 400, fontSize: 22, letterSpacing: '0.01em', lineHeight: 1.1, color: '#222', whiteSpace: 'nowrap', marginLeft: 2 }}>
              clonet
            </span>
          )}
        </div>
        {/* Sidebar nav */}
        <div style={{ padding: sidebarOpen ? '18px 0 0 0' : '18px 0 0 0', flex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: sidebarOpen ? '0 20px' : '0 12px',
            height: 40,
            fontWeight: 600,
            fontSize: 16,
            color: '#222',
            cursor: 'pointer',
            borderRadius: 8,
            background: 'none',
            marginBottom: 2,
            transition: 'background 0.15s',
          }}>
            <span style={{ marginRight: sidebarOpen ? 10 : 0, display: 'inline-block', width: 20, textAlign: 'center' }}>
              {/* Folder icon */}
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h3.382a1.5 1.5 0 0 1 1.06.44l.618.62c.094.093.22.146.352.146H16a1.5 1.5 0 0 1 1.5 1.5v7.5A1.5 1.5 0 0 1 16 16H4A1.5 1.5 0 0 1 2.5 14.5v-9Z" stroke="#222" strokeWidth="1.3"/></svg>
            </span>
            {sidebarOpen && 'Projects'}
          </div>
        </div>
        {/* Optional: Sign Out button at bottom of sidebar */}
        <div style={{ padding: sidebarOpen ? '0 20px 24px 20px' : '0 12px 24px 12px', marginTop: 'auto' }}>
          <button onClick={handleSignOut} style={{ width: '100%', background: '#111', color: '#fff', border: 'none', borderRadius: 20, padding: '10px 0', fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: 'Switzer, sans-serif', boxShadow: '0 2px 8px 0 rgba(16,20,30,0.08)', transition: 'background 0.2s' }}>
            Sign Out
          </button>
        </div>
      </div>
      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: 64, padding: '0 40px', boxSizing: 'border-box', borderBottom: '1px solid #e5e7eb', background: 'none', position: 'relative' }}>
          {/* Empty header for now, matches screenshot */}
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