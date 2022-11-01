import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

export default function Header({ onThemeChange }) {
  const links = [
    {
      name: "About",
      to: "about",
    },
    {
      name: "Tex and Tools",
      to: "texAndTools",
    },
  ];

  return (
    <div className='grid grid-cols-6 gap-4 items-center m-4'>
      <div className='col-start-3 col-span-2 drop-shadow-2xl'>
        <div className='flex flex-row gap justify-center items-center'>
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className='btn btn-sm prose mx-2'
              spy
              smooth
              duration={750}
              offset={-75}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className='col-start-6 col-span-1'>
        <label className='swap swap-rotate'>
          <input type='checkbox' onChange={onThemeChange} />
          <SunIcon className='swap-off fill-current w-8 h-8' />
          <MoonIcon className='swap-on fill-current w-8 h-8' />
        </label>
      </div>
    </div>
  );
}
