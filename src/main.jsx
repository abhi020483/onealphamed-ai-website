import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Minimal path routing: the site is a single page except for the
// Practice Studio sub-brand page (deep links served via dist/404.html).
const PracticeStudio = lazy(() => import('./practice-studio/PracticeStudio.jsx'))
const isPracticeStudio = /^\/practice-studio\/?$/.test(window.location.pathname)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isPracticeStudio ? (
      <Suspense fallback={null}>
        <PracticeStudio />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
)
