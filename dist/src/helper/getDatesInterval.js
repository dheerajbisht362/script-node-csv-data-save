"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatesInRange = exports.HelperClass = void 0;
class HelperClass {
    constructor() {
        this.cache = {};
        this.dateToday = new Date();
    }
    getDatesInRange() {
        const start = new Date();
        const end = new Date(start.getTime());
        end.setDate(start.getDate() + 730);
        const date = new Date(start.toDateString());
        const dates = [];
        while (date <= end) {
            const today = new Date(date);
            const yyyy = today.getFullYear();
            let mm = String(today.getMonth() + 1); // Months start at 0!
            let dd = String(today.getDate());
            if (Number(dd) < 10)
                dd = '0' + dd;
            if (Number(mm) < 10)
                mm = '0' + mm;
            const formattedToday = mm + '/' + dd + '/' + yyyy;
            dates.push(formattedToday);
            date.setDate(date.getDate() + 1);
        }
        return dates;
    }
    daysBehindTodayDate(beginDate) {
        const diff = this.dateToday.getTime() - beginDate.getTime();
        const daydiff = Math.floor(diff / (1000 * 60 * 60 * 24));
        return daydiff;
    }
}
exports.HelperClass = HelperClass;
function getDatesInRange() {
    const start = new Date();
    const end = new Date(start.getTime());
    end.setDate(start.getDate() + 730);
    const date = new Date(start.toDateString());
    const dates = [];
    while (date <= end) {
        const today = new Date(date);
        const yyyy = today.getFullYear();
        let mm = String(today.getMonth() + 1); // Months start at 0!
        let dd = String(today.getDate());
        if (Number(dd) < 10)
            dd = '0' + dd;
        if (Number(mm) < 10)
            mm = '0' + mm;
        const formattedToday = mm + '/' + dd + '/' + yyyy;
        dates.push(formattedToday);
        date.setDate(date.getDate() + 1);
    }
    return dates;
}
exports.getDatesInRange = getDatesInRange;
