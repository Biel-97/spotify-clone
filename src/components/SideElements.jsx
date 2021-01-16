import React from "react";
import './sidebar.css'
import { useStateValue } from "../DataProvider";
import {ACTION} from '../reducer'
function SideElement({ text, Icon }) {
  const [{ }, dispatch] = useStateValue();

  function back(e) {
    if (text == 'Home') {

      dispatch({
        type: ACTION.SET_PAGE_VIEW,
        Set_Page_View: true
      });

    }else if(text == 'Sua biblioteca'){
      console.log('Sua biblioteca')
    }

    if (!Icon) {

      console.log('Va para a playlist ' + text)
      dispatch({
        type: ACTION.SET_PAGE_VIEW,
        Set_Page_View: false
      });

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