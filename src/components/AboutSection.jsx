import { Code, Briefcase, User } from "lucide-react"

export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative" aria-labelledby="about-heading">
            <div className="container mx-auto max-w-5xl bg-border border-8 border-primary/20 rounded-lg p-6 md:p-10 shadow-lg">
                <h2 id="about-heading" className="text-3xl md:text-4xl text-primary font-bold mb-12 text-center">
                    About Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start text-primary">
                    {/* Description Card */}
                    <div className="space-y-6 border-border p-6 md:p-10 rounded-lg shadow-lg bg-secondary border-2 border-secondary text-primary transition-transform duration-300 hover:scale-[1.02]">
                        <h3 className="font-bold text-xl md:text-2xl">Description</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            With experience in both the back and frontend I'm passionate about building intelligent software that blends artificial intelligence with modern web development.
                            I enjoy creating full-stack applications that are both data driven and user-focused.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            My interests include machine learning, AI-powered tools, and scalable web systems.
                            I'm always learning and experimenting with new technologies to improve my craft.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a 
                                href="#contact" 
                                className="px-6 py-3 rounded-full bg-secondary border-2 border-primary text-primary hover:bg-foreground hover:text-background hover:border-foreground font-bold transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Navigate to contact section"
                            >
                                Contact Me
                            </a>
                            <a 
                                href="/resume.pdf" 
                                download="Kahlen_Hernani_Resume.pdf" 
                                className="px-6 py-3 rounded-full border-2 bg-secondary border-primary text-primary hover:bg-foreground hover:text-background hover:border-foreground font-bold transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                aria-label="Download resume as PDF"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 gap-6 bg-primary-foreground p-6 rounded-lg shadow-lg">
                        {/* Research Card */}
                        <article className="gradient-border card-hover">
                            <div className="flex items-start gap-4 bg-primary/5 border-border p-4 rounded-lg transition-all duration-300 hover:bg-primary/10">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0" aria-hidden="true">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">Research</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Contributing to academic research by supporting and developing code for driving simulator systems used in experimental studies.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Team Player Card */}
                        <article className="gradient-border card-hover">
                            <div className="flex items-start gap-4 bg-primary/5 border-border p-4 rounded-lg transition-all duration-300 hover:bg-primary/10">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0" aria-hidden="true">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">Team Player</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Collaborated in fast paced, team based hackathons to design, build, and deliver functional software under tight deadlines.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Work Experience Card */}
                        <article className="gradient-border card-hover">
                            <div className="flex items-start gap-4 bg-primary/5 border-border p-4 rounded-lg transition-all duration-300 hover:bg-primary/10">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0" aria-hidden="true">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">Work Experience</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Worked in customer facing roles at Memorial Hospital and McDonald's, demonstrating reliability, accountability, and the discipline required to consistently show up and perform in trusted positions.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
