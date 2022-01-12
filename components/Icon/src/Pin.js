import * as React from "react"

export default function SvgPin(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 10.897C19 15.31 12 20 12 20s-7-4.69-7-9.103C5 7.034 8.289 4 12 4s7 3.034 7 6.897z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
