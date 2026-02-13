## 2025-05-15 - [Accessible Framer Motion Cards]
**Learning:** `motion.div` components used as interactive cards lack default keyboard accessibility.
**Action:** Always add `tabIndex={0}`, `role="button"`, `onKeyDown`, and `aria-label` to Framer Motion interactive cards. Ensure nested interactive elements (like links) are handled gracefully or structured to avoid conflicts.
