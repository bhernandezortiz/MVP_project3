const container = $('#container')

let loadSpots = async () => {
    await fetch('/home')
    .then ((response)=> response.json())
    .then ((data) => {
        data.forEach((element) => {
            console.log(element)
            let bodydata = $(`
            <div class="card">
                <div class = name><strong>${element.location_name}</strong></div>
                <div class = distance>${element.distance} mi </div>
                <div class = description>${element.description}</div>
                <form action="${element.google_maps}">
                <button class = dirbutton type="submit">Directions</button>
             </form>
            </div>`)

            bodydata.appendTo($('#container'))
        })
    })
}

loadSpots()