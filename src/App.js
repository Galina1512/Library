import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Books from './Books';
import About from './About';
import Contacts from './Contacts'
import './App.css';

function App(){
    return <Router>
        <nav>
            <Link to='/' className="link">Каталог</Link>
            <Link to='/about' className="link">О сайте</Link>
            <Link to='/contacts' className="link">Контакты</Link>

        </nav>
        <Routes>
            <Route path='/' element={<Books/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contacts' element={<Contacts/>}/>
        </Routes>
    </Router>
};
export default App;