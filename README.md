# Astro-API
![andy-holmes-rCbdp8VCYhQ-unsplash (2)](https://user-images.githubusercontent.com/98960985/183402853-980fc5c1-bc3c-455e-a399-7817ee892457.jpg)
This is my second project during my time as a QA Tech Specialist in training. The goal of this project is to create an API about whatever I wish, that integrates the technologies of an OOP (Java) with a database (SQL) as a back-end, and HTML and JavaScript as a front-end. This project will be hosted on GitHub pages for demo purposes.

This API will contain information about celestial objects such as stars, galaxies, and planets. The user will be able to add, delete, and update entries through the front end (HTML Webpage).

## Trello Project Board
https://trello.com/b/gfQ7UfD0/spring-api-project
## How To Set Up:
To start this up, you need the following software:
- Java IDE with Spring Boot
- MySQL Workbench and MySQL Server
- Postman (Optional but recommended)

The MySQL Database will need to be pre-populated with the data provided in the files located in resources/static. The files needed are "stardata.txt", "galaxydata.txt", and "planetdata.txt", and this can be done via POST requests via Postman or through the HTML webpage.

The application should be able to boot straight from main provided that you have a valid Java IDE with Spring Boot and MySQL Server, and it you will be able to interact with the front end by putting https://localhost:8080 in any web browser; but Chrome is recommended so everything loads up properly.

## How Does It Work?
When booting the application through Spring Boot and going to the URL specified above, you will find yourself on a webpage that is capable of GET, POST, PUT and DELETE methods through the front end. The GET method can be observed by clicking the buttons that ask if you would like to find a Star, Galaxy, or Planet. When you click one of these buttons, and then click the respective type of interstellar object you would like to see, it will load the pre-populated JSON data from the MySQL database and present them in a specific format. For example, the Star section will show an image of the star, all of the characteristics of the star, and a brief description. 

The user can also choose to add their own interstellar object by clicking on the link on the Navbar that reads "Play God". Clicking this will redirect you to another webpage that asks what type of interstellar object you want to add, update, or delete. Clicking Star, Galaxy, or Planet will make forms pop up which you can use to add the relevant data, which the forms will automatically convert to JSON format and do a POST, PUT or DELETE request.

When the data is put in, the MySQL database will be updated and if you go back to the main webpage which can be reached by clicking "Home", you can click either Star, Galaxy, or Planet and then click on the button that reads something like "Your Star". Clicking this button will show you the data you just added in the same format that the other pre-populated data is in, assuming that the data was filled in correctly.

## Improvements and Unfinished Parts
There were a few things in this project that I wanted to do initially but either did not have time, or they were a little too ambitious to do given the timeframe of the project. For example:
- The Gallery Page: The idea of this page was to have the page filled with all the images present in the MySQL database, and have it repopulated when entries were added, updated, or deleted. I feel like I was most of the way there, but in the end I could only get one image to appear on the page.
- Search Function: This was an idea I had that I feel like would have been relatively simple to do through MySQL, but I just did not have time to implement it.
- Testing: This is probably my weakest point and the thing that needs the most work. I focused so much on the meat of the project that I really struggled to wrap my head arund testing, and I feel like I need extra support on this topic. There are tests in this project but they are very barebones.

## Special Thanks
- QA Trainers for the support given throughout the project
- My lovely cohort for providing helpand emotional support
- Caffeine
