import React, { Component } from 'react';

class Generator extends Component {
  constructor(props){
    super(props);
    this.state = {
      samplevalue: 'a'
    };

    this.handleChange = this.handleChange.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
  }

  handleChange(event) {
    this.setState({samplevalue: event.target.samplevalue});
    console.log(event.target.value)
  }

  downloadFile = () => {
    // currently this only works with default samplevalue state, on update its marked undefined
    console.log(`DEBUG; ${this.state.samplevalue}`)
    const element = document.createElement("a");
    // todo: add in function for formatting the text based on the state of various values added
    const file = new Blob([this.state.samplevalue], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "uikeys.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Command</th>
            <th>Hotkey</th>
          </tr>
          <tr>
            <td>
              Sample Command
            </td>
            <td>
              <input type="text" onChange={this.handleChange} />
            </td>
          </tr>
        </table>
        <br/>
        <button onClick={this.downloadFile}>Download</button>
      </div>
    );
  }
}

export default Generator;
