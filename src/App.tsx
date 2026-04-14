import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { DotBackground } from './components/DotBackground'
import { FloatingDock } from './components/FloatingDock'
import { ThemeToggle } from './components/ThemeToggle'

const IMG = (path: string, w = 1080) =>
  `https://iassil.dev/_next/image?url=${encodeURIComponent(path)}&w=${w}&q=75`

const projects = [
  {
    title: 'KeepSync',
    desc: 'KeepSync is a secure cloud storage platform that lets users upload, sync, and access files across devices seamlessly, keeping data safe, organized, and always up to date.',
    image: IMG('/projects/keepsync.png'),
  },
  {
    title: 'DocuAI',
    desc: 'AI-powered document processing and analysis tool. Leverages artificial intelligence to extract, analyze, and interact with document content.',
    image: IMG('/projects/DocuAI.jpg'),
  },
  {
    title: 'Rallyu',
    desc: 'A modern, web-based version of the classic Pong game with real-time multiplayer, responsive controls, and integration with user profiles and match history.',
    image: IMG('/projects/rallyu.jpg'),
  },
  {
    title: 'Qrade',
    desc: 'A web app that scans uploaded PDFs and extracts QR codes from every page automatically.',
    image: 'https://iassil.dev/projects/qrade.svg',
  },
]

const tech = [
  { label: 'C++', icon: 'ci-cpp' },
  { label: 'Java', icon: 'ci-java' },
  { label: 'TypeScript', icon: 'ci-typescript' },
  { label: 'NestJs', icon: 'ci-nestjs' },
  { label: 'Express.js', icon: 'ci-expressjs' },
  { label: 'Fastify', icon: 'ci-fastify' },
  { label: 'Spring Boot', icon: 'ci-spring' },
  { label: 'GraphQL', icon: 'ci-graphql' },
  { label: 'Next.js', icon: 'ci-nextjs' },
  { label: 'React', icon: 'ci-react' },
  { label: 'Framer Motion', icon: 'ci-framer' },
  { label: 'Tailwind CSS', icon: 'ci-tailwindcss' },
  { label: 'MySQL', icon: 'ci-mysql' },
  { label: 'PostgreSQL', icon: 'ci-postgresql' },
  { label: 'Docker', icon: 'ci-docker' },
  { label: 'Prometheus', icon: 'ci-prometheus' },
  { label: 'ELK Stack', icon: 'ci-elastic' },
  { label: 'Figma', icon: 'ci-figma' },
]

const blogs = [
  {
    title: 'Deep Dive Into Docker',
    image:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
  },
  {
    title: 'Spring Boot for Beginners',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
  },
  {
    title: 'RayCasting in C',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    title: 'Computer Networking',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5 },
}

const name = 'Ayoub Aguezar'

function IconButton({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <motion.a
      href={href}
      className="flex cursor-pointer items-center justify-center rounded-sm bg-white/90 px-7 py-3 ring-2 ring-gray-300/90 backdrop-blur-sm duration-200 hover:bg-gray-100 dark:bg-black/30 dark:ring-white/10 dark:hover:bg-black/50"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  )
}

