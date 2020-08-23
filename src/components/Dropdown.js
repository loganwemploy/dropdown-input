import React, { Component } from "react";
import styled from 'styled-components';
const StyledDropdown = styled.div`
   ul {
       background-color:#fefefe;
       }
   li {
background-color:#eee;
   border:1px solid rgba(0,0,0,0.32);
   list-style:none;
   }
   li:hover {
       background-color: #ccc;
   }
 `;

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: "",
            
        };
    }
    // getLabels = () => {
        //     const allLabels = ['NextActions', 'Someday_Actions', 'Costco', 'Alexa'];
        //   const result = allLabels
        //     .filter(function(x) {
            //       return x.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
            //     });
            //   return result;
            // }
            
            // validateSalary = e => {
                //     // e.persist();
                //     const { name, value } = e.target;
                //     this.setState({ [name]: value }, function () {
                    //         console.log(this.state);
                    //     });
                    // };
                   
                    
                    render() {
                        return (
            <StyledDropdown>

                <form>
                    <div>
                        {/* <label>Salary:</label> */}
                        <ul
                            className="dropdown-ul"
                            // value={this.state.salary}
                        >
                            {this.props.allLabels.map((label, index)=>(<li key={index} onClick={()=>this.props.selectedFromDropdown(index,label)}>{label}</li>))}
                        </ul>
                    </div>
                </form>
            </StyledDropdown>
        );
    }
}
export default Dropdown;