'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sidebar width constants
  const SIDEBAR_OPEN_WIDTH = 240;
  const SIDEBAR_CLOSED_WIDTH = 72;
  const sidebarWidth = sidebarOpen ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSED_WIDTH;

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
          <span style={{ fontFamily: 'ibrand, sans-serif', fontWeight: 400, fontSize: 22, letterSpacing: '0.01em', lineHeight: 1.1, color: '#222', whiteSpace: 'nowrap', marginLeft: 2, opacity: 1, transition: 'opacity 0.2s', overflow: 'hidden', textOverflow: 'ellipsis', flexShrink: 0 }}>
            clonet
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
          <button style={{ background: '#f5f6fa', border: '1px solid #e5e7eb', borderRadius: '50%', height: 36, width: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#888" strokeWidth="2"/><path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#888" strokeWidth="2"/></svg>
          </button>
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
        <div style={{ padding: '18px 0 0 0', flex: 1 }}>
          <button
            className={`sidebar-project-btn${sidebarOpen ? ' open' : ''}`}
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
              borderRadius: sidebarOpen ? 14 : 20,
              backgroundColor: sidebarOpen ? '#fafbfc' : '#fff',
              boxShadow: sidebarOpen ? '0 4px 16px 0 rgba(16,20,30,0.08)' : 'none',
              border: '1.5px solid #e5e7eb',
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
              marginLeft: 16,
            }}>
              {/* Folder icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h3.382a1.5 1.5 0 0 1 1.06.44l.618.62c.094.093.22.146.352.146H16a1.5 1.5 0 0 1 1.5 1.5v7.5A1.5 1.5 0 0 1 16 16H4A1.5 1.5 0 0 1 2.5 14.5v-9Z" stroke="#6C47FF" strokeWidth="1.3" fill="#6C47FF" fillOpacity="0.13"/></svg>
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
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis' }}>Select a project</span>
              <span style={{ display: 'flex', alignItems: 'center', marginLeft: 8, opacity: sidebarOpen ? 1 : 0, transition: 'opacity 0.18s' }}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M6 8l4 4 4-4" stroke="#6C47FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
      {/* Main area: add left margin for sidebar, top margin for header */}
      <div style={{ marginLeft: sidebarWidth, marginTop: 64, minHeight: 'calc(100vh - 64px)', background: '#fafbfc', display: 'flex', flexDirection: 'column' }}>
        {/* Main content: Projects card/table */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '48px 0 0 0', background: '#fafbfc' }}>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px 0 rgba(16,20,30,0.06)', padding: '32px 36px', minWidth: 600, maxWidth: 800, width: '100%' }}>
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
      `}</style>
    </div>
  );
} 