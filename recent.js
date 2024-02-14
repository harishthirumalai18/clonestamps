// Sample array of recent projects with image URLs
var recentProjects = [
    { 
      name: "Project 1", 
      date: "2024-02-14", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJubza2pErHhPxQXp66ZA--nnwQAILWhEAYA&usqp=CAU", // Sample image URL
    },
    { 
      name: "Project 2", 
      date: "2024-02-13", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_eDysW15mkiiHRwqBymDZ2fDNWy6CouZNQ&usqp=CAU", // Sample image URL
    },
    { 
      name: "Project 3", 
      date: "2024-02-12", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEtiLJVtjLoDORlhE52yk_6c19p1Hc1-i451N0VPuZjbl-h23XIIAC2A1VaJ7c6J7WcQ&usqp=CAU", // Sample image URL
    }
  ];
  
  // Function to populate the recent projects list
  function populateProjects() {
    var projectList = document.getElementById("projectList");
    recentProjects.forEach(function(project) {
      var listItem = document.createElement("li");
      var projectInfo = document.createElement("div");
      projectInfo.classList.add("project-info");
  
      // Create image element
      var projectImage = document.createElement("img");
      projectImage.src = project.imageUrl;
      projectImage.alt = project.name;
      projectImage.classList.add("project-image");
      projectInfo.appendChild(projectImage);
  
      // Create link element
      var link = document.createElement("a");
      link.textContent = project.name + " - " + project.date;
      link.href = "#";
      link.classList.add("project-link");
      projectInfo.appendChild(link);
  
      // Append project info to list item
      listItem.appendChild(projectInfo);
  
      // Append list item to project list
      projectList.appendChild(listItem);
    });
  }
  
  // Call the function to populate the recent projects list
  populateProjects();
  