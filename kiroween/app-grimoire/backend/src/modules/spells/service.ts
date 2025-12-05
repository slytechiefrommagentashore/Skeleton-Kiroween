import { PrismaClient } from '@prisma/client';
import { CreateSpellInput, UpdateSpellInput } from './schema';
import { AppError } from '../../common/error';

const prisma = new PrismaClient();

export class SpellService {
  // Summon all spells from the depths
  async getAllSpells() {
    return prisma.spell.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // Summon a specific spell by its mystical ID
  async getSpellById(id: string) {
    const spell = await prisma.spell.findUnique({
      where: { id },
    });

    // Contain the curse of absence
    if (!spell) {
      throw new AppError(404, 'Spell lost in the void');
    }

    return spell;
  }

  // Inscribe a new spell into the grimoire
  async createSpell(data: CreateSpellInput) {
    return prisma.spell.create({
      data,
    });
  }

  // Transform an existing spell's properties
  async updateSpell(id: string, data: UpdateSpellInput) {
    // Verify spell exists before transformation
    const spell = await prisma.spell.findUnique({
      where: { id },
    });

    // Contain the curse of absence
    if (!spell) {
      throw new AppError(404, 'Spell lost in the void');
    }

    return prisma.spell.update({
      where: { id },
      data,
    });
  }

  // Banish a spell from existence
  async deleteSpell(id: string) {
    // Verify spell exists before banishment
    const spell = await prisma.spell.findUnique({
      where: { id },
    });

    // Contain the curse of absence
    if (!spell) {
      throw new AppError(404, 'Spell lost in the void');
    }

    await prisma.spell.delete({
      where: { id },
    });

    return { id };
  }
}

// Awaken the spell service spirits
export const spellService = new SpellService();
