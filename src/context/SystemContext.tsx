import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundEngine } from '../utils/soundEngine';

export type UIMode = 'editorial' | 'os' | 'tty';
export type ThemeMode = 'dark' | 'light' | 'crt';
export type Language = 'id' | 'en';

interface SystemContextType {
  mode: UIMode;
  setMode: (mode: UIMode) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  aiTwinOpen: boolean;
  setAiTwinOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeProjectId: string | null;
  setActiveProjectId: (id: string | null) => void;
  resumeModalOpen: boolean;
  setResumeModalOpen: (open: boolean) => void;
  konamiUnlocked: boolean;
  unlockKonami: () => void;
  matrixActive: boolean;
  setMatrixActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SystemContext = createContext<SystemContextType | undefined>(undefined);

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const SystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<UIMode>(() => {
    const saved = localStorage.getItem('biamtiero_mode') as UIMode | null;
    return saved && ['editorial', 'os', 'tty'].includes(saved) ? saved : 'editorial';
  });

  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('biamtiero_theme') as ThemeMode | null;
    return saved && ['dark', 'light', 'crt'].includes(saved) ? saved : 'dark';
  });

  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('biamtiero_lang') as Language | null;
    return saved && ['id', 'en'].includes(saved) ? saved : 'id';
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => soundEngine.enabled);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [aiTwinOpen, setAiTwinOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);

  const setMode = (newMode: UIMode) => {
    soundEngine.playModeSwitch();
    setModeState(newMode);
    localStorage.setItem('biamtiero_mode', newMode);
  };

  const setTheme = (newTheme: ThemeMode) => {
    soundEngine.playClick();
    setThemeState(newTheme);
    localStorage.setItem('biamtiero_theme', newTheme);
  };

  const setLang = (newLang: Language) => {
    soundEngine.playClick();
    setLangState(newLang);
    localStorage.setItem('biamtiero_lang', newLang);
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEngine.setEnabled(next);
  };

  const unlockKonami = () => {
    soundEngine.playKonami();
    setKonamiUnlocked(true);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-light', 'theme-crt');
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  // Global keyboard shortcuts (Cmd/Ctrl + K, Shift+1/2/3 for Modes, Konami Code)
  useEffect(() => {
    let konamiIdx = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K -> Toggle Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundEngine.playClick();
        setCommandPaletteOpen((prev) => !prev);
        return;
      }

      // Cmd/Ctrl + J -> Toggle AI Digital Twin
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        soundEngine.playClick();
        setAiTwinOpen((prev) => !prev);
        return;
      }

      // Escape -> Close overlays
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setActiveProjectId(null);
        setResumeModalOpen(false);
      }

      // Konami Code check
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = KONAMI_SEQUENCE[konamiIdx];
      if (key === expected) {
        konamiIdx += 1;
        if (konamiIdx === KONAMI_SEQUENCE.length) {
          unlockKonami();
          konamiIdx = 0;
        }
      } else {
        konamiIdx = key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <SystemContext.Provider
      value={{
        mode,
        setMode,
        theme,
        setTheme,
        lang,
        setLang,
        soundEnabled,
        toggleSound,
        commandPaletteOpen,
        setCommandPaletteOpen,
        aiTwinOpen,
        setAiTwinOpen,
        activeProjectId,
        setActiveProjectId,
        resumeModalOpen,
        setResumeModalOpen,
        konamiUnlocked,
        unlockKonami,
        matrixActive,
        setMatrixActive,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export const useSystem = () => {
  const ctx = useContext(SystemContext);
  if (!ctx) throw new Error('useSystem must be used within SystemProvider');
  return ctx;
};
