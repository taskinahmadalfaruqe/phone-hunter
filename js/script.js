
// GET PHONE FROM API 
const getPhone = async (searchValue = 'samsung', isShowAll) => {
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

    if(!isShowAll){
        phones= phones.slice(0,6);
    };

    // FOR LOOP USE TO GET ALL PHONE LIST
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.innerHTML=`
        <div class="p-5 border-2 border-black bg-white rounded-xl flex justify-center items-center flex-col">
            <figure class="px-10 pt-10 bg-red-500 w-full">
                <img src="${phone.image}" alt="phone"/>
            </figure>
            <div class="flex justify-center items-center flex-col space-y-4 text-center mt-5">
                <h2 class="card-title">${phone.phone_name}</h2> 
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button onclick="showModal('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        </div>
        `;
        phonePlace.appendChild(phoneCard);
    });

    isLoading(false);
};

// GET SEARCH VALUE 
const searchHandler =(isShowAll) =>{
    let inputValue= document.getElementById('inputValue');
    let value= inputValue.value;
    if(value=== ""){
        return alert('Please Add A keyword For Search');
    }else{
        getPhone(value,isShowAll);
        isLoading(true)
    }

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

// SHOW MODAL 
const showModal= async (id)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const dataSheet =await response.json();
    const phoneDetails =dataSheet.data;
    setPhoneDetails(phoneDetails);
}

const setPhoneDetails = (phoneData)=>{
    my_modal.showModal();
    console.log(phoneData)
    let findModal= document.getElementById('modalId');
    findModal.innerHTML=`
    <img src="${phoneData.image}" class="mx-auto mb-5" alt="Phone_Image">
    
    <div class="my-5">
        <h3class="mt-5" >${phoneData.name}</h3class=>
        <p class="py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <p>Storage: <span id="storage">${phoneData.mainFeatures.storage}</span></p>
        <p>Display Size: <span id="Display_Size">${phoneData.mainFeatures.displaySize}</span></p>
        <p>Chipset: <span id="chipset">${phoneData.mainFeatures.chipSet}</span></p>
        <p>Memory: <span id="memory">${phoneData.mainFeatures?.memory}</span></p>
        <p>Slug: <span id="slug">${phoneData.slug}</span></p>
        <p>Release data : <span id="release_data">${phoneData.releaseDate}</span></p>
        <p>Brand: <span id="brand">${phoneData.brand}</span></p>
        <p>GPS: <span id="gps">${phoneData.others.GPS}</span></p>
    </div>

    <div class="modal-action">
    <button class="btn bg-red-500 hover:bg-red-500 text-white">Close</button>
    </div>

    `;
}