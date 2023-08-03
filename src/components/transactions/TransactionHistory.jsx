import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  max-height: 340px;
  overflow-y: auto;
  scrollbar-width: thin;
`;

const Table = styled.table`
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

const TableHead = styled.thead`
  background-color: turquoise;
  color: #fff;
`;

const TableHeadItem = styled.th`
  padding: 10px 30px;
  border-bottom: 1px solid #000000;
  border: 1px solid #000000;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: lightgray;
  }
`;

const TableData = styled.td`
  padding: 10px 30px;
  border-bottom: 1px solid #000000;
  border: 1px solid #000000;
`;

const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
      <Table className="transaction-history">
        <TableHead>
          <TableRow>
            <TableHeadItem>Type</TableHeadItem>
            <TableHeadItem>Amount</TableHeadItem>
            <TableHeadItem>Currency</TableHeadItem>
          </TableRow>
        </TableHead>
        <tbody>
          {items.map((item, index) => (
            <TableRow key={item.id}>
              <TableData>{item.type}</TableData>
              <TableData>{item.amount}</TableData>
              <TableData>{item.currency}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
