# CS-Files (NakornBan Game) - MVP Spec

## Goal
Build a playable web-based social deduction party game with realtime multiplayer for 4–12 players, ~20 minutes per game.

## MVP Pillars
- Joinable lobby + realtime room
- Role assignment + card dealing
- Forensic trail mechanics
- Arrest flow + win/lose
- Minimal chat + system log

## Roles (MVP)
- Forensic Scientist
- Murderer
- Investigators
- Witness
- Accomplice

## Cards (MVP)
- Weapon cards (tagged)
- Evidence cards (tagged)
- Each player receives 4 weapon + 4 evidence
- Murderer selects 1 weapon + 1 evidence as truth
- Forensic knows truth
- Witness knows Murderer identity

## Game Flow
1. Lobby: players join, host starts game
2. Setup (~5 min): assign roles, deal cards, Murderer chooses truth
3. Round 1 (~8 min): Forensic places 6 trail cards
4. Round 2–3 (~7 min/round): Forensic may swap 1 trail card per round
5. Final Phase: if police badges remain, arrests proceed

## Win/Lose
Investigators win when:
- Correctly arrest Murderer with correct weapon + evidence
- Witness is alive

Murderer side wins when:
- Investigators arrest incorrectly
- Murderer correctly kills Witness

## MVP Acceptance Criteria
- Host can create a room and start game
- Players see their role + private info (role-based views)
- Cards are dealt and visible only to owner
- Forensic can set trail cards and everyone sees updates
- Arrest flow resolves into win/lose and game ends
- Chat works in room and logs key system actions

## Non-Goals (MVP)
- Voice chat
- Bots
- Economy/progression
- Replays
- Cosmetics
