import { Profile } from '../Profile/Profile';
import { Layout } from '../Layout/Layout.styled';
import { GlobalStyle } from '../GlobalStyle';
import user from 'user.json';
import data from 'data.json';
import { Statistics } from '../Statistics/Statistics';

export const App = () => {
  return (<Layout>
    <Profile username={user.username}
             tag={user.tag}
             location={user.location}
             avatar={user.avatar}
             stats={user.stats} />

    <Statistics title='Upload stats' stats={data} />
    <Statistics stats={data} />

    <GlobalStyle />
  </Layout>);
};
