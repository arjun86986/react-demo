import React, {Component} from 'react';

export default class DisplayForm extends Component {

  render() {
      const {id, name, phoneNumber, email} = this.props.selectedData;
      return (
        <div className="App">
            <div className="well well-small">
            <div className="form-group">
                <div>
                    <label>
                        ID:
                        <input 
                            className="form-control"
                            value={id}
                            onChange={this.props.onChangeId}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Name:
                        <input className="form-control"
                            value={name}
                            onChange={this.props.onChangeName}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone:
                        <input className="form-control"
                            value={phoneNumber}
                            onChange={this.props.onChangePhone}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input className="form-control"
                            value={email}
                            onChange={this.props.onChangeEmail}
                        />
                    </label>
                </div>
                <div>
                    <button 
                        className="btn btn-primary"
                        onClick={this.props.submit}
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
