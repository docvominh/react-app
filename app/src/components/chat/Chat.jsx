import {useEffect, useState} from "react";
import Login from "./Login";
import Room from "./Room";
import './Chat.css'
import {getLocationOverviews} from "../weather/ApiService";
import {connect} from "./ChatService";

const Chat = () => {

    const [isLogin, setLogin] = useState(false);
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    let user;
    let connection;


    useEffect(() => {
        let loggedUser = sessionStorage.getItem('loggedUser')
        if (loggedUser != undefined) {
            connect(loggedUser).then(json => {
                if (json == true) {
                    setLogin(true)
                } else {
                    login(loggedUser)
                }
            })

        }

        fetch("http://localhost:8050/chat/users",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
            if (response.ok) {
                return response.json()
            }

            throw new Error('Something went wrong');
        }).then(json => {
            setUsers(json)
        })

    }, [])

    const login = (username) => {
        connection = new WebSocket(`ws://localhost:8050/socket?user=${username}`)

        // Connection opened
        connection.addEventListener('open', (event) => {
            user = username;
            setLogin(true)
            connection.send({user: user, message: `${user} join the party`})
            sessionStorage.setItem("loggedUser", user)

            setUsers((prevState) => {
                return [...prevState, user]
            })

        });

        // Listen for messages
        connection.addEventListener('message', (event) => {
            setMessages((prevState) => {
                return [...prevState, event.data]
            })
        });
    }


    return (
        <div className='chat'>
            {!isLogin && <Login login={login}/>}
            {isLogin && <Room user={user} messages={messages} users={users}/>}
        </div>
    )
}

export default Chat