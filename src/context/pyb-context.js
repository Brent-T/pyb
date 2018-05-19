import React, { Component } from 'react';
import { reject } from 'lodash';
import { createUser } from '../lib/users';

const PybContext = React.createContext();

const DEFAULT_USERS = [
  createUser('Bob'),
  createUser('Lise'),
  createUser(),
];

export class PybContextProvider extends Component {
  state = {
    users: DEFAULT_USERS,
  }

  addUser = () => {
    this.setState(({ users: prevUsers }) => {
      const newUser = createUser();
      const users = [...prevUsers, newUser];
      return { users };
    });
  }

  updateUser = (id, prop, value) => {
    this.setState(({ users: prevUsers }) => {
      const users = prevUsers.map(user => {
        if (user.id !== id) return user;
        return { ...user, [prop]: value };
      });
      return { users };
    });
  }

  removeUser = (id) => {
    this.setState(({ users: prevUsers }) => {
      const users = reject(prevUsers, ['id', id]);
      return { users };
    });
  }

  getValue() {
    return {
      ...this.state,
      addUser: this.addUser,
      updateUser: this.updateUser,
      removeUser: this.removeUser,
    };
  }

  render() {
    const value = this.getValue();

    return (
      <PybContext.Provider value={value}>
        {this.props.children}
      </PybContext.Provider>
    );
  }
}

export default PybContext;
