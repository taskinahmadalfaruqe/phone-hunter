
// GET PHONE FROM API 
const getPhone = async (searchValue = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    const data = await res.json();
    const phoneData = data.data;
    // console.log(phones);
    lodePhone(phoneData, isShowAll)
}

getPhone();

// LODE PHONE IN WEBSITE 
const lodePhone = (phones, isShowAll) => {
    // SHOW BUTTON OR HIDDEN
    let showAllButton= document.getElementById('showAllButton')
    
    // GET PHONE PLACE 
    let phonePlace= document.getElementById('all-phones');
    phonePlace.innerHTML='';

    if(phones.length>9 && !isShowAll){
        showAllButton.classList.remove('hidden');
        
    }else if(phones.length>0){
        showAllButton.classList.add('hidden');
    }else{
        showAllButton.classList.add('hidden');
        phonePlace.innerText="No Data Found Please Search Again";
    };
    console.log(isShowAll);

    if(!isShowAll){
        phones= phones.slice(0,6);
    };

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
        </div>`;
        phonePlace.appendChild(phoneCard);
    });

    isLoading(false);
};

// GET SEARCH VALUE 
const searchHandler =(isShowAll) =>{
    let inputValue= document.getElementById('inputValue');
    let value= inputValue.value;
    getPhone(value,isShowAll);
    isLoading(true)
};


// IS LOADING 
const isLoading = (load)=> {
    let findLoading = document.getElementById('loading');
    if( load === true){
        findLoading.classList.remove('hidden');
    }else{
        findLoading.classList.add('hidden');
    }
};


// SHOW ALL ALL PHONE 
const isShowAll= ()=>{
    searchHandler(true);
}