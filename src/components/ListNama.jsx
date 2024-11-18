export default function ListNama() {
  const ListData = [
    {
      name: "Josua",
      umur: "Aditia",
      gambar: "https://via.placeholder.com/150",
      hp: "081222222",
    },
    {
      name: "Josua",
      umur: "20",
      gambar: "https://via.placeholder.com/150",
      hp: "081222222",
    },
    {
      name: "Josua",
      umur: 20,
      gambar: "https://via.placeholder.com/150",
      hp: "081222222",
    },
    {
      name: "Aditia",
      umur: 30,
      gambar: "https://via.placeholder.com/150",
      hp: "081222222",
    },
  ];
  return (
    <>
      {ListData.map((data, index) => {
        return (
          <>
            <ListNama
              key={index}
              nama={data.name}
              umur={data.umur}
              hp={data.hp}
              gambar={data.gambar}
            />
          </>
        );
      })}
    </>
  );
}
