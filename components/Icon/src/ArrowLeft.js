import * as React from "react";

export default function SvgArrowLeft(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m1 12-.707-.707a1 1 0 0 0 0 1.414L1 12Zm22 1a1 1 0 1 0 0-2v2ZM9.707 4.707a1 1 0 0 0-1.414-1.414l1.414 1.414Zm-1.414 16a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM1 13h22v-2H1v2Zm7.293-9.707-8 8 1.414 1.414 8-8-1.414-1.414Zm-8 9.414 8 8 1.414-1.414-8-8-1.414 1.414Z"
        fill="currentColor"
      />
    </svg>
  );
}
