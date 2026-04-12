import { useTheme } from '../theme/ThemeProvider'

export const SUN_PATH =
  'M128,64a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176ZM128,40a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V32A8,8,0,0,0,128,40Zm0,176a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V224A8,8,0,0,0,128,216ZM192,76.69a8,8,0,0,0,11.31-11.31l-11.31-11.31a8,8,0,0,0-11.32,11.32ZM75.31,192l11.31-11.32A8,8,0,1,0,75.31,180.68L64,192A8,8,0,0,0,75.31,203.31ZM75.31,75.31,64,64A8,8,0,0,1,75.31,52.69L86.63,64A8,8,0,0,1,75.31,75.31ZM203.31,192a8,8,0,0,1-11.31,0l-11.32-11.31a8,8,0,0,1,11.32-11.32L203.31,180.68A8,8,0,0,1,203.31,192ZM40,128H24a8,8,0,0,0,0,16H40a8,8,0,0,0,0-16Zm176,0H200a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z'

export const MOON_PATH =
  'M227.89,148.89A8,8,0,0,1,216,144a72,72,0,0,0-72-72,8,8,0,0,1-4.89-15.89,88,88,0,1,1,88.78,72.78Z'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle group fixed right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300/70 bg-white/80 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-black/40 dark:shadow-none md:right-8 md:top-8"
      aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
    >
      <span
        className="pointer-events-none absolute inset-[-14px] scale-[0.55] rounded-full opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.18) 38%, transparent 68%)',
        }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-[-6px] scale-75 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
        style={{
          backgroundSize: '10px 10px',
          backgroundImage:
            'radial-gradient(rgb(59 130 246 / 0.4) 1px, transparent 1px)',
          maskImage: 'radial-gradient(circle 44px at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle 44px at 50% 50%, black 35%, transparent 100%)',
        }}
        aria-hidden
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={26}
        fill="currentColor"
        viewBox="0 0 256 256"
        className={`relative z-10 transition-transform duration-700 ease-out group-hover:rotate-[360deg] ${isDark ? 'text-amber-400' : 'text-slate-700'}`}
        aria-hidden
      >
        <path d={isDark ? SUN_PATH : MOON_PATH} />
      </svg>
    </button>
  )
}
