import uuid from 'uuid/v4';

export function createUser(name) {
  return {
    id: uuid(),
    name,
    bet: Date.now(),
  };
}
