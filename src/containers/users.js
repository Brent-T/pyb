import React, { Component } from 'react';
import UserList from '../components/users/user-list';
import { reject } from 'lodash';
import { createUser } from '../lib/users';

const DEFAULT_USERS = [
  createUser('Bob'),
  createUser('Lise'),
  createUser(),
];

class Users extends Component {
  state = {
    users: DEFAULT_USERS
  }

  onUserAdd = () => {
    this.setState(({ users: prevUsers }) => {
      const newUser = createUser();
      const users = [...prevUsers, newUser];
      return { users };
    });
  }

  onUserUpdate = ({ target } , id) => {
    const { name: prop, value } = target;
    this.setState(({ users: prevUsers }) => {
      const users = prevUsers.map(user => {
        if (user.id !== id) return user;
        return { ...user, [prop]: value };
      });
      return { users };
    });
  }

  onUserDelete = (id) => {
    this.setState(({ users: prevUsers }) => {
      const users = reject(prevUsers, ['id', id]);
      return { users };
    });
  }

  render() {
    const { users } = this.state;
    return (
      <UserList
        users={users}
        onUserAdd={this.onUserAdd}
        onUserUpdate={this.onUserUpdate}
        onUserDelete={this.onUserDelete} />
    );
  }
}

export default Users;
