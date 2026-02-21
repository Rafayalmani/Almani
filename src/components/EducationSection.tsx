import SectionBlock from "./SectionBlock";

const education = [
  {
    degree: "Self-Taught Software Engineer",
    institution: "Independent & Project-Based Learning",
    year: "2025 – Present",
    description:
      "Building production-ready web applications using React, Firebase, and modern UI technologies. Focused on clean architecture, scalable systems, performance optimization, and real-world problem solving.",
  },
];

const EducationSection = () => (
  <SectionBlock id="education" title="Education">
    <div className="space-y-12">
      {education.map((item) => (
        <div
          key={item.degree}
          className="border-l-2 border-black/10 pl-6 py-4 hover:border-black transition-colors duration-300"
        >
          <h3 className="text-lg md:text-xl font-bold text-foreground">
            {item.degree}
          </h3>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
            <span className="text-foreground/70 font-medium">
              {item.institution}
            </span>
            <span className="hidden md:inline text-foreground/20">•</span>
            <span className="font-mono text-sm text-foreground/60">
              {item.year}
            </span>
          </div>

          <p className="mt-4 text-foreground/80 leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default EducationSection;