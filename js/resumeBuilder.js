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
    "mobile" : "(262) 661-1858",
    "github" : "tsakauchi",
    "twitter" : "@tsakauchi",
    "location" : "Milwaukee, WI"
  },
  "welcomeMessage" : "This is my hello to the JavaScript world! "
  + "This is my resume outlining my progress with the Udacity's Front-End Web Developer Nanodegree program.",
  "skills" :
  [
    "C",
    "C#",
    "Java",
    "Visual Basic",
    "HTML5",
    "CSS3",
    "JavaScript (new!)",
    "Perl",
    "SQL",
    "Regular Expressions",
    "XAML",
    "Visual Studio",
    "Git",
    "SVN",
    "Design Patterns",
    "Object Oriented Design"
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
      "title" : "Portfolio Site (Part of Udacity Nanodegree Program)",
      "dates" : "May 2015",
      "description" : "HTML and CSS project that replicated a sample portfolio site, "
      + "demonstrating my proficiency in HTML5, CSS3, reponsive layout, "
      + "and modern webpage design and development methods.",
      "images" :
      [
        "images/p1-1.png",
        "images/p1-2.png",
        "images/p1-3.png"
      ]
    },
    {
      "title" : "Resume Site (Part of Udacity Nanodegree Program)",
      "dates" : "July 2015",
      "description" : "Basic JavaScript project that replicated a sample resume site, "
      + "demonstrating my proficiency in JavaScript syntax and application of JavaScript "
      + "in developing a functional webpage.",
      "images" :
      [
        "images/p2-1.png",
        "images/p2-2.png"
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

      for (imageIdx in projects.projects[projectIdx].images)
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
      "title" : "Intro to HTML and CSS",
      "school" : "Udacity",
      "dates" : "April 2015",
      "url" : "http://www.udacity.com/"
    },
    {
      "title" : "Responsive Web Design Fundamentals",
      "school" : "Udacity",
      "dates" : "April 2015",
      "url" : "http://www.udacity.com/"
    },
    {
      "title" : "Responsive Images",
      "school" : "Udacity",
      "dates" : "April 2015",
      "url" : "http://www.udacity.com/"
    },
    {
      "title" : "How to Use Git and GitHub",
      "school" : "Udacity",
      "dates" : "July 2015",
      "url" : "http://www.udacity.com/"
    },
    {
      "title" : "JaveScript Basics",
      "school" : "Udacity",
      "dates" : "July 2015",
      "url" : "http://www.udacity.com/"
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

    if ( education.onlineCourses.length > 0 )
    {
      $("#education").append(HTMLonlineClasses);

      for (onlineCourseIdx in education.onlineCourses)
      {
        var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourseIdx].title).replace("#",education.onlineCourses[onlineCourseIdx].url);
        var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourseIdx].school);
        var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourseIdx].dates);
        var formattedOnlineCourseUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourseIdx].url).replace("#",education.onlineCourses[onlineCourseIdx].url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineCourseTitle + formattedOnlineCourseSchool);
        $(".education-entry:last").append(formattedOnlineCourseDates);
        $(".education-entry:last").append(formattedOnlineCourseUrl);
      }
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

//$("#header").append(internationalizeButton);

$("#mapDiv").append(googleMap);

hideEmptySections();
