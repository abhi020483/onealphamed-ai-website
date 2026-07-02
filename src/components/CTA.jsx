import Reveal from './Reveal'
import icon from '../assets/alphamed-icon.png'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-[140px]">
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      />
      <div className="relative mx-auto flex max-w-[800px] flex-col items-center gap-7 px-6 text-center md:px-10">
        <Reveal className="flex flex-col items-center gap-7">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-green">
            Ready when you are
          </span>
          <h2 className="font-display text-3xl font-medium leading-[1.2] text-balance text-text md:text-[2.6rem]">
            Let&rsquo;s put <span className="text-gradient">evidence-grade AI</span> to work
            for your brand.
          </h2>
          <a
            href="mailto:blessy.babychan@onealphamed.com"
            className="rounded-full bg-gradient-to-r from-lime via-teal to-blue px-9 py-4 text-base font-semibold text-void shadow-[0_0_28px_rgba(30,194,122,0.4)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_44px_rgba(30,194,122,0.6)]"
          >
            Request a demo →
          </a>
          <span className="font-mono text-[11.5px] tracking-[0.15em] text-text-dim">
            blessy.babychan@onealphamed.com
          </span>
        </Reveal>
      </div>
    </section>
  )
}
