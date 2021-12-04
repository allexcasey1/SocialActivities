export class EventDate {
    _id: string;
    _date: Date;
    constructor(id: string, date: Date) {
        this._id = id;
        this._date = date;
    }
    getDate() {
        return this._date.getDate();
    }
}