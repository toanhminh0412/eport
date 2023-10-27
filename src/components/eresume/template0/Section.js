import Profile from "./sections/Profile";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import References from "./sections/References";

// Render a single section based on id
export default function Section({content, userPlan}) {
    const sectionId = content.id;
    const hidden = content.hidden;
    if (hidden) {
        return null;
    }

    switch (sectionId) {
        case 0:
            return <Profile content={content} />
        case 1:
            return <AboutMe content={content} />
        case 2:
            return <Skills content={content} />   
        case 3:
            return <Experience content={content} />
        case 4:
            return <Services content={content} />
        case 5:
            return <Projects content={content} />
        case 6:
            return <Testimonials content={content} />
        case 7:
            return <Footer content={content} />
        case 8:
            return <References content={content} />
        default:
            return null;
    }
}