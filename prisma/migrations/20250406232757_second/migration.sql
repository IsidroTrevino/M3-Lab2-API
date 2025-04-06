/*
  Warnings:

  - You are about to drop the column `realeaseDate` on the `Books` table. All the data in the column will be lost.
  - Added the required column `releaseDate` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Books` DROP COLUMN `realeaseDate`,
    ADD COLUMN `releaseDate` DATETIME(3) NOT NULL;
