// Home.js
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";

const colors = [
  "pink",
  "blue",
  "red",
  "purple",
  "dark green",
  "orange",
  "yellow",
];

function Note({ judul, isi, tanggal, onDelete }) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="post-it" style={{ backgroundColor: randomColor }}>
      <div className="post-it-header">
        {/* Consider adding a close button */}
        <div className="close-button">Tutup</div>
      </div>
      <div className="post-it-title">{judul}</div>
      <div className="post-it-content">{isi}</div>
      <div className="post-it-date text-secondary">{tanggal}</div>
      <div className="delete-icon">
        <DeleteIcon onClick={onDelete} />
      </div>
    </div>
  );
}

const Home = ({ notes, setNotes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (index) => {
    const updatedNote = [...notes];
    updatedNote.splice(index, 1);
    setNotes(updatedNote);
  };

  // Ensure 'notes' is not undefined before filtering
  const filteredNotes = notes
    ? notes.filter((note) =>
        note.judul.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <h1 id="judul-home">Home Daftar Note</h1>
      {/* Add a container for centering the search input */}
      <div className="search-container">
        <div className="search-input">
          <input
            id="search-icon"
            type="text"
            placeholder="Cari berdasarkan judul"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon />
        </div>
      </div>
      <ul>
        <div className="posisi">
          {filteredNotes.map((note, index) => (
            <Note
              key={index}
              judul={note.judul}
              isi={note.isi}
              tanggal={note.tanggal}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Home;
