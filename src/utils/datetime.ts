import 'moment/dist/locale/th';
import moment from 'moment';

moment.locale('th');

export function dateFormat(
  date?: string | Date | null,
  fullmonth = false,
  time = false,
) {
  const m = moment(date);

  if (!m.isValid()) return '';

  const month = m.format(fullmonth ? 'MMMM' : 'MMM');

  return m.format(`DD ${month} YYYY ${time ? ' HH:mm' : ''}`);
}
