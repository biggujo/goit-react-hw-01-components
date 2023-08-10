import { Item, List, Text, TextStressed } from './StatisticsList.styled';
import PropTypes from 'prop-types';

export const StatisticsList = ({ stats }) => {
  return <List>
    {Object.entries(stats).map(([name, value]) => {
      return <Item key={name}>
        <Text>{name}</Text>
        <TextStressed type='stressed'><b>{value}</b></TextStressed>
      </Item>;
    })}
  </List>;
};

StatisticsList.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
