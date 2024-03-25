import haveWord from '../assets/haveWord.png'
import quiz from '../assets/quiz.png'
import toDo from '../assets/toDo.png'
import weather from '../assets/weather.png'
export const navLinks = [
  {
    id: "Home",
    title: "Home",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "About",
    title: "About",
  },
];


export const Projects = [
  {
    title: "Save Food",
    description: "Save Food is a web application designed to reduce food waste by connecting individuals and businesses with excess food to those in need. Users can create listings for food donations, search for available donations, and coordinate pick-up or delivery.",
    Technologies: "HTML, CSS, JavaScript (including Vanilla JS and jQuery), React.js, Bootstrap, Tailwind CSS, Firebase (for authentication and data storage)",
    imageUrl: ''
  },
  {
    title: "Job Nest",
    description: "Job Nest is a job search platform that helps users find employment opportunities based on their skills, experience, and location. It provides features such as job listings, resume uploading, and application tracking.",
    Technologies: "HTML, CSS, JavaScript (including Vanilla JS and jQuery), React.js, Bootstrap, Firebase (for authentication and data storage)",
    imageUrl: haveWord
  },
  {
    title: "Have A Word",
    description: "Have A Word is a dictionary and translation web application with quiz functionality. It allows users to search for words, view definitions, translations, and example sentences. Additionally, users can test their knowledge with quizzes on vocabulary and language proficiency.",
    Technologies: "HTML, CSS, JavaScript, React.js, Tailwind CSS, and other relevant technologies.",
    imageUrl: haveWord
  }
  ,
  {
    title: "Quiz App",
    description: "Quiz App is an educational tool that allows users to create, take, and share quizzes on various topics. It includes features such as quiz creation, multiple-choice questions, scoring, and leaderboard.",
    Technologies: "HTML, CSS, JavaScript (including Vanilla JS and jQuery), React.js, Bootstrap, Firebase (for authentication and data storage)",
    imageUrl: quiz
  },
  {
    title: "Weather DashBoard",
    description: "Weather Dashboard is a weather forecasting application that provides users with real-time weather information for their location and other cities worldwide. It offers features such as current conditions, hourly and daily forecasts, and weather alerts.",
    Technologies: "HTML, CSS, JavaScript (including Vanilla JS and jQuery), React.js, Bootstrap, OpenWeatherMap API",
    imageUrl: weather
  },
  {
    title: "To Do List",
    description: "To-Do List is a task management application that helps users organize their daily tasks and activities. It allows users to create, edit, and delete tasks, set priorities, and mark tasks as completed.",
    Technologies: "HTML, CSS, JavaScript (including Vanilla JS and jQuery), React.js, Bootstrap",
    imageUrl: toDo
  }
]

