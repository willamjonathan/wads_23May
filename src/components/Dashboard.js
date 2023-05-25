import "../styles/Dashboard.css"
import { Link} from "react-router-dom";
import '../styles/Link.css'


function Dashboard(){

    const handleClick = () => {
        console.log(window.localStorage.getItem("access_token"))
    }

    return(<div>
        <div class="Dashboard">
            <div class="container-dashboard">
            <div class ="title-dashboard">
                This text indicates that you are in the Dashboard
                <button onClick={handleClick}>Check console!</button>
            </div>
            <div class = "exit">
                <Link to ="/" className="link">EXIT</Link>
            </div>
            </div>
        </div>

    </div>)
}

export default Dashboard;