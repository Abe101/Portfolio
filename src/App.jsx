import Intro from "./sections/Intro";
import About from "./sections/About";
import Techs from "./sections/Techs";

function App() {
  return (
    <div className='body flex flex-col wallpaper' data-theme='forest'>
      <Intro />
      <About />
      <Techs />
    </div>
  );
}

export default App;
