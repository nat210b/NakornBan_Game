# Frontend Structure (Vue 3 + TS)

## Proposed Layout
- `src/pages`
  - `LobbyPage.vue`
  - `RoomPage.vue`
  - `GamePage.vue`
  - `LoginPage.vue`
  - `SignupPage.vue`
- `src/components`
  - `Lobby/`
  - `Room/`
  - `Game/`
  - `Chat/`
  - `Trail/`
  - `Cards/`
- `src/stores`
  - `auth.ts`
  - `room.ts`
  - `game.ts`
  - `chat.ts`
- `src/services`
  - `supabase.ts`
  - `realtime.ts`
  - `gameApi.ts`
- `src/types`
  - `game.ts`
  - `cards.ts`
  - `player.ts`

## Routes (MVP)
- `/login`
- `/signup`
- `/lobby`
- `/room/:roomId`
- `/game/:gameId`

## Page Responsibilities
- Lobby: create/join room
- Room: player list, ready, start game
- Game: role view, cards, trail, arrest, system log

## UI Notes
- Keep role-based visibility in components, not just in store
- Use `Pinia` stores for derived state and selectors
