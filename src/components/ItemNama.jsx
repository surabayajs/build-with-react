import PropTypes from "prop-types";

const ListNama = ({ nama, umur, gambar, hp }) => {
  return (
    <div
      style={{
        display: "flex",
        borderWidth: 1,
        borderStyle: "solid",
        marginBottom: 4,
      }}
    >
      <img src={gambar} alt={"nama"} />
      <div>
        <h5>Nama: {nama}</h5>
        <p>Umur: {typeof umur === "number" ? umur : isNaN(umur) ? "-" : parseInt(umur)}</p>
        <p>Hp: {hp}</p>
      </div>
    </div>
  );
};

export default ListNama;

ListNama.propTypes = {
  nama: PropTypes.string.isRequired,
  umur: PropTypes.number.isRequired,
  gambar: PropTypes.string.isRequired,
  hp: PropTypes.string.isRequired,
};
