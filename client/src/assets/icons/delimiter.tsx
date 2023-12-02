import * as React from "react";

function Delimiter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="30"
      height="1"
      viewBox="0 0 30 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="30" height="1" fill="black" />
    </svg>
  );
}

export default Delimiter;
