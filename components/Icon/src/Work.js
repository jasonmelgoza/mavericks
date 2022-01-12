import * as React from "react"

export default function SvgWork(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 14.255A23.93 23.93 0 0112 16c-3.183 0-6.22-.62-9-1.745M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2h8zM5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
