# 👻 Spooky Terminology Reference Card

Quick reference for translating standard programming terms into spooky skeleton terminology.

---

## Core Concepts

| Standard Term | Spooky Term | Example Usage |
|--------------|-------------|---------------|
| Error handling | Curse containment | `// Contain validation curses` |
| Validation | Mystical verification | `// Perform mystical verification on spell data` |
| Database query | Summoning from the depths | `// Summon all spells from the depths` |
| API call | Invoking the spirits | `// Invoke the spell creation spirits` |
| Authentication | Identity conjuring | `// Conjure user identity from token` |
| Authorization | Permission incantation | `// Cast permission incantation` |
| Logging | Recording in the grimoire | `// Record error in the grimoire` |
| Cache | Memory cauldron | `// Store in the memory cauldron` |
| Configuration | Ritual setup | `// Perform ritual setup for database` |
| Initialization | Awakening the spirits | `// Awaken the service spirits` |
| Cleanup | Banishing remnants | `// Banish database connection remnants` |
| Testing | Spell verification | `// Verify spell creation works correctly` |
| Debugging | Exorcising bugs | `// Exorcise the null pointer bug` |
| Deployment | Releasing into the wild | `// Release the application into the wild` |
| Response | Mystical reply | `// Send mystical reply to client` |

---

## Data Operations

| Standard Term | Spooky Term | Example |
|--------------|-------------|---------|
| Create | Inscribe | `// Inscribe new spell into grimoire` |
| Read | Summon | `// Summon spell by ID` |
| Update | Transform | `// Transform spell properties` |
| Delete | Banish | `// Banish spell from existence` |
| Find | Seek | `// Seek spells matching criteria` |
| Filter | Sift through shadows | `// Sift through shadows for active spells` |
| Sort | Arrange by power | `// Arrange spells by power level` |
| Join | Bind together | `// Bind user and spell data together` |

---

## Error Types

| Standard Error | Spooky Error | Example Message |
|---------------|--------------|-----------------|
| Not Found | Lost in the void | `"Spell lost in the void"` |
| Validation Error | Curse of invalid data | `"Curse of invalid incantation detected"` |
| Permission Denied | Forbidden by ancient magic | `"Access forbidden by ancient magic"` |
| Server Error | Dark forces at work | `"Dark forces disrupted the operation"` |
| Timeout | Spell fizzled out | `"Spell casting fizzled out"` |
| Conflict | Mystical interference | `"Mystical interference detected"` |

---

## HTTP Operations

| Standard | Spooky | Example |
|----------|--------|---------|
| GET request | Summoning ritual | `// Perform summoning ritual for spells` |
| POST request | Inscription ceremony | `// Execute inscription ceremony` |
| PUT request | Transformation ritual | `// Conduct transformation ritual` |
| DELETE request | Banishment spell | `// Cast banishment spell` |
| PATCH request | Minor enchantment | `// Apply minor enchantment` |

---

## Component Types

| Standard | Spooky | Example |
|----------|--------|---------|
| Controller | Spirit handler | `// Spirit handler for spell requests` |
| Service | Mystical engine | `// Mystical engine for spell operations` |
| Repository | Vault keeper | `// Vault keeper for spell storage` |
| Middleware | Guardian spirit | `// Guardian spirit checks authentication` |
| Router | Path weaver | `// Path weaver for spell routes` |
| Model | Ethereal form | `// Ethereal form of spell entity` |

---

## State & Lifecycle

| Standard | Spooky | Example |
|----------|--------|---------|
| Initialize | Awaken | `// Awaken the database connection` |
| Start | Summon forth | `// Summon forth the server` |
| Stop | Put to rest | `// Put the server to rest` |
| Restart | Resurrect | `// Resurrect the service` |
| Destroy | Vanquish | `// Vanquish the temporary data` |
| Suspend | Entomb | `// Entomb the process temporarily` |
| Resume | Reanimate | `// Reanimate the suspended task` |

---

## Code Quality

| Standard | Spooky | Example |
|----------|--------|---------|
| Refactor | Transmute | `// Transmute legacy code into modern form` |
| Optimize | Enhance potency | `// Enhance query potency` |
| Document | Inscribe wisdom | `// Inscribe wisdom about this function` |
| Test | Verify enchantment | `// Verify enchantment works as intended` |
| Review | Consult the council | `// Consult the council before merging` |
| Lint | Purify | `// Purify code of style curses` |

---

## Example Code Comments

### Before (Standard)
```typescript
// Validate user input
const validated = schema.parse(data);

// Query database for user
const user = await db.user.findUnique({ where: { id } });

// Handle error
if (!user) {
  throw new Error('User not found');
}

// Return success response
return { success: true, data: user };
```

