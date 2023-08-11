import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import { List, ListItem } from './FriendsList.styled';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return <List>
    {friends.map(({
      id,
      avatar,
      name,
      isOnline,
    }) => {
      return <ListItem key={id}>
        <FriendsListItem isOnline={isOnline} avatar={avatar} name={name} />
      </ListItem>;
    })}
  </List>;
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })).isRequired,
};
