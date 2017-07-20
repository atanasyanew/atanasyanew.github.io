// main porfolio object
var user = {
    "projects": [
        {
            "title": "Project Name1",
            "description": "A professional fit tracker. Note your progress, achieve your goals",
            "image": "fitlog-01.png",
            "screenshots": [],
            "demoUrl": "https://fitlog-app.firebaseapp.com",
            "otherUrls": []
        },
        {
            "title": "Project Name2",
            "image": "4.JPG",
            "description": "A simple dice game",
            "screenshots": [],
            "demoUrl": "https://abv.bg",
            "otherUrls": []
        },
        {
            "title": "Project Name1",
            "description": "A professional fit tracker. Note your progress, achieve your goals",
            "image": "fitlog-01.png",
            "screenshots": [],
            "demoUrl": "https://fitlog-app.firebaseapp.com",
            "otherUrls": []
        }, 
        {
            "title": "Project Name1",
            "description": "A professional fit tracker. Note your progress, achieve your goals",
            "image": "fitlog-01.png",
            "screenshots": [],
            "demoUrl": "https://fitlog-app.firebaseapp.com",
            "otherUrls": []
        },
        {
            "title": "Project Name1",
            "description": "A professional fit tracker. Note your progress, achieve your goals",
            "image": "fitlog-01.png",
            "screenshots": [],
            "demoUrl": "https://fitlog-app.firebaseapp.com",
            "otherUrls": []
        }
        
  ]
};

var portfolioItems = document.getElementById("portfolioItems");


function renderPortfolioItems(obj) {
    //let obj;

    let projects = obj.projects;
    let portfolioCards = "";

    if (projects != "" && projects.length > 0) {

        console.log("there is an project object");

        //console.log(obj.projects.length);
        //let card = "";


        for (i = 0; i < projects.length; i++) {


            //text += projects[i] + "<br>";


            portfolioCards += "<div class=\"col-sm-6 col-md-4\">";
            portfolioCards += "<div class=\"thumbnail\">";
            portfolioCards += "<div class=\"portfolio-item\">";
            portfolioCards += "<div class=\"hover-bg\">";

            portfolioCards += "<a href=\"img/portfolio/" + projects[i].image + "\" title=\"" + projects[i].title + "\" data-lightbox-gallery=\"gallery\">";
            portfolioCards += "<div class=\"hover-text\">";
            portfolioCards += "<h4>" + projects[i].title + "</h4>";
            portfolioCards += "</div>";
            portfolioCards += "<img src=\"img/portfolio/" + projects[i].image + "\" class=\"img-responsive\" alt=\"" + projects[i].title + "\"></a>";
            portfolioCards += "</div>";
            portfolioCards += "</div>";
            portfolioCards += "<div class=\"caption\">";
            portfolioCards += "<h4>" + projects[i].title + "</h4>";
            portfolioCards += "<p>" + projects[i].description + "</p>";
            portfolioCards += "<a href=\"" + projects[i].demoUrl + "\" target=\"_blank\">Try it out</a>";
            portfolioCards += "</div>";
            portfolioCards += "</div>";
            portfolioCards += "</div>";
            // portfolioItems.innerHTML = "hellow world"
        }
    } else {
        portfolioCards += "<p>There is no projects to display</p>"
    }
    portfolioItems.innerHTML = portfolioCards
}
