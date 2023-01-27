-- CreateTable
CREATE TABLE "relationUsersChanels" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "listOfchannels" JSONB NOT NULL,

    CONSTRAINT "relationUsersChanels_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "relationUsersChanels_userId_key" ON "relationUsersChanels"("userId");

-- AddForeignKey
ALTER TABLE "relationUsersChanels" ADD CONSTRAINT "relationUsersChanels_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
