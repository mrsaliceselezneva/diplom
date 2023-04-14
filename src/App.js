import { Route, Routes } from 'react-router-dom';

import InstitutionAdmin from 'pages/InstitutionAdmin/InstitutionAdmin';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import Request from './pages/Request';
import Main from './pages/Main/Main';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/reuqest" element={<Request />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/admin/*" element={<Admin />} />
                <Route exact path="/institution/admin/*" element={<InstitutionAdmin />} />
                <Route exact path="/*" element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
