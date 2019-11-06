import React from 'react';

export const Paginator = ({ allPages, goToPage }) => {
  return (
    <nav aria-label='...'>
      <ul className='pagination pagination-lg'>
        {allPages.map(page => (
          <li key={page} className='page-item' onClick={() => goToPage(page)}>
            <span className='page-link btn btn-link'>{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginator;
