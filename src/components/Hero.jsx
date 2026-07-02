import { motion } from 'framer-motion'
import Logo3D from './Logo3D'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="hero-scan" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            {...fade(0)}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-void-2/60 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.22em] text-teal backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-blink rounded-full bg-green shadow-[0_0_8px_rgba(30,194,122,0.9)]" />
            Gen&nbsp;AI systems online — Pharma &amp; Healthcare
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="font-display text-balance text-[8.5vw] font-medium leading-[1.1] tracking-tight text-text sm:text-4xl md:text-5xl lg:text-[3.4rem]"
          >
            Evidence, encoded.
            <br />
            <span className="text-gradient">Intelligence,</span> engineered.
          </motion.h1>

          <motion.p
            {...fade(0.22)}
            className="mt-9 max-w-xl text-lg leading-relaxed text-text-dim text-balance md:text-xl"
          >
            OneAlphaMed AI is India&rsquo;s first generative AI partner built exclusively for
            pharmaceutical and healthcare companies — turning trusted medical evidence into
            products doctors, marketers, and patients actually rely on.
          </motion.p>

          <motion.div {...fade(0.34)} className="mt-11 flex flex-wrap items-center gap-5">
            <a
              href="#merlin"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-lime via-green to-blue px-7 py-3.5 font-mono text-[13px] uppercase tracking-wide text-void transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-12px_rgba(30,194,122,0.55)]"
            >
              Meet Merlin AI
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#onconourish"
              className="inline-flex items-center gap-3 rounded-full border border-line px-7 py-3.5 font-mono text-[13px] uppercase tracking-wide text-text-dim transition-colors duration-300 hover:border-teal hover:text-teal"
            >
              Explore OncoNourish
            </a>
          </motion.div>

          <motion.div
            {...fade(0.46)}
            className="mt-20 grid gap-8 border-t border-line pt-8 sm:grid-cols-[1.6fr_1fr]"
          >
            {[
              ['Mumbai · Gurgaon · Jakarta · Dubai · Amsterdam', 'Where we operate'],
              ['15,000+', 'HCPs engaged across programs'],
            ].map(([big, small]) => (
              <div key={small}>
                <div className="font-display text-sm text-text md:text-base">{big}</div>
                <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-text-dim/70">
                  {small}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center"
        >
          <Logo3D size={340} className="mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}
