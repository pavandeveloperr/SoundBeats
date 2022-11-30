import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { logo } from '../assets';
import { links } from '../assets/constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons';

const NavLinks = ({ handleClick }) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink 
      key={item.name}
      to={item.to}
      className='flex flex-row justify-center items-center my-7 mr-8 text-sm font-medium
     hover:text-cyan-400 text-gray-300'
      onClick={() => handleClick && handleClick()}>
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}

  </div>
);


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#232837]'>
      <img src={logo} alt='logo' className='relative w-20 h-10 object-contain' />
      <h2 className='absolute ml-[70px] mt-2 text-white font-bold text-lg'>SoundBeats</h2>
      <NavLinks />
      <p className='text-gray-400 text-center mr-8 mt-6'><FontAwesomeIcon icon={faCode} /> by {" "}
					<a
						href="https://github.com/pavandeveloperr"
            className='text-cyan-400 underline'
						target="_blank"
					>
						Pavan
					</a> </p>
    </div>
    <div className='absolute md:hidden block top-6 right-3'>
      {mobileMenuOpen ? (
        <RiCloseLine className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenuOpen(false)} />

      ) : <HiOutlineMenu className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenuOpen(true)} />}

    </div>
    <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 
    to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden
    smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt='logo' className='relative pl-[40px] w-40 h-10 object-contain' />
      <h2 className='ml-[50px] mt-2 text-white font-bold text-lg'>SoundBeats</h2>
      <NavLinks handleClick={() => setMobileMenuOpen(false)} />

      <p className='text-gray-300 text-center mr-5 pt-[90px]'><FontAwesomeIcon icon={faCode} /> by {" "} 
      <a
						href="https://github.com/pavandeveloperr"
            className='text-white underline hover:text-cyan-400'
						target="_blank"
					>
						Pavan
					</a>
      </p>

    </div>
      
    
    </>
  )
};

export default Sidebar;
