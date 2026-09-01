/* Architectural line diagrams of each system, drawn to the design system's
   rules: 2px strokes, square corners, currentColor. They stand in for product
   photography until real shots exist, and double as the "placeholder images"
   for the range — a drawing communicates an opening type better than a stock
   photo anyway. Opening-direction marks follow window-schedule convention:
   a V points at the hinge side; arrows show travel on sliders. */

import type { System } from "../_lib/systems";

type Props = { className?: string };

const svgProps = {
  viewBox: "0 0 96 96",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  "aria-hidden": true,
} as const;

export function CasementDiagram({ className }: Props) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="8" y="12" width="80" height="72" />
      <rect x="14" y="18" width="33" height="60" />
      <rect x="49" y="18" width="33" height="60" />
      {/* left sash opens, hinged left */}
      <path d="M14 18 L47 48 L14 78" strokeDasharray="4 3" />
    </svg>
  );
}

export function SlidingDiagram({ className }: Props) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="8" y="12" width="80" height="72" />
      <rect x="14" y="18" width="38" height="60" />
      <rect x="44" y="22" width="38" height="52" />
      <path d="M58 48 H76 M70 42 L76 48 L70 54" />
    </svg>
  );
}

export function TiltTurnDiagram({ className }: Props) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="8" y="12" width="80" height="72" />
      <rect x="16" y="20" width="64" height="56" />
      {/* turn: hinged right; tilt: hinged bottom */}
      <path d="M80 20 L16 48 L80 76" strokeDasharray="4 3" />
      <path d="M16 76 L48 20 L80 76" strokeDasharray="2 4" opacity="0.55" />
    </svg>
  );
}

export function FixedDiagram({ className }: Props) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="8" y="12" width="80" height="72" />
      <rect x="16" y="20" width="64" height="56" />
      {/* glazing tick */}
      <path d="M22 70 L74 26" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export function CasementDoorDiagram({ className }: Props) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="20" y="6" width="56" height="84" />
      <rect x="26" y="12" width="44" height="72" />
      <path d="M26 12 L70 48 L26 84" strokeDasharray="4 3" />
      <circle cx="64" cy="50" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function SlideDoorDiagram({ className }: Props) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="6" y="8" width="84" height="80" />
      <rect x="12" y="14" width="40" height="68" />
      <rect x="46" y="18" width="38" height="60" />
      <path d="M58 48 H78 M72 42 L78 48 L72 54" />
    </svg>
  );
}

export function LiftSlideDiagram({ className }: Props) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="4" y="8" width="88" height="80" />
      <rect x="10" y="14" width="52" height="68" />
      <rect x="56" y="14" width="30" height="68" />
      {/* lift, then travel */}
      <path d="M32 66 V56 M28 60 L32 56 L36 60" />
      <path d="M40 72 H58 M52 66 L58 72 L52 78" />
    </svg>
  );
}

export function MeshDiagram({ className }: Props) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="8" y="12" width="80" height="72" />
      <g strokeWidth="1" opacity="0.6">
        <path d="M24 12 V84 M40 12 V84 M56 12 V84 M72 12 V84" />
        <path d="M8 28 H88 M8 44 H88 M8 60 H88 M8 76 H88" />
      </g>
    </svg>
  );
}

export function GlazingDiagram({ className }: Props) {
  return (
    <svg {...svgProps} className={className}>
      {/* double-glazed unit in section: two panes, spacer bar top and bottom */}
      <path d="M38 10 V86 M44 10 V86" />
      <path d="M56 10 V86 M62 10 V86" />
      <rect x="44" y="14" width="12" height="8" />
      <rect x="44" y="74" width="12" height="8" />
      <path d="M20 24 L32 12 M20 44 L36 28" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

const DIAGRAMS: Record<System["diagram"], (p: Props) => React.JSX.Element> = {
  casement: CasementDiagram,
  sliding: SlidingDiagram,
  tiltturn: TiltTurnDiagram,
  fixed: FixedDiagram,
  "casement-door": CasementDoorDiagram,
  "slide-door": SlideDoorDiagram,
  "lift-slide": LiftSlideDiagram,
  mesh: MeshDiagram,
  glazing: GlazingDiagram,
};

export function SystemDiagram({
  kind,
  className,
}: Props & { kind: System["diagram"] }) {
  const Diagram = DIAGRAMS[kind];
  return <Diagram className={className} />;
}
