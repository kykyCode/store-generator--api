-- CreateTable
CREATE TABLE `Customization` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo` BOOLEAN NOT NULL DEFAULT true,
    `contact` BOOLEAN NOT NULL DEFAULT true,
    `about` BOOLEAN NOT NULL DEFAULT true,
    `columns` INTEGER NOT NULL DEFAULT 2,
    `radius` INTEGER NOT NULL DEFAULT 0,
    `primaryBtn_color` VARCHAR(191) NOT NULL,
    `primaryBtn_background` VARCHAR(191) NOT NULL,
    `secondaryBtn_color` VARCHAR(191) NOT NULL,
    `secondaryBtn_border` VARCHAR(191) NOT NULL,
    `navigation_color` VARCHAR(191) NOT NULL,
    `main_color` VARCHAR(191) NOT NULL,
    `footer_color` VARCHAR(191) NOT NULL,
    `instagram` BOOLEAN NOT NULL DEFAULT false,
    `instagramUrl` VARCHAR(191) NOT NULL,
    `facebook` BOOLEAN NOT NULL DEFAULT false,
    `facebookUrl` VARCHAR(191) NOT NULL,
    `tiktok` BOOLEAN NOT NULL DEFAULT false,
    `tiktokUrl` VARCHAR(191) NOT NULL,
    `youtube` BOOLEAN NOT NULL DEFAULT false,
    `youtubeUrl` BOOLEAN NOT NULL,
    `footer_text` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
