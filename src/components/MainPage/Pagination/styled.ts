import styled from 'styled-components';

export const StPaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .pagination {
    display: flex;
    align-items: center;
    list-style-type: none;
  }
  .page, .previous, .next, .break{
    cursor: pointer;
    border: 1px solid #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    &:hover {
    background: #fff;
    color: #000;
    }
  }
  .active {
    background: #fff;
    color: #000;
  }
`;
