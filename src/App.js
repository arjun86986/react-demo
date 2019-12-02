import React, {Component} from 'react';
import DisplayData from './DisplayData';
import DisplayForm from './DisplayForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  onSubmit = (data) => {
    this.setState({
      data: [
        ...this.state.data,
        data
      ]
    });
  }

  render() {
      return (
        <div className="App">
          <DisplayForm
            submit={this.onSubmit}
          />
          <DisplayData
            data={this.state.data}
          />
        </div>
      );
  }
}

export default App;
