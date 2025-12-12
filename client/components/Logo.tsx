export function LaundrifySVG({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* T-shirt outline */}
      <path
        d="M40 40L50 60L50 140C50 150 55 160 65 160L135 160C145 160 150 150 150 140L150 60L160 40C160 40 140 35 100 35C60 35 40 40 40 40Z"
        stroke="white"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sleeves */}
      <path
        d="M50 70L30 50"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M150 70L170 50"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Yin-yang circle outline */}
      <circle cx="100" cy="100" r="38" stroke="white" strokeWidth="5" fill="none" />

      {/* Yin-yang symbol */}
      <circle cx="100" cy="75" r="15" fill="white" />
      <circle cx="100" cy="125" r="15" fill="white" />
      <circle cx="100" cy="75" r="6" fill="none" stroke="white" strokeWidth="0" />
      <circle cx="100" cy="125" r="6" fill="none" stroke="white" strokeWidth="0" />

      {/* Center dividing line */}
      <path
        d="M100 62V138"
        stroke="white"
        strokeWidth="3"
        opacity="0.3"
      />

      {/* Yellow/Gold accent bar on left */}
      <rect x="20" y="110" width="20" height="40" rx="4" fill="#FBBF24" />
    </svg>
  );
}
