import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "WizzOff",
        description: "An interactive wizard dueling game that blends computer vision and real time gameplay. Uses camera input and gesture recognition to trigger spells and in-game actions. Focused on immersive interaction and AI driven mechanics.",
        imageUrl: "/Wizzoff.png",
        tags: ["Pygame", "OpenCV", "MediaPipe", "Flask"],
        githubUrl: "https://www.youtube.com/watch?v=ifOJ0R5UQOc&t=6009s",
        devpost: "https://devpost.com/software/wizzoff"
    },
    {
        id: 2,
        title: "CalenPal",
        description: "An AI powered smart calendar that automatically organizes tasks and schedules from uploaded syllabi and documents. Uses intelligent agents to prioritize deadlines and optimize time management. Designed to reduce cognitive load and improve productivity.",
        imageUrl: "/CalenPal.png",
        tags: ["React", "JavaScript", "Flask", "Agents"],
        githubUrl: "#",
        devpost: "https://devpost.com/software/calenpal"
    },
    {
        id: 3,
        title: "P Code Compiler and Stack-Based Virtual Machine",
        description: "A stack based virtual machine that executes P code instructions similar to early compiler architectures. Implements instruction parsing, execution, and memory management in C. Built to deepen understanding of low-level systems and compiler design.",
        imageUrl: "/virtualmachine.jpeg",
        tags: ["C"],
        githubUrl: "#",
        devpost: "#"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A personal portfolio designed with Incan and Peruvian-inspired colors to reflect my cultural background and identity. Built using React, Vite, and Tailwind CSS with a focus on clean, modern UI. Planned future enhancements include an AI agent that dynamically interacts with the site, creating a more expressive and personality-driven experience.",
        imageUrl: "/peru.jpg",
        tags: ["React", "Tailwind CSS", "Vite"],
        githubUrl: "#",
        devpost: "#"
    }
];

export const ProgjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative text-primary" aria-labelledby="projects-heading">
            <div className="container mx-auto max-w-6xl bg-border rounded-lg p-6 md:p-8 shadow-lg border-8 border-primary/20">
                <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
                    Projects
                </h2>
                <p className="text-center font-medium text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects showcasing my skills in full-stack development, AI, and systems programming.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <article 
                            key={project.id} 
                            className="bg-card rounded-lg shadow-md overflow-hidden card-hover bg-primary/5 border-2 border-transparent hover:border-primary/30 transition-all duration-300 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden group">
                                <img 
                                    src={project.imageUrl} 
                                    alt={`Screenshot of ${project.title} project`}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 dark:brightness-75 dark:contrast-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">
                                    {project.title}
                                </h3>
                                
                                <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 text-xs font-medium border-2 rounded-full bg-secondary text-primary border-primary/20 hover:border-primary/50 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links - Only show if not "#" */}
                                {(project.githubUrl !== "#" || project.devpost !== "#") && (
                                    <div className="flex gap-3 mt-auto pt-2 border-t border-border">
                                        {project.githubUrl !== "#" && (
                                            <a 
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm font-medium"
                                                aria-label={`View ${project.title} on GitHub`}
                                            >
                                                <Github className="h-4 w-4" />
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                        {project.devpost !== "#" && (
                                            <a 
                                                href={project.devpost}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm font-medium"
                                                aria-label={`View ${project.title} on Devpost`}
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                <span>Devpost</span>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
