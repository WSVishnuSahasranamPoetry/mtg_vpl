CREATE TABLE IF NOT EXISTS "card4sale" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"imageUrl" text NOT NULL,
	"quantity" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP TABLE "poetry";--> statement-breakpoint
ALTER TABLE "sahasranam" RENAME TO "wishlistcard";