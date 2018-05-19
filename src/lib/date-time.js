import { format } from 'date-fns';

const HHMMSS_REGEX = new RegExp(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/);
const HHMMSS_FORMAT = 'HH:mm:ss';

export function isHHMMSSFormat(value) {
  return HHMMSS_REGEX.test(value);
}

export function formatHHMMSS(value) {
  return isHHMMSSFormat(value)
    ? value
    : format(value, HHMMSS_FORMAT);
}
