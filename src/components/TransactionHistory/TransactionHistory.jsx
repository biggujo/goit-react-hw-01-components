import {
  TableBody, TableHead, TableHeadCell, TableRow, Table,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';
import { TransactionItem } from '../TransactionItem/TransactionItem';

export const TransactionHistory = ({ items }) => {
  return <Table>
    <TableHead>
      <TableRow>
        <TableHeadCell>Type</TableHeadCell>
        <TableHeadCell>Amount</TableHeadCell>
        <TableHeadCell>Currency</TableHeadCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {items.map(({
        id,
        type,
        amount,
        currency,
      }) => {
        return <TransactionItem key={id}
                                amount={amount}
                                type={type}
                                currency={currency} />;
      })}
    </TableBody>
  </Table>;
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
};
