import { useSelector } from 'react-redux';
import './App.css';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './containers/404Page/NoPage';
import Dashboard from './containers/dashboard/Dashboard';
import Layout from './containers/Layout/Layout';

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

function App() {
  const theme = useSelector((state) => state.themeState.theme);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
