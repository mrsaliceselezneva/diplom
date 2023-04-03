import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CreateInstitution from './pages/CreateInstitution/CreateInstitution';
import Login from './pages/Login/Login';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/create-institution" element={<CreateInstitution />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
