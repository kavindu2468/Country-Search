let body="";
fetch('https://restcountries.com/v3.1/all')
            .then(res=>res.json())
            .then(data=>{
                data.forEach(element => {
                    body+=`<div class="col">
                    <div class="card shadow-sm" data-aos="fade-up"
                    data-aos-duration="3000">
                      <img src="${element.flags.png}" alt="">
                      <div class="card-body">
                        <h5>${element.name.common}</h5>
                        <p class="card-text size">Capital:${element.capital}<br><br>Region:${element.region}<br><br>Population:${element.population}</p>
                        <div class="d-flex justify-content-between align-items-center">
                             <a href="${element.maps.googleMaps}">
                              <button class="btn btn-primary">View on Google Maps</button>
                              </a>
                        </div>
                      </div>
                    </div>
                  </div>`
                });
                let row=document.getElementById("row");
                row.innerHTML=body;
                AOS.init();
                console.log(data);
                
            })
 let txtcountry=document.getElementById("txtcountry");
 console.log(txtcountry)
 txtcountry.addEventListener("input",search);
function search(){
    let body="";  
fetch('https://restcountries.com/v3.1/all')
            .then(res=>res.json())
            .then(data=>{
                data.forEach(element => {
                    if(element.name.common.includes(txtcountry.value))
                    body+=`<div class="col">
                    <div class="card shadow-sm" data-aos="fade-up"
                    data-aos-duration="3000">
                      <img src="${element.flags.png}" alt="">
                      <div class="card-body">
                        <h5>${element.name.common}</h5>
                        <p class="card-text size">Capital:${element.capital}<br><br>Region:${element.region}<br><br>Population:${element.population}</p>
                        <div class="d-flex justify-content-between align-items-center">
                             <a href="${element.maps.googleMaps}">
                              <button class="btn btn-primary">View on Google Maps</button>
                              </a>
                        </div>
                      </div>
                    </div>
                  </div>`
                });
                let row=document.getElementById("row");
                row.innerHTML=body;
                AOS.init();
                console.log(data);
                
            })


}
          
           