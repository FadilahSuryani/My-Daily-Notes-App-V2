// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddNoteForm from "./AddNote"; // Corrected import
import Home from "./Home";
import "./App.css";

const App = () => {
  const [note, setNote] = useState([
    {
      judul: "Senin",
      isi: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar dilanjutkan dengan Kuliah dan Belajar dan Istirahat ",
      tanggal: "2023/11/06",
    },
    {
      judul: "Selasa",
      isi: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar dilanjutkan dengan Masak Dan Sarapan lalu Berangkat Kuliah dan Belajar setelah itu Istirahat ",
      tanggal: "2023/11/07",
    },
    {
      judul: "Rabu",
      isi: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar  lalu Berangkat Kuliah dan Belajar setelah itu Istirahat sambil Membaca",
      tanggal: "2023/11/08",
    },
    {
      judul: "Kamis",
      isi: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar  lalu Berangkat Kuliah dan Belajar setelah itu Istirahat sambil Menonton Film",
      tanggal: "2023/11/09",
    },

    {
      judul: "Jumat",
      isi: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar  lalu Berangkat Kuliah dan Belajar setelah itu Istirahat",
      tanggal: "2023/11/10",
    },
    {
      judul: "Sabtu",
      isi: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar  lalu Bersihkan Kos dan Memasak setelah itu Istirahat sambil Quality Time",
      tanggal: "2023/11/11",
    },
  ]);

  const addNote = (newNote) => {
    setNote([...note, newNote]);
  };

  return (
    <Router>
      <div id="utama">
        <nav>
          <ul id="link-utama">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Note</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* Pass 'note' as a prop to the 'Home' component */}
          <Route path="/" element={<Home notes={note} setNotes={setNote} />} />
          <Route path="/add" element={<AddNoteForm addNote={addNote} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
