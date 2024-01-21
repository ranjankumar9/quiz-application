import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import StudentA from '../Quiz/Quiz1'
import StudentB from '../Quiz/Quiz2'
import StudentC from '../Quiz/Quiz3'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody } from '@chakra-ui/react';
import LeaderBoard from '../Leaderboard/LeaderBoard'

const NotFoundModal = () => (
    <Modal isOpen={true} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>404 Pages Not Found</ModalHeader>
            <ModalBody>
                <p>The requested page could not be found.</p>
            </ModalBody>
        </ModalContent>
    </Modal>
);

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/student-a' element={<StudentA />} />
                <Route path='/student-b' element={<StudentB />} />
                <Route path='/student-c' element={<StudentC />} />
                {/* <Route path='/leaderboard' element={<LeaderBoard />} /> */}
                <Route path='*' element={<Navigate to="/not-found" replace />} />
                <Route path='/not-found' element={<NotFoundModal />} />
            </Routes>
        </div>
    )
}

export default MainRoutes