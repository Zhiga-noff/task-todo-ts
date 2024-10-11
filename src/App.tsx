import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

export const App = () => {
  return (
    <>
      <h1>todos</h1>
      <Layout>
        <Routes>
          <Route path={'/'} />
          <Route path={'/active'} />
          <Route path={'/completed'} />
        </Routes>
      </Layout>
    </>
  );
};
