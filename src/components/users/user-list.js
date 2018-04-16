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
    <button onClick={onUserAdd}>Add user</button>
  </Fragment>
);
