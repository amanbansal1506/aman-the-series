import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

const NETWORK_NODES: [number, number][] = [
  [300, 150],
  [232, 88],
  [336, 68],
  [376, 144],
  [350, 224],
  [268, 226],
  [220, 170],
];
const NETWORK_EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],
];

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'network' && (
          <g fill="none" stroke={a}>
            {NETWORK_EDGES.map(([i, j]) => (
              <line
                key={`${i}-${j}`}
                x1={NETWORK_NODES[i][0]}
                y1={NETWORK_NODES[i][1]}
                x2={NETWORK_NODES[j][0]}
                y2={NETWORK_NODES[j][1]}
                strokeWidth={i === 0 ? 1.6 : 1}
                strokeOpacity={i === 0 ? 0.6 : 0.3}
              />
            ))}
            {NETWORK_NODES.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i === 0 ? 17 : 9} strokeWidth="2" strokeOpacity="0.9" fill={i === 0 ? a : i % 2 ? a : 'none'} fillOpacity={i === 0 ? 0.35 : 0.2} />
            ))}
          </g>
        )}
        {project.motif === 'route' && (
          <g fill="none" stroke={a}>
            <path d="M196 238 C 236 178, 262 252, 300 198 S 346 164, 346 126" strokeWidth="3" strokeOpacity="0.55" strokeDasharray="4 10" strokeLinecap="round" />
            <circle cx="196" cy="238" r="8" strokeWidth="2" strokeOpacity="0.85" />
            <circle cx="300" cy="198" r="6" fill={a} fillOpacity="0.5" strokeWidth="2" strokeOpacity="0.85" />
            <g transform="translate(346 0)">
              <path d="M0 36 c-20 0 -34 15 -34 34 c0 26 34 56 34 56 s34 -30 34 -56 c0 -19 -14 -34 -34 -34 z" strokeWidth="2.4" strokeOpacity="0.95" fill={a} fillOpacity="0.18" />
              <circle cx="0" cy="70" r="11" strokeWidth="2" strokeOpacity="0.9" />
            </g>
            <ellipse cx="346" cy="132" rx="26" ry="6" strokeWidth="1.4" strokeOpacity="0.4" />
          </g>
        )}
        {project.motif === 'chat' && (
          <g fill="none" stroke={a}>
            <path d="M210 52 h104 a14 14 0 0 1 14 14 v36 a14 14 0 0 1 -14 14 h-62 l-24 20 v-20 h-18 a14 14 0 0 1 -14 -14 v-36 a14 14 0 0 1 14 -14 z" strokeWidth="2" strokeOpacity="0.85" />
            <line x1="224" x2="302" y1="76" y2="76" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
            <line x1="224" x2="278" y1="92" y2="92" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.3" />
            <path d="M246 140 h112 a14 14 0 0 1 14 14 v36 a14 14 0 0 1 -14 14 h-12 v20 l-24 -20 h-76 a14 14 0 0 1 -14 -14 v-36 a14 14 0 0 1 14 -14 z" strokeWidth="2" strokeOpacity="0.9" fill={a} fillOpacity="0.22" />
            <line x1="262" x2="344" y1="164" y2="164" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
            <line x1="262" x2="316" y1="180" y2="180" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.35" />
            <rect x="204" y="232" width="78" height="34" rx="17" strokeWidth="1.6" strokeOpacity="0.6" />
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={226 + i * 16} cy="249" r="4" fill={a} fillOpacity={0.35 + i * 0.25} stroke="none" />
            ))}
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M3 27.5 L12 4.8 L21 27.5 M6.4 19.3 H17.6"  fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
