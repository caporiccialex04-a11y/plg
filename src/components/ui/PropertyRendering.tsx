import { cn } from "@/lib/cn";

type PropertyRenderingProps = {
  caption?: string;
  className?: string;
  compact?: boolean;
};

export function PropertyRendering({
  caption = "Artist rendering — The Meridian, east elevation",
  className,
  compact = false,
}: PropertyRenderingProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-gold/25 bg-navy-deep",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,163,90,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(196,163,90,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <svg
        viewBox="0 0 720 480"
        className={cn("relative w-full", compact ? "h-56" : "h-[22rem] md:h-[28rem]")}
        role="img"
        aria-label={caption}
      >
        <defs>
          <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#153056" />
            <stop offset="100%" stopColor="#071322" />
          </linearGradient>
          <linearGradient id="glass" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#c4a35a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1a7a6d" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <rect width="720" height="480" fill="url(#sky)" />
        <rect x="0" y="390" width="720" height="90" fill="#0b1d36" />
        <rect x="40" y="372" width="640" height="18" fill="#c4a35a" opacity="0.35" />
        <g fill="#0b1d36" stroke="#c4a35a" strokeWidth="1.5">
          <rect x="86" y="168" width="210" height="222" />
          <rect x="296" y="112" width="168" height="278" />
          <rect x="464" y="150" width="172" height="240" />
        </g>
        <g fill="url(#glass)" stroke="#dcc48a" strokeWidth="0.75">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 4 }).map((__, col) => (
              <rect
                key={`a-${row}-${col}`}
                x={104 + col * 46}
                y={188 + row * 36}
                width="34"
                height="24"
              />
            )),
          )}
          {Array.from({ length: 7 }).map((_, row) =>
            Array.from({ length: 3 }).map((__, col) => (
              <rect
                key={`b-${row}-${col}`}
                x={316 + col * 48}
                y={128 + row * 34}
                width="36"
                height="22"
              />
            )),
          )}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 3 }).map((__, col) => (
              <rect
                key={`c-${row}-${col}`}
                x={484 + col * 48}
                y={168 + row * 34}
                width="36"
                height="22"
              />
            )),
          )}
        </g>
        <rect x="328" y="318" width="104" height="72" fill="#1a7a6d" opacity="0.55" stroke="#dcc48a" />
        <rect x="118" y="336" width="146" height="54" fill="#c4a35a" opacity="0.18" stroke="#c4a35a" />
        <path d="M40 372 L680 372" stroke="#dcc48a" strokeWidth="1" opacity="0.4" />
        <circle cx="168" cy="358" r="4" fill="#c4a35a" />
        <circle cx="380" cy="358" r="4" fill="#c4a35a" />
        <circle cx="548" cy="358" r="4" fill="#c4a35a" />
      </svg>
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-navy/80 px-4 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm">
        <span>{caption}</span>
        <span className="hidden sm:inline">Placeholder visual</span>
      </figcaption>
    </figure>
  );
}
