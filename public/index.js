//DOM elements
const quoteE1 = document.getElementById("quote");
const autherE1 = document.getElementById("auther");
const ErrorE1 = document.getElementById('error')
//btns
const shortURL = document.getElementById("shorturlbtn");
const copyURL = document.getElementById("copyshortlink");
const longURL = document.getElementById("longurl");
const miniURL = document.getElementById("shorturl");

//random qoutes generator
const quotes = [
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    auther: "--Winston Churchill",
  },
  {
    quote:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    auther: "--John Quincy Adams",
  },
  {
    quote:
      "Don't let anyone tell you what you can't do. Follow your dreams and persist.",
    auther: "--Barack Obama",
  },
  {
    quote:
      "The best way to find out what you want in life is to try a lot of things",
    auther: "--Oprah Winfrey",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    auther: "--Steve Jobs",
  },
  {
    quote: "The road to success is always under construction.",
    auther: "--Lily Tomlin",
  },
  {
    quote: "We may encounter many defeats but we must not be defeated.",
    auther: "--Maya Angelou",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    auther: "--Walt Disney",
  },
  {
    quote: "A journey of a thousand miles begins with a single step.",
    auther: "--Lao Tzu",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even heard, but must be felt with the heart.",
    auther: "--Helen Keller",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    auther: "--Jimmy Dean",
  },
  {
    quote:
      "If you want to make your dreams come true, the first thing you have to do is wake up.",
    auther: "--J.M. Power",
  },
  {
    quote:
      "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    auther: "--Albert Einstein",
  },
];

function ShowQuote() {
  const ind = Math.floor(Math.random() * quotes.length);
  quoteE1.innerText = quotes[ind].quote;
  autherE1.innerText = quotes[ind].auther;
}
setInterval(ShowQuote, 4000);

shortURL.addEventListener("click", () => {
 if(!longURL.value.length){ 
    return error("Long URL cannot be empty","#caad43","#ffaa00")
 }
  const data = {
    Lurl: longURL.value,
  };
  document.getElementById("loading-spinner").style.display = "block";
  axios
    .post("/shorthener/squizUrl", data)
    .then((response) => {
      document.getElementById("loading-spinner").style.display = "none";
      error("Great Success","#69a158","#25a125")
      miniURL.value = response.data.shorturl;
    })
    .catch((error) => {
      error("Something Went Wrong","#db4242","red")
    });
});

copyURL.addEventListener("click", () => {
    if(miniURL.value){
        miniURL.select();
        navigator.clipboard.writeText(miniURL.value).then((res)=>{ 
        error("Link Copied","#272827","#111211")
        }).catch((err)=>{ 
        error("Cannot copy","#272827","#111211")
        })
    }
  });

function error(msg,bg,bordercolor){ 
 ErrorE1.style.display = "block";
 ErrorE1.style.backgroundColor = bg;
 ErrorE1.textContent = msg;
 ErrorE1.style.border = `2px solid ${bordercolor}`
 setTimeout(()=>{
ErrorE1.style.display="none";
 },3000)
}



//stars
// Random Stars
var generateStars = function(){
  var galaxy = document.querySelector(".galaxy");
  var iterator = 0;
  
  while (iterator <= 100){
      var xposition = Math.random();
      var yposition = Math.random();
      var star_type = Math.floor((Math.random() * 3) + 1);
      var position = {
          "x" : galaxy.offsetWidth * xposition,
          "y" : galaxy.offsetHeight * yposition
      };
      
      var star = document.createElement("div");
      star.className = "star star-type" + star_type;
      star.style.top = position.y + "px";
      star.style.left = position.x + "px";
      
      galaxy.appendChild(star);
      
      iterator++;
  }
};

generateStars();
