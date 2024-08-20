-- CreateTable
CREATE TABLE "NextUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "NextUser_pkey" PRIMARY KEY ("id")
);
