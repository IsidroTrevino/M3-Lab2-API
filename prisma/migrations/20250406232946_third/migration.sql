/*
  Warnings:

  - You are about to drop the column `releaseDate` on the `Books` table. All the data in the column will be lost.
  - Added the required column `realeaseDate` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Books` DROP COLUMN `releaseDate`,
    ADD COLUMN `realeaseDate` DATETIME(3) NOT NULL;
