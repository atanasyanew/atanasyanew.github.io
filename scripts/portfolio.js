// main porfolio object
var user = {
    "projects": [
        {
            "title": "Fit Log",
            "description": "Simple fitness application which purpose is to note and visualise body progress.",
            "image": "fitlog-01.png",
            "screenshots": [],
            "demoUrl": "https://fitlog-app.firebaseapp.com",
            "otherUrls": []
        },
        {
            "title": "HHIB WEB MANAGEMENT SYSTEM",
            "description": "Web-based content management system designed to store information, files and monitoring the process for creating internal company orders and offers. Аpplication has features like: file upload, role based users, order and offers progress tracking, approval statuses, reports and MS Excel integration.",
            "image": "hhib-01.png",
            "screenshots": [],
            "demoUrl": "",
            "otherUrls": []
        },
         {
            "title": "JKPG Library",
            "description": "The public library website in Jönköping through which users are able to browse the books and authors they have in their internal database. The library staff should also be able to login and apply CRUD operations on books and authors (each librarian have her own account).",
            "image": "JKPG-Library-01.jpg",
            "screenshots": [],
            "demoUrl": "",
            "otherUrls": []
        },
        {
            "title": "4Dice-Game",
            "description": "Simple application where a user can play a single player dice game. The game consists of four dice, and the user should guess the sum of the first three dice before throwing them all. If the user's guess turned out to be lower than or equal to the sum of the first three dice, his score is incremented by the guessed number multiplied by the fourth dice. This is repeated 10 times, after which the game is over. The game communicate with an external API which provides database for storing user accounts and scores.",
            "image": "4Dice-game-01.png",
            "screenshots": [],
            "demoUrl": "https://dice4-game.firebaseapp.com",
            "otherUrls": []
        },
        
        {
            "title": "Breakout-Game",
            "description": "The classic breakout-game",
            "image": "breakout-game-01.png",
            "screenshots": [],
            "demoUrl": "https://rawgit.com/atanasyanew/Labs/master/BreakoutGame/breakout-game.html",
            "otherUrls": []
        },
        {
            "title": "Count Down Page",
            "description": "Count Down Page with JS",
            "image": "CountDownPage-01.png",
            "screenshots": [],
            "demoUrl": "https://rawgit.com/atanasyanew/Labs/master/CountDownPage/CountDownPage.html",
            "otherUrls": []
        },
        {
            "title": "Address Book",
            "description": "Address Book is simple JavaScript application with which the user can create and read records. Application use localStorage to store and manipulate data in JSON format.",
            "image": "AddressBook-01.png",
            "screenshots": [],
            "demoUrl": "https://rawgit.com/atanasyanew/Labs/master/AddressBook/AddressBook.html",
            "otherUrls": []
        },
         {
            "title": "Pub point of sale app",
            "description": "Simple Pub Point Of Sale application. The cashier is able to add a new order and add it to a que for the Barista. A print out summary of today's orders are displayed dynamically in table. The barista is able to mark order as done. To keep track the sales, all orders that have been delivered are added to an Report Schedule.",
            "image": "PubApp-01.png",
            "screenshots": [],
            "demoUrl": "https://rawgit.com/atanasyanew/Labs/master/PubApp/PubApp.html",
            "otherUrls": []
        },
        {
            "title": "Breaking News Renewal",
            "description": "Imagine on a news site, they have the 3 news articles. They want to show these, one at a time, on the page, with an interval of 5 seconds. News are present in \"card\" style.",
            "image": "BreakingNewsRenewal-01.png",
            "screenshots": [],
            "demoUrl": "https://rawgit.com/atanasyanew/Labs/master/BreakingNewsRenewal/BreakingNewsRenewal.html",
            "otherUrls": []
        },
        
        {
            "title": "The Guessing Game",
            "description": "Single player guessing game.",
            "image": "TheGuessingGame-01.png",
            "screenshots": [],
            "demoUrl": "https://rawgit.com/atanasyanew/Labs/master/TheGuessingGame/TheGuessingGame.html",
            "otherUrls": []
        },
        
  ]
};

var portfolioItems = document.getElementById("portfolioItems");


function renderPortfolioItems(obj) {
    //let obj;

    let projects = obj.projects;
    let portfolioCards = "";

    if (projects != "" && projects.length > 0) {

        for (i = 0; i < projects.length; i++) {
            portfolioCards += "<div class=\"col-sm-6 col-md-4\">";
            portfolioCards += "<div class=\"thumbnail\">";
            portfolioCards += "<div class=\"portfolio-item\">";
            portfolioCards += "<div class=\"hover-bg\">";

            portfolioCards += "<a href=\"images/portfolio/" + projects[i].image + "\" title=\"" + projects[i].title + "\" data-lightbox-gallery=\"gallery\">";
            portfolioCards += "<div class=\"hover-text\">";
            portfolioCards += "<h4>" + projects[i].title + "</h4>";
            portfolioCards += "</div>";
            portfolioCards += "<img src=\"images/portfolio/" + projects[i].image + "\" class=\"img-responsive\" alt=\"" + projects[i].title + "\"></a>";
            portfolioCards += "</div>";
            portfolioCards += "</div>";
            portfolioCards += "<div class=\"caption\">";
            portfolioCards += "<h4>" + projects[i].title + "</h4>";
            portfolioCards += "<p>" + projects[i].description + "</p>";
            if (projects[i].demoUrl != ""){
            portfolioCards += "<a href=\"" + projects[i].demoUrl + "\" target=\"_blank\">Try it out</a>";
            }
            portfolioCards += "</div>";
            portfolioCards += "</div>";
            portfolioCards += "</div>";
        }
    } else {
        portfolioCards += "<p>There is no projects to display</p>"
    }
    portfolioItems.innerHTML = portfolioCards
}
