import { lazy, Suspense, useState } from 'react'
import AuroraBackground from './components/AuroraBackground'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Merlin from './components/Merlin'
import OncoNourish from './components/OncoNourish'
import VoiceAgent from './components/VoiceAgent'
import Arogya from './components/Arogya'
import Ecosystem from './components/Ecosystem'
import Journey from './components/Journey'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'

const Scene3D = lazy(() => import('./components/Scene3D'))

function App() {
  const [demoOpen, setDemoOpen] = useState(false)
  const openDemo = () => setDemoOpen(true)

  return (
    <>
      <AuroraBackground />
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <CursorGlow />
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <Nav onRequestDemo={openDemo} />
      <main className="relative z-10">
        <Hero />
        <Merlin />
        <OncoNourish />
        <VoiceAgent />
        <Arogya />
        <Ecosystem />
        <Journey />
        <CTA onRequestDemo={openDemo} />
      </main>
      <Footer />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  )
}

export default App
