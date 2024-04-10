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
        // Process the fetched industry interests data here
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
        // Process the fetched timelines data here
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
        // Process the fetched responsibilities data here
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
      // Process the fetched ideas data here
      console.log('Fetched ideas:', ideas);
  } catch (error) {
      console.error('There was a problem fetching the ideas:', error);
  }
}

// write function to find cofounders using get request from backend based on the form data

async function findCofounders() {
  const formData = new FormData(document.querySelector('form'));
  const data = {
      school: formData.get('school'),
      industry: formData.get('industry'),
      timeline: formData.get('timeline'),
      responsibilities: formData.get('responsibilities'),
      idea: formData.get('idea')
  };
  try {
      const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/profile', { params: data });
      const cofounders = response.data;
      // Clear existing cofounder list
      const cofounderList = document.getElementById('cofounder-list').querySelector('ul');
      cofounderList.innerHTML = '';
      
      // Append new cofounders to the list
      cofounders.forEach(cofounder => {
          const li = document.createElement('li');
          // Assuming cofounder object has 'name' property. Adjust according to actual data structure.
          li.textContent = cofounder.name; // Adjust this line to match the content structure of your cofounder objects
          cofounderList.appendChild(li);
      });

      console.log('Fetched cofounders:', cofounders);
  } catch (error) {
      console.error('There was a problem fetching the cofounders:', error);
  }
}



