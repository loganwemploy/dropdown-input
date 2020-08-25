import React, { Component } from 'react';
import styled from 'styled-components';
import { EditorState } from "draft-js";
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import Editor from "draft-js-plugins-editor";
import mentions from '../mentions.js'
import 'draft-js-mention-plugin/lib/plugin.css';
const StyledTextInput  = styled.div`
  .editor {
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  padding: 16px;
  border-radius: 2px;
  margin-bottom: 2em;
  box-shadow: inset 0px 1px 8px -3px #ABABAB;
  background: #fefefe;
}

.draftJsMentionPlugin__mention__29BEd {
    color:#eee;
    background-color: tomato;
    font-weight: bold;
    border-radius: 4px;
    padding: 5px 7px 5px 7px;
}
.draftJsMentionPlugin__mention__29BEd::before {
   content: url("https://dl3.pushbulletusercontent.com/aCro7gHPSfzgn5iitsLa0NqluEA6cNm5/rightbadge.png")
   /* content: "yo"; */
}

.editor :global(.public-DraftEditor-content) {
  min-height: 140px;
}

.blue {color:blue}
`;

export class TextInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editorState: EditorState.createEmpty(),
            suggestions: mentions
        }

        this.mentionPlugin = createMentionPlugin();
    }
    handleChange = (editorState) => {
        this.setState({ editorState });
        
    }

    onSearchChange = ({value}) => {
        this.setState({
            suggestions: defaultSuggestionsFilter(value, mentions)
        })
        
    }
    
    render() {
        const { MentionSuggestions } = this.mentionPlugin;
        const plugins = [this.mentionPlugin];
        
        return (
            <StyledTextInput>
                <div className="editor">
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.handleChange}
                        plugins={plugins}
                    />
                    <MentionSuggestions
                        onSearchChange={this.onSearchChange}
                        suggestions={this.state.suggestions}
                    
                    />
                </div>
            </StyledTextInput>
        )
    }
}

export default TextInput
