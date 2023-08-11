import { Profile } from '../Profile/Profile';
import { Layout } from '../Layout/Layout.styled';
import { GlobalStyle } from '../GlobalStyle';
import { Statistics } from '../Statistics/Statistics';
import { FriendsList } from '../FriendsList/FriendsList';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

export const App = () => {
  return (<Layout>
    <Profile username={user.username}
             tag={user.tag}
             location={user.location}
             avatar={user.avatar}
             stats={user.stats} />

    <Statistics title='Upload stats' stats={data} />
    <Statistics stats={data} />

    <FriendsList friends={friends} />

    <GlobalStyle />
  </Layout>);
};
