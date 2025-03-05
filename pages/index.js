import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ 
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>GAIDN - Global AI Developer Network</h1>
      
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        Building a people-first AI developer ecosystem that values connection, collaboration, 
        and continuous learning across borders and technologies.
      </p>
      
      <div style={{ marginTop: '2rem' }}>
        {session ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {session.user.image && (
                <img 
                  src={session.user.image} 
                  alt="User avatar" 
                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                />
              )}
              <span>Welcome, {session.user.name || 'Developer'}!</span>
            </div>
            <button 
              onClick={() => signOut()}
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <button 
            onClick={() => signIn('github')}
            style={{
              backgroundColor: '#24292e',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              margin: '0 auto',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Sign in with GitHub
          </button>
        )}
      </div>
      
      <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2 style={{ color: '#333', fontSize: '1.2rem' }}>About GAIDN</h2>
        <p>
          GAIDN is creating a global community where AI developers can connect,
          share knowledge, and build relationships that transcend geographical boundaries.
        </p>
      </div>
    </div>
  );
}

export default Home;