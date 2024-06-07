-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rule" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_Pint" ("createdAt", "id", "name", "rule", "url") SELECT "createdAt", "id", "name", "rule", "url" FROM "Pint";
DROP TABLE "Pint";
ALTER TABLE "new_Pint" RENAME TO "Pint";
CREATE UNIQUE INDEX "Pint_name_key" ON "Pint"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
