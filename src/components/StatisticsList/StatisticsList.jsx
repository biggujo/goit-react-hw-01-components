import { Item, List, Text } from './StatisticsList.styled';
import { createPalette } from '../../utils';

export const StatisticsList = ({ stats }) => {
  const palette = createPalette(stats.length);

  console.log(palette);

  return <List>
    {stats.map((stat, index) => {
      return <Item key={stat.id} bgColor={palette[index]}>
        <Text>{stat.label}</Text>
        <Text $isBold={true}>{stat.percentage}%</Text>
      </Item>;
    })}
  </List>;
};
