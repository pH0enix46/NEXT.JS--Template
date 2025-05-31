import "server-only";
import { desc, eq } from "drizzle-orm";

import type { UserWithUploads } from "~/app/admin/summary/page.types";

import { db } from "~/db";
import { uploadsTable, userTable } from "~/db/schema";

// Fetch users and their uploads using a different approach
export async function getUsersWithUploads(): Promise<UserWithUploads[]> {
  try {
    // First, get all users
    const users = await db.select().from(userTable).orderBy(desc(userTable.createdAt));
    
    // Create an array to hold the results
    const result: UserWithUploads[] = [];
    
    // For each user, fetch their uploads and construct the UserWithUploads object
    for (const user of users) {
      const uploads = await db.select().from(uploadsTable).where(eq(uploadsTable.userId, user.id));
      
      // Add the user with their uploads to the result array
      result.push({
        ...user,
        uploads: uploads,
      });
    }
    
    return result;
  } catch (error) {
    console.error("Failed to fetch users with uploads:", error);
    return [];
  }
}
