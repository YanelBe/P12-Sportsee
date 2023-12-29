import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import WelcomeName from "../../components/WelcomeName/WelcomeName"
import SideBar from "../../components/SideBar/SideBar"

import ChartDailyActivity from "../../components/ChartDailyActivity/ChartDailyActivity"
import ChartPerformance from "../../components/ChartPerformance/ChartPerformance"
import ChartScore from "../../components/ChartScore/ChartScore"
import ChartSessionLength from "../../components/ChartSessionLength/ChartSessionLength"

import KeyDataCard from "../../components/KeyDataCard/KeyDataCard"

import CaloriesIcon from "../../assets/calories-icon.svg"
import ProteinIcon from "../../assets/protein-icon.svg"
import CarbsIcon from "../../assets/carbs-icon.svg"
import FatIcon from "../../assets/fat-icon.svg"

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../datas/mock/mockedData"
import { getUserData } from "../../services/fetch"


export default function User() {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [isError, setIsError] = useState(false);
  
    const [userData, setUserData] = useState();
    const [userActivity, setUserActivity] = useState();
    const [userSessionDuration, setUserSessionDuration] = useState();
    const [userPerformance, setUserPerformance] = useState();

    //Toggle entre données mock et l'appel à l'API
    const datasMocked = true; 
  
    useEffect(() => {


      /**
       * fetchData - Récupère les données en fonction de l'ID utilisateur, avec soit des données mock soit l'API
       * @param {string} userId - L'identifiant de l'utilisateur pour récupérer les données.
       */
      async function fetchData() {
        try {
        //Utilisation des donénes mock
          if (datasMocked) {
            const currentUserData = USER_MAIN_DATA.find(
              (data) => data.id.toString() === userId
            );
            const currentUserActivity = USER_ACTIVITY.find(
              (data) => data.userId.toString() === userId
            );
            const currentUserSessionDuration = USER_AVERAGE_SESSIONS.find(
              (data) => data.userId.toString() === userId
            );
            const currentUserPerformance = USER_PERFORMANCE.find(
              (data) => data.userId.toString() === userId
            );
  
            if (
              !currentUserData ||
              !currentUserActivity ||
              !currentUserSessionDuration ||
              !currentUserPerformance
            ) {
              throw new Error("Données non trouvées !");
            }
  
            setUserData(currentUserData);
            setUserActivity(currentUserActivity);
            setUserSessionDuration(currentUserSessionDuration);
            setUserPerformance(currentUserPerformance);
            
        //Else, appel à l'API
          } else {
            const [
              userData,
              userActivity,
              userSessionDuration,
              userPerformance,
            ] = await Promise.all([
              getUserData(userId, "main"),
              getUserData(userId, "activity"),
              getUserData(userId, "average"),
              getUserData(userId, "performance"),
            ]);
  
            setUserData(userData);
            setUserActivity(userActivity);
            setUserSessionDuration(userSessionDuration);
            setUserPerformance(userPerformance);
          }
  
          setIsError(false);
        } catch (error) {
          setIsError(true);
          navigate("/Error");
        }
      };
  
      fetchData();
    }, [userId, navigate, datasMocked]);
  
    if (!userData || !userActivity || !userSessionDuration || !userPerformance) {
      return null;
    }

    return (
        isError ? navigate("/Error") 
        : (
        <div className="main">
            <SideBar />
            <div className="dashboard">
                <div>
                    <WelcomeName 
                        id={userData.id}
                        firstname={userData.userInfos.firstName}
                    />
                    <section className="charts">
                        <article className="charts__container">
                            <div className="activity-chart">
                                <ChartDailyActivity 
                                    dataActivity={userActivity.sessions}
                                />
                            </div>
                            <div className="small-charts">
                                <div className="session-length">
                                    <ChartSessionLength 
                                        dataSessionDuration={userSessionDuration.sessions}
                                    />
                                </div>
                                <div  className="performance-chart">
                                    <ChartPerformance 
                                        dataPerformance={userPerformance.data}
                                    />
                                </div>
                                <div  className="score-chart">
                                    <ChartScore 
                                        dataScore={userData}
                                    />
                                </div>
                            </div>
                        </article>

                        <aside className="key-data-container">
                            <KeyDataCard
                                icon={CaloriesIcon}
                                keyDataUnit={[`${userData.keyData.calorieCount}`, "kCal"]}
                                keyDataType="Calories"
                                id = {userData.id}
                            />
                            <KeyDataCard
                                icon={ProteinIcon}
                                keyDataUnit={[`${userData.keyData.proteinCount}`, "g"]}
                                keyDataType="Protéines"
                                id = {userData.id}
                            />
                            <KeyDataCard
                                icon={CarbsIcon}
                                keyDataUnit={[`${userData.keyData.carbohydrateCount}`, "g"]}
                                keyDataType="Glucides"
                                id = {userData.id}
                            />
                            <KeyDataCard
                                icon={FatIcon}
                                keyDataUnit={[`${userData.keyData.lipidCount}`, "g"]}
                                keyDataType="Lipides"
                                id = {userData.id}
                            />
                        </aside>
                    </section>
                </div>
            </div>
        </div>
    )
    )
}
