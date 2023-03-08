const Time = (props) => {
    let date = new Date(props.time);
    let valueString;

    if (props.timeOnly) {
        valueString = `${date.getHours()}:${date.getMinutes()}`
    } else {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        valueString = `${day}.${month}.${year} ${date.getHours()}:${date.getMinutes()}`
    }

    return (<span>{valueString}</span>)
}

export default Time;