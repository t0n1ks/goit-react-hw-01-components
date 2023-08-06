import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  max-height: 340px;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  scrollbar-width: thin;
  /* Стилізація полоси прокрутки у Chrome та Safari */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
`;

export const TableHead = styled.thead`
  background-color: turquoise;
  color: #fff;
`;

export const TableHeadItem = styled.th`
  padding: 10px 30px;
  border-bottom: 1px solid #000000;
  border: 1px solid #000000;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: lightgray;
  }
`;

export const TableData = styled.td`
  padding: 10px 30px;
  border-bottom: 1px solid #000000;
  border: 1px solid #000000;
`;
