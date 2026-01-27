import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "p-3 rounded-full transition-all duration-300 hover:scale-110",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "bg-primary/10 hover:bg-primary/20"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDarkMode}
        >
            {isDarkMode ? (
                <Sun className='h-6 w-6 text-yellow-400 transition-transform duration-300' aria-hidden="true" />
            ) : (
                <Moon className='h-6 w-6 text-blue-900 transition-transform duration-300' aria-hidden="true" />
            )}
        </button>
    );
};
