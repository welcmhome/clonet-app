import { supabase } from '@/utils/supabaseClient';

export default function Dashboard() {
  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Switzer, sans-serif', background: 'linear-gradient(180deg, #f8fafc 0%, #eaf1ff 40%, #f8fafc 100%)', color: '#222' }}>
      {/* Header */}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: 80, padding: '0 40px', boxSizing: 'border-box', position: 'relative' }}>
        <a href="https://clonet.ai" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'ibrand, sans-serif', fontWeight: 400, fontSize: 28, marginTop: 24, marginLeft: 0, marginBottom: 8, letterSpacing: '0.01em', lineHeight: 1.1, display: 'inline-block', color: 'inherit' }}>clonet.</span>
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
  );
} 