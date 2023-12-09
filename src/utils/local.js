let array_notes = [
  {
    id: 1,
    title: "Senin",
    body: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar dilanjutkan dengan Kuliah dan Belajar dan Istirahat ",
    tanggal: "2023/11/06",
  },
  {
    id: 2,
    title: "Selasa",
    body: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar dilanjutkan dengan Masak Dan Sarapan lalu Berangkat Kuliah dan Belajar setelah itu Istirahat ",
    tanggal: "2023/11/07",
  },
  {
    id: 3,
    title: "Rabu",
    body: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar  lalu Berangkat Kuliah dan Belajar setelah itu Istirahat sambil Membaca",
    tanggal: "2023/11/08",
  },
  {
    id: 4,
    title: "Kamis",
    body: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar  lalu Berangkat Kuliah dan Belajar setelah itu Istirahat sambil Menonton Film",
    tanggal: "2023/11/09",
  },
  {
    id: 5,
    title: "Jumat",
    body: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar  lalu Berangkat Kuliah dan Belajar setelah itu Istirahat",
    tanggal: "2023/11/10",
  },
  {
    id: 6,
    title: "Sabtu",
    body: "diawali dengan Bangun dan Shalat, kemudian Olahraga Pagi sebentar  lalu Bersihkan Kos dan Memasak setelah itu Istirahat sambil Quality Time",
    tanggal: "2023/11/11",
  },
];

function getNotes() {
  return array_notes;
}

function deleteNotes(deleted_id) {
  array_notes = array_notes.filter((note, index) => note.id !== deleted_id);
}

function addNotes(note) {
  array_notes = [...array_notes, note];
}

export { getNotes, deleteNotes, addNotes };
