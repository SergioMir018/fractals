import FractalCanvas from './components/FractalCanvas';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='grid grid-cols-5 '>
      <SideBar />
      <FractalCanvas />
    </div>
  );
}

export default App;
