import React, { Component } from "react";
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import './manageusers.css';


import Grid from '@material-ui/core/Grid';

import logo1 from './Usersicon.jpg'

class Usermanagement extends Component {
  constructor() {
    super();
    this.state = {
        username: ""
    }

}

usernameChangeHandler = (e) => {
  this.setState({
      username: e.target.value
  });
}

getuserhandler = () => {
  if (this.state.username === "")
        {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        }
        else 
        {
            let fd = new FormData();
            fd.append('name', this.state.username)
            //axios.get(`${Constants.BACKEND_SERVER.URL}/admin/edituser`, fd)
            // .then(() => {
            //             this.setState({
            //                 name: "",
            //                 type: "",
            //                 price: "",
            //             })
            //         })
            //         .catch((error) => { 
            //             console.log(error)
            //             this.setState({
            //                 errMsg: "Error occured",
            //                 successMsg: ""
            //             })
            //         })
        }

}

deleteuserhandler =() => {
              //axios.post(`${Constants.BACKEND_SERVER.URL}/admin/edituser`, username)
              //.then(() => {
                //             this.setState({
                //                 name: "",
                //                 type: "",
                //                 price: "",
                //             })
                //         })
                //         .catch((error) => { 
                //             console.log(error)
                //             this.setState({
                //                 errMsg: "Error occured",
                //                 successMsg: ""
                //             })
                //         })

}
  render() {
    return (
      <div className="manageusers">
        
        <h1>User management</h1>
        <Row form >
                    <Col  >
                        <FormGroup>
                            <Label for="carname" >Enter User Name</Label>
                            <Input type="text" font-size="50px" name="carname" onChange={this.usernameChangeHandler} id="carname" placeholder="Enter user Name" value={ this.state.username } style={{ width: "350px" }}/>
                        </FormGroup>
                        <Button onClick={this.getuserhandler}> Get Details</Button>
                        <img src={logo1} flex="1"/>
                    </Col>
                   
                    
                <h3>User Details will be displayed here</h3>
            
                    <Button onClick={this.deleteuserhandler}> Delete User </Button>
                </Row>
                
      </div>
    );
  }
}

export default Usermanagement;
