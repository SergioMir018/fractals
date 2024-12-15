import { useEffect, useRef, useState } from 'react';
import { FractalFuntion } from '../context/FractalFunctionsContext';
import useOutsideClick from '../hooks/useOutsideClick';
import { useFractal } from '../hooks/useFractal';
import { fractalFunctions } from '../utils/fractalsEcuations';
import classNames from 'classnames';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function FractalGenSelector() {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { selectedFractal, setFractal } = useFractal();

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeInput);

    return () => {
      document.removeEventListener('keydown', handleEscapeInput);
    };
  }, []);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setShowOptions(false),
  });

  const onOptionSelection = (selectedOption: FractalFuntion) => {
    setFractal(selectedOption);
    setShowOptions(!showOptions);
  };

  const showOptionsToggle = () => {
    setShowOptions(!showOptions);
  };

  const handleEscapeInput = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setShowOptions(false);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className='relative w-52 text-white'
    >
      <button
        onClick={showOptionsToggle}
        className='flex w-full cursor-pointer justify-between py-2 border-2 rounded-md border-gray-600 overflow-hidden focus:outline-none'
      >
        <span className='pl-2'>{selectedFractal}</span>

        <KeyboardArrowDownIcon
          className={classNames('ml-2 mr-1', {
            'rotate-180': showOptions,
          })}
        />
      </button>
      {showOptions && (
        <div className='absolute w-full max-h-52 border-2 bg-[#0C0D0E] border-slate-600 overflow-y-auto rounded shadow-md z-10 top-full left-0 mt-2 animate-fade-down animate-duration-200'>
          <ul className='leading-10'>
            {Object.keys(fractalFunctions).map((option) => {
              return (
                <li
                  onClick={() => onOptionSelection(option as FractalFuntion)}
                  className='block cursor-pointer py-1 px-2 hover:transition-all hover:bg-slate-600 duration-150'
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FractalGenSelector;
