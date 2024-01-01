import { performanceKindFormatter } from "../utils/dataFormat.js"

export default class UserPerformanceData {
    /**
   * Creates the user's performances data
   * @param   {Array}     data             The data array fetched from API
   * @param   {!Number}   data.userId      The user's id
   * @param   {Object}    data.kind        The performance kinds
   * @param   {Object[]}  data.data        The user's data
   * @param   {!Number}   data.data.kind   The user's data performance kinds
   * @param   {!Number}   data.data.value  The user's data value
   */

  constructor(data) {
    this.userId = data.userId;
    this.data = data.data
      .map((performance) => {
        return {
          kind: performanceKindFormatter(performance.kind),
          value: performance.value,
        }
      })
      .reverse()
  }
}