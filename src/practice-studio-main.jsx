import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PracticeStudio from './practice-studio/PracticeStudio.jsx'

// Entry for the standalone /practice-studio/ static build (see
// vite.practice-studio.config.js) — no router, no parent App.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PracticeStudio />
  </StrictMode>,
)
