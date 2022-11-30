import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

const Pagination = () => {
  const pageCount = 51
  return (
    <div className='pagination'>
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      // onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
    </div>
  )
}

export default Pagination
