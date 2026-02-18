## 2024-05-23 - Dead Scroll Listeners
**Learning:** React components (like `Navbar`) sometimes contain leftover `useEffect` hooks with global event listeners (e.g., `scroll`) that set unused state. This causes unnecessary main thread work on every event and potentially unnecessary re-renders.
**Action:** Always verify if state set by event listeners is actually used in the render output. If not, remove the listener and the state entirely.

## 2026-02-17 - SVG Filter Duplication
**Learning:** Defining complex SVG filters inside reusable UI components (like buttons) leads to DOM duplication for every instance. This increases DOM size and potential processing overhead.
**Action:** Extract static SVG filters to a global component rendered once in the root layout.
