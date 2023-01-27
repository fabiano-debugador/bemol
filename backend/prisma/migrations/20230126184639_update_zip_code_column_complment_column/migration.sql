/*
  Warnings:

  - You are about to drop the column `complmento` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `zip_code` on the `users` table. All the data in the column will be lost.
  - Added the required column `complment` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "complmento",
DROP COLUMN "zip_code",
ADD COLUMN     "complment" TEXT NOT NULL,
ADD COLUMN     "zipCode" TEXT NOT NULL;
