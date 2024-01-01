export default class UserData {
    /**
     * Creates a user based on its data
     * @constructor
     * @param   {Object}    data                                The data object fetched from API
     * @param   {!Number}   data.id                             The user's id
     * @param   {Object}    data.userInfos                      The user's informations
     * @param   {!String}   data.userInfos.firstName            The user's first name
     * @param   {!String}   data.userInfos.lastName             The user's last name
     * @param   {!Number}   data.userInfos.age                  The user's age
     * @param   {!Number}   data.score                          The user's score
     * @param   {Object}    data.keyData                        The user's key data
     * @param   {!Number}   data.keyData.calorieCount           The user's calorie count
     * @param   {!Number}   data.keyData.proteinCount           The user's protein count
     * @param   {!Number}   data.keyData.carbohydrateCount      The user's carbonhydrate count
     * @param   {!Number}   data.keyData.lipidCount             The user's lipid count
     */
    constructor(data) {
      this.userId = data.id
      this.firstName = data.userInfos.firstName;
      this.lastName = data.userInfos.lastName;
      this.keyData = data.keyData
      this.age = data.userInfos.age;
      this.score = data.score || data.todayScore;
      this.userInfos = data.userInfos;
    }
}