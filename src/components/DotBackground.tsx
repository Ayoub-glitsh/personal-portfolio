import { useEffect, useRef, type CSSProperties } from 'react'
import { useTheme } from '../theme/ThemeProvider'

export function DotBackground() {
  const { theme } = useTheme()
  const ref = useRef<HTMLDivElement>(null)
  const isDark = theme === 'dark'

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 100
      const y = ((e.clientY - r.top) / r.height) * 100
      el.style.setProperty('--mouse-x', `${x}%`)
      el.style.setProperty('--mouse-y', `${y}%`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed inset-0 z-[-10] ${isDark ? 'bg-[#121212]' : 'bg-[#f4f4f5]'}`}
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          '--dot-color': isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)',
        } as CSSProperties
      }
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: '20px 20px',
          backgroundImage: 'radial-gradient(var(--dot-color) 1px, transparent 1px)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: '20px 20px',
          backgroundImage:
            'radial-gradient(rgb(59 130 246 / 0.5) 0.8px, transparent 1px)',
          maskImage:
            'radial-gradient(circle 160px at var(--mouse-x) var(--mouse-y), black 80%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle 150px at var(--mouse-x) var(--mouse-y), black 80%, transparent 100%)',
          transition: 'mask-position 0.1s, -webkit-mask-position 0.1s',
        }}
      />
    </div>
  )
}
