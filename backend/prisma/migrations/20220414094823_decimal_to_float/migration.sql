/*
  Warnings:

  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `price` on the `product_template` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `price` on the `product_variant` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `price` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `product_template` MODIFY `price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `product_variant` MODIFY `price` DOUBLE NULL;
