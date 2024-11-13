"use server"

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/db";
import User from "../database/model/user.model";

 type CreateUserParams = {
    clerkId: string;
    email: string;
    username: string;
    firstName: string|null;
    lastName: string|null;
    photo: string;
  };
  
 type UpdateUserParams = {
    firstName: string|null;
    lastName: string|null;
    username: string;
    photo: string;
  };

// CreateUser in mongoDatabase
export async function createUser(user:CreateUserParams){

    try {
        await connectToDatabase();
    
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
       console.log("User is not Created due to ",error);
    }
    
    };
    
    // READ
    export async function getUserById(userId: string) {
        try {
          await connectToDatabase();
      
          const user = await User.findOne({ clerkId: userId });
      
          if (!user) throw new Error("User not found");
      
          return JSON.parse(JSON.stringify(user));
        } catch (error) {
          console.log("User is not found",error);
        }
      }
      
      // UPDATE
      export async function updateUser(clerkId: string, user: UpdateUserParams) {
        try {
          await connectToDatabase();
      
          const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
            new: true,
          });
      
          if (!updatedUser) throw new Error("User update failed");
          
          return JSON.parse(JSON.stringify(updatedUser));
        } catch (error) {
            console.log("User is not found",error);
        }
      }
      
      // DELETE
      export async function deleteUser(clerkId: string) {
        try {
          await connectToDatabase();
      
          // Find user to delete
          const userToDelete = await User.findOne({ clerkId });
      
          if (!userToDelete) {
            throw new Error("User not found");
          }
      
          // Delete user
          const deletedUser = await User.findByIdAndDelete(userToDelete._id);
          revalidatePath("/");
      
          return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
        } catch (error) {
            console.log("User is not deleted ",error);
        }
      }