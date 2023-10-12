'use client';

import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { categories } from '@/constants';
import NavLink from './NavLink';

function NavLinks() {
  const pahtName = usePathname();
  const isActive = (category: string) => useSearchParams().get('category') === category; 

  return (
    <nav className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b-2'>
      {categories.map((category) => (
        <NavLink
        key={category} 
        category={category} 
        isActive={isActive(category)} 
        />
      ))}
    </nav>
  );
}

export default NavLinks;
