/* eslint-disable react/prop-types */
import "./Content.css";
function Content(props) {
  return (
    <div className="content">
      <h1>{props.name}</h1>
      <div className="row">
        <div>{props.email}</div>
        <div>|</div>
        <div>{props.phoneNumber}</div>
        <div>|</div>
        <a href={props.website} target="_blank">
          website
        </a>
      </div>
      <p>
        {props.name} is a talented and aspiring young talent with lots of
        experience. He studied at {props.organization} in the field of study of{" "}
        {props.field}. Tristan is currently looking for a job
      </p>
      <h1>Education</h1>
      <h2>{props.organization}</h2>
      <div>
        {props.field} from {props.startDate} - {props.endDate}
      </div>
    </div>
  );
}

export default Content;
