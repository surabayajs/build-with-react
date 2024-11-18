import { useState } from "react";

function FormBiodata() {
  const [greeting, setGreeting] = useState({
    nama: "",
    email: "",
    alamat: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setGreeting({
      nama: e.target.nama.value,
      email: e.target.email.value,
      alamat: e.target.alamat.value,
    });
  };

  const onSubmit2 = () => {
    alert("Tombol Tampilkan ditekan");
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label>Nama: </label>
          <input name="nama" type="text" placeholder="nama lengkap" />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>Alamat: </label>
          <input name="alamat" type="text" placeholder="alamat" />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onSubmit2}>
          Tampilkan
        </button>
      </form>

      <div>
        <h5>Biodata</h5>
        <p>{greeting.nama ? "Nama: " + greeting.nama : ""}</p>
        <p>{greeting.email ? "Email: " + greeting.email : ""}</p>
        <p>{greeting.alamat ? "Alamat: " + greeting.alamat : ""}</p>
      </div>
    </>
  );
}

export default FormBiodata;
