const currentPath = '/current.json?key=c3715dabff8440939fc32648231602&'

export async function getLocationOverviews(selectedLocations) {
    let locations = [];

    await Promise.all(selectedLocations.map(async (l) => {
        await fetch(process.env.REACT_APP_API_HOST + currentPath + new URLSearchParams({q: l.city}),
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Connection': 'Keep-Alive',
                    // 'Keep-Alive': 'timeout=5, max=1000'
                }
            })
            .then(response => {
                return response.json()
            })
            .then(json => {
                locations.push(json);
            })
            .catch((error) => {
                console.error(error);
            });
    }))

    return locations;
}

export async function getLocationByCity(cityName) {
    let location;
    await fetch(process.env.REACT_APP_API_HOST + currentPath + new URLSearchParams({q: cityName}),
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
        location = json;
    })

    return location;
}
