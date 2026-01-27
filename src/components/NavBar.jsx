import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './themeToggle';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav 
            className={cn(
                "bg-background top-0 fixed w-full z-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary",
                isScrolled ? "py-3 bg-background/95 backdrop-blur-md shadow-lg" : "py-5"
            )}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className='container flex items-center justify-between'>
                {/* Logo */}
                <a 
                    href="#home" 
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-1"
                    aria-label="Go to home section"
                >
                    <img 
                        src='/beanie.png' 
                        alt='Kahlen Hernani logo' 
                        className='w-10 h-10 transition-transform duration-300 hover:scale-110'
                    />
                </a>

                {/* Desktop Navigation */}
                <div className='hidden md:flex space-x-8 items-center'>
                    {navItems.map((item) => (
                        <a 
                            key={item.name}
                            href={item.href}
                            className='text-lg font-bold text-primary hover:text-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-3 py-2'
                            aria-label={`Navigate to ${item.name} section`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Theme Toggle - Desktop */}
                <div className="hidden md:block">
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-primary hover:text-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div 
                    className="md:hidden bg-background/98 backdrop-blur-md border-t border-border shadow-lg"
                    role="menu"
                >
                    <div className="container py-4 space-y-2">
                        {navItems.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                onClick={handleNavClick}
                                className='block text-lg font-bold text-primary hover:text-foreground hover:bg-primary/10 transition-all duration-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                                role="menuitem"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-4 px-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
