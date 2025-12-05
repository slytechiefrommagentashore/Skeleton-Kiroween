-- CreateTable
CREATE TABLE "Spell" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "incantation" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "powerLevel" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
