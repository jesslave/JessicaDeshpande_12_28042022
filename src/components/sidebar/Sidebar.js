import './Sidebar.css'
import { Icon } from "../icon/Icon";

export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="icons">
                <Icon url="/yoga.png"></Icon>
                <Icon url="/swim.png"></Icon>
                <Icon url="/bike.png"></Icon>
                <Icon url="/weight.png"></Icon>
            </div>
            <span className="copyright">Copyright, SportSee2022</span>
        </div>
    )
}