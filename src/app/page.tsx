import About from "./components/About";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Contact />
    </main>
  );
}
