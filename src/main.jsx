import { StrictMode, lazy, Suspense } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const PracticeStudio = lazy(() => import('./practice-studio/PracticeStudio.jsx'))
const isPracticeStudio = /^\/practice-studio\/?$/.test(window.location.pathname)
const root = document.getElementById('root')

if (isPracticeStudio) {
  createRoot(root).render(
    <StrictMode>
      <Suspense fallback={null}>
        <PracticeStudio />
      </Suspense>
    </StrictMode>,
  )
} else if (root.dataset.route && root.dataset.route === (window.location.pathname.replace(/\/+$/, '') || '/')) {
  // this URL was pre-rendered at build time (scripts/prerender.mjs)
  hydrateRoot(root, <StrictMode><App /></StrictMode>)
} else {
  root.textContent = '' // a fallback page rendered for a different URL
  createRoot(root).render(<StrictMode><App /></StrictMode>)
}
