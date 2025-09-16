-- CreateTable
CREATE TABLE "public"."Projects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link_demo" TEXT,
    "link_github" TEXT,
    "stacks" TEXT[],
    "content" TEXT,
    "is_show" BOOLEAN NOT NULL DEFAULT true,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."achievements" (
    "id" SERIAL NOT NULL,
    "credential_id" TEXT,
    "slug" TEXT,
    "name" TEXT NOT NULL,
    "issuing_organization" TEXT NOT NULL,
    "category" TEXT,
    "url_credential" TEXT NOT NULL,
    "issue_date" TEXT NOT NULL,
    "expiration_date" TEXT,
    "image" TEXT NOT NULL,
    "is_show" BOOLEAN,

    CONSTRAINT "achievements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Projects_slug_key" ON "public"."Projects"("slug");
