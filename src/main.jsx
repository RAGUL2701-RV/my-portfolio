import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import TransportDocs from './pages/TransportDocs.jsx' // <-- Fixed to .jsx
import ExamDocs from './pages/ExamDocs.jsx'
import LabDocs from './pages/LabDocs.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/transport-docs" element={<TransportDocs />} />
        <Route path="/exam-docs" element={<ExamDocs />} />
        <Route path="/lab-docs" element={<LabDocs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)