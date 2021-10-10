import React from 'react';
import ReactPaginate from 'react-paginate';
import { StPaginationWrapper } from './styled';

interface IProps {
  totalPage: number,
  changePage: (payload: number) => void
}

export const Pagination: React.FC<IProps> = ({ totalPage, changePage }) => {
  const onChangePage = (page: { selected: number }) => {
    changePage(page.selected);
  };
  return (
    <StPaginationWrapper>
      <ReactPaginate
        pageCount={totalPage}
        marginPagesDisplayed={5}
        pageRangeDisplayed={5}
        onPageChange={onChangePage}
        containerClassName="pagination"
        pageClassName='page'
        activeClassName="active"
        breakLabel="..."
        breakClassName='break'
        previousLabel='<'
        nextLabel=">"
        previousClassName="previous"
        nextClassName="next"
      />
    </StPaginationWrapper>
  );
};
