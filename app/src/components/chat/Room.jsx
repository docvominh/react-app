import RoomUser from "./RoomUser";
import RoomMessage from "./RoomMessage";

const Room = (props) => {

    return (
        <div className="columns">
            <div className="column is-8">
                <span className='title is-4'>Room message</span>
                <RoomMessage messages={props.messages}/>
            </div>
            <div className="column is-4">
                <span className='title is-4'>People</span>
                <RoomUser users={props.users}/>
            </div>
        </div>
    )
}

export default Room