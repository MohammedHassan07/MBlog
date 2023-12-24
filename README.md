# TechBlog
A blog website developend in Node.js and MongoDB

## Setup
To run the project follow the below steps
### Note
#### Only registered author can login, they have to contact the developers to create the profile
### To know more about registration of author check the admin cntoller file in controller folder
before running the project make sure you have Node.js and MongoDB installed in your machine <br>
step-1: Open MongoDB and create database named blogsDB<br>
step-2: Open the blogs.json and user.json file and copy the queries, run this in to the mongoDB query interface or import the files<br>
step-3: Open the terminal in the folder and enter the command ```npm i```<br>
step-4: After the pocess finished run the command ```npm start```<br>
step-5: Open your browser and enter the ```localhost:3000/```<br>
step-6: To enter into admin panel type the url ```localhost:3000/admin```<br>

## Admin
To log in as a auther make sure you created the author from steps<br>
stpe-1: hit the url ```http://localhost:3000/admin``` <br>
you will be redirected to log In page. Log In with credintials <br> you will nevigated to admin panel for the authors
from Admin panle you can insert the blog.

