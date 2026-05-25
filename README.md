# ARA Components Prototype

This version is split into multiple HTML files that all share a separate stylesheet and small shared JS helper file.

Files:

- `index.html` — landing view based on `Index`
- `user-dashboard.html` — dashboard view based on `UserDashboard`
- `admin-dashboard.html` — admin view based on `AdminDashboard`
- `project-review.html` — review view based on `ProjectReview`
- `assets/styles.css` — shared CSS for all pages
- `assets/app.js` — shared helpers for modal and waveform setup

This structure is better for scaling the prototype across numerous HTML files while keeping a shared visual system.
