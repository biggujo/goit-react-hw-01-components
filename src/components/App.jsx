import { Profile } from './Profile/Profile';
import { Layout } from './Layout/Layout.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <Layout>
      <Profile/>

      <GlobalStyle/>
    </Layout>
  );
};
