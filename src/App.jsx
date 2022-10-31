import { useEffect, useState } from "react";
import { Events, scrollSpy } from "react-scroll";

import Header from "./components/Header";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Techs from "./sections/Techs";

function App() {
  const [theme, setTheme] = useState("forest");

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {});
    Events.scrollEvent.register("end", (to, element) => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const switchTheme = () =>
    setTheme((prev) => (prev === "forest" ? "cupcake" : "forest"));

  return (
    <div className='body flex flex-col wallpaper' data-theme={theme}>
      <Header onThemeChange={switchTheme} />
      <Intro />
      <About />
      <Techs />
    </div>
  );
}

export default App;
