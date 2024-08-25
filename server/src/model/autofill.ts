import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { users } from './user';
import { sql } from 'drizzle-orm';

export const autofills = sqliteTable('autofills', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  key: text('title').notNull(),
  value: text('value').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});