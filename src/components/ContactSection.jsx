import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export const ContactSection = () => {
    return (
        <footer 
            id="contact" 
            className="bg-black relative min-h-[400px] px-4 py-12 border-t-4 border-border mt-12"
            aria-labelledby="contact-heading"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Contact Information */}
                    <div className="md:col-span-2">
                        <h2 id="contact-heading" className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8">
                            Contact
                        </h2>
                        <div className="space-y-4">
                            {/* Email */}
                            <a 
                                href="mailto:Kahlenhernani@gmail.com"
                                className="flex items-center gap-3 text-lg md:text-2xl font-semibold text-primary-foreground hover:text-secondary transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-lg p-2 -ml-2"
                                aria-label="Send email to Kahlenhernani@gmail.com"
                            >
                                <MailIcon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                                <span className="break-all">Kahlenhernani@gmail.com</span>
                            </a>
                            
                            {/* Phone */}
                            <a 
                                href="tel:+19096720292"
                                className="flex items-center gap-3 text-lg md:text-2xl font-semibold text-primary-foreground hover:text-secondary transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-lg p-2 -ml-2"
                                aria-label="Call 909-672-0292"
                            >
                                <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                                <span>909-672-0292</span>
                            </a>
                            
                            {/* LinkedIn */}
                            <a 
                                href="https://linkedin.com/in/kahlen-hernani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-lg md:text-2xl font-semibold text-primary-foreground hover:text-secondary transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-lg p-2 -ml-2"
                                aria-label="Visit LinkedIn profile"
                            >
                                <LinkedinIcon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                                <span className="break-all">linkedin.com/in/kahlen-hernani</span>
                            </a>
                            
                            {/* GitHub */}
                            <a 
                                href="https://github.com/kahlenhernani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-lg md:text-2xl font-semibold text-primary-foreground hover:text-secondary transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-lg p-2 -ml-2"
                                aria-label="Visit GitHub profile"
                            >
                                <GithubIcon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                                <span className="break-all">github.com/kahlenhernani</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Decorative Image */}
                    <div className="flex flex-col items-center justify-between h-full">
                        <img 
                            src='/llama.png' 
                            alt="Decorative llama illustration" 
                            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain transition-transform duration-300 hover:scale-105 dark:brightness-90"
                        />
                        
                        {/* Copyright */}
                        <p className="text-sm text-primary-foreground/80 text-center mt-6">
                            &copy; {new Date().getFullYear()} All rights reserved{' '}
                            <span className="font-bold text-background">TOO ME.</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
