'use client';
import { useState, useEffect, useRef } from 'react';
// @ts-ignore
import { supabase } from '@/utils/supabaseClient';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sidebar width constants
  const SIDEBAR_OPEN_WIDTH = 240;
  const SIDEBAR_CLOSED_WIDTH = 72;
  const sidebarWidth = sidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH;

  // Profile dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profile, setProfile] = useState({ name: '', email: '' });
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Show arrow only after sidebar is fully open
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (sidebarOpen) {
      timeout = setTimeout(() => setShowArrow(true), 250); // match transition duration
    } else {
      setShowArrow(false);
    }
    return () => clearTimeout(timeout);
  }, [sidebarOpen]);

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Try to get name/email from 'profiles' table, fallback to user object
        const { data } = await supabase
          .from('profiles')
          .select('full_name, email')
          .eq('id', user.id)
          .single();
        setProfile({
          name: data?.full_name || user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
          email: data?.email || user.email || '',
        });
      }
    }
    fetchUser();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && e.target instanceof Node && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Switzer, sans-serif', background: '#fafbfc', color: '#222' }}>
      {/* Header: always full width, fixed at top */}
      <div style={{
        width: '100%',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        borderBottom: '1px solid #e5e7eb',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        paddingLeft: 0,
        paddingRight: 40,
        boxSizing: 'border-box',
      }}>
        {/* Hamburger + Logo perfectly flush left, matching sidebar */}
        <div style={{ display: 'flex', alignItems: 'center', height: 64, marginLeft: 20 }}>
          <button
            onClick={() => setSidebarOpen((open) => !open)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginRight: 14,
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              padding: 0,
            }}
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <span style={{ display: 'inline-block', width: 18, height: 18 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect y="3" width="18" height="2" rx="1" fill="#222" />
                <rect y="8" width="18" height="2" rx="1" fill="#222" />
                <rect y="13" width="18" height="2" rx="1" fill="#222" />
              </svg>
            </span>
          </button>
          <span style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'ibrand, sans-serif', fontWeight: 400, fontSize: 22, letterSpacing: '0.01em', lineHeight: 1.1, color: '#222', whiteSpace: 'nowrap', marginLeft: 2, opacity: 1, transition: 'opacity 0.2s', overflow: 'hidden', textOverflow: 'ellipsis', flexShrink: 0 }}>
              clonet
            </span>
            <span style={{
              fontFamily: '"Pixelify Sans", monospace',
              fontSize: 11,
              background: '#e3eef1',
              color: '#217399',
              borderRadius: 5,
              height: 20,
              padding: '0 8px',
              marginLeft: 8,
              fontWeight: 700,
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              boxShadow: 'none',
              border: 'none',
              textTransform: 'lowercase',
              lineHeight: 1,
              verticalAlign: 'baseline',
            }}>
              labs
            </span>
          </span>
        </div>
        <div style={{ flex: 1 }} />
        {/* Search bar, sort, avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ background: '#f5f6fa', borderRadius: 8, padding: '0 12px', height: 36, display: 'flex', alignItems: 'center', border: '1px solid #e5e7eb' }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#888" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
            <input placeholder="Search" style={{ border: 'none', outline: 'none', background: 'none', fontSize: 15, marginLeft: 6, width: 120, color: '#222', fontFamily: 'Switzer, sans-serif' }} />
          </div>
          <button style={{ background: '#f5f6fa', border: '1px solid #e5e7eb', borderRadius: 8, height: 36, width: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M3 7h18M6 12h12M9 17h6" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          {/* Profile button and dropdown */}
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
              style={{
                background: 'none',
                border: 'none',
                borderRadius: '50%',
                height: 36,
                width: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: 0,
                outline: 'none',
              }}
              aria-label="Open profile menu"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              {/* Black profile icon */}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" stroke="#111" strokeWidth="2"/>
                <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#111" strokeWidth="2"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 44,
                  right: 0,
                  minWidth: 220,
                  background: '#fff',
                  borderRadius: 12,
                  boxShadow: '0 6px 32px 0 rgba(16,20,30,0.13)',
                  padding: '10px 0 6px 0',
                  zIndex: 1000,
                  fontFamily: 'Switzer, sans-serif',
                }}
              >
                <div style={{ padding: '8px 20px 6px 20px', borderBottom: '1px solid #f1f1f1', marginBottom: 2 }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: '#222', marginBottom: 2 }}>{profile.name}</div>
                  <div style={{ fontSize: 13, color: '#888', fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{profile.email}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  <button style={dropdownItemStyle} onClick={() => setDropdownOpen(false)}>Profile</button>
                  <button style={dropdownItemStyle} onClick={() => setDropdownOpen(false)}>Team</button>
                  <button style={dropdownItemStyle} onClick={() => setDropdownOpen(false)}>Labeling Team</button>
                  <button style={dropdownItemStyle} onClick={() => setDropdownOpen(false)}>Billing</button>
                  <button style={dropdownItemStyle} onClick={() => setDropdownOpen(false)}>API Key</button>
                  <button style={dropdownItemStyle} onClick={() => setDropdownOpen(false)}>Integrations</button>
                </div>
                <div style={{ borderTop: '1px solid #f1f1f1', margin: '8px 0 0 0' }} />
                <button style={{ ...dropdownItemStyle, color: '#e11d48', fontWeight: 500 }} onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Sidebar: below header, overlays main content, does not shift header */}
      <div style={{
        position: 'fixed',
        top: 64,
        left: 0,
        height: 'calc(100vh - 64px)',
        width: sidebarWidth,
        background: '#fff',
        borderRight: '1px solid #e5e7eb',
        transition: 'width 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        zIndex: 10,
      }}>
        {/* Sidebar nav: always top-aligned */}
        <div style={{ padding: '18px 0 0 0', flex: 1, boxShadow: 'none' }}>
          <button
            className={`sidebar-project-btn no-shadow${sidebarOpen ? ' open' : ''}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: 0,
              height: 40,
              fontWeight: 500,
              fontSize: 14,
              color: '#222',
              cursor: 'pointer',
              outline: 'none',
              background: 'none',
              marginTop: 16,
              marginLeft: 12,
              marginBottom: 2,
              width: sidebarOpen ? 200 : 40,
              borderRadius: sidebarOpen ? 8 : 20,
              backgroundColor: '#fff',
              boxShadow: 'none',
              border: '1px solid #e5e7eb',
              transition: 'width 0.25s cubic-bezier(.4,0,.2,1), border-radius 0.25s cubic-bezier(.4,0,.2,1), background 0.25s, box-shadow 0.18s',
              overflow: 'hidden',
              position: 'relative',
              justifyContent: 'flex-start',
            }}
          >
            <span style={{
              width: 36,
              height: 36,
              minWidth: 36,
              minHeight: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'none',
              position: 'relative',
              left: 0,
              flexShrink: 0,
              transition: 'background 0.2s',
              padding: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: 'block', margin: '0 0 0 1px', padding: 0 }}><path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h3.382a1.5 1.5 0 0 1 1.06.44l.618.62c.094.093.22.146.352.146H16a1.5 1.5 0 0 1 1.5 1.5v7.5A1.5 1.5 0 0 1 16 16H4A1.5 1.5 0 0 1 2.5 14.5v-9Z" stroke="#6C47FF" strokeWidth="1.3" fill="#6C47FF" fillOpacity="0.13"/></svg>
            </span>
            <span
              className="sidebar-project-label"
              style={{
                marginLeft: 8,
                opacity: sidebarOpen ? 1 : 0,
                maxWidth: sidebarOpen ? 140 : 0,
                transition: 'opacity 0.18s, max-width 0.25s cubic-bezier(.4,0,.2,1)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                color: '#222',
                fontWeight: 500,
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                flex: 1,
              }}
            >
              Select a project
            </span>
            {/* Dropdown arrow at far right */}
            {showArrow ? (
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: 16,
                top: 0,
                height: '100%',
                opacity: 1,
                pointerEvents: 'none',
                transition: 'opacity 0.18s',
              }}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M6 8l4 4 4-4" stroke="#6C47FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ) : null}
          </button>
        </div>
      </div>
      {/* Main area: add left margin for sidebar, top margin for header */}
      <div style={{ marginLeft: sidebarWidth, marginTop: 64, minHeight: 'calc(100vh - 64px)', background: '#f3f4f6', display: 'flex', flexDirection: 'column' }}>
        {/* Main content: Projects card/table */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '48px 0 0 0', background: '#fafbfc' }}>
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: 'none', padding: '32px 36px', minWidth: 600, maxWidth: 800, width: '100%' }}>
            <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 24, letterSpacing: 0.01 }}>Projects</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
              <thead>
                <tr style={{ color: '#888', fontWeight: 500, fontSize: 15, borderBottom: '1px solid #e5e7eb' }}>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 500 }}>PROJECT</th>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 500 }}>TYPE</th>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 500 }}>WORK FORCE</th>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 500 }}></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f1f1f1' }}>
                  <td style={{ padding: '12px 0', fontWeight: 500, color: '#222' }}>[Sample] Image Annotation Project</td>
                  <td style={{ padding: '12px 0', color: '#222' }}>General Image Annotation</td>
                  <td style={{ padding: '12px 0', color: '#222' }}>studio</td>
                  <td style={{ padding: '12px 0', color: '#3b82f6', fontWeight: 500, cursor: 'pointer' }}>View</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sidebar-project-btn {
          box-sizing: border-box;
        }
        .sidebar-project-btn:active {
          background: #f3f4f6;
        }
        .no-shadow {
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
}

// Dropdown item style
const dropdownItemStyle = {
  background: 'none',
  border: 'none',
  textAlign: 'left' as const,
  width: '100%',
  padding: '10px 20px',
  fontSize: 15,
  color: '#222',
  fontFamily: 'Switzer, sans-serif',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background 0.13s',
  borderRadius: 0,
  fontWeight: 400,
  margin: 0,
  display: 'block',
}; 