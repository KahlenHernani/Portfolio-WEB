import { Code } from "lucide-react"
import { Briefcase } from "lucide-react"
import { User } from "lucide-react"


export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl bg-border border-8 border-primary/20 rounded-lg p-10 shadow-lg">
                <h2 className="text-3xl md:text4xl text-primary font-bold mb-12 text-center">
                    About Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-primary">
                    <div className="space-y-6 border-border p-10 rounded-lg shadow-lg bg-secondary border-secondary text-primary">
                        <h3 className="font-bold text-xl">Description</h3>
                        <p className="text-muted-foreground">
                            With experince in both the back and frontend I I’m passionate about building intelligent software that blends artificial intelligence with modern web development.
                             I enjoy creating full-stack applications that are both data driven and user-focused.
                        </p>
                        <p className="text-muted-foreground">
                            My interests include machine learning, AI-powered tools, and scalable web systems.
                             I’m always learning and experimenting with new technologies to improve my craft.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="px-6 py-2 rounded-full bg-secondary border border-primary text-primary hover:bg-foreground hover:text-primary font-bold transition-colors duration-300 btn-lg">
                                Contact Me
                            </a>
                            <a href="./public/resume.pdf" download="resume.pdf" className="px-6 py-2 rounded-full border bg-secondary border-primary text-primary hover:bg-foreground hover:text-primary font-bold transition-colors duration-300 btn-lg">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 bg-primary-foreground p-6 rounded-lg shadow-lg">
                        <div clasName="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 bg-primary/5 border-border p-3 rounded-lg">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Research</h4>
                                    <p className="text-muted-forground">
                                        Contributing to academic research by supporting and developing code for driving simulator systems used in experimental studies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div clasName="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 bg-primary/5 border-border p-3 rounded-lg">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Team player</h4>
                                    <p className="text-muted-forground">
                                        Collaborated in fast paced, team based hackathons to design, build, and deliver functional software under tight deadlines.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div clasName="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 bg-primary/5 border-border p-3 rounded-lg">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Work</h4>
                                    <p className="text-muted-forground">
                                        Worked in customer facing roles at Memorial Hospital and McDonald’s, demonstrating reliability, accountability, and the discipline required to consistently show up and perform in trusted positions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div clasName="gradient-border p-6 card-hover">

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}