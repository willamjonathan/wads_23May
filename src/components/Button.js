import axios from "axios";
import {useState} from 'react';

const Button = () => {
    const[username, setUsername] = useState("")
    const [valid,setValid] = useState(0);

    const handleClick = () => {
        const data = {
            username: username
        }
        axios.get("http://127.0.0.1:8000/user", data, {
            headers:{
                "accept":"application/json",
                "content-type": "application/json"
            }
        }
        ).then((response)=>{
        if(response['data'].status == 'ok'){
            setValid(1)
            console.log("same")
        }
        else{
            setValid(0)
            console.log("diff")
        }})

        .catch(function (error){
            console.log(error);
        })
        }
        return(
        <div>
            {valid ? (
                <p>Nice!!</p>
            ):( 
                <p>HUHU;'</p>
            )}
            <button onClick = {handleClick}>"click here"</button>
        </div>
        )
}
