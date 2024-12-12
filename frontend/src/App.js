import logo from './logo.svg';
import './App.css';
import Content from './Content';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NavigationProvider } from './context/navigation';
import { AuthProvider, useAuth } from './context/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
function App() {
  return (<Content />)
}
export function Root() {
  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
        </NavigationProvider>
      </AuthProvider>
    </Router>
  )
}
export default App;
