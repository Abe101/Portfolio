import Intro from "./sections/Intro";
import About from "./sections/About";

function App() {
  return (
    <div className='body flex flex-col' data-theme='forest'>
      <Intro />
      <About />
    </div>
  );
}

export default App;
