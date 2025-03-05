import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Language Context with English as default
export const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
  t: (key) => key, // Translation function
});

// Translation content
const translations = {
  en: {
    home: 'Home',
    developers: 'Developers',
    projects: 'Projects',
    profile: 'Profile',
    login: 'Login',
    logout: 'Logout',
    welcome: 'Welcome to GAIDN',
    description: 'Building a people-first AI developer ecosystem that values connection, collaboration, and continuous learning across borders and technologies.',
  },
  zh: {
    home: '首页',
    developers: '开发者',
    projects: '项目',
    profile: '个人资料',
    login: '登录',
    logout: '退出',
    welcome: '欢迎来到 GAIDN',
    description: '构建以人为本的 AI 开发者生态系统，重视跨越国界和技术的连接、协作和持续学习。',
  }
};

export const LanguageProvider = ({ children }) => {
  // Try to get the language from local storage or default to 'en'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });

  // Update local storage when language changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  // Toggle between English and Chinese
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'zh' : 'en');
  };

  // Translation function
  const t = (key) => {
    if (!translations[language]) return key;
    return translations[language][key] || key;
  };

  // Create the context value
  const contextValue = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;