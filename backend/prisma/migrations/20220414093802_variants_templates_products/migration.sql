/*
  Warnings:

  - You are about to drop the column `quantity` on the `product_variant` table. All the data in the column will be lost.
  - Made the column `front_image` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `price` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    MODIFY `front_image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product_variant` DROP COLUMN `quantity`,
    MODIFY `front_image` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Product_template` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `front_image` VARCHAR(191) NULL,
    `back_image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
