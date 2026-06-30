/**
 * The optics/screen feel: a faint film-grain texture and a soft vignette laid
 * over the whole viewport. Pointer-events are off so it never intercepts input,
 * and the grain is dialed low. Reduced-motion users lose nothing here since it
 * doesn't animate.
 */
export function Atmosphere() {
  return <div className="atmosphere" aria-hidden />;
}
