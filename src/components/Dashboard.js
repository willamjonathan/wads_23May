import "../styles/Dashboard.css"
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import '../styles/Link.css'


function Dashboard(){
    return(<div>
        <div class="Dashboard">
            <div class="container-dashboard">
            <div class ="title-dashboard">
                This text indicates that you are in the Dashboard

            </div>
            <div class = "exit">
                <Link to ="/" className="link">EXIT</Link>
            </div>
            </div>
        </div>

    </div>)
}

export default Dashboard;