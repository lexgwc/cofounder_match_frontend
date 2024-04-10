document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded and parsed');
    fetchSchools()
    fetchIndustryInterests()
    fetchTimelines()
    fetchResponsibilities()
    fetchIdeas()

    // Add event listener for form submission
    document.querySelector('form').addEventListener('submit', function(event) {
      console.log('button clicked')
      event.preventDefault(); // Prevent the form from submitting the traditional way
      findCofounders();
    });
  });
  
  
// fetch schools from backend
  async function fetchSchools() {
    try {
        const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/school');
        const schools = response.data;
        const schoolSelect = document.getElementById('school');
        schools.forEach(school => {
            const option = document.createElement('option');
            option.value = school.schoolName; 
            option.textContent = school.schoolName; 
            schoolSelect.appendChild(option);
        });
        // Process the fetched schools data here
        console.log('Fetched schools:', schools);
    } catch (error) {
        console.error('There was a problem fetching the schools:', error);
    }
}
  

// fetch industry interests from backend

async function fetchIndustryInterests() {
  try {
      const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/industries');
      const industryInterests = response.data;
      const industrySelect = document.getElementById('industry');
      industryInterests.forEach(industry => {
          const option = document.createElement('option');
          option.value = industry; // Assuming the array consists of string values
          option.textContent = industry;
          industrySelect.appendChild(option);
      });
      console.log('Fetched industry interests:', industryInterests);
  } catch (error) {
      console.error('There was a problem fetching the industry interests:', error);
  }
}


// fetch timelines from backend

async function fetchTimelines() {
  try {
      const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/timeline');
      const timelines = response.data;
      const timelineSelect = document.getElementById('timeline');
      timelines.forEach(timeline => {
          const option = document.createElement('option');
          option.value = timeline; // Assuming the array consists of string values
          option.textContent = timeline;
          timelineSelect.appendChild(option);
      });
      console.log('Fetched timelines:', timelines);
  } catch (error) {
      console.error('There was a problem fetching the timelines:', error);
  }
}


// fetch responsibilities from backend

async function fetchResponsibilities() {
  try {
      const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/responsibilities');
      const responsibilities = response.data;
      const responsibilitySelect = document.getElementById('responsibilities');
      responsibilities.forEach(responsibility => {
          const option = document.createElement('option');
          option.value = responsibility; // Assuming the array consists of string values
          option.textContent = responsibility;
          responsibilitySelect.appendChild(option);
      });
      console.log('Fetched responsibilities:', responsibilities);
  } catch (error) {
      console.error('There was a problem fetching the responsibilities:', error);
  }
}

// fetch ideas from backend

async function fetchIdeas() {
  try {
      const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/idea');
      const ideas = response.data;
      const ideaSelect = document.getElementById('idea');
      ideas.forEach(idea => {
          const option = document.createElement('option');
          option.value = idea; // Assuming the array consists of string values
          option.textContent = idea;
          ideaSelect.appendChild(option);
      });
      console.log('Fetched ideas:', ideas);
  } catch (error) {
      console.error('There was a problem fetching the ideas:', error);
  }
}


// write function to find cofounders using get request from backend based on the form data

async function findCofounders() {
  const formData = new FormData(document.querySelector('form'));
  const data = {
      currentSchool: formData.get('school'),
      industryInterests: formData.get('industry'),
      timelineForFulltime: formData.get('timeline'),
      areasOfResponsibility: formData.get('responsibilities'),
      hasIdea: formData.get('idea'),
      isTechnical: formData.get('isTechnical')
  };
  console.log('Form data:', data);
  try {
      const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/profile', { params: data });
      const cofounders = response.data;
      // Clear existing cofounder list
      const cofounderList = document.getElementById('cofounder-list').querySelector('ul');
      cofounderList.innerHTML = '';
      
      // Append new cofounders to the list
      cofounders.forEach(cofounder => {
        const li = document.createElement('li');
        li.style.padding = "10px";
        li.style.border = "1px solid #ddd";
        li.style.marginBottom = "10px";
        li.style.listStyleType = "none";
        li.style.borderRadius = "5px";
        li.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
        li.style.backgroundColor = "#f9f9f9";
    
        // Assuming cofounder object follows the schema structure provided
        // Name and basic info
        const name = document.createElement('h3');
        name.textContent = cofounder.name;
        li.appendChild(name);
    
        // Other details
        const details = document.createElement('p');
        details.innerHTML = `
            <strong>Birthdate:</strong> ${new Date(cofounder.birthdate).toLocaleDateString()}<br>
            <strong>Program Type:</strong> ${cofounder.programType}<br>
            <strong>Industry Interests:</strong> ${cofounder.industryInterests.join(', ')}<br>
            <strong>Is Technical:</strong> ${cofounder.isTechnical ? 'Yes' : 'No'}<br>
            <strong>LinkedIn:</strong> <a href="${cofounder.linkedinURL}" target="_blank">${cofounder.linkedinURL}</a><br>
            <strong>Email:</strong> ${cofounder.email}<br>
            <strong>Location:</strong> ${cofounder.location}<br>
            <strong>About Me:</strong> ${cofounder.aboutMe}<br>
            <strong>Education:</strong> ${cofounder.education}<br>
            <strong>Employment History:</strong> ${cofounder.employmentHistory}<br>
            <strong>Gender:</strong> ${cofounder.gender}<br>
            <strong>Scheduling URL:</strong> <a href="${cofounder.schedulingURL}" target="_blank">${cofounder.schedulingURL}</a><br>
            <strong>Has Idea:</strong> ${cofounder.hasIdea}<br>
            <strong>Ideas Interested In:</strong> ${cofounder.ideasInterestedIn}<br>
            <strong>Areas Of Responsibility:</strong> ${cofounder.areasOfResponsibility.join(', ')}<br>
            <strong>Timeline For Fulltime:</strong> ${cofounder.timelineForFulltime}<br>
            <strong>Cofounder Desired Qualities:</strong> ${cofounder.cofounderDesiredQualities}<br>
            <strong>Impressive Accomplishment:</strong> ${cofounder.impressiveAccomplishment}
        `;
        li.appendChild(details);
    
        cofounderList.appendChild(li);
    })

      console.log('Fetched cofounders:', cofounders);
  } catch (error) {
      console.error('There was a problem fetching the cofounders:', error);
  }
}



