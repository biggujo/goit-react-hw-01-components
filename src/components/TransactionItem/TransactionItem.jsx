import { BodyCell, Row } from './TransactionItem.styled';

export const TransactionItem = ({
  type,
  amount,
  currency,
}) => {
  return <Row>
    <BodyCell>{type}</BodyCell>
    <BodyCell>{amount}</BodyCell>
    <BodyCell>{currency}</BodyCell>
  </Row>;
};
