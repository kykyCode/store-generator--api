/*
  Warnings:

  - You are about to drop the column `addressId` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `customizationId` on the `store` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_customizationId_fkey`;

-- AlterTable
ALTER TABLE `address` ADD COLUMN `storeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `customization` ADD COLUMN `storeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `store` DROP COLUMN `addressId`,
    DROP COLUMN `customizationId`;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customization` ADD CONSTRAINT `Customization_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
