import uuid from 'uuid/v4';
import { formatHHMMSS } from './date-time';

export function createUser(name, bet = Date.now()) {
  return {
    id: uuid(),
    name,
    bet: formatHHMMSS(bet),
  };
}
