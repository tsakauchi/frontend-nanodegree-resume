/*
 * bio contains a name, role, welcomeMessage,
 * contacts object and skills array.
 * The contacts object should contain
 * (but doesn't have to) a mobile number,
 * email address, github username,
 * twitter handle and location.
 */
var bio = 
{
  "name" : "Tsuginosuke Sakauchi",
  "role" : "Software Application Engineer",
  "contacts" : 
  {
    "email" : "tsugi@fairlandcircle.com",
    "mobile" : "(000) 000-0000",
    "github" : "tsakauchi",
    "twitter" : "@tsakauchi",
    "location" : "Milwaukee, WI"
  },
  "welcomeMessage" : "Hello, world!",
  "skills" : 
  [
    "skill1",
    "skill2",
    "skill3",
    "skill4",
    "skill5",
    "skill6",
    "skill7",
    "skill8",
    "skill9"
  ],
  "biopic" : "images/biopic.jpg",
  "display" : function()
  {
    var formattedName=HTMLheaderName.replace("%data%",bio.name);
    var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
    var formattedContactMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedContactEmail=HTMLemail.replace("%data%",bio.contacts.email);
    var formattedContactTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedContactGitHub=HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedContactLocation=HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedPicture=HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").append(formattedContactEmail);
    $("#topContacts").append(formattedContactMobile);
    $("#topContacts").append(formattedContactGitHub);
    $("#topContacts").append(formattedContactTwitter);
    $("#topContacts").append(formattedContactLocation);

    $("#header").append(formattedPicture);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length>0)
    {
      $("#header").append(HTMLskillsStart);
      for (bioIdx in bio.skills)
      {
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[bioIdx]);

        $("#skills").append(formattedSkills);
      }
    }

    $("#footerContacts").append(formattedContactEmail);
    $("#footerContacts").append(formattedContactMobile);
    $("#footerContacts").append(formattedContactGitHub);
    $("#footerContacts").append(formattedContactTwitter);
    $("#footerContacts").append(formattedContactLocation);
  }
};

/*
 * work contains an array of jobs.
 * Each job object in jobs should contain
 * an employer, title, location, dates worked,
 * and description.
 */
var work =
{
  "jobs" : 
  [
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
  ],
  "display" : function()
  {
    for (var jobIdx in work.jobs)
    {
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[jobIdx].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[jobIdx].title);
      var formattedWorkDate = HTMLworkDates.replace("%data%",work.jobs[jobIdx].dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[jobIdx].description);

      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
      $(".work-entry:last").append(formattedWorkDate);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }
};

/*
 * projects contains an array of projects.
 * Each project object in projects should contain
 * a title, dates worked, description, and
 * an images array with URL strings for project images.
 */
var projects = 
{
  "projects" : 
  [
    {
      "title" : "project 1",
      "dates" : "2015",
      "description" : "project 1 description",
      "images" : 
      [
        "images/project/p1-1.jpg",
        "images/project/p1-2.jpg"
      ]
    },
    {
      "title" : "project 2",
      "dates" : "2015",
      "description" : "project 2 description",
      "images" : 
      [
        "images/project/p2-1.jpg",
        "images/project/p2-2.jpg"
      ]
    }
  ],
  "display" : function()
  {
    for (projectIdx in projects.projects)
    {
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[projectIdx].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[projectIdx].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[projectIdx].description);

      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for (imageIdx in projects.projects.images)
      {
        var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[projectIdx].images[imageIdx]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
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
var education = 
{
  "schools" : 
  [
    {
      "name" : "Marquette University",
      "location" : "Milwaukee, WI",
      "degree" : "Masters of Science in Engineering",
      "majors" : 
      [
        "Electrical and Computer Engineering"
      ],
      "dates" : 2011,
      "url" : "http://www.marquette.edu/"
    },
    {
      "name" : "Marquette University",
      "location" : "Milwaukee, WI",
      "degree" : "Bachelors of Science in Engineering",
      "majors" : 
      [
        "Computer Engineering"
      ],
      "dates" : 2009,
      "url" : "http://www.marquette.edu/"
    },
    {
      "name" : "University of Wisconsin, Marinette",
      "location" : "Marinette, WI",
      "degree" : "Associates of Arts and Sciences",
      "majors" : 
      [
        "Ethnic Studies"
      ],
      "dates" : 2006,
      "url" : "http://marinette.uwc.edu/"
    }
  ],
  "onlineCourses" : 
  [
    {
      "title" : "online course 1",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "http://onlinecourse.com/course1"
    }
  ],
  "display" : function()
  {
    for (schoolIdx in education.schools)
    {
      var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[schoolIdx].name).replace("#",education.schools[schoolIdx].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[schoolIdx].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[schoolIdx].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[schoolIdx].location);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);

      for (majorIdx in education.schools[schoolIdx].majors)
      {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[schoolIdx].majors[majorIdx]);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }

    for (onlineCourseIdx in education.onlineCourses)
    {
      var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourseIdx].title).replace("#",education.onlineCourses[onlineCourseIdx].url);
      var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourseIdx].school);
      var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourseIdx].dates);
      var formattedOnlineCourseUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourseIdx].url).replace("#",education.onlineCourses[onlineCourseIdx].url);

      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedOnlineCourseTitle + formattedOnlineCourseSchool);
      $(".education-entry:last").append(formattedOnlineCourseDates);
      $(".education-entry:last").append(formattedOnlineCourseUrl);
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

//$("#header").append(internationalizeButton);

$("#mapDiv").append(googleMap);
