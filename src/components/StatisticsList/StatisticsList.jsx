import { Item, List, Text } from './StatisticsList.styled';
import { createPalette } from '../../utils';
import PropTypes from 'prop-types';

export const StatisticsList = ({ stats }) => {
  const palette = createPalette(stats.length);

  return <List>
    {stats.map((stat, index) => {
      return <Item key={stat.id} bgColor={palette[index]}>
        <Text>{stat.label}</Text>
        <Text isBold>{stat.percentage}%</Text>
      </Item>;
    })}
  </List>;
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};
