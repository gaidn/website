import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import LoginButton from './LoginButton';

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle language between English and Chinese
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  // Apple-inspired colors
  const colors = {
    primary: '#007AFF',    // Blue
    secondary: '#5856D6',  // Purple
    background: '#FFFFFF', // White
    shadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: colors.background,
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? colors.shadow : 'none',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: colors.primary,
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    mobileNavLinks: {
      display: 'none',
      flexDirection: 'column',
      width: '100%',
      position: 'absolute',
      top: '60px',
      left: 0,
      backgroundColor: colors.background,
      padding: '1rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 20,
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
      },
    },
    link: {
      color: '#333',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.2s',
      ':hover': {
        color: colors.primary,
      },
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
    navRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    languageToggle: {
      backgroundColor: colors.secondary,
      color: 'white',
      border: 'none',
      padding: '0.4rem 0.8rem',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#4b4bb3',
      },
    },
    navLinkMobile: {
      padding: '0.8rem 0',
      borderBottom: '1px solid #eee',
      width: '100%',
    }
  };

  const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s',
    padding: '0.5rem',
    borderRadius: '4px',
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: colors.primary,
  };

  return (
    <nav style={styles.navbar}>
      <Link href="/">
        <span style={styles.logo}>GAIDN</span>
      </Link>
      
      {/* Desktop Navigation Links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        '@media (max-width: 768px)': {
          display: 'none',
        },
      }}>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/developers" style={linkStyle}>Developers</Link>
        <Link href="/projects" style={linkStyle}>Projects</Link>
        {session && <Link href="/profile" style={linkStyle}>Profile</Link>}
      </div>

      {/* Right side navigation items */}
      <div style={styles.navRight}>
        <button 
          onClick={toggleLanguage} 
          style={{
            backgroundColor: colors.secondary,
            color: 'white',
            border: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 'bold',
          }}
        >
          {language === 'en' ? '中文' : 'EN'}
        </button>
        <LoginButton />
        
        {/* Mobile menu toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            '@media (max-width: 768px)': {
              display: 'block',
            },
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          position: 'absolute',
          top: '60px',
          left: 0,
          backgroundColor: colors.background,
          padding: '1rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 20,
        }}>
          <Link href="/" style={{...linkStyle, padding: '0.8rem 0', borderBottom: '1px solid #eee', width: '100%'}}>
            Home
          </Link>
          <Link href="/developers" style={{...linkStyle, padding: '0.8rem 0', borderBottom: '1px solid #eee', width: '100%'}}>
            Developers
          </Link>
          <Link href="/projects" style={{...linkStyle, padding: '0.8rem 0', borderBottom: '1px solid #eee', width: '100%'}}>
            Projects
          </Link>
          {session && (
            <Link href="/profile" style={{...linkStyle, padding: '0.8rem 0', borderBottom: '1px solid #eee', width: '100%'}}>
              Profile
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;