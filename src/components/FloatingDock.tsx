import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../theme/ThemeProvider'
import { MOON_PATH, SUN_PATH } from './ThemeToggle'

const SCROLL_THRESHOLD = 96

const ARROW_UP_RIGHT =
  'M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z'

const DOTS_VERTICAL =
  'M128,96a16,16,0,1,1-16-16A16,16,0,0,1,128,96Zm0,40a16,16,0,1,1-16-16A16,16,0,0,1,128,136Zm0,40a16,16,0,1,1-16-16A16,16,0,0,1,128,176Z'

const navLinks = [
  { href: '#aboutme', label: 'À propos' },
  { href: '#devspace', label: 'DevSpace' },
  { href: '#projects', label: 'Projets' },
  { href: '#blogs', label: 'Blog' },
]

function DockIconButton({
  children,
  onClick,
  href,
  label,
}: {
  children: ReactNode
  onClick?: () => void
  href?: string
  label: string
}) {
  const className =
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10'

  if (href) {
    return (
      <a href={href} className={className} aria-label={label}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={className} aria-label={label}>
      {children}
    </button>
  )
}

export function FloatingDock() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])

  return (
    <motion.div
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 justify-center md:bottom-8"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 24,
      }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div
        className="flex items-center gap-0.5 rounded-full border border-gray-200/80 bg-white/90 px-2 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#1c1c1c]/95 dark:shadow-[0_8px_32px_rgb(0,0,0,0.45)]"
        ref={menuRef}
      >
        <DockIconButton href="#main" label="Accueil">
          <span
            className="relative flex h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.75)] dark:bg-amber-400 dark:shadow-[0_0_14px_rgba(251,191,36,0.85)]"
            aria-hidden
          />
        </DockIconButton>

        <DockIconButton onClick={scrollToTop} label="Haut de page">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="currentColor"
            viewBox="0 0 256 256"
            className="-rotate-45"
            aria-hidden
          >
            <path d={ARROW_UP_RIGHT} />
          </svg>
        </DockIconButton>

        <button
          type="button"
          onClick={toggleTheme}
          className="group/theme relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
          aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
        >
          <span
            className="pointer-events-none absolute inset-0 scale-50 rounded-full opacity-0 transition-all duration-300 group-hover/theme:scale-100 group-hover/theme:opacity-100"
            style={{
              background:
                'radial-gradient(circle at center, rgba(59, 130, 246, 0.45) 0%, transparent 70%)',
            }}
            aria-hidden
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="currentColor"
            viewBox="0 0 256 256"
            className={`relative z-10 transition-transform duration-700 ease-out group-hover/theme:rotate-[360deg] ${isDark ? 'text-amber-400' : 'text-slate-700'}`}
            aria-hidden
          >
            <path d={isDark ? SUN_PATH : MOON_PATH} />
          </svg>
        </button>

        <div className="relative">
          <DockIconButton onClick={() => setMenuOpen((o) => !o)} label="Menu sections">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              fill="currentColor"
              viewBox="0 0 256 256"
              aria-hidden
            >
              <path d={DOTS_VERTICAL} />
            </svg>
          </DockIconButton>
          {menuOpen ? (
            <div
              className="absolute bottom-full left-1/2 mb-3 w-44 -translate-x-1/2 rounded-xl border border-gray-200/90 bg-white/95 py-1 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-[#252525]/98"
              role="menu"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}
