import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LoginButton from './LoginButton';

const Layout = ({ children, title = 'GAIDN - Global AI Developer Network' }) => {
  // Apple-inspired colors
  const colors = {
    primary: '#007AFF',    // Blue
    secondary: '#5856D6',  // Purple
    lightBlue: '#64D2FF',  // Light Blue
    blueTint: '#5AC8FA',   // Blue Tint
    background: '#F2F2F7', // Light Background
    text: '#1C1C1E',       // Dark Text
    footer: '#F5F5F7',     // Footer Background
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      backgroundColor: 'white',
      borderBottom: `1px solid #E5E5EA`,
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.4rem',
      color: colors.primary,
    },
    nav: {
      display: 'flex',
      gap: '1.5rem',
    },
    navLink: {
      color: colors.text,
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.2s ease',
      padding: '0.5rem 0',
      position: 'relative',
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
    main: {
      flex: 1,
      backgroundColor: colors.background,
      padding: '2rem 1rem',
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    footer: {
      backgroundColor: colors.footer,
      padding: '2rem',
      borderTop: '1px solid #E5E5EA',
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    footerLinks: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap',
    },
    footerLink: {
      color: colors.text,
      opacity: 0.7,
      textDecoration: 'none',
      fontSize: '0.9rem',
    },
    copyright: {
      color: colors.text,
      opacity: 0.7,
      fontSize: '0.9rem',
    },
    langToggle: {
      padding: '0.3rem 0.6rem',
      backgroundColor: 'transparent',
      border: `1px solid ${colors.primary}`,
      borderRadius: '4px',
      color: colors.primary,
      cursor: 'pointer',
      fontSize: '0.9rem',
    },
    loginSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
  };

  // Responsive styles with media queries would typically be handled with a CSS-in-JS
  // library like styled-components or emotion, but for simplicity we'll use inline styles
  // and handle basic responsiveness with React

  return (
    <div style={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Global AI Developer Network - Building a people-first AI developer ecosystem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={styles.header}>
        <div style={styles.headerContent}>
          <Link href="/" style={styles.logo}>
            GAIDN
          </Link>

          <nav style={styles.nav}>
            <Link href="/" style={styles.navLink}>Home</Link>
            <Link href="/developers" style={styles.navLink}>Developers</Link>
            <Link href="/projects" style={styles.navLink}>Projects</Link>
            <Link href="/profile" style={styles.navLink}>Profile</Link>
          </nav>

          <div style={styles.loginSection}>
            <button style={styles.langToggle}>EN / 中</button>
            <LoginButton />
          </div>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.mainContent}>
          {children}
        </div>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.copyright}>
            © {new Date().getFullYear()} Global AI Developer Network
          </div>
          <div style={styles.footerLinks}>
            <Link href="/about" style={styles.footerLink}>About</Link>
            <Link href="/privacy" style={styles.footerLink}>Privacy</Link>
            <Link href="/terms" style={styles.footerLink}>Terms</Link>
            <Link href="/contact" style={styles.footerLink}>Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;