"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

const addNotes = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await db.notes.create({
    data: {
      title: title,
      body: body,
    },
  });
  return revalidatePath("/post");
};

const getAllNotes = async () => {
  try {
    const notes = await db.notes.findMany();
    return notes;
  } catch (error) {
    console.error(error);
  }
  return [];
};

export { addNotes, getAllNotes };
