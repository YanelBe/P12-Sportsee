import YogaIcon from '../../assets/yoga-icon.svg'
import SwimIcon from '../../assets/swim-icon.svg'
import BikeIcon from '../../assets/bike-icon.svg'
import WeightIcon from '../../assets/weight-icon.svg'

//Composant de la sidebar à gauche de l'application, avec les icônes et le copyright
export default function SideBar(){

    return(
        <aside className="sidebar">
            <div className="sidebar__image-container" >
                <img src={YogaIcon} alt="Yoga"/>
                <img src={SwimIcon} alt="Swimming"/>
                <img src={BikeIcon} alt="Biker"/>
                <img src={WeightIcon} alt="Weight"/>
            </div>
            <div className="sidebar__copyright">Copyright, SportSee 2023</div>
        </aside>
    )
}