export default function App() {
  return (
    <>
      <DotBackground />
      <FloatingDock />
      <ThemeToggle />
      <div className="relative z-0 mx-auto flex w-full max-w-[720px] flex-col px-5 pb-28">
        <main
          id="main"
          className="relative flex min-h-screen select-none flex-col items-center justify-center gap-12 text-gray-900 dark:text-gray-200"
        >
          <motion.article
            className="flex flex-col items-center justify-center gap-5"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.06 },
              },
            }}
          >
            <div className="relative flex flex-col gap-1">
              <motion.p
                className="text-center text-2xl sm:text-left"
                variants={{
                  hidden: { opacity: 0, x: 10 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.45 }}
              >
                Hi, I&apos;m
              </motion.p>
              <h1 className="cursor-pointer text-center text-5xl font-black tracking-tight sm:text-7xl">
                {name.split('').map((ch, i) => (
                  <motion.span
                    key={`${ch}-${i}`}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    {ch === ' ' ? '\u00a0' : ch}
                  </motion.span>
                ))}
              </h1>
            </div>
            <motion.p
              className="max-w-[90%] text-center text-lg font-light md:max-w-[60%]"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
            >
              Software Engineering Student passionate about creating real-world solutions
            </motion.p>
          </motion.article>

          <motion.section
            className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
            }}
          >
            {[
              { href: '#aboutme', path: 'M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z' },
              { href: '#projects', path: 'M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z' },
              { href: '#devspace', path: 'M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z' },
              { href: '#blogs', path: 'M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,40V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V40a8,8,0,0,1,8-8H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,40Zm-16,8H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z' },
            ].map((item) => (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.5, rotate: 20 },
                  show: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              >
                <IconButton href={item.href}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    className="fill-gray-800 dark:fill-gray-200"
                    viewBox="0 0 256 256"
                    aria-hidden
                  >
                    <path d={item.path} />
                  </svg>
                </IconButton>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            className="flex gap-4"
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.45 }}
          >
            {[
              'M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z',
              'M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z',
              'M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z',
              'M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z',
            ].map((d, i) => (
              <a
                key={i}
                href="#"
                className="cursor-pointer text-gray-800 transition-all duration-300 hover:scale-110 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                aria-label="Social link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="currentColor" viewBox="0 0 256 256">
                  <path d={d} />
                </svg>
              </a>
            ))}
          </motion.section>

          <a href="#aboutme" className="absolute bottom-5 cursor-pointer" aria-label="Scroll to content">
            <img
              src="https://iassil.dev/scrollDown.gif"
              alt=""
              width={50}
              height={90}
              className="dark:invert"
            />
          </a>
        </main>

        <article className="relative mt-20 pt-20 text-gray-900 dark:text-gray-200" id="aboutme">
          <motion.h1
            className="select-none text-2xl font-bold md:text-3xl"
            {...fadeUp}
          >
            About Me
          </motion.h1>
          <motion.p
            className="mt-10 text-justify text-lg leading-relaxed text-gray-800 dark:text-gray-200"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
          >
            Hi, my name is <strong>Ayoub Aguezar</strong>, an aspiring{' '}
            <strong>
              Software Engineering Student at{' '}
              <span className="font-mono-display font-bold">1337</span>
            </strong>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="#529f50"
              className="inline-block align-middle"
              viewBox="0 0 256 256"
              aria-hidden
            >
              <path d="M216,72V176H40V72A16,16,0,0,1,56,56H200A16,16,0,0,1,216,72Z" opacity="0.2" />
              <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z" />
            </svg>{' '}
            who wishes to participate in creating greener and more meaningful digital environments. When it comes to
            using design{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="#4599b5"
              className="inline-block align-middle"
              viewBox="0 0 256 256"
              aria-hidden
            >
              <path d="M224,32c0,32.81-31.64,67.43-58.64,91.05A84.39,84.39,0,0,0,133,90.64C156.57,63.64,191.19,32,224,32Z" opacity="0.2" />
              <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z" />
            </svg>{' '}
            as a means of communication, I follow an approach that is very much inclined towards{' '}
            <span className="m-underline cursor-default select-none transition-colors hover:text-red-500">Minimalism</span>
            ,{' '}
            <span className="cc-underline cursor-default select-none bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 bg-[length:0%_2px] italic hover:bg-clip-text hover:text-transparent">
              Creativity
            </span>
            , and{' '}
            <span className="c-underline cursor-default select-none italic tracking-tighter hover:text-orange-400">
              thoughtfulness
            </span>
            . Learning new things, especially those that are nothing less than challenging for my cognitive abilities
            and that are beneficial to my professional development.{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="#8267e4"
              className="inline-block rotate-12 align-middle"
              viewBox="0 0 256 256"
              aria-hidden
            >
              <path d="M96,64V192a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H88A8,8,0,0,1,96,64Zm96-8H168a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8h24a8,8,0,0,0,8-8V64A8,8,0,0,0,192,56Z" opacity="0.2" />
              <path d="M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.83c0,.06,0,.11,0,.17V192Z" />
            </svg>
          </motion.p>
        </article>

        <article className="relative pt-20 text-gray-900 dark:text-gray-200">
          <motion.h1 className="select-none text-2xl font-bold md:text-3xl" {...fadeUp}>
            Nuggets of Know-How
          </motion.h1>
          <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: 'Software Enginering', sub: '1337 Coding School' },
              { title: 'UX/UI Design', sub: 'Self Learned' },
            ].map((card) => (
              <motion.div
                key={card.title}
                className="flex cursor-pointer flex-col gap-2 rounded-sm bg-white p-6 ring-2 ring-gray-200 transition hover:ring-indigo-400/50 dark:bg-[#191919] dark:ring-white/10 dark:hover:ring-indigo-500/40"
                {...fadeUp}
              >
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-gray-500 dark:text-gray-400">{card.sub}</p>
              </motion.div>
            ))}
          </section>
        </article>

        <article className="relative pt-20 text-gray-900 dark:text-gray-200" id="devspace">
          <motion.h1 className="select-none text-2xl font-bold md:text-3xl" {...fadeUp}>
            My DevSpace
          </motion.h1>
          <section className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tech.map((t) => (
              <motion.div
                key={t.label}
                className="flex h-12 cursor-pointer items-center gap-3 rounded-sm bg-gray-50 px-2 ring-2 ring-red-900/12 transition hover:bg-gray-100 hover:shadow-md hover:ring-indigo-500/50 dark:bg-[#191919] dark:text-gray-300 dark:ring-white/10 dark:backdrop-blur-lg dark:hover:bg-gray-800"
                {...fadeUp}
              >
                <i className={`ci ${t.icon} ci-2xl`} aria-hidden />
                <p className="select-none text-sm">{t.label}</p>
              </motion.div>
            ))}
          </section>
        </article>

        <article className="relative pt-20 text-gray-900 dark:text-gray-200" id="projects">
          <div className="flex items-start justify-between gap-4">
            <motion.h1 className="select-none text-2xl font-bold md:text-3xl" {...fadeUp}>
              Latest Projects
            </motion.h1>
            <motion.button
              type="button"
              className="flex shrink-0 cursor-pointer select-none items-center gap-2 text-sm text-gray-500 hover:underline md:text-base dark:text-gray-400"
              {...fadeUp}
            >
              View all Projects
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </motion.button>
          </div>
          <section className="mt-10 grid w-full grid-cols-1 gap-4 rounded-xl sm:grid-cols-2">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                className="flex cursor-pointer select-none flex-col gap-2 overflow-hidden rounded-xl bg-gray-50 p-4 ring-2 ring-gray-200 transition hover:ring-[#746e9c7a] dark:bg-[#161616] dark:ring-white/10"
                {...fadeUp}
                transition={{ type: 'spring', stiffness: 80, damping: 18 }}
              >
                <div className="hidden overflow-hidden rounded-lg border-2 border-gray-200 dark:border-white/10 sm:flex sm:h-48 sm:items-center sm:justify-center">
                  <img
                    src={p.image}
                    alt=""
                    className="h-full max-h-48 min-h-48 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 py-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">{p.title}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 256 256">
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                    </svg>
                  </div>
                  <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </section>
        </article>

        <article className="relative pb-24 pt-20 text-gray-900 dark:text-gray-200" id="blogs">
          <div className="flex items-start justify-between gap-4">
            <motion.h1 className="select-none text-2xl font-bold md:text-3xl" {...fadeUp}>
              InkSpace
            </motion.h1>
            <motion.span
              className="flex shrink-0 cursor-pointer select-none items-center gap-2 text-sm text-gray-500 hover:underline md:text-base dark:text-gray-400"
              {...fadeUp}
            >
              View all Blogs
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </motion.span>
          </div>
          <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {blogs.map((b) => (
              <motion.div
                key={b.title}
                className="group max-h-70 cursor-pointer select-none overflow-hidden rounded-xl bg-gray-50 p-2 ring-2 ring-gray-200 transition hover:shadow-md hover:ring-[#9c7a6e43] dark:bg-[#161616] dark:ring-white/10"
                {...fadeUp}
              >
                <div className="hidden h-44 overflow-hidden rounded-lg border-2 border-gray-200 dark:border-white/10 sm:flex sm:items-center sm:justify-center">
                  <img src={b.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex w-full items-center justify-between gap-2 p-4 text-lg font-bold">
                  <span className="font-mono-display text-gray-900 transition-colors duration-500 group-hover:text-[var(--color-blog-accent)] dark:text-gray-200">
                    {b.title}
                    <span className="mt-1 block h-0.5 max-w-0 bg-[var(--color-blog-accent)] transition-all duration-500 group-hover:max-w-full" />
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="shrink-0 fill-gray-800 dark:fill-gray-400"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </section>
        </article>

        <footer className="mb-16 mt-8 flex flex-col items-center justify-center gap-5">
          <motion.img
            src="/signature.svg"
            alt="Signature"
            className="h-12 w-auto opacity-90 dark:invert"
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            2026 — Ayoub Aguezar
          </motion.p>
        </footer>
      </div>
    </>
  )
}
