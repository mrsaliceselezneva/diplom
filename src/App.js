import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Reuqest from './pages/Reuqest/Reuqest';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Admin from './pages/Admin/Admin';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/reuqest" element={<Reuqest />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/admin/*" element={<Admin />} />
                <Route exact path="/*" element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
