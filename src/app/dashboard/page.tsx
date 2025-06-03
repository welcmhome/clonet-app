export default function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Switzer, sans-serif', background: 'linear-gradient(180deg, #f8fafc 0%, #eaf1ff 40%, #f8fafc 100%)', color: '#222', textAlign: 'center', padding: 24 }}>
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          You're logged in.
        </h1>
        <p style={{ fontSize: 18, fontWeight: 400 }}>
          This is a temporary dashboard while we build the full experience.<br />More coming soon!
        </p>
      </div>
    </div>
  );
} 