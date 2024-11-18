import { useState } from "react";

function FormListBuku() {
  const [listBuku, setListBuku] = useState([]);

  const addBuku = (e) => {
    e.preventDefault();
    const newBuku = e.target.buku.value;
    setListBuku((prev) => [...prev, newBuku]);
  };

  const deleteBuku = (index) => {
    setListBuku((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <h5>Daftar buku</h5>
      <form onSubmit={addBuku}>
        <input type="text" name="buku" />
        <button type="submit">Tambah</button>
      </form>
      <div>
        {listBuku.map((buku, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #fff",
              }}
            >
              <p>{buku}</p>
              <button onClick={() => deleteBuku(index)}>x</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FormListBuku;
