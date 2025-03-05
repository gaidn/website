import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const LoginButton = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  // Styles for the component
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
    button: {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    loginButton: {
      backgroundColor: '#24292e', // GitHub's dark color
      color: 'white',
    },
    logoutButton: {
      backgroundColor: '#f3f4f6',
      color: '#24292e',
      border: '1px solid #d1d5db',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    username: {
      fontWeight: '500',
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div style={styles.container}>
        <div style={styles.userInfo}>
          {session.user.image && (
            <img
              src={session.user.image}
              alt="User avatar"
              style={styles.avatar}
            />
          )}
          <span style={styles.username}>{session.user.name || 'User'}</span>
        </div>
        <button
          style={{ ...styles.button, ...styles.logoutButton }}
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      style={{ ...styles.button, ...styles.loginButton }}
      onClick={() => signIn('github')}
    >
      <div style={styles.container}>
        <svg height="20" width="20" viewBox="0 0 16 16" fill="white">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span style={{ marginLeft: '8px' }}>Sign in with GitHub</span>
      </div>
    </button>
  );
};

export default LoginButton;