import Reveal from './Reveal'
import Logo3D from './Logo3D'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <Logo3D size={520} />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-teal mb-6">
            Ready when you are
          </p>
          <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] text-balance text-text">
            Let&rsquo;s put evidence-grade AI to work for your brand.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg text-text-dim leading-relaxed">
            Whether it&rsquo;s Merlin AI for medical information, or OncoNourish for
            patient nutrition — we&rsquo;ll show you how it runs on real cases.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href="mailto:blessy.babychan@onealphamed.com"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lime via-green to-blue px-8 py-4 font-mono text-[13px] uppercase tracking-wide text-void transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-12px_rgba(30,194,122,0.55)]"
            >
              Request a demo
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <span className="font-mono text-sm text-text-dim/70">blessy.babychan@onealphamed.com</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
