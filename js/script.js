
// GET PHONE FROM API 
const getPhone = (searchValue='iphone') => { //="samsung"
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
        .then(res => res.json())
        .then(phoneData => lodePhone(phoneData));
};
getPhone();

// LODE PHONE IN WEBSITE 
const lodePhone = (phoneList) => {

    // CONVERT OBJECT TO ARRAY
    let phones = phoneList.data;

    // SHOW BUTTON OR HIDDEN
    let showAllButton= document.getElementById('showAllButton')
    
    // GET PHONE PLACE 
    let phonePlace= document.getElementById('all-phones');
    phonePlace.innerHTML='';


   


    if(phones.length>9){
        showAllButton.classList.remove('hidden');
        let smallPhoneArray=phones.slice(0,9);
         // FOR LOOP USE TO GET ALL PHONE LIST
         smallPhoneArray.forEach(phone => {
            const phoneCard = document.createElement('div');
            phoneCard.innerHTML =`
            <div class="p-5 border-2 border-black bg-white rounded-xl flex justify-center items-center flex-col">
                <figure class="px-10 pt-10 bg-phoneBG">
                    <img src="${phone.image}" alt="phone"/>
                </figure>
                <div class="flex justify-center items-center flex-col space-y-4 text-center mt-5">
                    <h2 class="card-title">${phone.phone_name}</h2> 
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>`;
            phonePlace.appendChild(phoneCard);
        });
        
    }else if(phones.length>0){
        // FOR LOOP USE TO GET ALL PHONE LIST
        phones.forEach(phone => {
            const phoneCard = document.createElement('div');
            phoneCard.innerHTML =`     
            <div class="p-5 border-2 border-black bg-white rounded-xl flex justify-center items-center flex-col">
            <figure class="px-10 pt-10 bg-phoneBG">
                <img src="${phone.image}" alt="phone"/>
            </figure>
            <div class="flex justify-center items-center flex-col space-y-4 text-center mt-5">
                <h2 class="card-title">${phone.phone_name}</h2> 
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Show Details</button>
                </div>
            </div>
            </div>
            `;
            phonePlace.appendChild(phoneCard);
        });
    }
    else{
        showAllButton.classList.add('hidden');
        phonePlace.innerText="No Data Found Please Search Again";
    }


    isLoading(false);
};

// GET SEARCH VALUE 
const searchHandler =() =>{
    let inputValue= document.getElementById('inputValue');
    let value= inputValue.value;
    inputValue.value='';
    getPhone(value);
    isLoading(true)
};


// IS LOADING 
const isLoading = (load)=> {
    let findLoading = document.getElementById('loading');
    console.log(load)
    if( load === true){
        findLoading.classList.remove('hidden');
    }else{
        findLoading.classList.add('hidden');
    }
};
