import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCustomInput = styled.div`
  
`;

export class CustomInput extends Component {
    checkit = (e) => {
        if (e.target.value.includes("world")) {
            console.log('dis be', e.target.value)
        }
    }
    render() {
        return (
            <StyledCustomInput>
                <div style={{ display: 'flex', flexWrap: 'nowrap', border: '1px solid #333', }} id="dainput" onChange={this.props.customInputChange} contentEditable="true">
                
                </div>
            </StyledCustomInput>
        )
    }
}

export default CustomInput
