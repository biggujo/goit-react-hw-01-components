import { Card, Title } from './Statistics.styled';
import { StatisticsList } from '../StatisticsList/StatisticsList';
import PropTypes from 'prop-types';

export const Statistics = ({
  title,
  stats,
}) => {
  return <Card>
    {title && <Title>{title}</Title>}
    <StatisticsList stats={stats} />
  </Card>;
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};
