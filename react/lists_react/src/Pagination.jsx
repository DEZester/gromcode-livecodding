import React from 'react';

const Pagination = ({ curPage, goNext, goPrev, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = curPage === 1;
  const isNextPageAvailable = curPage === Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button disabled={isPrevPageAvailable ? 'disabled' : null} onClick={goPrev} className="btn">
        {isPrevPageAvailable ? '' : '←'}
      </button>
      <span className="pagination__page">{curPage}</span>
      <button disabled={isNextPageAvailable ? 'disabled' : null} onClick={goNext} className="btn">
        {isNextPageAvailable ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;
