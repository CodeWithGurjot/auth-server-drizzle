import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import crypto from "crypto";

const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  fullName: text("full_name").notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  passwordResetToken: text("password_reset_token"),
  refreshToken: text("refresh_token"),
});

export default users;
