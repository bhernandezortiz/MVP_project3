const $post = $('#post-btn')
const $location_name = $('#location_name')
const $distance = $('#distance')
const $description = $('#description')
const $container = $('#container')


//http://localhost:8000


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
                <button class="delete" id="${element.id}">Delete</button>
            </div>`)

            $container.append(bodydata)

            $(`.delete`).on("click", async function(e) {
              e.preventDefault();
              const {id} = this;
              console.log('test')
               fetch(`/home/${id}`, {
                method: 'DELETE'
              }).then((response)=> {
                if(response.ok)  {
                  console.log('Data was deleted')
                } else {
                  console.error('Failed to delete')
                }
              })
              bodydata.remove();
            });
        })
    })
}


$post.on('click', async(e) => {
    console.log($description.val())
    try{
        const response = await fetch('/home',{
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

        newInfo.prependTo($('#container'))
        deleteListener()
        })
    }catch(error){
        console.log(error.message)
    }
})

loadSpots()

let deleteListener = function() {  $(`.delete`).on("click", async function(e) {
    e.preventDefault();
    const {id} = this;
    console.log(id)
     fetch(`/home/${id}`, {
      method: 'DELETE'
    }).then((response)=> {
      if(response.ok)  {
        console.log('Data was deleted')
      } else {
        console.error('Failed to delete')
      }
    })
    newInfo.remove();
  });
  }