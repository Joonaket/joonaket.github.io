import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import CircuitRacingPage from '../components/CircuitRacing/CircuitRacingPage';
import DriftingPage from '../components/Drifting/DriftingPage';
import DragRacingPage from '../components/DragRacing/DragRacingPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/circuit-racing" element={<CircuitRacingPage />}>
                <Route path="history" element={<CircuitRacingPage section="history" />} />
                <Route path="now" element={<CircuitRacingPage section="now" />} />
                <Route path="future" element={<CircuitRacingPage section="future" />} />
            </Route>
            <Route path="/drifting" element={<DriftingPage />}>
                <Route path="history" element={<DriftingPage section="history" />} />
                <Route path="now" element={<DriftingPage section="now" />} />
                <Route path="future" element={<DriftingPage section="future" />} />
            </Route>
            <Route path="/drag-racing" element={<DragRacingPage />}>
                <Route path="history" element={<DragRacingPage section="history" />} />
                <Route path="now" element={<DragRacingPage section="now" />} />
                <Route path="future" element={<DragRacingPage section="future" />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;