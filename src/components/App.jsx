import Registration from 'pages/Registration/Registration';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={''} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Layout>
    </div>
  );
};
// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101',
// }}
// React homework template
