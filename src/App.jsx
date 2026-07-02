import { lazy, Suspense } from 'react'
import AuroraBackground from './components/AuroraBackground'
import CursorGlow from './components/CursorGlow'

const Scene3D = lazy(() => import('./components/Scene3D'))
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Merlin from './components/Merlin'
import OncoNourish from './components/OncoNourish'
import Ecosystem from './components/Ecosystem'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <AuroraBackground />
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <CursorGlow />
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Merlin />
        <OncoNourish />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
