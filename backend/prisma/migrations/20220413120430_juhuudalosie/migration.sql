/*
  Warnings:

  - You are about to drop the column `storeId` on the `product_variant` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `product_variant` DROP FOREIGN KEY `Product_variant_storeId_fkey`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `storeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `product_variant` DROP COLUMN `storeId`;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
