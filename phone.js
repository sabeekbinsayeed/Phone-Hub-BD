console.log('kaj hosce')
// document.getElementById('input-error').style.display = 'none';

const loadData = () => {
    const name = document.getElementById('input-text').value

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
            .then(data => displayData(data.data))

    }

}

const displayData = datas => {
    console.log(datas)
    const mobiles = document.getElementById('mobile-container')

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
    const singleMeal = document.getElementById('single-meal');
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
  
    <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">
        storage:   ${data.mainFeatures.storage}
       
            </p>

            <p class="card-text">
            display size:   ${data.mainFeatures.displaySize}
                </p>

         
            
            
            </p>
        </div>
   `
    singleMeal.appendChild(div)

}