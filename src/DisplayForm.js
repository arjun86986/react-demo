import React, {Component} from 'react';

export default class DisplayForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phoneNumber: '',
            email: ''
        };
    }

    onChangeId = (event) => {
        this.setState({
            id: event.target.value
        });
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangePhone = (e) => {
        this.setState({
            phoneNumber: e.target.value
        });
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit = () => {
        const {id, name, phoneNumber, email} = this.state;

        if(!id  || !name || !phoneNumber || !email) {
            alert('Incomplete details');
            return;
        }

        this.props.submit({id, name, phoneNumber, email});
        this.setState({
            id: '',
            name: '',
            phoneNumber: '',
            email: ''
        });
    }


  render() {
      return (
        <div className="App">
            <div className="well well-small">
            <div className="form-group">
                <div>
                    <label>
                        ID:
                        <input 
                            className="form-control"
                            value={this.state.id}
                            onChange={this.onChangeId}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Name:
                        <input className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone:
                        <input className="form-control"
                            value={this.state.phoneNumber}
                            onChange={this.onChangePhone}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </label>
                </div>
                <div>
                    <button 
                        className="btn btn-primary"
                        onClick={this.onSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
            </div>
        </div>
      );
  }
}
