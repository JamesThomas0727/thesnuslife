import logo from './logo.svg';
import './App.css';
import Content from './Content';
import { HashRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavigationProvider } from './context/navigation';
import { AuthProvider, useAuth } from './context/auth';
import LoadPanel from './components/loadingpanel/LoadingPanel';
import HomePage from './pages/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingPanel from './components/loadingpanel/LoadingPanel';

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('/api/data')
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  // const { user, loading } = useAuth();
  let loading = true;
  if (loading) {
    // return <LoadPanel visible={true} />;
  }

  let user = true;
  if (user) {
    return <Content />;
    // return <LoadingPanel></LoadingPanel>
  }

}
export function Root() {
  // const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
          <div>
            <App />
          </div>
        </NavigationProvider>
      </AuthProvider>
    </Router>
  );
}
export default App;
