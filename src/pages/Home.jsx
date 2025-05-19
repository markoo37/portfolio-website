import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSections";
import { SkillsSection } from "../components/SkillsSection";
import { SportsGallerySection } from "../components/SportsGallerySection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return (
    <div className="min-h-screen bg-backgorund text-foreground overflow-x-hidden pt-16"> 
        {/*Background Effects*/}
        <StarBackground />
        {/* Navbar */}
        <NavBar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <SportsGallerySection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
    );
}