import { motion } from 'framer-motion'
import Logo3D from './Logo3D'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-20 md:pt-40 md:pb-24">
      <div className="hero-scan" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-7">
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2.5 self-start rounded-full border border-green/40 bg-void-2/60 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-[7px] w-[7px] animate-blink rounded-full bg-green shadow-[0_0_10px_#1ec27a]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
              Gen&nbsp;AI systems online — Pharma &amp; Healthcare
            </span>
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="font-display text-balance text-[8.5vw] font-medium leading-[1.12] text-text sm:text-4xl md:text-5xl lg:text-[3.4rem]"
          >
            Evidence, encoded.{' '}
            <span className="text-gradient">Intelligence,</span> engineered.
          </motion.h1>

          <motion.p
            {...fade(0.22)}
            className="max-w-[560px] text-[1.1rem] leading-[1.7] text-text-dim text-balance"
          >
            OneAlphaMed AI is India&rsquo;s first generative AI partner built exclusively for
            pharmaceutical and healthcare companies — turning trusted medical evidence into
            products doctors, marketers, and patients actually rely on.
          </motion.p>

          <motion.div {...fade(0.34)} className="flex flex-wrap items-center gap-4">
            <a
              href="#merlin"
              className="rounded-full bg-gradient-to-r from-lime via-teal to-blue px-[30px] py-3.5 text-[15px] font-semibold text-void shadow-[0_0_24px_rgba(30,194,122,0.35)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_36px_rgba(30,194,122,0.55)]"
            >
              Meet Merlin AI →
            </a>
            <a
              href="#onconourish"
              className="rounded-full border border-line bg-void-2/50 px-[30px] py-3.5 text-[15px] font-semibold text-text backdrop-blur-sm transition-all duration-200 hover:-translate-y-[3px] hover:border-green"
            >
              Explore OncoNourish
            </a>
          </motion.div>

          <motion.div {...fade(0.46)} className="mt-5 flex flex-wrap gap-12">
            <div className="flex flex-col gap-1.5">
              <span className="font-display text-base text-text">
                Mumbai · Gurgaon · Jakarta · Dubai · Amsterdam
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-teal">
                Where we operate
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-gradient font-display text-base">15,000+</span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-teal">
                HCPs engaged across programs
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden items-center justify-start lg:flex lg:-ml-4"
        >
          <Logo3D size={330} />
        </motion.div>
      </div>
    </section>
  )
}
