const $post = $('#post-btn')
const $location_name = $('#location_name')
const $distance = $('#distance')
const $description = $('#description')

const container = $('#container')
//http://localhost:8000
let loadSpots = async () => {
    await fetch('http://localhost:8000/home')
    .then ((response)=> response.json())
    .then ((data) => {
        data.forEach((element) => {
            console.log(element)
            let bodydata = $(`
            <div class="card">
                <div class = name><strong>${element.location_name}</strong></div>
                <div class = distance>${element.distance} mi </div>
                <div class = description>${element.description}</div>
            </div>`)

            bodydata.appendTo($('#container'))
        })
    })
}


$post.on('click', async(e) => {
    console.log($description.val())
    try{
        const response = await fetch('http://localhost:8000/home',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "location_name":`${$location_name.val()}`,
                "distance":`${$distance.val()}`,
                "description":`${$description.val()}`
            })
        }).then((response) => {
            console.log(response)
            return response.json()
        }).then((data)=>{
            console.log(data)
            let newInfo = $(`
        <div class="card">
            <div class = name><strong>${data.location_name}</strong></div>
            <div class = distance>${data.distance} mi </div>
            <div class = description>${data.description}</div>
        </div>`)

        newInfo.appendTo($('#container'))
        })
    }catch(error){
        console.log(error.message)
    }
})

loadSpots()