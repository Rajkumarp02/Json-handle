import axios from "axios";
import react from "react";
import React,{Component} from "react";
//import {  Table } from 'react-bootstrap';

class Data extends Component{
      constructor(props){
       super()
       this.state = {
           Data:[],
           View:""
       }
      }
      componentWillMount(){
        this.readMore();
        //this is a call back function
        
      }


          readMore(){
          axios.get("http://localhost:3004/Data")
          .then(res=> {
              this.setState({Data:res.data})

          })
      }
      myView = () => {
          
        //this.readMore();
   const data = this.state.Data.map(data => (
       <li key={data.id}>{data.name}</li>
      
   )); 
   console.log(data);  
}

      render(){
          return(
           

            <div>
            <table className="table">
            <thead className="thead-dark" >
              <tr>
               <React.Fragment>
                
                
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phonenumber</th>
                <th scope="col">website</th>
                <th scope="col">city</th>
                </React.Fragment> 
                
              </tr>
            </thead>
            <tbody>
                {this.state.Data.map(data => (
                <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
                <td>{data.address.city}</td>
                </tr>

                ))}
            </tbody>
            </table>
            <td><button type="button" className="btn btn-outline-danger" onClick={this.myView}> View </button></td>
            </div>
          )
      }       
    }
    export default Data;