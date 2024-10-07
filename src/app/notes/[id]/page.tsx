import React, { FC } from "react";
import { deleteNoteById, getNoteById } from "./actions";
import Link from "next/link";

type ViewNotesProps = {
  params: {
    id: string;
  };
};

const ViewNotes: FC<ViewNotesProps> = async ({ params }) => {
  const note = await getNoteById(params.id);

  const handleDelete = async (formData: FormData) => {
    'use server'
    await deleteNoteById(params.id);
  };

  return (
    <div className="h-screen flex flex-col flex-1 items-center justify-start gap-2">
      <form action={handleDelete}>
        <div className="flex gap-2">
          <Link href={`/notes/${params.id}/edit`} className="btn btn-primary">
            Edit
          </Link>
          <button type="submit" className="btn btn-error">
            Delete
          </button>
        </div>
      </form>
      {note && (
        <div>
          <h2 className="text-2xl font-bold">{note.title}</h2>
          <p className="text-sm text-gray-500">{note.body}</p>
        </div>
      )}
    </div>
  );
};

export default ViewNotes;
