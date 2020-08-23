import React, { Component } from 'react'

export class CustomInput extends Component {
    checkit = (e) => {
        if (e.target.value.includes("world")) {
            console.log('dis be', e.target.value)
        }
    }
    render() {
        return (
            <div>
                
                <input style={{display:'flex',flexWrap:'nowrap'}} id="dainput" onChange={this.props.customInputChange} type="text" placeholder="search a task"/>
            </div>
        )
    }
}

export default CustomInput
