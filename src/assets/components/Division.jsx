import "./Division.css";

function Division(props) {
  const { title } = props;
  return (
    <div className="especialSelectionCard">
      <div className="especialSelection">
        <p className="selectionD"></p>
        <p className="titleCards" title={title}>
          {title}
        </p>
        <p className="selectionL"></p>
      </div>
    </div>
  );
}
export default Division;
