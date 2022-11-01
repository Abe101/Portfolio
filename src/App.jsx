import { useEffect, useState } from "react";
import { Events, scrollSpy, Element } from "react-scroll";

import Header from "./components/Header";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Techs from "./sections/Techs";

function App() {
  const [theme, setTheme] = useState("night");

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
    setTheme((prev) => (prev === "night" ? "winter" : "night"));

  return (
    <div className='body flex flex-col wallpaper' data-theme={theme}>
      <div className='sticky top-0 z-30 bg-base-100 opacity-75 border-b border-base-content rounded-b-xl'>
        <Header onThemeChange={switchTheme} />
      </div>
      <Intro />
      <Element name='about'>
        <About />
      </Element>
      <Element name='texAndTools'>
        <Techs />
      </Element>
    </div>
  );
}

export default App;
