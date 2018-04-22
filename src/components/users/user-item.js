import React from 'react';
import TimePicker from '../common/time-input';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
};

export default ({ user, onUpdate, onDelete }) => {
  const { id, name, bet } = user;
  return (
    <div style={containerStyles}>
      <input type='text' name='name' value={name} onChange={e => onUpdate(e, id)} />
      <TimePicker
        name='bet'
        value={bet}
        onBlur={e => onUpdate(e, id)} />
      <button className='btn--small' onClick={() => onDelete(id)}>
        <span className='span__emoji' role='img' aria-label='Delete user'>🗑</span>
      </button>
    </div>
  );
};
