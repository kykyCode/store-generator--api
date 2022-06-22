/*
  Warnings:

  - Added the required column `name` to the `Product_variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeId` to the `Product_variant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product_variant` ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `storeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Product_variant` ADD CONSTRAINT `Product_variant_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
