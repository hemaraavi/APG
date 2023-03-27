var DEMO_KEY = "f8Xew6nBOyPu2ScP7BfA2B5brbRxfibDp4gI5sSS"
var data;
fetch("https://api.nasa.gov/planetary/apod?count=16&api_key=f8Xew6nBOyPu2ScP7BfA2B5brbRxfibDp4gI5sSS")
    .then(res => res.json()).then(data => {
        data.forEach(function (data) {
            console.log(data)
            var container = document.getElementById("container");
            var cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            var imgDiv = document.createElement('div');
            imgDiv.classList.add('image');
            var img = document.createElement("img");
            
            img.src = data.hdurl;
            imgDiv.appendChild(img);
            var moredetails = document.createElement("div")
            moredetails.classList.add('more-details')
            title = document.createElement("h3")
            title.innerHTML = "<h3>" +data.title + "</h3>"
            moredetails.append(title)
            imgDiv.appendChild(moredetails)
            
            cardDiv.appendChild(imgDiv);
            

            container.appendChild(cardDiv);

        })
    })


function loadNewImags(){
    fetch("https://api.nasa.gov/planetary/apod?count=16&api_key=f8Xew6nBOyPu2ScP7BfA2B5brbRxfibDp4gI5sSS")
    .then(res => res.json()).then(data => {
        data.forEach(function (data) {
            var container = document.getElementById("container");
            var cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            var imgDiv = document.createElement('div');
            imgDiv.classList.add('image');
            var img = document.createElement("img");
            img.src = data.hdurl;
            imgDiv.appendChild(img);
            cardDiv.appendChild(imgDiv);
            container.appendChild(cardDiv);

        })
    })
}

const load_more=document.querySelector(".load-more")
load_more.addEventListener('click',loadNewImags)



