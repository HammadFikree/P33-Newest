import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './home';
import Login from './login';
import Header from './header';
import Footer from './nav';
import Checking from './checking';
import Persona from './persona';
import Extra from './extra';

function App() {
    const Layout = ({ children }) => {
        const location = useLocation();
        const isLoginPage = location.pathname === "/login";

        return (
            <>
                {!isLoginPage && <Header />}
                <div className="main-content">
                    {children}
                </div>
                {!isLoginPage && <Footer />}
            </>
        );
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/checking"
                    element={
                        <Layout>
                            <Checking />
                        </Layout>
                    }
                />
                <Route
                    path="/persona"
                    element={
                        <Layout>
                            <Persona />
                        </Layout>
                    }
                />
                <Route
                    path="/extra"
                    element={
                        <Layout>
                            <Extra />
                        </Layout>
                    }
                />
                <Route path="/analytics" element={<Layout> {/* Analytics Component */} </Layout>} />
                <Route path="/extra" element={<Layout> {/* Extra Features Component */} </Layout>} />
            </Routes>
        </Router>
    );
}

export default App;
