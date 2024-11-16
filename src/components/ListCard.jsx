import ItemCard from "./ItemCard";

export default function ListCard() {
  let judul = "Lagi trending, nih";
  let produk2 = [
    {
      judul: "PS4",
      jumlah: 30,
      harga: 50000,
      gambar: "",
    },
    {
      judul: "RTX 5000",
      jumlah: 10,
      harga: 95000,
    },
    {
      judul: "iPhone 16",
      jumlah: 9,
      harga: 72000,
    },
    {
      judul: "Macbook",
      jumlah: 96,
      harga: 330000,
    },
  ];
  return (
    <div>
      <div>
        <div>
          <h2>{judul}</h2>
        </div>

        <div style={{ display: "flex" }}>
          {produk2.map((p) => {
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
