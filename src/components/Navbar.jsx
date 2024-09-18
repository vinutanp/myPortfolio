import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";
import { RESUME_LINK } from '../constants';

const Navbar = () => {
  return (
    <nav className='mb-10 flex item-center justify-between py-6 '>
        <div className='flex flex-shrink-0 items-center'>
            <h2 className='protest-guerrilla-regular text-2xl'>VP</h2>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/vinuta-poojari/' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a href='https://github.com/vinutanp' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer"><TbFileCv/></a>  
        </div>
    </nav>
  )
}

export default Navbar

