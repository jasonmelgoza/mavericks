import * as React from "react";

export default function SvgArrowRight(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m23 12 .707-.707a1 1 0 0 1 0 1.414L23 12ZM1 13a1 1 0 1 1 0-2v2Zm13.293-8.293a1 1 0 0 1 1.414-1.414l-1.414 1.414Zm1.414 16a1 1 0 0 1-1.414-1.414l1.414 1.414ZM23 13H1v-2h22v2Zm-7.293-9.707 8 8-1.414 1.414-8-8 1.414-1.414Zm8 9.414-8 8-1.414-1.414 8-8 1.414 1.414Z"
        fill="currentColor"
      />
    </svg>
  );
}
