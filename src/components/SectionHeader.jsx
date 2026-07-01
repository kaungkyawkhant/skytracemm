import { TraceLine } from './TraceLine.jsx';

/**
 * Reusable heading block with the animated trace-line identity element.
 * Props: eyebrow, title, children, align.
 */
export function SectionHeader({ eyebrow, title, children, align = 'left' }) {
  return (
    <header className={`section-header section-header--${align}`}>
      <TraceLine />
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <p className="section-subtitle">{children}</p> : null}
    </header>
  );
}
