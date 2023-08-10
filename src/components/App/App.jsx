import { Profile } from '../Profile/Profile';
import { Layout } from '../Layout/Layout.styled';
import { GlobalStyle } from '../GlobalStyle';
import user from 'user.json';

export const App = () => {
  return (<Layout>
    <Profile username={user.username}
             tag={user.tag}
             location={user.location}
             avatar={user.avatar}
             stats={user.stats} />

    <GlobalStyle />
  </Layout>);
};
