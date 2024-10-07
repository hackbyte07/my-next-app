import React, { FC } from "react";
import { getNoteById } from "../actions";
import { editNoteById } from "./actions";

type EditNotesProps = {
  params: {
    id: string;
  };
};

const EditNotes: FC<EditNotesProps> = async ({ params }) => {
  const note = await getNoteById(params.id);

  const handleEdit = async (formData: FormData) => {
    'use server'
    await editNoteById(params.id, formData)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-start p-2 gap-4">
      <span className="text-2xl font-bold">Edit Notes</span>
      <form className="flex flex-col gap-2 justify-center items-center">
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            name="title"
            type="text"
            className="grow"
            placeholder="title..."
            defaultValue={note?.title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Body
          <input
            name="body"
            type="text"
            className="grow"
            placeholder="body..."
            defaultValue={note?.body}
          />
        </label>
        <button type="submit" className="btn btn-success">
          Edit
        </button>
      </form>{" "}
    </div>
  );
};

export default EditNotes;
