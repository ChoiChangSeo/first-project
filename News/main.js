let news = []
let menus = document.querySelectorAll(".menus button");
let searchButton = document.getElementById("search-button")


menus.forEach(menu=> menu.addEventListener("click",()=>getNewsByTopic(event)))


const getLatestNews = async() =>{
    let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10')
    let header = new Headers({'x-api-key':'-CLo8zM-n0Pt8LZpdWxe1jsmcJBULgSi1LRUokmz9Cc'})
    let response = await fetch(url,{headers:header})
    let data = await response.json()
    news = data.articles
    console.log(news)

    render()
};


const getNewsByTopic = async(event) =>{
    console.log("클릭됨",event.target.textContent)
    let topic = event.target.textContent.toLowerCase()
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10$topic=${topic}`)
    let header = new Headers({'x-api-key':'-CLo8zM-n0Pt8LZpdWxe1jsmcJBULgSi1LRUokmz9Cc'})
    let response = await fetch(url,{headers:header})
    let data = await response.json()
    news=data.articles
    render()
}


const getNewsByKeyWord = async() => {
    let keyword = document.getElementById("search-input").value
    let url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`)
    let header = new Headers({'x-api-key':'-CLo8zM-n0Pt8LZpdWxe1jsmcJBULgSi1LRUokmz9Cc'})
    let response = await fetch(url,{headers:header})
    let data = await response.json()
    news=data.articles
    render()
}



const render =()=>{
    let newsHTML = ''
    newsHTML = news.map((item)=>{
        return `<div class="row news">
        <div class="col-lg-4">
            <img class = "news-img-size" src="${item.media}">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
                ${item.summary}
            </p>
            <div>
                ${item.rights} * ${item.published_date}
            </div>
        </div>
    </div>`
    }).join('');

    document.getElementById("newsBoard").innerHTML=newsHTML
}
searchButton.addEventListener("click",getNewsByKeyWord)
getLatestNews();
