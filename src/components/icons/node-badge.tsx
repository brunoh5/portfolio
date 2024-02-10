import { ComponentProps } from 'react'

export function NodeBadge(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={43}
      height={42}
      viewBox="0 0 43 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.615 39.378c-.156.082-.143.108.007.032a.406.406 0 00.124-.08c0-.027 0-.027-.131.048zm.315-.171c-.075.062-.075.062.014.02a.325.325 0 00.09-.06c0-.036-.021-.028-.104.04zm.205-.123c-.075.061-.075.061.014.02a.323.323 0 00.09-.062c0-.033-.022-.027-.104.042zm.207-.123c-.075.062-.075.062.012.02.048-.026.09-.054.09-.062 0-.032-.022-.026-.102.043zm.28-.185c-.144.096-.193.158-.062.09.088-.054.237-.172.211-.172-.056.02-.104.056-.15.082zM20.07.01c-.095.006-.383.032-.635.053C13.466.604 7.882 3.817 4.342 8.767A20.775 20.775 0 00.636 17.94c-.17 1.155-.19 1.496-.19 3.062 0 1.565.02 1.9.19 3.056 1.143 7.89 6.755 14.512 14.362 16.967 1.369.437 2.803.739 4.437.924.636.068 3.383.068 4.018 0 2.824-.315 5.209-1.012 7.569-2.216.362-.183.43-.232.382-.273a446.926 446.926 0 01-3.425-4.587l-3.356-4.532-4.203-6.228a545.416 545.416 0 00-4.238-6.227c-.015 0-.033 2.768-.041 6.144-.014 5.913-.014 6.153-.09 6.29a.75.75 0 01-.361.377c-.13.061-.247.074-.868.074h-.71l-.185-.115a.78.78 0 01-.273-.3l-.09-.186.007-8.23.015-8.232.13-.164a.989.989 0 01.3-.245c.172-.083.24-.096.95-.096.834 0 .972.033 1.19.273a790.962 790.962 0 015.066 7.629c2.728 4.137 6.453 9.782 8.284 12.551l3.33 5.04.163-.11a21.45 21.45 0 004.312-3.786 20.916 20.916 0 004.944-10.733c.17-1.155.19-1.498.19-3.062 0-1.566-.02-1.9-.19-3.056C41.112 10.06 35.5 3.437 27.893.981a22.289 22.289 0 00-4.368-.915c-.398-.04-3.112-.09-3.453-.054L20.07.01zm8.593 12.701a.819.819 0 01.416.478c.036.11.042 2.393.036 7.534l-.015 7.381-1.298-1.995-1.306-1.996v-5.36c0-3.473.015-5.421.033-5.517a.88.88 0 01.41-.519c.164-.082.227-.089.876-.089.608 0 .712.007.848.083z"
        fill="url(#paint0_linear_14_59)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_59"
          x1={21.4453}
          y1={0}
          x2={21.4453}
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
