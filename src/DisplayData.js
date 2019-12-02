import React, {Component} from 'react';

export default class DisplayData extends Component {


  render() {
      return (
        <div className="App">
            <table className="table table-borderd">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.email}</td>
                            <td>
                                <span>{'Edit '}</span>
                                <span>{' Delete'}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
  }
}
