import { type SVGProps } from "react";
import React from "react";

export default function SuccessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-testid="icon"
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      {...props}
    >
      <title></title>
      <g fill="none" fillRule="nonzero">
        <path d="M0 0h56v56H0z" />
        <path
          fill="currentColor"
          d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52 4 41.255 4 28 14.745 4 28 4Zm0 3C16.402 7 7 16.402 7 28s9.402 21 21 21 21-9.402 21-21S39.598 7 28 7Zm8.94 13.94a1.5 1.5 0 0 1 2.12 2.12l-14 14a1.5 1.5 0 0 1-2.12 0l-7-7a1.5 1.5 0 0 1 2.12-2.12L24 33.878Z"
        />
      </g>
    </svg>
  );
}
