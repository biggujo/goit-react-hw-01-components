import { Card } from './Profile.styled';
import { Description } from '../Description/Description';
import { StatisticsList } from '../StatisticsList/StatisticsList';

export const Profile = ({ userData }) => {
  return <Card>
    <Description avatar={userData.avatar} tag={userData.tag}
                 location={userData.location} username={userData.username}>
    </Description>
    <StatisticsList stats={userData.stats} />
  </Card>;
};
