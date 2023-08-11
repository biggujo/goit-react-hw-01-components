import PropTypes from 'prop-types';
import { Card } from './Profile.styled';
import { Description } from '../Description/Description';
import { DescriptionList } from '../DescriptionList/DescriptionList';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
}) => {
  return <Card>
    <Description avatar={avatar} tag={tag}
                 location={location} username={username}>
    </Description>
    <DescriptionList stats={stats} />
  </Card>;
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
