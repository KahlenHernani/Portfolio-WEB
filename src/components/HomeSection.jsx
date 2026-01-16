import { ArrowDown } from 'lucide-react';

export const HomeSection = () => {
    return(
        <section
        id='home'
        className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className="container max-w-4xl mx-auto text-center z-10">

                <div className="space-y-6 flex ">
                    <div>
                    <img src="/portfolioPhoto.jpeg" alt="Profile Picture" className="rounded-full w-70 h-90 mx-auto object-cover border-16 border-border shadow-lg"/>
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
                            <span className="text-foreground">Yo, I'm</span>
                            <span className="text-secondary"> Kahlen</span>
                            <span className="text-primary-foreground"> Hernani</span>
                        </h1>
                        <div className=" p-4 rounded-lg mt-4 inline-block w-100">
                            <p className="text-2xl text-primary font-bold">
                                    I’m a Computer Science major at
                                    the University of Central Florida
                                    with a strong interest in both web
                                    development and artificial intelligence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className='text-primary font-bold'>Scroll</span>
                <ArrowDown className=" h-6 w-6 text-primary mt-2" />
            </div>
        </section>
    );
};