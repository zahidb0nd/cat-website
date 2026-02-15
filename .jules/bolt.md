## 2024-05-23 - Dead Scroll Listeners
**Learning:** React components (like `Navbar`) sometimes contain leftover `useEffect` hooks with global event listeners (e.g., `scroll`) that set unused state. This causes unnecessary main thread work on every event and potentially unnecessary re-renders.
**Action:** Always verify if state set by event listeners is actually used in the render output. If not, remove the listener and the state entirely.
