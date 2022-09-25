import React, { Suspense, lazy } from 'react';
import './styles/main.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//import Home from './pages/Home';
//import ViewCurrentEmployees from './pages/ViewCurrentEmployees';
import history from './history'

const Home = lazy(() => import('./pages/Home'));
const ViewCurrentEmployees = lazy(() => import('./pages/ViewCurrentEmployees'));

function App() {
  return (
    <Router history={history}>

      {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/viewcurrentemployees" element={<ViewCurrentEmployees />} />
        </Routes>
      </Suspense>
    </Router>
  );
}


export default App;
