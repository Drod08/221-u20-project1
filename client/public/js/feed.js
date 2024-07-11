//let feeditem={name:'storyone', image:'/images/campus.png'};
//let feeditem2= {name: 'storytwo', image: '/image/new_pic.jpg'};


//let currentStories= [];
//currentStories.push(feeditem);
//currentStories.push(feeditem2);

//window.onload = () => {
    //console.log(currentStories);

    //let currentStorieshtml = document.getElementById('currentStories');

    //for(let i=0; i<currentStories.length; i++) {
        //console.log(currentStories[1].image);
        //currentStories.innerHTML += currentStories[i].name
        //currentStories.innerHTML += ("<img src='" +currentStories[i].image + "' />");
        //currentStorieshtml = currentStorieshtml + currentStorieshtml[i].name;
    //}
//}

//document.addEventListener('DOMContentLoaded', function() {
    //function goToMaristEdu() {
        //goToLocation('http://my.marist.edu');
    //}

    //document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    //document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
//});



//let currentStories = [];

    //currentStories.push({
        //Title: 'Marist Story 1',
        //Body: 'Body 1',
        //linkUrl: 'https://example.com/story1',
        //imageUrl: 'images/campus.png'
    //});

    //currentStories.push({
        //Title: 'Marist Story 2',
        //Body: 'Body 2',
        //linkUrl: 'https://example.com/story2',
        //imageUrl: 'images/news_pic.jpg'
    //});

    //currentStories.push({
        //Title: 'Marist Story 3',
        //Body: 'Body 3',
        //linkUrl: 'https://example.com/story3',
        //imageUrl: 'images/hancock.jpeg'
    //});

    //function displayItem(feedItem) {
        //let newsfeedElement = document.getElementById('newsfeed');
        
        //let itemHTML = `
           // <div class="feed-item">
                //<h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                //<p>${feedItem.Body}</p>
                //<a href="${feedItem.linkUrl}" target="_blank">
                    //<img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 75%; height: 50%;">
               // </a>
           // </div>
       // `;
        
        //newsfeedElement.innerHTML += itemHTML;
    //}

    //currentStories.forEach(function(item) {
        //displayItem(item);
    //});

    function feedItem(title, body, linkUrl, imageUrl) {
        this.title = title;
        this.body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }

    let currentStories = [];
    
   
    let story1 = new feedItem(
        'Welcome to Marist!!',
        'Marist is THE school to go to if you want to excel in your career and become the best. We have so many different types of majors and minors that will support your marist experience. Acorrding to the U.S.News and World Report ,"Marist College has great Faculty and staff who genuinely care about their students, and student success. Additionally the resources offered by Marist allow students to have amazing opportunities that they would not find elsewhere. The Marist community is like no other, and is an amazing thing to be a part of."',
        'https://www.marist.edu/academics',
        'images/campus.png'
        
    );
    let story2 = new feedItem(
        "Marist Sports",
        'Nothing compares to the viarity of sports and clubs for everyone to have their own extra curicular things that makes you who you are. Here at marist we are prideful for out sports. An example of our Marist sports, "The Marist Red Foxes football program is the intercollegiate American football team for Marist College located in the U.S. state of New York. The team competes in the NCAA Division I Football Championship Subdivision and are members of the Pioneer Football League. Marists first football team was fielded in 1965".',
        'https://goredfoxes.com/',
        'images/marist news.webp'
    );
    let story3 = new feedItem(
        "Marist Hancock Building",
        "Hancock is Marist Computer Science building. It is home to mnay computer science programs that Marist funds all over. In Newburgh New York Marist has funded the Marist Program in NFA Main campus. Students in this program goes to marist for three weeks during the summer. They take computer science college classes right here in this building.",
        'https://www.marist.edu/about/map',
        'images/hancock.jpeg'
    );

    
    
    currentStories.push(story1, story2, story3);
    
    
    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById("newsfeed");
    

        let itemHTML = `
            <div class="feed-item">
                <h2>${feedItem.title}</h2>
                <img src="${feedItem.imageUrl}" alt="${feedItem.title}"style= "max-width: 50%; height: 20%;">
                <a href="${feedItem.linkUrl}" target="_blank">CLICK HERE TO LEARN MORE</a>
                <p>${feedItem.body}</p>
         
            </div>
            <hr>
        `;
 
    
    
    
      
        newsfeedElement.innerHTML += itemHTML;
    }
    
    
    document.addEventListener("DOMContentLoaded", function() {
      
        currentStories.forEach(function(item) {
            displayItem(item);
        });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        function goToMaristEdu() {
            goToLocation('http://my.marist.edu');
        }
    
        document.getElementById('portal_button').addEventListener('click', goToMaristEdu);
    
        document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
    });