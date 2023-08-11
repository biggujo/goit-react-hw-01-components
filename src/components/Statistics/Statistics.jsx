import { Card, Title } from './Statistics.styled';
import { StatisticsList } from '../StatisticsList/StatisticsList';

export const Statistics = ({
  title,
  stats,
}) => {
  return <Card>
    {title && <Title>{title}</Title>}
    <StatisticsList stats={stats} />
  </Card>;
};
