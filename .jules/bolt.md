## 2024-05-23 - Dead Scroll Listeners
**Learning:** React components (like `Navbar`) sometimes contain leftover `useEffect` hooks with global event listeners (e.g., `scroll`) that set unused state. This causes unnecessary main thread work on every event and potentially unnecessary re-renders.
**Action:** Always verify if state set by event listeners is actually used in the render output. If not, remove the listener and the state entirely.

## 2026-02-17 - SVG Filter Duplication
**Learning:** Defining complex SVG filters inside reusable UI components (like buttons) leads to DOM duplication for every instance. This increases DOM size and potential processing overhead.
**Action:** Extract static SVG filters to a global component rendered once in the root layout.

## 2026-03-03 - Unstable Handlers in useOnClickOutside
**Learning:** Passing an inline arrow function to `useOnClickOutside` causes unnecessary removal and re-attachment of event listeners on every render, which can degrade performance in interactive components.
**Action:** Always wrap handlers passed to `useOnClickOutside` in `React.useCallback`.

## 2026-03-04 - React.memo Re-rendering
**Learning:** In React components like `ExpandableTabs`, defining internal child components inside the parent component's render function (like `Separator = () => ...`) causes them to be recreated on every render. This forces React to unmount and remount them in the DOM, negatively impacting performance.
**Action:** Always extract inner component definitions outside of the parent component and wrap them with `React.memo` for optimal performance.