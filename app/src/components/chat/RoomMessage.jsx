const RoomMessage = (props) => {
    let count = 0;
    return (
        <ul>
            {props.messages.map(m => {
                return <li key={count++}>{m}</li>
            })}
        </ul>
    )
}

export default RoomMessage