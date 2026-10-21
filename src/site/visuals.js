import merlin1440 from '../assets/visuals/merlin-1440.webp'
import merlin720 from '../assets/visuals/merlin-720.webp'
import onco1440 from '../assets/visuals/onconourish-1440.webp'
import onco720 from '../assets/visuals/onconourish-720.webp'
import voice1440 from '../assets/visuals/voice-1440.webp'
import voice720 from '../assets/visuals/voice-720.webp'
import arogya1440 from '../assets/visuals/arogya-1440.webp'
import arogya720 from '../assets/visuals/arogya-720.webp'
import skin1440 from '../assets/visuals/skinscan-1440.webp'
import skin720 from '../assets/visuals/skinscan-720.webp'
import rwe1440 from '../assets/visuals/rwe-1440.webp'
import rwe720 from '../assets/visuals/rwe-720.webp'
import pathview1440 from '../assets/visuals/pathview-1440.webp'
import pathview720 from '../assets/visuals/pathview-720.webp'
import engine1440 from '../assets/visuals/home-engine-1440.webp'
import engine720 from '../assets/visuals/home-engine-720.webp'

const pair = (small, large) => ({ src: small, srcSet: `${small} 720w, ${large} 1440w` })

export const visuals = {
  merlin: pair(merlin720, merlin1440),
  onconourish: pair(onco720, onco1440),
  voice: pair(voice720, voice1440),
  arogya: pair(arogya720, arogya1440),
  skinscan: pair(skin720, skin1440),
  rwe: pair(rwe720, rwe1440),
  pathview: pair(pathview720, pathview1440),
  engine: pair(engine720, engine1440),
}
