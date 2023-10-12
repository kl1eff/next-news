'use client'
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction } from 'react';

function MenuButton({setIsActive}: {setIsActive: Dispatch<SetStateAction<Boolean>>}) {
  return (
    <Bars3Icon className="h-8 w-8 cursor-pointer" onClick={() => setIsActive(active => !active)}/>
  )
}

export default MenuButton;