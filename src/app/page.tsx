'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import SplashCursor from '@/components/SplashCursor';
import TargetCursor from "@/components/TargetCursor";
import TechStackLoop from "@/components/sections/logoloop/logoloop";
import LoadingScreen from "@/components/LoadingScreen";
import Heropage from '@/components/sections/hero/Heropage';
import SkillsSection from '@/components/sections/skill/SkillsSection';
import ExperienceSection from '@/components/sections/experience/ExperienceSection';
import ProjectsSection from '@/components/sections/project/ProjectsSection';
import GithubSection from '@/components/sections/github/GithubSection';
import TextScroll from "@/components/sections/Textscroll/textSroll";

import CertificateSection from '@/components/sections/certificate/CertifiateSection';
import RecommendationSection from '@/components/sections/recommendation/RecomondationSection';
import ContactSection from '@/components/sections/contact/ContactSection';
import { useLoading } from "@/context/LoadingContext";

// Dynamic import for AboutSection to avoid SSR issues with react-pdf
const AboutSection = dynamic(() => import('@/components/sections/about/AboutSection'), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div></div>
});


export default function HomePage() {
  const { loading, setLoading } = useLoading();
  const router = useRouter();

  useEffect(() => {
    // Initial loading is now disabled to prevent blocking on hydration failure
  }, [router, setLoading]);

  // if (loading) {
  //   return <LoadingScreen />;
  // }

  return (
    <>
     <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
  hoverDuration={0.2}
/>
      <Heropage />
      <div className="relative">
        

        <AboutSection  />
        <TechStackLoop />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <GithubSection />
        <TextScroll />
        <CertificateSection />
        <RecommendationSection />
        <ContactSection />
      </div>
    </>
  ); 
}