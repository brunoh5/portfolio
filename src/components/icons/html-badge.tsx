import { ComponentProps } from 'react'

export function HTMLBadge(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={38}
      height={42}
      viewBox="0 0 38 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.89 0l3.371 37.8L19.386 42l15.165-4.205L37.927 0H.89zm29.7 12.364H12.85l.423 4.748H30.17l-1.273 14.233-9.51 2.636-9.498-2.636-.648-7.282h4.654l.33 3.702 5.164 1.39.01-.002 5.166-1.394.536-6.01H9.033L7.783 7.727h23.224l-.417 4.636z"
        fill="url(#paint0_linear_14_60)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_60"
          x1={19.4087}
          y1={0}
          x2={19.4087}
          y2={42}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFDFD" />
          <stop offset={1} stopColor="#fff" stopOpacity={0.18} />
        </linearGradient>
      </defs>
    </svg>
  )
}
