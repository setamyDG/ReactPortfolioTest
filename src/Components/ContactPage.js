import React, {Component} from 'react'
import { Grid } from "react-mdl";
import LeftSide from "../ContactView/LeftSide";
import RightSide from "../ContactView/RightSide";

class ContactPage extends Component{
    render(){
        return(
           <div className="contact-body">
              <RightSide/>
               <LeftSide/>
           </div>
        )
    }
}
export default ContactPage