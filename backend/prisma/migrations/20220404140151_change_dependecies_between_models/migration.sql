/*
  Warnings:

  - You are about to drop the column `addressId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[storeId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[storeId]` on the table `Customization` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerId]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - Made the column `storeId` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `storeId` on table `customization` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `address` DROP FOREIGN KEY `Address_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `customization` DROP FOREIGN KEY `Customization_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_storeId_fkey`;

-- AlterTable
ALTER TABLE `address` MODIFY `storeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `customization` MODIFY `storeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `store` ADD COLUMN `ownerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `addressId`,
    DROP COLUMN `storeId`;

-- CreateIndex
CREATE UNIQUE INDEX `Address_storeId_key` ON `Address`(`storeId`);

-- CreateIndex
CREATE UNIQUE INDEX `Customization_storeId_key` ON `Customization`(`storeId`);

-- CreateIndex
CREATE UNIQUE INDEX `Store_ownerId_key` ON `Store`(`ownerId`);

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customization` ADD CONSTRAINT `Customization_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
