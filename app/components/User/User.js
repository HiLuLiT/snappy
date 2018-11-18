import './User.scss';
import React from 'react';

export default class Admin extends React.Component  {
  render() {
    const { firstName, lastName, address, city, state, email, phone} = this.props.user;
    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{address}</td>
        <td>{city}</td>
        <td>{state}</td>
        <td>{email}</td>
        <td>{phone}</td>
      </tr>
    );
  }
}