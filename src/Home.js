import { useEffect, useState } from "react";
import {List} from "./InformationList";

const Home = () => {
  const [information, setInfo] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/information')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setInfo(data);
      })
  }, [])

 function handleSubmit(e) {
      e.preventDefault();

  }

  return (
    <div className="home">
      {information && <List information={information} />}
      <form onSubmit={handleSubmit}>

      </form>
    </div>
    
  );
}
 
export default Home;