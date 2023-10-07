import NavigationBar from "./sections/NavigationBar";
import Header from "./sections/Header";
import AboutMe from "./sections/AboutMe";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function Section() {
    return (
        <div>
            <NavigationBar/>
            <Header/>
            <AboutMe/>
            <Services/>
            <Projects/>
            <Testimonials/>
            <Contact/>
        </div>
    )
}