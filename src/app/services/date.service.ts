import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})

export class DateService {

  getRoundDate(startDate: string, endDate: string): string {
    const start = DateTime.fromISO(startDate);
    const end = DateTime.fromISO(endDate);
    const returnDate = start.setLocale('en-US').toFormat('LLL dd').concat('-');

    if (start.hasSame(end, 'month')) {
      return returnDate.concat(end.setLocale('en-US').toFormat('dd'));
    }

    return returnDate.concat(end.setLocale('en-US').toFormat('LLL dd'));
  }

  getDate(date: string): string {
    const dt = DateTime.fromJSDate(date);
    return dt.setLocale('en-US').toFormat('LL-dd-yyyy');
  }

  getTime(date: string): string {
    const dt = DateTime.fromJSDate(date);
    return dt.setLocale('en-US').toFormat('t').toLowerCase();
  }

  getDateTime(date: string): string {
    const dt = DateTime.fromJSDate(date);
    return dt.setLocale('en-US').toFormat('LL-dd-yyyy t');
  }
}