### After (Spooky)
```typescript
// Perform mystical verification on input
const validated = schema.parse(data);

// Summon user from the depths
const user = await db.user.findUnique({ where: { id } });

// Contain the curse of absence
if (!user) {
  throw new AppError(404, 'User lost in the void');
}

// Send mystical reply
return { success: true, data: user };
```

---

## Function Naming Examples

### Standard → Spooky

```typescript
// Standard
async function getUserById(id: string) { }
async function createUser(data: UserInput) { }
async function updateUser(id: string, data: UserInput) { }
async function deleteUser(id: string) { }

// Spooky
async function summonUserById(id: string) { }
async function inscribeUser(data: UserInput) { }
async function transformUser(id: string, data: UserInput) { }
async function banishUser(id: string) { }
```

---

## Class Naming Examples

### Standard → Spooky

```typescript
// Standard
class UserService { }
class AuthMiddleware { }
class DatabaseConnection { }
class ErrorHandler { }

// Spooky (Optional - use sparingly)
class UserMysticalEngine { }
class IdentityGuardian { }
class DepthsConnection { }
class CurseContainment { }
```

**Note**: For class names, it's often better to keep standard names and use spooky terminology in comments and method names to maintain code clarity.

---

## Documentation Headers

### Standard
```typescript
/**
 * Retrieves all users from the database
 * @returns Array of user objects
 */
```

### Spooky
```typescript
/**
 * Summons all users from the depths
 * @returns Array of summoned user spirits
 */
```

---

## Commit Message Examples

### Standard
- `fix: Handle null user error`
- `feat: Add user authentication`
- `refactor: Improve database queries`

### Spooky
- `fix: Contain null user curse`
- `feat: Add identity conjuring`
- `refactor: Enhance summoning rituals`

---

## Variable Naming

**Keep variable names standard** for code clarity. Use spooky terminology in:
- Comments
- Function names (selectively)
- Error messages
- Log messages
- Documentation

```typescript
// ✅ GOOD: Standard variable, spooky comment
// Summon spell from the depths
const spell = await prisma.spell.findUnique({ where: { id } });

// ❌ AVOID: Spooky variable names can reduce clarity
const summonedSpirit = await prisma.spell.findUnique({ where: { id } });
```

---

## When to Use Spooky Terminology

### ✅ Use Spooky Terms For:
- Code comments
- Error messages
- Log messages
- Documentation
- README files
- Commit messages (optional)
- Function names (selectively)

### ❌ Keep Standard For:
- Variable names
- Class names (mostly)
- Type names
- Interface names
- Database column names
- API endpoint paths
- Configuration keys

---

## Spooky Emoji Guide

Use these emojis to enhance the spooky theme:

- 🎃 Pumpkin - General spooky marker
- 👻 Ghost - Spirits, services, background processes
- 🔮 Crystal Ball - Predictions, configuration, setup
- 🧙 Wizard - Complex operations, transformations
- 💀 Skull - Errors, deletions, warnings
- 🕷️ Spider - Crawlers, scrapers, background jobs
- 🦇 Bat - Fast operations, real-time features
- 🌙 Moon - Night mode, dark theme
- ⚡ Lightning - Fast operations, performance
- 🕯️ Candle - Logging, monitoring
- 📖 Book - Documentation, grimoire
- 🗝️ Key - Authentication, secrets
- 🧪 Potion - Testing, experiments
- 🪄 Wand - Magic methods, utilities

---

## ASCII Art for Comments

```typescript
/*
 * ═══════════════════════════════════════
 *           SPELL SERVICE
 *    Mystical Engine for Spell CRUD
 * ═══════════════════════════════════════
 */

/*
 * ┌─────────────────────────────────────┐
 * │  ⚠️  CURSE CONTAINMENT ZONE  ⚠️   │
 * │   Handle all errors with care      │
 * └─────────────────────────────────────┘
 */

/*
 * 🔮 SUMMONING RITUAL
 * This function summons spells from the depths
 * based on the provided mystical criteria
 */
```

---

## Pro Tips

1. **Balance is key**: Don't overdo it. Use spooky terms where they add personality without reducing clarity.

2. **Consistency matters**: Once you choose a spooky term for a concept, stick with it throughout the codebase.

3. **Context awareness**: Use more spooky terminology in user-facing docs and less in critical system code.

4. **Team alignment**: Make sure your team understands the terminology to avoid confusion.

5. **Have fun**: The spooky theme should make coding more enjoyable, not more confusing!

---

*May your code be cursed with zero bugs!* 🎃👻🔮
