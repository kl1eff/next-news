'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';

import { useState } from 'react';

function Menu() {
  const [isActive, setIsActive] = useState<Boolean>(false);
  return (
    <div>
      <Bars3Icon className="h-8 w-8 cursor-pointer" onClick={() => setIsActive(!isActive)}/>

      <div className={`w-[85%] md:w-[17rem] bg-white p-10 shadow-xl flex justify-between h-screen z-10 fixed top-0 -left-1 transition-all ${isActive ? 'translate-x-0' : '-translate-x-full'} text-black`}>
        <ul className="font-semibold flex flex-col gap-2" onClick={() => setIsActive(false)}>
          <li>
            <Link href="/?category=business">Business</Link>
          </li>
          <li>
            <Link href="/?category=entertainment">Entertainment</Link>
          </li>
          <li>
            <Link href="/?category=general">General</Link>
          </li>
          <li>
            <Link href="/?category=health">Health</Link>
          </li>
          <li>
            <Link href="/?category=science">Science</Link>
          </li>
          <li>
            <Link href="/?category=sports">Sports</Link>
          </li>
          <li>
            <Link href="/?category=technology">Technology</Link>
          </li>
        </ul>
        <XMarkIcon className="h-8 w-8 cursor-pointer" onClick={() => setIsActive(false)}/>
      </div>
    </div>
  );
}

export default Menu;
