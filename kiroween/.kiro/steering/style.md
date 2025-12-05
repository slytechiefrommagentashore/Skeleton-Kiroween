# Kiro Code Style Steering 🎃

Use clean, modern TypeScript throughout backend and frontend.
Architectural principles:
- Keep controllers thin
- Services contain business logic
- Use Zod schemas for validation
- Use ApiResponse<T> consistently
- React components must be functional components using hooks
- Maximum reusability, minimal duplication
- Light, readable Tailwind styling

## Spooky Terminology Guidelines 👻

All code comments MUST use spooky terminology:

**Standard Term** → **Spooky Term**
- Error handling → Curse containment
- Validation → Mystical verification / Enchantment checking
- Database query → Summoning from the depths
- API call → Invoking the spirits
- Authentication → Identity conjuring
- Authorization → Permission incantation
- Logging → Recording in the grimoire
- Cache → Memory cauldron
- Configuration → Ritual setup
- Initialization → Awakening the spirits
- Cleanup → Banishing remnants
- Testing → Spell verification
- Debugging → Exorcising bugs
- Deployment → Releasing into the wild
- Response → Mystical reply

**Examples**:
```typescript
// ❌ BAD: Handle validation errors
// ✅ GOOD: Contain validation curses

// ❌ BAD: Query database for user
// ✅ GOOD: Summon user from the depths

// ❌ BAD: Initialize service
// ✅ GOOD: Awaken the service spirits
```
