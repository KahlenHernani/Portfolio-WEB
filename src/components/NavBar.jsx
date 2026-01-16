import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './themeToggle';

const navItems = [
    {name: 'Home', href: '#home'},
    {name: 'About', href: '#about'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'},
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (
        <nav className={cn(
            " bg-primary/25 top-1 fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
        >
            <div className=' container flex items-center justify-between'>

                {/*logo*/}

                <img src='./public/beanie.png' alt='Logo' className='w-10 h-10 flex items-center'/>

                {/*laptop nav*/}
                <ThemeToggle className='hidden md:flex space-x-8 items-center'/>

                <div className='hidden md:flex space-x-8'>
                    
                    {navItems.map((item, key) => (
                        <a 
                        key={key}
                        href={item.href}
                        className='text-xl font-bold text-primary hover:text-foreground transition-colors duration-300'
                        >
                            {item.name}
                        </a>
                    ))}

                    
                </div>

                {/*mobile nav*/}

            </div>
         </nav>
    );
}