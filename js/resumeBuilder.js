/*
 * bio contains a name, role, welcomeMessage,
 * contacts object and skills array.
 * The contacts object should contain
 * (but doesn't have to) a mobile number,
 * email address, github username,
 * twitter handle and location.
 */

var bio = {
  "name" : "Tsuginosuke Sakauchi",
  "role" : "Software Application Engineer",
  "welcomeMessage" : "Hello, world!",
  "contacts" : {
    "email" : "tsugi@fairlandcircle.com",
    "mobile" : "(000) 000-0000",
    "github" : "tsakauchi",
    "twitter" : "@tsakauchi",
    "location" : "Milwaukee, WI"
  },
  "skills" : ["skill1","skill2","skill3"],
  "picture" : "images/biopic.jpg"
};

/*
 * work contains an array of jobs.
 * Each job object in jobs should contain
 * an employer, title, location, dates worked,
 * and description.
 */

var work = {
  "jobs" : [
    {
      "employer" : "Dematic Corp.",
      "title" : "Software Application Engineer",
      "location" : "New Berlin, WI",
      "dates" : "2011-Present",
      "description" : "Developer of backend and user-facing warehouse control software."
    },
    {
      "employer" : "Marquette University College of Engineering Gas Day Lab",
      "title" : "Research Assistant; Software Developer",
      "location" : "Milwaukee, WI",
      "dates" : "2009-2011",
      "description" : "Developed new and maintained existing backend forecasting system for natural gas and heating oil consumption."
    }
  ]
};

/*
 * projects contains an array of projects.
 * Each project object in projects should contain
 * a title, dates worked, description, and
 * an images array with URL strings for project images.
 */

var projects = {
  "projects" : [
    {
      "title" : "project 1",
      "dates" : "2015",
      "description" : "project 1 description",
      "images" : [
        "images/project/p1-1.jpg",
        "images/project/p1-2.jpg"
      ]
    },
    {
      "title" : "project 2",
      "dates" : "2015",
      "description" : "project 2 description",
      "images" : [
        "images/project/p2-1.jpg",
        "images/project/p2-2.jpg"
      ]
    }
  ]
};

/*
 * education contains an array of schools.
 * Each school object in schools contains a name,
 * location, degree, majors array, dates attended,
 * and a url for the school's website.
 * education also contains an onlineCourses array.
 * Each onlineCourse object in onlineCourses should
 * contain a title, school, dates attended, and
 * a url for the course.
 */
var education = {
  "schools" : [
    {
      "name" : "Marquette University",
      "city" : "Milwaukee, WI",
      "majors" : [
        "Electrical and Computer Engineering"
      ],
      "minors" : [
        ""
      ],
      "yearCompleted" : 2011,
      "url" : "http://www.marquette.edu/"
    },
    {
      "name" : "Marquette University",
      "city" : "Milwaukee, WI",
      "majors" : [
        "Computer Engineering"
      ],
      "minors" : [
        "Mathematics"
      ],
      "yearCompleted" : 2009,
      "url" : "http://www.marquette.edu/"
    },
    {
      "name" : "University of Wisconsin, Marinette",
      "city" : "Marinette, WI",
      "majors" : [
        "Ethnic Studies"
      ],
      "minors" : [
        ""
      ],
      "yearCompleted" : 2006,
      "url" : "http://marinette.uwc.edu/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "online course 1",
      "school" : "online school 1",
      "dates" : "2015",
      "url" : "http://onlinecourse.com/course1"
    }
  ]
};


/*
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedContact=HTMLcontactGeneric.replace("%contact%","E-mail").replace("%data%",bio.contacts.email);
var formattedPicture=HTMLbioPic.replace("%data%",bio.picture);
var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkill="";

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedContact);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart);

formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
$("#header").append(formattedSkill);

formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
$("#header").append(formattedSkill);

formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
$("#header").append(formattedSkill);
*/
$("#mapDiv").append(googleMap);
