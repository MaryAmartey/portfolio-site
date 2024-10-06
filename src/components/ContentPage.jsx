import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
import ProjectsPage from "./ProjectsPage";
import Navigation from "./Navigation";
import Testimonials from "./Testimonials";
import "../styles/App.css";

function ContentPage() {
  return (
    <>
      <Navigation color="bg-gray-950" />

      <AboutPage />
      <ResumePage />
      <ProjectsPage />
      <Testimonials />
    </>
  );
}

export default ContentPage;
