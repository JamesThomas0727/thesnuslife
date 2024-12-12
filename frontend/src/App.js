import logo from './logo.svg';
import './App.css';
import Content from './Content';
import { HashRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavigationProvider } from './context/navigation';
import { AuthProvider, useAuth } from './context/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './slice';
function App() {
  return (<Content />)
}
export function Root() {
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
  )
}
export default App;
