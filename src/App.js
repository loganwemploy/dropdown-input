import React, { Component } from 'react'
import TextInput from './components/TextInput'
import styled from 'styled-components';
const StyledApp = styled.div`
    padding: 20px;
    background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffa299' fill-opacity='0.17' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  h2 {
    color:#999
    }
  .icon-dots {
    position:absolute;
    left:0; 
    width:20px;
    padding: 14px 7px 5px 0;
  }
  .icon-plus {
    width:20px;
    margin-top:9px;
    /* padding: 0px 7px 5px 7px;s */
    filter:hue-rotate(240deg);
  }
  .icon-plus-holder{color: red;cursor: pointer;}
  .icon-plus-holder:hover {
   border: 2px solid green;
   padding: 0 5px 10px 0;
   border-radius: 12px;
   
   font-weight:bold;
  }
  .ui-addtask-row {
    display: flex;
    margin-top: -25px;
    height:3.5em;

  }
  button { display: flex;background-color: transparent;border:none;justify-content:center;align-items:center}
  /* button:hover { color: red} */
  /* .espan {padding: 0 7px 5px 7px;} */
`;

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isNewTask: false,
      allLabels: ['NextActions', 'Someday_Actions', 'Costco', 'Alexa'],
    }
  }
  addTask = () => {
    console.log('doood')
  }
  render() {
    const {isNewTask} = this.state;
    return (
      <StyledApp>
        <div>
          <h1>React @ Mentions</h1>
        <h2>Type an '@' symbol to mention</h2>
          {isNewTask ? <><div><img src="https://dl3.pushbulletusercontent.com/WvVHzIuHVbnCMQcYtniRaNwbokmMLeYN/dotsicon.png" alt="icon dots" className="icon-dots" /> <TextInput /></div> <br /><div className="ui-addtask-row"><button onClick={this.addTask}  style={{ backgroundColor: 'tomato', width: '7.5em', height: '2.5em', padding: '5px 7px 5px 7px',justifyContent:'center',borderRadius:'1.23em',color:'#eee',fontWeight:'bold'}}>Add A Task</button></div></>: <button onClick={() => { this.setState({ isNewTask: !isNewTask }) }}>
            <div className="icon-plus-holder">
            <img src="https://image.flaticon.com/icons/svg/561/561230.svg" alt="plus icon" className="icon-plus" /><span className='espan'>Add a New Task</span>
            </div>
        </button>
          }
        
        </div>
        </StyledApp>
    )
  }
}

export default App
