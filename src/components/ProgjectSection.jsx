import { ExternalLink, Github } from "lucide-react";

const projects =[
    {
        id: 1,
        title: "WizzOff",
        description: "An interactive wizard dueling game that blends computer vision and real time gameplay. Uses camera input and gesture recognition to trigger spells and in-game actions. Focused on immersive interaction and AI driven mechanics.",
        imageUrl: "./public/Wizzoff.png",
        tags: ["Pygame", "OpenCV","MediaPipe","Flask"],
        githubUrl: "https://www.youtube.com/watch?v=ifOJ0R5UQOc&t=6009s",
        devpostUrl: "#"
    },
    {
        id: 2,
        title: "CalenPal",
        description: "An AI powered smart calendar that automatically organizes tasks and schedules from uploaded syllabi and documents. Uses intelligent agents to prioritize deadlines and optimize time management. Designed to reduce cognitive load and improve productivity.",
        imageUrl: "./public/CalenPal.png",
        tags: ["React", "JavaScript","Flask","Agents"],
        githubUrl: "#",
        devpostUrl: "#"
    },
    {
        id: 3,
        title: "P Code Compiler and Stack-Based Virtual Machine",
        description: "A stack based virtual machine that executes P code instructions similar to early compiler architectures. Implements instruction parsing, execution, and memory management in C. Built to deepen understanding of low-level systems and compiler design.",
        imageUrl: "./public/virtualmachine.jpeg",
        tags: ["C"],
        githubUrl: "#",
        devpostUrl: "#"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A personal portfolio designed with Incan and Peruvian-inspired colors to reflect my cultural background and identity. Built using React, Vite, and Tailwind CSS with a focus on clean, modern UI. Planned future enhancements include an AI agent that dynamically interacts with the site, creating a more expressive and personality-driven experience.",
        imageUrl: "./public/peru.jpg",
        tags: ["react", "tailwindcss","vite"],
        githubUrl: "#",
        devpostUrl: "#"
    }
]

export const ProgjectSection = () => {
    return(<section id="projects" className="py-24 px-4 relative text-primary">
        <div className="container mx-auto max-w-5xl bg-border rounded-lg p-8 shadow-lg border-8 border-primary/20">
            <h2 className="text-3xl md:text4xl font-bold mb-4 text-center text-primary">
                Projects
            </h2>
            <p className="text-center font bolded text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div key={key} className="bg-card rounded-lg shadow-xs overflow-hidden card-hover bg-primary/4">
                        <div className="h-48 overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        
                        <div className="p-6">
                            <div>
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>
                       
                    </div>
                ))}
            </div>
        </div>
    </section>);}