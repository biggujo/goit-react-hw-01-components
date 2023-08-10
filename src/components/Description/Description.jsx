import PropTypes from 'prop-types';
import { Avatar, Title, Text, Wrapper } from './Description.styled';

export const Description = ({
  avatar,
  username,
  tag,
  location,
}) => {
  return <Wrapper>
    <Avatar src={avatar}
            alt='User avatar' />
    <Title>{username}</Title>
    <Text>@{tag}</Text>
    <Text>{location}</Text>
  </Wrapper>;
};

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
