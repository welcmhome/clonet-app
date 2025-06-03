/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const gradient = darkMode
      ? 'linear-gradient(180deg, #181a20 0%, #23242a 100%)'
      : 'linear-gradient(180deg, #f8fafc 0%, #eaf1ff 40%, #f8fafc 100%)';
    document.body.style.background = gradient;
    document.documentElement.style.background = gradient;
  }, [darkMode]);

  const loginFormStyle = {
    background: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    padding: 0,
    width: 380,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '0.7rem',
    fontFamily: 'Switzer, sans-serif',
    position: 'relative' as const,
    justifyContent: 'center',
    boxSizing: 'border-box' as const,
    color: '#222',
    border: 'none',
    transition: 'none',
    backdropFilter: 'none',
  };

  function LoginFormSingle() {
    return (
      <form onSubmit={e => e.preventDefault()} style={{
        ...loginFormStyle,
        width: 360,
        padding: 0,
        gap: '0.7rem',
        alignItems: 'center',
      }}>
        <h2 style={{ fontWeight: 500, fontSize: '1.08rem', marginBottom: 14, fontFamily: 'Switzer, sans-serif', marginTop: 0, textAlign: 'center', color: darkMode ? '#fff' : '#222', opacity: 0.95 }}>
          Log in to your account
        </h2>
        {/* Google login button */}
        <button type="button" className="login-btn" style={{
          width: '100%',
          height: 46,
          display: 'flex',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          borderRadius: 23,
          boxShadow: darkMode ? '0 2px 8px 0 rgba(0,0,0,0.18)' : '0 4px 16px 0 rgba(16,20,30,0.13)',
          cursor: 'pointer',
          marginBottom: 10,
          padding: 0,
          transition: 'box-shadow 0.18s cubic-bezier(.4,0,.2,1), transform 0.18s cubic-bezier(.4,0,.2,1)',
          overflow: 'hidden',
        }}>
          <span style={{
            width: '12%',
            height: '100%',
            background: darkMode ? '#f3f4f6' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <title>Google G Logo</title>
              <clipPath id="g">
                <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
              </clipPath>
              <g clipPath="url(#g)">
                <path fill="#FBBC05" d="M0 37V11l17 13z"/>
                <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
              </g>
            </svg>
          </span>
          <span style={{
            width: '88%',
            height: '100%',
            background: '#4285F4',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 14,
          }}>
            Log in with Google
          </span>
        </button>
        {/* GitHub login button */}
        <button type="button" className="login-btn" style={{
          width: '100%',
          height: 46,
          display: 'flex',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          borderRadius: 23,
          boxShadow: darkMode ? '0 2px 8px 0 rgba(0,0,0,0.18)' : '0 4px 16px 0 rgba(16,20,30,0.13)',
          cursor: 'pointer',
          marginBottom: 22,
          padding: 0,
          transition: 'box-shadow 0.18s cubic-bezier(.4,0,.2,1), transform 0.18s cubic-bezier(.4,0,.2,1)',
          overflow: 'hidden',
        }}>
          <span style={{
            width: '12%',
            height: '100%',
            background: darkMode ? '#23242a' : '#44474f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path fill="#fff" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
          </span>
          <span style={{
            width: '88%',
            height: '100%',
            background: '#232323',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 14,
          }}>
            Log in with GitHub
          </span>
        </button>
        {/* Divider */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', margin: '7px 0 2px 0' }}>
          <div style={{ flex: 1, height: 1, background: darkMode ? '#444' : '#e5e7eb', opacity: 0.7 }} />
          <span style={{ margin: '0 12px', color: darkMode ? '#aab0bb' : '#888', fontSize: 14, fontWeight: 400, opacity: 0.9 }}>or</span>
          <div style={{ flex: 1, height: 1, background: darkMode ? '#444' : '#e5e7eb', opacity: 0.7 }} />
        </div>
        {/* Email input */}
        <div style={{ width: '100%', position: 'relative', marginBottom: 2 }}>
          <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: darkMode ? '#aab0bb' : '#888', opacity: 0.9 }}>
            {/* User icon */}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill={darkMode ? '#aab0bb' : '#888'} d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>
          </span>
          <input placeholder="Email" style={{ width: '100%', height: 46, padding: '0 0 0 38px', borderRadius: 23, border: darkMode ? '1px solid #35373f' : '1px solid #e5e7eb', background: darkMode ? '#23242a' : '#f5f7fa', color: darkMode ? '#fff' : '#222', fontSize: 15, fontFamily: 'Switzer, sans-serif', marginBottom: 0, transition: 'background 0.3s, color 0.3s, border 0.3s', boxSizing: 'border-box', fontWeight: 400 }} />
        </div>
        {/* Password input */}
        <div style={{ width: '100%', position: 'relative', marginBottom: 2 }}>
          <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: darkMode ? '#aab0bb' : '#888', opacity: 0.9 }}>
            {/* Lock icon */}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill={darkMode ? '#aab0bb' : '#888'} d="M17 8V7a5 5 0 0 0-10 0v1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-8-1a3 3 0 0 1 6 0v1H9V7zm8 11H7v-8h10v8z"/></svg>
          </span>
          <input placeholder="Password" type="password" style={{ width: '100%', height: 46, padding: '0 0 0 38px', borderRadius: 23, border: darkMode ? '1px solid #35373f' : '1px solid #e5e7eb', background: darkMode ? '#23242a' : '#f5f7fa', color: darkMode ? '#fff' : '#222', fontSize: 15, fontFamily: 'Switzer, sans-serif', marginBottom: 0, transition: 'background 0.3s, color 0.3s, border 0.3s', boxSizing: 'border-box', fontWeight: 400 }} />
        </div>
        <button className="login-btn" style={{ width: '100%', height: 46, borderRadius: 23, background: '#111', color: '#fff', fontWeight: 600, border: 'none', fontSize: 15, marginTop: 12, fontFamily: 'Switzer, sans-serif', transition: 'background 0.3s, box-shadow 0.18s cubic-bezier(.4,0,.2,1), transform 0.18s cubic-bezier(.4,0,.2,1)', boxShadow: '0 4px 16px 0 rgba(16,20,30,0.13)', letterSpacing: 0.01 }}>
          Log In
        </button>
      </form>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        width: '100vw',
        height: '100vh',
        background: darkMode
          ? 'linear-gradient(180deg, #181a20 0%, #23242a 100%)'
          : 'linear-gradient(180deg, #f8fafc 0%, #eaf1ff 40%, #f8fafc 100%)',
        color: darkMode ? '#ededed' : '#171717',
        display: 'flex',
        flexDirection: 'column' as const,
        fontFamily: 'Switzer, sans-serif',
        transition: 'background 0.3s, color 0.3s',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box' as const,
      }}
    >
      {/* Header with clonet. in ibrand font */}
      <div className="header-row" style={{ width: '100%', display: 'flex', alignItems: 'center', height: 80, padding: '0 40px', boxSizing: 'border-box' as const, fontFamily: 'Switzer, sans-serif', position: 'relative' as const }}>
        <a href="https://clonet.ai" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'ibrand, sans-serif', fontWeight: 400, fontSize: 28, marginTop: 24, marginLeft: 0, marginBottom: 8, letterSpacing: '0.01em', lineHeight: 1.1, display: 'inline-block', color: 'inherit' }}>clonet.</span>
        </a>
        <div className="header-signup" style={{ fontFamily: 'Switzer, sans-serif', fontSize: 15, display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <span className="hide-on-mobile" style={{ color: darkMode ? '#ededed' : '#222', fontWeight: 400 }}>Don't have an account?</span>
          <a href="#" style={{ fontWeight: 600, color: darkMode ? '#ededed' : '#111', textDecoration: 'none', fontFamily: 'Switzer, sans-serif', fontSize: 15, display: 'inline-flex', alignItems: 'center', marginLeft: 8 }}>
            Sign up <span style={{ fontWeight: 400, fontSize: 18, marginLeft: 2 }}>→</span>
          </a>
        </div>
      </div>
      {/* Main content */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Switzer, sans-serif',
        width: '100%',
        minHeight: 'calc(100vh - 80px)',
        transform: 'translateY(-4vh)'
      }}>
        <LoginFormSingle />
      </main>
      {/* Modern dark mode switch in lower right */}
      <button
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={() => setDarkMode((d) => !d)}
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          background: 'none',
          border: 'none',
          padding: 0,
          zIndex: 100,
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: 36,
            height: 20,
            borderRadius: 12,
            border: '1.5px solid #d1d5db',
            background: darkMode ? '#23232a' : '#fff',
            boxShadow: '0 2px 8px #0001',
            position: 'relative',
            transition: 'background 0.2s, border 0.2s',
            verticalAlign: 'middle',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: darkMode ? 19 : 3,
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: '#d1d5db',
              boxShadow: '0 1px 4px #0002',
              transition: 'left 0.2s, background 0.2s, top 0.2s',
              display: 'block',
              transform: 'translateY(-50%)',
            }}
          />
        </span>
      </button>
      <style jsx global>{`
        .login-btn:hover {
          box-shadow: 0 2px 8px 0 rgba(16,20,30,0.08);
          transform: translateY(-1px) scale(1.002);
        }
        .login-btn:active {
          box-shadow: 0 1px 2px 0 rgba(16,20,30,0.04);
          transform: scale(0.997);
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 600px) {
          .header-row {
            padding: 0 12px !important;
            height: 64px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            position: relative !important;
          }
          .header-row a span {
            margin-left: 0 !important;
            margin-top: 0 !important;
            font-size: 24px !important;
          }
          .header-signup {
            position: static !important;
            margin-left: 0 !important;
            margin-top: 0 !important;
            display: flex !important;
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  );
}

