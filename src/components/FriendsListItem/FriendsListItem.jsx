import { Avatar, Card, Status, Text } from './FriendsListItem.styled';
import PropTypes from 'prop-types';

export const FriendsListItem = ({
  avatar,
  name,
  isOnline,
}) => {
  return <Card>
    <Status isOnline={isOnline}></Status>
    <Avatar src={avatar} alt='User avatar' width='48' />
    <Text>{name}</Text>
  </Card>;
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
