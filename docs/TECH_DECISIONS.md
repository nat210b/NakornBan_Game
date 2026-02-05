# Tech Decisions (MVP)

## Frontend
- Vue 3 + Vite
- TypeScript
- Pinia for state
- Vue Router for pages

## Backend
- Supabase as primary backend
  - Postgres for game data
  - Realtime channels for sync
  - Auth: anonymous/guest
  - RLS for role-based data access

## Secret Channel
- Firestore for "murder secret" channel
- Reason: separate visibility boundary for sensitive info

## Security Principles
- Never trust client for role or answer
- All sensitive info is private per-role
- Server-side validation for arrests and win/lose
