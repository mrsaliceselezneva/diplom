import { Route, Routes } from 'react-router-dom';

import InstitutionAdmin from 'pages/InstitutionAdmin';
import InstitutionTeacher from 'pages/InstitutionTeacher';
import Footer from './components/Footer';
import Header from './components/Header';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Request from './pages/Request';
import Main from './pages/Main';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/reuqest" element={<Request />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/admin/*" element={<Admin />} />
                <Route exact path="/institution/admin/*" element={<InstitutionAdmin />} />
                <Route exact path="/institution/teacher/*" element={<InstitutionTeacher />} />
                <Route exact path="/*" element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
