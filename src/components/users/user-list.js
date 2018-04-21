import React, { Fragment } from 'react';
import UserItem from './user-item';

export default ({ users = [], onUserAdd, onUserUpdate, onUserDelete }) => (
  <Fragment>
    {
      users.map(user => (
        <UserItem
          key={user.id}
          user={user}
          onUpdate={onUserUpdate}
          onDelete={onUserDelete} />
      ))
    }
    <AddUserButton style={{ marginTop: 10 }} onClick={onUserAdd} />
  </Fragment>
);

const AddUserButton = ({ onClick, ...props }) => (
  <button onClick={onClick} {...props}>
    <span role="img" aria-label="Plus">👤</span>
    Add user
  </button>
);
