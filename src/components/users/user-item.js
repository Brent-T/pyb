import React from 'react';
import TimePicker from '../common/time-input';

export default ({ user, onUpdate, onDelete }) => {
  const { id, name, bet } = user;
  return (
    <div>
      <input name="name" value={name} onChange={e => onUpdate(e, id)} />
      <TimePicker
        name="bet"
        value={bet}
        onBlur={e => onUpdate(e, id)} />
      <button onClick={() => onDelete(id)}>
        <span role="img" aria-label="Delete user">❌</span>
      </button>
    </div>
  );
};
