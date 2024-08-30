import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactBooksPage from './pages/ContactBooksPage';
import AuthenticatedRoute from './components/AuthenticatedRoute';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/contact-books"
                    element={<AuthenticatedRoute element={<ContactBooksPage />} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
