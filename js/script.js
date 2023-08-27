
// GET PHONE FROM API 
const getPhone = (searchValue) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
        .then(res => res.json())
        .then(phoneData => lodePhone(phoneData));
};


// LODE PHONE IN WEBSITE 
const lodePhone = (phoneList) => {

    // CONVERT OBJECT TO ARRAY
    let phones = phoneList.data;

    // GET PHONE PLACE 
    let phonePlace= document.getElementById('all-phones');
    // FOR LOOP USE TO GET ALL PHONE LIST
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.innerHTML = `
        <div class="card  bg-white shadow-xl border-2 border-black">
            <figure class="pt-10">
                <img src="${phone.image}" />
            </figure>
            <div class="card-body items-center text-center p-5">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        `;
        phonePlace.appendChild(phoneCard);
    });
};

// GET SEARCH VALUE 
const searchHandler =() =>{
    let inputValue= document.getElementById('inputValue');
    let value= inputValue.value;
    inputValue.value='';
    console.log(value)
    getPhone(value);
};