import React, { Component } from 'react'
import Dropdown from './components/Dropdown';
import CustomInput from './components/CustomInput';
export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAtVisible: false,
      isDropdownOpen: true,
      labels: [],
      isNewTask: false,
      allLabels: ['NextActions', 'Someday_Actions', 'Costco', 'Alexa'],
      userCustomInput: ''
    }
  }

  selectedFromDropdown = (index, label) => {
    console.log('index:', index, 'label:', label)
    let inny = document.getElementById('dainput');
    
    inny.value = inny.value + `${label} `;
    setTimeout(() => { inny.value = inny.value.replace("@", ""); }, 280);
    this.setState({ isDropdownOpen: false }) 
    
  }
   
  customInputChange = (e) => {
    console.log("trfgttvalue",e.target.value)
    if (e.target.value.includes("@")) { this.setState({ isAtVisible: true }) };
   

  

  }
  render() {
    const { isAtVisible, isDropdownOpen, isNewTask, allLabels} = this.state;
    return (
      <>
        <div>
          {/* Click Button to show Input field */}
          {isNewTask ? <CustomInput customInputChange={this.customInputChange} /> : <button onClick={() => { this.setState({ isNewTask: !isNewTask }) }}>
            Add a Todo &rarr;
        </button>
          }</div>
        {/*If an @ symbol is in the input and the dropdown is closed - then open dropdown */}
        {isAtVisible && isDropdownOpen ? <Dropdown allLabels={allLabels} selectedFromDropdown={this.selectedFromDropdown} /> : null}
      </>
    )
  }
}

export default App
