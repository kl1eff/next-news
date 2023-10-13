'use client';
import Link from 'next/link';

function PageButton({ pageNumber, category, keywords, isActive }
  : { pageNumber: number; category: string; keywords: string; isActive: boolean }) {
  if (!isActive) {
    return (
      <Link className="w-10 h-10 bg-slate-700 flex justify-center items-center
       text-white font-semibold rounded-xl" href={`/?category=${category}&keywords=${keywords}&p=${pageNumber}`}>
        <span>{pageNumber + 1}</span>
      </Link>
    );
  } else {
    return (
      <div className="w-10 h-10 border bg-slate-200 border-slate-700 
      flex justify-center items-center text-slate-700 font-bold rounded-xl">
        {pageNumber + 1}
      </div>
    );
  }
}

export default PageButton;
