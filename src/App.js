import React from 'react';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <AppRoutes />
            </main>
        </div>
    );
}

export default App;