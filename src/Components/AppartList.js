// import '../Styles/Card.css';
import list from "../Data/appart";
import Card from "./Card";
import "../Styles/AppartList.css";

function AppartList() {
  return (
    <div className="content-cards">
      {list.map((appart) => (
        <Card key={appart.id} appart={appart} />
      ))}
    </div>
  );
}

export default AppartList;

/* 

<Card key={appart.id} appart={appart}/>            

*/
