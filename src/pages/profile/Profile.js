import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HttpService } from "../../api/HttpService";
import { Average } from "../../components/average/Average";
import { ChartRadar } from "../../components/chartRadar/ChartRadar";
import { DailyActivity } from "../../components/daily-activity/DailyActivity";
import { Greetings } from "../../components/greetings/Greetings";
import { ChartPie } from "../../components/pieChart/ChartPie";
import { Statistic } from "../../components/statistic/Statistic";
import './Profile.css';

/**
 * Home page display
 * @component
 * @returns {object} <div> html object
 */
export function Profile() {
    const httpService = HttpService();
    const [isLoading, setLoading] = useState(true);
    const [userInformation, setUserInformation] = useState(); 
    const [userActivities, setUserActivities] = useState();
    const [userAverageSession, setUserAverageSession] = useState();
    const [userPerformance, setUserPerformance] = useState();
    const [error, setError] = useState(false);
    const { userId } = useParams();

    //Call of the service to get all the data
    useEffect(() => {
        Promise.all([
            httpService.getUserInformation(userId),
            httpService.getUserActivity(userId),
            httpService.getUserAverageSession(userId),
            httpService.getUserPerformance(userId)
        ]).then(([userInfos, userAct, userAvgSession, userPerf]) => {
            setUserInformation(userInfos.data.data)
            setUserActivities(userAct.data.data)
            setUserAverageSession(userAvgSession.data.data)
            setUserPerformance(userPerf.data)
            setLoading(false)
        }).catch(res => {
            setError(true);
        })
        
    }, [])

    //While the data are loading, we stay in loading status
    if (error) {
        return (
            <div className="error">
                ⚠ L'API ne répond pas, veuillez vérifier si ce dernier est connecté. ⚠
          </div> 
        )
    }
    else if (isLoading) {
        return (
            <div className="loading">Your data are loading...</div>
        )
    } else {
        return (
            <div className="profile">
                <div className="blank">
    
                </div>
                <div className="greet">
                    <Greetings name={userInformation.userInfos.firstName}></Greetings>
                </div>
                <div className="act">
                    <DailyActivity data={userActivities.sessions}/>
                </div>
                <div className="average">
                    <Average data={userAverageSession.sessions}/>
                </div>
                <div className="rad">
                    <ChartRadar data={userPerformance.data}/>
                </div>
                <div className="sco">
                    <ChartPie value={userInformation.todayScore}/>
                </div>
                <div className="sta">
                    <Statistic url="/calories-icon.png" quantity={userInformation.keyData.calorieCount + "kcal"} type="Calories"></Statistic>
                    <Statistic url="/protein-icon.png" quantity={userInformation.keyData.proteinCount + "g"} type="Proteines"></Statistic>
                    <Statistic url="/carbs-icon.png" quantity={userInformation.keyData.carbohydrateCount + "g"} type="Glucides"></Statistic>
                    <Statistic url="/fat-icon.png" quantity={userInformation.keyData.lipidCount + "g"} type="Lipides"></Statistic>
                </div>
            </div>
        )
    }
}