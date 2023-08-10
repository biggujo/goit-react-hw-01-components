import PropTypes from 'prop-types';
import { Avatar, Title, Text } from './Description.styled';

export const Description = ({
  avatar,
  username,
  tag,
  location,
}) => {
  return <section>
    <Avatar src={avatar}
            alt='User avatar' />
    <Title>{username}</Title>
    <Text>@{tag}</Text>
    <Text>{location}</Text>
  </section>;
};

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
