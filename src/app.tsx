import { ProjectCard } from './components/project-card'
import {
  HTMLBadge,
  CssBadge,
  JavascriptBadge,
  NodeBadge,
  ReactBadge,
  Github,
} from './components/icons'
import { Rocketseat } from './components/icons/rocketseat'

import { Mail } from 'lucide-react'
import { LinkedIn } from './components/icons/linked-in'

export function App() {
  return (
    <>
      <header className="bg-stone-900">
        <div className="max-w-screen-md mx-auto flex items-center justify-between h-20">
          <h1>Bruno Henrique</h1>
          <div className="flex items-center justify-center gap-4">
            <a href="#home">Home</a>
            <a href="#projects">Projetos</a>
            <a href="experience">Experiência</a>
            <a href="#contact">Contato</a>
          </div>
        </div>
      </header>

      <main className="flex flex-col mx-auto p-5 max-w-screen-md items-center mt-16">
        <div className="space-y-10 text-center" id="home">
          <div className="space-y-10">
            <div className="flex items-center justify-center">
              <div className="size-56 bg-gradient-to-br from-orange-600  via-red-400 to-purple-600 rounded-full overflow-hidden relative">
                <div className="overflow-hidden size-48">
                  <img
                    src=""
                    alt="profile"
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            </div>

            <p className="mt-11 font-extrabold text-6xl">
              I do code and make content{' '}
              <span className="bg-gradient-to-br from-orange-600  via-red-400 to-purple-600 inline-block text-transparent bg-clip-text">
                about it
              </span>
            </p>
          </div>

          <p className="font-light text-lg text-slate-300 text-justify">
            I am a seasoned full-stack software engineer with over 8 years of
            professional experience, specializing in backend development. My
            expertise lies in crafting robust and scalable SaaS-based
            architectures on the Amazon AWS platform.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button className="text-black bg-white p-2 rounded-full">
              Get in touch
            </button>
            <button className="ring-2 ring-white p-2 rounded-full">
              Download CV
            </button>
          </div>
        </div>

        <div className="space-y-12 mt-20">
          <h2 className="uppercase text-slate-300 text-center">
            Experiência Com
          </h2>
          <div className="flex items-center justify-center gap-4">
            <HTMLBadge />
            <CssBadge />
            <JavascriptBadge />
            <NodeBadge />
            <ReactBadge />
          </div>
        </div>

        <div
          className="mt-24 flex items-center justify-center flex-col gap-7"
          id="projects"
        >
          <h2 className="bg-gradient-to-r from-orange-500 to-orange-700 inline-block text-transparent bg-clip-text uppercase font-extrabold text-3xl text-center">
            Projetos
          </h2>

          <div className="grid grid-cols-2 gap-8">
            <ProjectCard />
          </div>
        </div>

        <div
          className="mt-24 flex items-center justify-center flex-col gap-7 w-full"
          id="experience"
        >
          <h2 className="bg-gradient-to-r from-blue-400 to-blue-600 inline-block text-transparent bg-clip-text uppercase font-extrabold text-3xl text-center">
            Experiência
          </h2>

          <div className="space-y-3 w-full">
            <div className="space-y-2">
              <div className="flex items-center justify-between ">
                <div className="flex items-center justify-start gap-2">
                  <Rocketseat />
                  <p className="text-xl font-bold">
                    Curso de backend com NodeJS na Rocketseat
                  </p>
                </div>
                <p className="text-slate-300 text-sm">2023 - Present</p>
              </div>

              <p className="text-slate-300 text-sm">
                Neste curso foi apresentado os fundamentos do NodeJS, o uso de
                query builder e ORM, sendo o mais focado PrismaORM juntamente
                com o PostgreSQL, API feitas em REST usando FastifyJS,
                arquitetura SOLID com TDD e CI/CD e um aplicação feita usando
                DDD
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-stone-900 mt-12" id="contact">
        <div className="max-w-screen-md mx-auto px-5 py-10 space-y-8">
          <h2 className="font-bold text-2xl">Contato</h2>
          <p className="font-light text-sm text-slate-300">
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies{' '}
          </p>

          <div className="flex items-center justify-start gap-2">
            <Mail size={16} />
            <a
              href="mailto:brunohenriquesantos272@gmail.com"
              className="font-semibold text-sm"
            >
              brunohenriquesantos272@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-start gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/brunoh5/"
              rel="noreferrer"
            >
              <LinkedIn size={24} />
            </a>

            <a
              target="_blank"
              href="https://github.com/brunoh5"
              rel="noreferrer"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
