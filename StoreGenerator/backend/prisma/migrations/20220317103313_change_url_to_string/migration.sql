/*
  Warnings:

  - You are about to alter the column `youtubeUrl` on the `customization` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `customization` MODIFY `youtubeUrl` VARCHAR(191) NOT NULL;
