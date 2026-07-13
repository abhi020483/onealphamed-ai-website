import { useTheme } from '../ThemeContext'
import lockupLight from '../assets/alphamed-lockup-light.png'
import lockupDark from '../assets/alphamed-lockup-dark.png'

export default function Footer() {
  const { theme } = useTheme()
  const lockup = theme === 'dark' ? lockupLight : lockupDark

  return (
    <footer className="relative border-t border-line py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <img src={lockup} alt="AlphaMed.Ai — Innovations in Healthcare" className="h-10 w-auto self-start md:self-auto" />
        <p className="font-mono text-[13px] uppercase tracking-wide text-text-dim/60">
          Mumbai · Gurgaon · Jakarta · Dubai · Amsterdam
        </p>
        <p className="font-mono text-[13px] text-text-dim/50">
          © {new Date().getFullYear()} OneAlphaMed AI. Evidence, encoded.
        </p>
      </div>
    </footer>
  )
}
