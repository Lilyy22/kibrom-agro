/** Vector brand lockup — scales cleanly for nav, footer, hero. */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        width="64"
        height="64"
        rx="14"
        className="fill-primary"
      />
      <path
        d="M46 43c-4.5-11-15-21-29-26 5 14 15 26 29 32v-6Z"
        className="fill-cream opacity-95"
      />
      <path
        d="M31 42c8-13 18-21 31-26-8 17-21 31-31 41V42Z"
        className="fill-leaf/90"
      />
      <ellipse
        cx="22"
        cy="24"
        rx="9"
        ry="14"
        transform="rotate(-25 22 24)"
        className="fill-cream opacity-85"
      />
    </svg>
  )
}
