# FC‑25 Career Mode Tracker — RSR

This is a single‑file web app to track FIFA/EA FC‑25 Career Mode data. It includes an Importer + Dashboard to visualize player performance, a Transfers panel with budget helpers, and a premium Weather widget (Open‑Meteo) for upcoming fixtures. Entries are stored in your browser (localStorage) and the dashboard reads from a robust, deduplicated store so you can log matches quickly and review form over time.

Highlights:
- Dashboard widgets for top scorers/assists, form, clutch events, and GK metrics.
- Transfers tab with season budget, recent IN/OUT lists, and logo helpers.
- “Next Match Weather” widget with manual coords + smart geocoding and archive routing.
- Match Logger (Played / Sim / Quick Sim) that writes to `fc25.entries.v1` and deduplicates.

## Quick Start
1. Clone or download this repository.
2. Open `fc_25_aio_clean_build_v_6.html` directly in your browser (double‑click or drag‑drop into a tab).
3. Use the Importer to load CSVs, or the 📸 Match Logger to add entries. Switch to the Dashboard tab to explore.

Tip: All data saves locally in your browser (no backend). To move data between browsers, use the built‑in Rescue/Export.

## Codex Edits
We use Codex (web) to propose and apply surgical edits. The app is designed so most features live inside the single HTML file; Codex can:
- Patch UI/logic inside the main `<script>` safely (robust helpers are defined up front).
- Add small, isolated widgets or cards (e.g., budget visuals, inspector tools).
- Keep IDs and existing logic intact to avoid regressions.

When making changes in Codex:
- Work on feature branches, open PRs, and keep commits focused.
- Prefer small, reversible patches that don’t break importer/store contracts.
