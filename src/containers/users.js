import React, { Component } from 'react';
import UserList from '../components/users/user-list';
import PybContext from '../context/pyb-context';
import withContext from '../hoc/with-context';

class Users extends Component {
  onUserUpdate = ({ target }, id) => {
    const { name, value } = target;

    const { context } = this.props;
    const { updateUser } = context;
    updateUser(id, name, value);
  }

  render() {
    const { context } = this.props;
    const { users, addUser, removeUser } = context;
    return (
      <UserList
        users={users}
        onUserAdd={addUser}
        onUserUpdate={this.onUserUpdate}
        onUserDelete={removeUser} />
    );
  }
}

export default withContext(PybContext)(Users);
