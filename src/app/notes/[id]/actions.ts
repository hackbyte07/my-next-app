"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

const getNoteById = async (id: string) => {
  try {
    const note = await db.notes.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return note;
  } catch (error) {
    console.error(error);
  }
  return null;
};

const deleteNoteById = async (id: string) => {
  try {
    await db.notes.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    redirect("/notes");
  }
};
export { getNoteById, deleteNoteById };
