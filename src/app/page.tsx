import About from "./components/About";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Articles />
      <Contact />
    </main>
  );
}
