import { labelFormatter } from "../utils/dataFormat.js"

export default class UserAverageSessionsData {
    /**
     * Creates user average session data
     * @param   {Object}     data                     The data object fetched from API
     * @param   {!Number}    data.userId              The user's id
     * @param   {!Array}     data.sessions            The user's average sessions
     */
    constructor(data) {
        this.userId = data.userId;
        this.sessions = data.sessions.map(session => ({
            day: labelFormatter(session.day),
            sessionLength: session.sessionLength,
        }));
    }
}