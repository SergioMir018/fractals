import { useDepth } from '../hooks/useDepth';
import { useAngle } from '../hooks/useAngle';
import FractalGenSelector from './FractalGenSelector';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function SideBar() {
  const [depth, setDepth] = useDepth();
  const [angle, setAngle] = useAngle();

  return (
    <div className='h-screen col-span-1 bg-[#0C0D0E] px-5'>
      <div className='mt-10 flex flex-col gap-10'>
        <div className='flex flex-col gap-3'>
          <h3 className='text-lg font-bold'>Select a Fractal Funtion</h3>
          <FractalGenSelector />
        </div>
        <div className='flex flex-col gap-3'>
          <h3 className='text-lg font-bold'>Adjust ecuation iteraion level</h3>
          <div className='flex gap-2 items-center'>
            <button
              onClick={() => setDepth(depth + 1)}
              className='border rounded-md py-1 px-3 cursor-pointer'
            >
              <AddIcon />
            </button>
            <span className='font-bold text-xl'>{depth}</span>
            <button
              onClick={() => setDepth(depth - 1)}
              className='border rounded-md py-1 px-3 cursor-pointer'
            >
              <RemoveIcon />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h3 className='text-lg font-bold'>Adjust fractal generation angle</h3>
          <div className='flex gap-2 items-center'>
            <button
              onClick={() => setAngle(angle + 10)}
              className='border rounded-md py-1 px-3 cursor-pointer'
            >
              <AddIcon />
            </button>
            <span className='font-bold text-xl'>{angle}</span>
            <button
              onClick={() => setAngle(angle - 10)}
              className='border rounded-md py-1 px-3 cursor-pointer'
            >
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
