'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'Switzer, sans-serif', background: '#fff', color: '#222' }}>
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
        {/* Sidebar header: Hamburger + clonet logo always visible */}
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
          <span style={{ fontFamily: 'ibrand, sans-serif', fontWeight: 400, fontSize: 22, letterSpacing: '0.01em', lineHeight: 1.1, color: '#222', whiteSpace: 'nowrap', marginLeft: sidebarOpen ? 2 : 0, opacity: 1, transition: 'opacity 0.2s', overflow: 'hidden', textOverflow: 'ellipsis', flexShrink: 0 }}>
            clonet
          </span>
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
      </div>
      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#fff' }}>
        {/* Header */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: 64, padding: '0 40px', boxSizing: 'border-box', borderBottom: '1px solid #e5e7eb', background: '#fff', position: 'relative' }}>
          {/* Empty header for now, matches screenshot */}
        </div>
        {/* Main content: Projects card/table */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '48px 0 0 0', background: '#fff' }}>
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
    </div>
  );
} 