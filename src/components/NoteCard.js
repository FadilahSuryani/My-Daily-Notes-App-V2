import { DeleteButton } from "./DeleteButton";
import PropTypes from "prop-types";

function NoteCard({ no, title, createdAt, children, id, index, onDelete }) {
  return (
    <div className={`col-md-4 text-start g-2 fs-4 mb-1 text-dark rounded`}>
      <div className="card-header p-2 d-flex justify-content-between">
        <div style={{ color: "black" }}>Catatan {no}</div>
        <DeleteButton index={index} id={id} onDelete={onDelete} />
      </div>
      <div className="card p-2 mb-2 bg-gradient">
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <div className="card-text fs-5">{createdAt}</div>
        </div>
        <p className="card-text fs-5 text-start">{children}</p>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  no: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteCard;