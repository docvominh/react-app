export async function connect(user) {
    return await fetch(`http://localhost:8050/chat/connect/${user}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Connection': 'Keep-Alive',
                // 'Keep-Alive': 'timeout=5, max=1000'
            }
        }).then(response => {
        if (response.ok) {
            return response.json()
        }

        throw new Error('Something went wrong');
    }).then(json => {
        return json;
    })

}