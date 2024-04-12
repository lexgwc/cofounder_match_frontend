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