/*
  Warnings:

  - You are about to drop the column `optins` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "optins",
ADD COLUMN     "options" JSONB[];
