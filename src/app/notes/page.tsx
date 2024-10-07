import React from "react";
import { addNotes, getAllNotes } from "./actions";

const NotesHome = async () => {
  const notes = await getAllNotes();

  return (
    <div className="h-screen flex flex-col items-center justify-start p-2 gap-4">
      <span className="text-2xl font-bold">Add Notes</span>
      <form
        action={addNotes}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <label className="input input-bordered flex items-center gap-2">
          Title
          <input
            name="title"
            type="text"
            className="grow"
            placeholder="title..."
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Body
          <input
            name="body"
            type="text"
            className="grow"
            placeholder="body..."
          />
        </label>
        <button type="submit" className="btn btn-success">
          Success
        </button>
      </form>
      <div>
        {notes?.map((note) => (
          <div key={note.id} className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{note.title}</h2>
              <p>{note.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesHome;
