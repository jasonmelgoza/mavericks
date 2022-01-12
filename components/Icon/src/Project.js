import * as React from "react";

export default function SvgProject(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.553 1.106a1 1 0 01.894 0l10 5a1 1 0 010 1.788l-10 5a1 1 0 01-.894 0l-10-5a1 1 0 010-1.788l10-5zM4.236 7L12 10.882 19.764 7 12 3.118 4.236 7z"
        fill="currentColor"
      />
      <path
        d="M1.106 16.553a1 1 0 011.341-.447L12 20.882l9.553-4.776a1 1 0 11.894 1.788l-10 5a1 1 0 01-.894 0l-10-5a1 1 0 01-.447-1.341z"
        fill="currentColor"
      />
      <path
        d="M2.447 11.106a1 1 0 10-.894 1.788l10 5a1 1 0 00.894 0l10-5a1 1 0 10-.894-1.788L12 15.882l-9.553-4.776z"
        fill="currentColor"
      />
    </svg>
  );
}
