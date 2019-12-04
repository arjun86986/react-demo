import React, {Component} from 'react';
import DisplayData from './DisplayData';
import DisplayForm from './DisplayForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedData: {
        id: '',
        name: '',
        phoneNumber: '',
        email: '',
        index: -1
      }
    }
  }

  onChangeId = (event) => {
    this.setState({
      selectedData: {
        ...this.state.selectedData,
        id: event.target.value
      }
    });
  }

  onChangeName = (e) => {
    this.setState({
      selectedData: {
        ...this.state.selectedData,
        name: e.target.value
      }
    });
  }

  onChangePhone = (e) => {
    this.setState({
      selectedData: {
        ...this.state.selectedData,
        phoneNumber: e.target.value
      }
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      selectedData: {
        ...this.state.selectedData,
        email: e.target.value
      }
    });
  }

  
  onSubmit = () => {
    const {id, name, phoneNumber, email, index} = this.state.selectedData;

    if(!id  || !name || !phoneNumber || !email) {
        alert('Incomplete details');
        return;
    }
    if(index === -1) {
      this.setState({
        data: [
          ...this.state.data,
          this.state.selectedData
        ]
      });
    } else {
      const data = [...this.state.data];
      data[index] = {...this.state.selectedData};
      this.setState({
        data
      });
    }
      this.setState({
        selectedData: {
          id: '',
          name: '',
          phoneNumber: '',
          email: '',
          index: -1
        }
    });
  }

  onEdit = (index) => {
    this.setState({
      selectedData: {
        ...this.state.data[index],
        index
      }
    });
  }

  render() {
      return (
        <div className="App">
          <DisplayForm
            submit={this.onSubmit}
            selectedData={this.state.selectedData}
            onChangeId={this.onChangeId}
            onChangeName={this.onChangeName}
            onChangePhone={this.onChangePhone}
            onChangeEmail={this.onChangeEmail}
          />
          <DisplayData
            data={this.state.data}
            onEdit={this.onEdit}
          />
        </div>
      );
  }
}

export default App;
