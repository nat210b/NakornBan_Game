# Realtime Event Model (MVP)

## Channels
- `room:{roomId}`: lobby + player presence
- `game:{gameId}`: game state + actions
- `chat:{roomId}`: chat + system log
- `secret:{gameId}:forensic`: Forensic + Murderer only

## Event Envelope
All events follow:
```
{
  type: string,
  roomId: string,
  gameId?: string,
  playerId?: string,
  ts: number,
  payload: object
}
```

## Core Events
### Room
- `room:join` { player }
- `room:leave` { playerId }
- `room:ready` { playerId, ready }
- `room:host_changed` { playerId }

### Game Lifecycle
- `game:created` { gameId }
- `game:phase_change` { phase, round, timerEndsAt }
- `game:ended` { winner, reason }

### Roles & Cards
- `game:roles_assigned` { players: [{ playerId, role }] } (private per player)
- `game:cards_dealt` { playerId, weapons[], evidences[] } (private per player)
- `game:truth_selected` { weaponId, evidenceId } (private to forensic + murderer)
- `game:witness_reveal` { murdererId } (private to witness)

### Forensic Trail
- `game:trail_set` { cards: [{ slot, cardId }] }
- `game:trail_swap` { slot, cardId }

### Arrest
- `game:arrest_request` { byPlayerId, suspectId, weaponId, evidenceId }
- `game:arrest_result` { success, reason, murdererId, witnessKilled }

### Chat/System
- `chat:message` { playerId, message }
- `log:system` { message, level }

## Visibility Rules
- Role info, hand cards, witness info are private
- Trail + phase + arrests are public to room
- Secret channel limited to Forensic + Murderer
