import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './components/menu/Menu';
import { Sidebar } from './components/sidebar/Sidebar';
import { Profile } from './pages/profile/Profile';

/**
 * Function returning the complete main page
 * @component
 * @returns {object} <div> html object
 */
function App() {
 
  return (
    <div className='App'>
      <div className='header'>
        <Menu></Menu>
      </div>
      <div className='sidebar'>
        <Sidebar></Sidebar>
      </div>
      <div className='content'>
        <Router>
          <Routes>
            <Route path="/profile/:userId" element={<Profile/>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
