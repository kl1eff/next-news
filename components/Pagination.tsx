'use client';

import { useSearchParams } from 'next/navigation';
import PageButton from './PageButton';

function Pagination({ pageAmount }: { pageAmount: number }) {
  const buttons = [];

  for (let i = 0; i < pageAmount; i++) {
    buttons.push(
      <PageButton
        key={i}
        pageNumber={i}
        category={useSearchParams().get('category') || 'general'}
        keyword={useSearchParams().get('keyword') || ''}
        isActive={+(useSearchParams().get('p') || 0) === i}
      />
    );
  }

  return <div className={`grid grid-cols-5 lg:grid-cols-10 w-fit gap-x-5 md:gap-x-10 gap-y-5 mx-auto`}>{buttons}</div>;
}

export default Pagination;
