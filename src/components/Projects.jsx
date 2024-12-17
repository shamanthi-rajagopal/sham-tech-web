import React, { useState } from "react";
import "./Projects.css"; // Optional for styling

const Projects = () => {
  // Sample Projects Data
  const projects = [
    {
      id: 10,
      title: "AI Fall Detection System",
      category: "AI/ML",
      image: "ai_project_image.png",
      shortDescription: "An AI-powered fall detection tool for caregivers.",
      fullDescription: "This project uses computer vision and machine learning algorithms to detect falls in video footage to assist caregivers for Alzheimer's patients.",
    },
    {
      id: 9,
      title: "Mars Rover Simulation",
      category: "Space",
      image: "mars_rover_image.png",
      shortDescription: "Simulated Mars rover exploration in Gazebo and ROS 2.",
      fullDescription: "Built a virtual rover that moves on Martian terrain using ROS 2 and Gazebo, enabling space enthusiasts to interact with robotics.",
    },
    {
      id: 8,
      title: "Smart Home Automation",
      category: "Hardware",
      image: "home_automation.png",
      shortDescription: "Designed a smart home system using Raspberry Pi.",
      fullDescription: "Developed a hardware system using Raspberry Pi to control lights, fans, and security systems remotely through a mobile app.",
    },
    // Add more projects as needed...
  ];

  // State for active category and expanded project
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);

  // Filtered and Sorted Projects
  const filteredProjects = projects
    .slice()
    .sort((a, b) => b.id - a.id) // Sort projects from most recent to oldest
    .filter((project) => activeCategory === "All" || project.category === activeCategory);

  return (
    <div className="portfolio-projects">
      <h2 className="portfolio-contact-header">Projects</h2>
      <div className="about-interest-text">Here are some of the projects I’ve worked on...</div>

      {/* Filter Buttons */}
      <div className="project-categories">
        {["All", "Software", "AI/ML", "Space", "Hardware"].map((category) => (
          <button
            key={category}
            className={`project-category-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setExpandedProject(project)} // Open details panel
          >
            <img className="project-image" src={project.image} alt={project.title} />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Project Panel */}
      {expandedProject && (
        <div className="expanded-project-panel">
          <button className="close-panel-button" onClick={() => setExpandedProject(null)}>
            Close
          </button>
          <h2>{expandedProject.title}</h2>
          <img className="expanded-project-image" src={expandedProject.image} alt={expandedProject.title} />
          <p>{expandedProject.fullDescription}</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
