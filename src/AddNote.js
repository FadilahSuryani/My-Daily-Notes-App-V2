// AddNote.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const AddNote = ({ addNote }) => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(
      judul.trim() !== "" && isi.trim() !== "" && tanggal.trim() !== ""
    );
  }, [judul, isi, tanggal]);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const [day, month, year] = new Date(dateString)
      .toLocaleDateString("id-ID", options)
      .split("/");
    return `${day}/${month}/${year}`;
  };

  const handleDateChange = (e) => {
    setTanggal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const formattedTanggal = formatDate(tanggal);
      addNote({ judul, isi, tanggal: formattedTanggal });
      navigate("/");
    }
  };

  return (
    <div>
      <div id="div-form">
        <h2 id="judul-home">Form Note</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-note">
            <label>Judul:</label>
            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />

            <label>Isi:</label>
            <textarea
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
              rows="4" // Set the number of rows as needed
            />

            <label>Tanggal:</label>
            <input
              type="date"
              value={tanggal}
              onChange={handleDateChange}
              placeholder="hh/bb/tttt"
            />
          </div>
          <button
            className={`btn-note btn btn-success ${
              isFormValid ? "" : "disabled"
            }`}
            type="submit"
            disabled={!isFormValid}
          >
            Add Note
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default AddNote;
