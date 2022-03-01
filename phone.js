console.log('kaj hosce')
// document.getElementById('input-error').style.display = 'none';
let name = ''
const loadData = () => {
    name = document.getElementById('input-text').value

    if (name == '') {
        console.log('not found')
        document.getElementById('input-error').style.display = 'block';

    }

    else {
        document.getElementById('input-error').style.display = 'none';
        // #error message bondho koro 
        // #input field faka koro
        //document.getElementById('head1').style.display = 'none';
        document.getElementById('input-text').value = ''
        const url = `https://openapi.programming-hero.com/api/phones?search=${name}`
        console.log(url)
        // fetch(url).then(res => res.json()).then(data => displayData(data.meals))
        fetch(url)
            .then(res => res.json())
            .then(data => {
                displayData(data.data.slice(0, 20))
                console.log(data)


                if (data.data.length >= 20) {
                    document.getElementById('buttonShow').style.display = 'block';
                }
            })

    }

}

const displayData = datas => {
    // console.log(datas.length)


    // console.log(datas)
    const mobiles = document.getElementById('mobile-container')
    mobiles.textContent = ''

    for (const data of datas) {

        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('col-md-6')
        div.classList.add('col-sm-12')
        div.innerHTML =
            `
            <div class="card">
            <img src='${data.image}' class="w-50 h-50 card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.phone_name}</h5>
                <p class="card-text">${data.brand}</p>
                <button onClick="loadSingleData('${data.slug}')">Details</button>
            </div>
        </div>
        
        `

        mobiles.append(div)
    }


}

const loadSingleData = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleData(data.data))

    // const url= ``

    // console.log(url)

}

const displaySingleData = data => {
    console.log(data)
    console.log(data.others)
    // console.log(data.others.GPS)
    const singleMeal = document.getElementById('single-meal');
    singleMeal.textContent = ''
    const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML = `
  
    <img src="${data.image}" class="w-50 card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h5 class="card-title">Main features</h5>
            <p class="card-text">
        storage:   ${data.mainFeatures.storage}
        
       
            </p>
            <p class="card-text">
            chip set:   ${data.mainFeatures.chipSet}
            
           
                </p>

                <p class="card-text">
                memory:  
                 ${data.mainFeatures.memory

        }
                
               
                    </p>
               
            <p class="card-text">
           
            Relased data: ${data?.releaseDate !== '' ? data.releaseDate : 'No Release Date Found'}
            
           
                </p>

            <p class="card-text">
            display size:   ${data.mainFeatures.displaySize}
                </p>

         
            
            
       

            <h5  class="card-title">Sensor</h5>
            <p>
            ${data.mainFeatures.sensors
        // for (const d of data.mainFeatures.sensors){
        // }
        }      
        loadS()     
            </p >
           
           
          

            <p class="card-text">
            Others : ${data.others ? ` 
            <p>GPS : ${data.others.GPS}</p>
            <p>WLAN : ${data.others.WLAN}</p>
            <p>Bluetooth : ${data.others.Bluetooth}</p>
            
            
            ` : 'no data other found'
        }
            </p >






    <div id='sensor'></div>
        </div >
    `
    // const sensorContainer = document.getElementById('sensor1')

    // mysensor = data.mainFeatures.sensors
    // console.log(mysensor)
    // for (const sen of mysensor) {
    //     const p = document.createElement('p')

    //     p.innerText = `${ sen } `;
    //     sensorContainer.appendChild(p)
    // }

    // singleMeal.appendChild(div)
    singleMeal.appendChild(div)


}


const loadS = () => { console.log('hello') }
const allShow = () => {
    document.getElementById('input-error').style.display = 'none';
    // #error message bondho koro 
    // #input field faka koro
    //document.getElementById('head1').style.display = 'none';
    document.getElementById('input-text').value = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=${name}`
    console.log(url)
    // fetch(url).then(res => res.json()).then(data => displayData(data.meals))
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))

    document.getElementById('buttonShow').style.display = 'none';
}