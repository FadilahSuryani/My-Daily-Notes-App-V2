import React from "react";
import NoteCard from "./NoteCard";
import PropTypes from "prop-types";

function NoteList(props) {
  const { notes, onDelete } = props;

  return (
    <div className="row">
      {notes.map((note, index) => {
        const createdAtDate = new Date(note.createdAt);
        createdAtDate.setDate(createdAtDate.getDate());
        const day = String(createdAtDate.getDate()).padStart(2, "0");
        const month = String(createdAtDate.getMonth() + 1).padStart(2, "0");
        const year = createdAtDate.getFullYear();
        const newCreatedAt = `${day}-${month}-${year}`;
        return (
          <NoteCard
            key={note.id}
            no={index + 1}
            index={index}
            id={note.id}
            title={note.title}
            createdAt={newCreatedAt}
            onDelete={onDelete}
          >
            {note.body}
          </NoteCard>
        );
      })}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;
