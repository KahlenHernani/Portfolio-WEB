import { ArrowDown } from 'lucide-react';

export const HomeSection = () => {
    return(
        <section
        id='home'
        className='relative min-h-screen flex flex-col items-center justify-center px-4'
        aria-label="Home section">
            <div className="container max-w-4xl mx-auto text-center z-10">

                <div className="space-y-6 flex flex-col md:flex-row items-center gap-8">
                    <div className="relative group">
                        <img 
                            src="/portfolioPhoto.jpeg" 
                            alt="Kahlen Hernani - Computer Science student" 
                            className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover border-8 border-border shadow-xl transition-all duration-300 group-hover:scale-105 dark:brightness-75 dark:contrast-110"
                        />
                        <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
                            <span className="text-foreground">Yo, I'm</span>
                            {' '}
                            <span className="text-secondary">Kahlen</span>
                            {' '}
                            <span className="text-primary-foreground">Hernani</span>
                        </h1>
                        <div className="p-4 rounded-lg mt-6 inline-block max-w-2xl">
                            <p className="text-xl md:text-2xl text-primary font-bold leading-relaxed">
                                I'm a Computer Science major at
                                the University of Central Florida
                                with a strong interest in both web
                                development and artificial intelligence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <a 
                href="#about"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2"
                aria-label="Scroll to about section"
            >
                <span className='text-primary font-bold group-hover:text-secondary transition-colors duration-300'>Scroll</span>
                <ArrowDown className="h-6 w-6 text-primary mt-2 animate-bounce group-hover:text-secondary transition-colors duration-300" />
            </a>
        </section>
    );
};
