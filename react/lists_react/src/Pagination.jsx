import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = totalItems - itemsPerPage * currentPage > 0;

  return (
    <div className="pagination">
      <button className="btn" disabled={!isPrevPageAvailable} onClick={goPrev}>
        {!isPrevPageAvailable ? '' : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" disabled={!isNextPageAvailable} onClick={goNext}>
        {!isNextPageAvailable ? '' : '→'}
      </button>
    </div>
  );
};

export default Pagination;
