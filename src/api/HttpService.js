export function HttpService() {
    const axios = require('axios').default;

    return {
        //Return user infos from his ID
        getUserInformation(userId) {
            return axios.get('http://localhost:3002/user/' + userId)
        },
        //Return user activity from his ID
        getUserActivity(userId) {
            return axios.get('http://localhost:3002/user/' + userId + '/activity')
        },
        //Return the user average session data from his ID
        getUserAverageSession(userId) {
            return axios.get('http://localhost:3002/user/' + userId + '/average-sessions')
        },
        //Return user stats data from his ID
        getUserPerformance(userId) {
            return axios.get('http://localhost:3002/user/' + userId + '/performance')
        }
    }
}