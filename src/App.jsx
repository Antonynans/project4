import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import What_we_do from "./components/WHat_we_do";
import What_our_clients_say from "./components/What_our_clients_say";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <What_we_do />
        <What_our_clients_say />
        <Projects />
       
      </main>
      <Footer />
    </div>
  );
};

export default App;
