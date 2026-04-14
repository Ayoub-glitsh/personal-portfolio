import { useTheme } from '../theme/ThemeProvider'

export const NEW_SUN_PATH =
  'M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1458514 5 5 8.1458514 5 12 C 5 15.854149 8.1458514 19 12 19 C 15.854149 19 19 15.854149 19 12 C 19 8.1458514 15.854149 5 12 5 z M 12 7 C 14.773268 7 17 9.2267316 17 12 C 17 14.773268 14.773268 17 12 17 C 9.2267316 17 7 14.773268 7 12 C 7 9.2267316 9.2267316 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z'

export const MOON_PATH =
  'M227.89,148.89A8,8,0,0,1,216,144a72,72,0,0,0-72-72,8,8,0,0,1-4.89-15.89,88,88,0,1,1,88.78,72.78Z'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle group absolute right-14 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-transparent transition-colors md:right-20 md:top-8"
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
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          fill="currentColor"
          viewBox="0 0 24 24"
          className="relative z-10 text-gray-200 animate-[spin_4s_linear_infinite]"
          aria-hidden
        >
          <path d={NEW_SUN_PATH} />
        </svg>
      ) : (
        <img
          src="/icons8-symbole-de-la-lune-48.png"
          alt="Moon"
          width={26}
          height={26}
          className="relative z-10 transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
          aria-hidden
        />
      )}
    </button>
  )
}
