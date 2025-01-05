import Content from "./content";
import { useState } from "react";
import EditPanel from "./EditPanel";

function App() {
  const [name, setName] = useState("[First Last]");
  const [email, setEmail] = useState("[example@gmail.com]");

  const [phoneNumber, setPhoneNumber] = useState("[123 - 456 - 7890]");
  const [website, setWebsite] = useState("https://google.com");
  const [organization, setOrganization] = useState("[School Name]");
  const [field, setField] = useState("[Field of study]");
  const [startDate, setStartDate] = useState("[1/5/2025]");
  const [endDate, setEndDate] = useState("[1/5/2025]");

  function setWebsiteWithProtocol(url) {
    if (!/^https?:\/\//i.test(url)) {
      setWebsite("https://" + url);
    } else {
      setWebsite(url);
    }
  }
  return (
    <>
      <EditPanel
        setName={setName}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
        setWebsite={setWebsiteWithProtocol}
        setOrganization={setOrganization}
        setField={setField}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      ></EditPanel>
      <Content
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        website={website}
        organization={organization}
        field={field}
        startDate={startDate}
        endDate={endDate}
      ></Content>
    </>
  );
}
export default App;
