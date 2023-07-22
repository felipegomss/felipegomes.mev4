import About from "./components/About";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Repos from "./components/Repos";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Repos />
      <Contact />
    </main>
  );
}
