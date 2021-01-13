import React from "react";
import './sidebar.css'
import { useStateValue } from "../DataProvider";

function SideElement({ text, Icon }) {
  const [{ }, dispatch] = useStateValue();

  function back(e) {
    if (e.target.lastChild.innerHTML == 'Inicio' || e.target.lastChild.innerHTML == 'Home' || e.target.innerHTML == 'Inicio' || e.target.innerHTML == 'Home') {
      
      window.open(process.env.REACT_APP_REDIRECT_URL, '_self')
      // dispatch({
      //   type: "SET_TOKEN",
      //   token: null,
      // });
    }
  }

  return (

    <div className="Sidebar-option" onClick={e => back(e)}>
      {Icon && Icon}
      {Icon ? <h4 >{text}</h4> : <p>{text}</p>}
    </div>
  );
}

export default SideElement