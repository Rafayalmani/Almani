import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
         I'm Full-stack Developer who builds modern, scalable web applications using React and Firebase.
           I enjoy crafting clean UI, smooth user experiences, and performance-driven digital products.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I design and build high-performance web applications and crypto tools with modern UI systems.
           Passionate about scalable architecture, clean code, and turning ideas into production-ready products.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
