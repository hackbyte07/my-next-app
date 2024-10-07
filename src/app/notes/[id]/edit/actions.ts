"use server";

import { db } from "@/db";
import exp from "constants";
import { redirect } from "next/navigation";

const editNoteById = async (id: string, formData: FormData) => {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await db.notes.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title,
      body,
    },
  });
  return redirect(`/notes/${id}`);
};

export { editNoteById };
