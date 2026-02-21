import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "ChainScope",
    isNew: true,
    description:
      "ChainScope – Multi-chain wallet & token tracker built with React, Firebase, and Web3.js. Provides real-time token balances, transaction history, and analytics across multiple blockchains with a clean, responsive UI.",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vite",
    ],
    githubUrl:
      "https://github.com/Rafayalmani/ChainScope",
    liveUrl: "https://chain-scope.vercel.app/",
  },
  {
    title: "Zayora",
    description:
      "A luxury Ayurvedic e-commerce platform with a focus on premium user experience. Features category-based filtering, shopping cart, wishlist",
    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
    ],
    githubUrl: "https://github.com/Rafayalmani/Zayora",
    liveUrl: "https://zayora-phi.vercel.app/",
  },
  {
    title: "Craftedfromheaven",
    description:
      "Crafted From Heaven is an online store offering handmade jewelry, skincare, and beauty products in Pakistan.",
    tags: ["Html", "Css", "JavaScript"],
    githubUrl:
      "https://github.com/Rafayalmani/Craftedfromheaven",
    liveUrl: "https://craftedfromheaven.store/",
  },
  
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {"isNew" in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12">
              LATEST WORK
            </div>
          )}
          <div>
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
