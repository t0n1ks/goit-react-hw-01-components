import React from 'react';
import PropTypes from 'prop-types';
import { TableContainer, Table, TableHead, TableHeadItem, TableRow, TableData } from './TransactionHistory.styles';

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
