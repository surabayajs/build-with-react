import ItemCard from "./ItemCard";
import { useState } from "react";

export default function ListCard() {
  const [produk, setProduk] = useState([
    {
      judul: "Xiami",
      jumlah: 10,
      harga: 100000,
    },
  ]);
  let judul = "Lagi trending, nih";

  const onSubmit = (e) => {
    e.preventDefault();
    const newProduk = {
      judul: e.target.judul.value,
      jumlah: e.target.jumlah.value,
      harga: e.target.harga.value,
    };

    // const newProdukList = produk.concat(newProduk);
    // setProduk(newProdukList);
    // setProduk([...produk, newProduk]);

    setProduk((prev) => [...prev, newProduk]);
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="judul" placeholder="judul" />
          <input type="number" name="jumlah" placeholder="jumlah" />
          <input type="number" name="harga" placeholder="harga" />
          <button type="submit">tambah</button>
        </form>
        <div>
          <h2>{judul}</h2>
        </div>

        <div style={{ display: "flex" }}>
          {produk.map((p) => {
            return (
              <ItemCard
                key={p.judul}
                judul={p.judul}
                jumlah={p.jumlah}
                harga={p.harga}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
