import { ComponentProps } from 'react'

export function CssBadge(props: ComponentProps<'svg'>) {
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
        d="M.372 0l3.366 37.787L18.851 42l15.153-4.227L37.372 0h-37zm30.006 8.658l-1.122 12.588.004.069-.004.155-.799 8.8-.086.783-9.499 2.625-.008.008-9.48-2.642-.643-7.276h4.647l.33 3.7 5.154 1.396 5.17-1.415.547-6.025H13.781l-.092-1.018-.212-2.386-.11-1.28h11.636l.425-4.688H7.698l-.092-1.019-.21-2.387-.111-1.281h23.204l-.111 1.293z"
        fill="url(#paint0_linear_14_61)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_61"
          x1={18.8722}
          y1={0}
          x2={18.8722}
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
