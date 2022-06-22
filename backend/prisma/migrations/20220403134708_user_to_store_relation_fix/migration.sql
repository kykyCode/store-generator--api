/*
  Warnings:

  - You are about to drop the column `userId` on the `store` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_userId_fkey`;

-- AlterTable
ALTER TABLE `store` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `storeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
