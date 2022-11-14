import * as React from 'react'

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
        d="M16 3a1 1 0 0 1 1 1v3h-2V5.25a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V7H7V4a1 1 0 0 1 1-1h8Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 10a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9Zm-2.5 0a.5.5 0 0 1 .5.5V12H5v-1.5a.5.5 0 0 1 .5-.5h13ZM10 14H5v4.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V14h-5v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1Z"
        fill="currentColor"
      />
    </svg>
  )
}
