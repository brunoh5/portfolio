import * as Dialog from '@radix-ui/react-dialog'

import { ArrowUpRight, X } from 'lucide-react'

import fintracerCover from '../assets/fintracer.png'
import { Github } from './icons'

export function ProjectCard() {
  return (
    <div className="rounded-2xl bg-stone-900 overflow-hidden">
      <div className="h-60 w-96">
        <img
          src={fintracerCover}
          alt="Aplicação Cover"
          className="w-full h-full object-cover"
        />
      </div>

      <Dialog.Root>
        <Dialog.Trigger className="flex items-center justify-between px-5 py-2 w-full">
          <div className="uppercase font-extrabold text-left">
            <p className="text-xs">Clique aqui e saiba mais</p>
            <p className="text-lg">Fintracer</p>
          </div>

          <ArrowUpRight />
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.DialogOverlay className="inset-0 fixed bg-black/50" />

          <Dialog.Content className="overflow-hidden fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 md:max-w-[640px] w-full md:h-[60vh] bg-stone-900 md:rounded-md flex flex-col outline-none p-5">
            <Dialog.Close className="absolute top-0 right-0 bg-stone-950 p-1.5 text-slate-400 hover:text-slate-100">
              <X className="size-5" />
            </Dialog.Close>

            <div className="space-y-3">
              <Dialog.Title className="text-center uppercase font-extrabold">
                Fintracer
              </Dialog.Title>
              <Dialog.Description className="text-justify">
                O sistema financeiro é uma ferramenta digital que permite aos
                usuários gerenciar suas finanças pessoais de maneira eficiente.
                Ele oferece recursos para rastrear e categorizar gastos e
                receitas, proporcionando uma visão clara da situação financeira
                do usuário.
              </Dialog.Description>
            </div>

            <div className="aspect-auto overflow-hidden mx-auto mt-4">
              <img
                src={fintracerCover}
                alt="Aplicação Cover"
                className="w-full h-full object-fit"
              />
            </div>

            <div className="space-y-2 mt-3">
              <a
                target="_blank"
                href="https://github.com/brunoh5/fintracer"
                rel="noreferrer nofollow"
                className="flex items-center justify-center gap-2 group"
              >
                <Github size={16} />
                <span className="group-hover:text-red-500">Front-end</span>{' '}
              </a>

              <a
                target="_blank"
                href="https://github.com/brunoh5/fintracer-api"
                rel="noreferrer nofollow"
                className="flex items-center justify-center gap-2 group"
              >
                <Github size={16} />
                <span className="group-hover:text-red-500">Backend</span>{' '}
              </a>

              <a
                target="_blank"
                href="https://fintracer.com.br"
                rel="noreferrer nofollow"
                className="group flex justify-center gap-2"
              >
                Acesse o
                <span className="group-hover:text-red-500">
                  Site e crie sua conta
                </span>
              </a>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
