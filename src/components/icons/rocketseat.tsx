import { ComponentProps } from 'react'

interface SvgProps extends ComponentProps<'svg'> {
  size?: number
}

/**
 *
 * @param size
 * @returns choose the icon width and height, default 32
 */

export function Rocketseat({ size = 32, ...props }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 35 24"
      fill="none"
      {...props}
    >
      <path
        d="M18.46 18.87C11.724 24.624 6.94 25.03 4.49 22.58c-2.257-2.257-.385-7.918 4.177-13.51L0 .405h5.539l8.61 8.61C8.715 14.48 5.547 20.3 7.185 21.939c1.356 1.358 5.53-.524 10.034-4.31l1.24 1.241zM34.26 23.595h-5.538l-8.61-8.61C25.545 9.521 28.713 3.7 27.078 2.063c-1.357-1.359-5.535.526-10.039 4.31l-1.24-1.24C22.537-.623 27.322-1.03 29.77 1.421c2.257 2.257.388 7.918-4.176 13.509l8.668 8.665h-.002z"
        fill="#F7F7FA"
      />
    </svg>
  )
}
