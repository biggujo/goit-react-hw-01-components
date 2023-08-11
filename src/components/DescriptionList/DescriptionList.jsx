import { Item, List, Text, TextStressed } from './DescriptionList.styled';
import PropTypes from 'prop-types';

export const DescriptionList = ({ stats }) => {
  return <List>
    {Object.entries(stats).map(([name, value]) => {
      return <Item key={name}>
        <Text>{name}</Text>
        <TextStressed type='stressed'><b>{value}</b></TextStressed>
      </Item>;
    })}
  </List>;
};

DescriptionList.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
