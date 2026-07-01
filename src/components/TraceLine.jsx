/**
 * Signature Sky Trace section marker.
 * Draws on scroll when the parent section receives `.section-visible`.
 */
export function TraceLine() {
  return (
    <svg className="trace-line" viewBox="0 0 120 12" aria-hidden="true">
      <path
        d="M0 6 L10 6 L16 2 L22 10 L28 6 L120 6"
        stroke="var(--color-blue)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="120"
        strokeDashoffset="120"
        className="trace-path"
      />
    </svg>
  );
}
