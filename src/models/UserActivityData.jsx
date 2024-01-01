import { dateFormatter } from "../utils/dataFormat.js"

export default class UserActivityData {
    /**
     * Creates user activity data
     * @param   {Object}     data                     The data object fetched from API
     * @param   {!Number}    data.userId              The user's id
     * @param   {!Array}     data.sessions            The user's activity sessions
     * @param   {String}     session.day              The date of the activity session
     * @param   {Number}     session.kilogram         The user's weight during the session
     * @param   {Number}     session.calories         The number of calories burned during the session
     */
    constructor(data) {
        this.userId = data.userId;
        this.sessions = data.sessions.map(session => ({
            day: dateFormatter(session.day),
            kilogram: session.kilogram,
            calories: session.calories,
        }));
    }
}