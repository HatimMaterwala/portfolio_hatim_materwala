import Chatbot from "@/Components/chatbot";
import Contact from "@/Components/contact";
import Testimonials from "@/Components/testimonials";
import Achievements from "@/Components/achievements";
import Certifications from "@/Components/certifications";
import WorkHistory from "@/Components/workhistory";
import Projects from "@/Components/projects";
import AboutSection from "@/Components/about";

export default function Home() {
  return (
    <div className="w-full">
      <AboutSection/>

      <WorkHistory/>

      <Projects/>

      <Certifications/>

      <Achievements/>

      <Testimonials/>

      <Contact/>

      <Chatbot/>
    </div>
  );
}
