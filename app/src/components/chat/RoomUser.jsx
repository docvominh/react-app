const RoomUser = (props) => {

    return (
        <ul>
            {props.users.map(user => {
                return <li key={user}>{user}</li>
            })}
        </ul>
    )
}

export default RoomUser;