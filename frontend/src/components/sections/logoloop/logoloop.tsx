import LogoLoop from '@/components/LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiRedis, 
  SiPostgresql, 
  SiSequelize,
  SiDigitalocean, 
  SiSupabase, 
  SiPostman, 
  SiGooglechrome, 
  SiFirebase, 
  SiGithub, 
  SiJavascript, 
  SiOpenjdk, 
 } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiSequelize />, title: "Sequelize", href: "https://sequelize.org" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiDigitalocean />, title: "DigitalOcean", href: "https://www.digitalocean.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiGooglechrome />, title: "Google Chrome", href: "https://www.google.com/chrome/" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiOpenjdk />, title: "OpenJDK", href: "https://openjdk.java.net" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function TechStackLoop() {
  return (
    <div className=" py-32  text-white ">
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={40}
        direction="left"
        logoHeight={70}
        gap={96}
        pauseOnHover={true}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>
  );
}