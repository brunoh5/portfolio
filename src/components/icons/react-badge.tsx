import { ComponentProps } from 'react'

export function ReactBadge(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={48}
      height={42}
      viewBox="0 0 48 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.317 16.873c2.252 0 4.088 1.834 4.088 4.127 0 2.184-1.836 4.04-4.088 4.04-2.251 0-4.087-1.856-4.087-4.04 0-2.293 1.836-4.127 4.087-4.127zm-10.12 21.596c1.376.83 4.393-.437 7.869-3.712a52.89 52.89 0 01-3.301-4.149 49.676 49.676 0 01-5.247-.786c-1.114 4.673-.7 7.883.678 8.647zm1.551-12.534l-.634-1.114c-.24.634-.48 1.267-.634 1.878.59.131 1.246.24 1.924.35l-.656-1.114zm14.297-1.66L31.815 21l-1.77-3.275c-.656-1.158-1.355-2.184-1.99-3.21-1.18-.066-2.426-.066-3.738-.066-1.311 0-2.557 0-3.738.066-.634 1.026-1.333 2.052-1.989 3.21L16.82 21l1.77 3.275c.656 1.158 1.355 2.184 1.99 3.21 1.18.066 2.426.066 3.738.066 1.311 0 2.557 0 3.738-.066.634-1.026 1.333-2.052 1.989-3.21zM24.317 9.601c-.415.48-.852.983-1.29 1.573h2.58c-.437-.59-.874-1.092-1.29-1.573zm0 22.797c.416-.48.853-.982 1.29-1.572h-2.58c.438.59.875 1.092 1.29 1.572zm10.1-28.867c-1.355-.83-4.372.437-7.848 3.712a52.902 52.902 0 013.301 4.149c1.793.175 3.563.437 5.247.786 1.114-4.673.7-7.883-.7-8.647zm-1.53 12.534l.634 1.114c.24-.634.48-1.267.634-1.878-.59-.131-1.246-.24-1.924-.35l.656 1.114zM36.057.67c3.213 1.835 3.563 6.66 2.207 12.294 5.553 1.638 9.553 4.346 9.553 8.036 0 3.69-4 6.398-9.553 8.036 1.356 5.633 1.006 10.46-2.207 12.294-3.192 1.834-7.542-.262-11.74-4.258-4.197 3.995-8.547 6.092-11.76 4.258-3.192-1.835-3.542-6.66-2.187-12.294C4.819 27.398.819 24.69.819 21c0-3.69 4-6.398 9.553-8.036C9.014 7.33 9.364 2.504 12.556.67c3.213-1.834 7.563.262 11.76 4.259C28.515.932 32.865-1.164 36.057.67zM35.423 21a49.112 49.112 0 011.945 4.935c4.59-1.376 7.17-3.341 7.17-4.935 0-1.594-2.58-3.56-7.17-4.935A49.112 49.112 0 0135.423 21zm-22.21 0a49.112 49.112 0 01-1.946-4.935c-4.59 1.376-7.17 3.341-7.17 4.935 0 1.594 2.58 3.56 7.17 4.935A49.112 49.112 0 0113.212 21zm19.674 4.935l-.656 1.114c.678-.11 1.334-.219 1.924-.35-.153-.611-.394-1.244-.634-1.878l-.634 1.114zm-6.318 8.822c3.476 3.275 6.493 4.542 7.848 3.712 1.4-.764 1.814-3.974.7-8.647-1.684.35-3.454.611-5.247.786a52.89 52.89 0 01-3.3 4.149zM15.75 16.065l.655-1.114c-.678.11-1.334.219-1.924.35.153.611.394 1.244.634 1.878l.634-1.114zm6.317-8.822c-3.476-3.275-6.493-4.542-7.87-3.712-1.377.764-1.792 3.974-.678 8.647a49.676 49.676 0 015.247-.786 52.902 52.902 0 013.3-4.149z"
        fill="url(#paint0_linear_14_62)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_62"
          x1={24.3175}
          y1={0}
          x2={24.3175}
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