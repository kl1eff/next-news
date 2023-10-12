import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="mt-14 border-t-3 border-black bg-slate-800 text-white">
      <div className='w-[58%] mx-auto'>
        <div className="flex justify-between py-6">
          <ul className="font-semibold flex flex-col gap-2">
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
          <div className="font-serif text-4xl text-center hidden md:block">The OMSK News</div>
        </div>
        <div>
          <div className="mx-auto text-center border-t py-3 border-white">Copyright @ 2023</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
