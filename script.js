let images = ["Capture14.PNG","Capture3.PNG","Capture4.PNG","Capture.PNG","whatsapp.PNG","quiz.PNG","guru.PNG","furniture.PNG","gmail-mockup.PNG"]
let tags = ["News-app","Weather-app","Like-Fb","Student-circle","Whatsapp","Quiz","Guru","Furniture","Gmail"]
let links = ["https://saeedahmed78.github.io/news-app","https://saeedahmed78.github.io/weather-app","https://saeedahmed78.github.io/likefb","https://studentscircle.tk","https://saeedahmed78.github.io/whatsapp","https://saeedahmed78.github.io/quiz","https://saeedahmed78.github.io/exhibition","https://saeedahmed78.github.io/mentor-meetup3","https://saeedahmed78.github.io/gmail"]
function initialize(){
    for(let i = 0; i<9; i++){
        document.querySelector(".projects-container").innerHTML +=  `<a href = "${links[i]}" target = "blank"
        <div class="projects-items img1" style="background-image: url(images/${images[i]})">
        <div class = "layout">
        <span class = "tags">${tags[i]}</span></div></div></a>
        `
    }
}