document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded and parsed');
  fetchSchools()
  fetchIndustryInterests()
  fetchTimelines()
  fetchResponsibilities()
  fetchIdeas()
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
        // Fetching the industry interests from the backend
        const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/industries');
        const industryInterests = response.data;
        
        // Getting the fieldset element by its ID
        const industryFieldset = document.getElementById('industryFieldset');
        
        // Clearing existing checkboxes before adding new ones
        industryFieldset.innerHTML = '<legend>Industry Interests:</legend>';
        
        // Iterating through the fetched industries and creating checkboxes for each
        industryInterests.forEach(industry => {
            // Creating the label element
            const label = document.createElement('label');
            label.textContent = industry;
            
            // Creating the checkbox input element
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'industry';
            checkbox.value = industry;
            
            // Appending the checkbox to the label, then adding a line break, and finally appending the label to the fieldset
            label.insertBefore(checkbox, label.firstChild); // Insert checkbox before the label text
            industryFieldset.appendChild(label);
            industryFieldset.appendChild(document.createElement('br')); // Adding a break line for spacing
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
        // Fetching responsibilities from the backend
        const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/responsibilities');
        const responsibilities = response.data;
        
        // Getting the fieldset element by its ID
        const responsibilitiesFieldset = document.getElementById('responsibilitiesFieldset');
        
        // Clearing existing checkboxes before adding new ones
        responsibilitiesFieldset.innerHTML = '<legend>Areas you can be responsible for in a business:</legend>';
        
        // Iterating through the fetched responsibilities and creating checkboxes for each
        responsibilities.forEach(responsibility => {
            // Creating the checkbox input element
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'responsibility';
            checkbox.value = responsibility;

            // Creating the label element and appending the checkbox and responsibility text to it
            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${responsibility}`)); // Adding text next to checkbox
            
            // Appending the label to the fieldset and adding a line break for spacing
            responsibilitiesFieldset.appendChild(label);
            responsibilitiesFieldset.appendChild(document.createElement('br'));
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