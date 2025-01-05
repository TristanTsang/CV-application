/* eslint-disable react/prop-types */
import "../styles/EditPanel.css";
function EditPanel(props) {
  return (
    <div className="edit-panel">
      <h1>General Information</h1>
      <div className="two-columns">
        <TextField
          id=""
          label="Name"
          onChange={(event) => {
            props.setName(event.target.value);
          }}
        ></TextField>
        <TextField
          id=""
          label="Email"
          onChange={(event) => {
            props.setEmail(event.target.value);
          }}
        ></TextField>
        <TextField
          id=""
          label="Phone Number"
          onChange={(event) => {
            props.setPhoneNumber(event.target.value);
          }}
        ></TextField>
        <TextField
          id=""
          label="Website"
          onChange={(event) => {
            props.setWebsite(event.target.value);
          }}
        ></TextField>
      </div>

      <h1>Education</h1>
      <div className="two-columns">
        {" "}
        <TextField
          id=""
          label="Organization Name"
          onChange={(event) => {
            props.setOrganization(event.target.value);
          }}
        ></TextField>
        <TextField
          id=""
          label="Field of Study"
          onChange={(event) => {
            props.setField(event.target.value);
          }}
        ></TextField>
        <TextField
          id=""
          label="Start Date"
          onChange={(event) => {
            props.setStartDate(event.target.value);
          }}
        ></TextField>
        <TextField
          id=""
          label="End Date"
          onChange={(event) => {
            props.setEndDate(event.target.value);
          }}
        ></TextField>
      </div>
    </div>
  );
}

function TextField(props) {
  return (
    <div className="text-field">
      <div className="field-label">{props.label}</div>
      <input type="text" id={props.id} onChange={props.onChange}></input>
    </div>
  );
}

export default EditPanel;
