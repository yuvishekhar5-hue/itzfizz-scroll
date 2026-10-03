// Compact sedan, inline SVG. Wheels (.w1/.w2) rotate around fixed axle points.
export default function Car() {
  return (
    <svg
      className="car absolute left-0 bottom-[calc(14vh+3px)] w-[min(62vw,480px)]"
      viewBox="0 0 460 148"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7f9fb" />
          <stop offset=".6" stopColor="#cfd5de" />
          <stop offset="1" stopColor="#8c95a3" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a323c" />
          <stop offset="1" stopColor="#0d1115" />
        </linearGradient>
        <g id="wheel">
          <circle r="27" fill="#101216" />
          <circle r="19" fill="#d5dbe3" />
          <circle r="16" fill="#12151a" />
          <g stroke="#d5dbe3" strokeWidth="5" strokeLinecap="round">
            {[0, 72, 144, 216, 288].map((a) => (
              <path key={a} d="M0 0V-14" transform={`rotate(${a})`} />
            ))}
          </g>
          <circle r="5" fill="#c6ff3d" />
        </g>
      </defs>

      <path d="M10 114 L10 96 Q12 88 30 86 L112 80 L150 56 Q160 46 190 44 L292 44 Q316 46 332 60 L352 76 L420 82 Q444 86 449 100 L450 114 Z" fill="url(#body)" />
      <path d="M159 60 Q166 52 190 51 L222 51 L222 77 L128 79 Z" fill="url(#glass)" />
      <path d="M232 51 L290 51 Q310 53 324 64 L338 77 L232 77 Z" fill="url(#glass)" />
      <path d="M228 80 L228 108" stroke="#8c95a3" strokeWidth="2" />
      <path d="M240 86 L256 86" stroke="#6b7480" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 102 L436 102" stroke="#c6ff3d" strokeWidth="3" />
      <path d="M432 90 L448 96" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <path d="M10 94 L22 92" stroke="#ff3b4e" strokeWidth="5" strokeLinecap="round" />

      <circle cx="105" cy="120" r="33" fill="#0b0d10" />
      <circle cx="355" cy="120" r="33" fill="#0b0d10" />

      <g className="w1"><use href="#wheel" x="105" y="120" /></g>
      <g className="w2"><use href="#wheel" x="355" y="120" /></g>
    </svg>
  );
}
