-- CreateTable
CREATE TABLE `Books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookName` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `ISBN` VARCHAR(191) NOT NULL,
    `realeaseDate` DATETIME(3) NOT NULL,
    `available` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Books_bookName_key`(`bookName`),
    UNIQUE INDEX `Books_ISBN_key`(`ISBN`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
