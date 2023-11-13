import * as React from "react";

function MobileMenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="39"
      height="20"
      viewBox="0 0 39 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.175781" width="38.8235" height="3.52941" rx="1.76471" />
      <rect
        x="0.175781"
        y="8.23438"
        width="38.8235"
        height="3.52941"
        rx="1.76471"
      />
      <rect
        x="0.175781"
        y="16.4707"
        width="38.8235"
        height="3.52941"
        rx="1.76471"
      />
    </svg>
  );
}

export default MobileMenuIcon;
