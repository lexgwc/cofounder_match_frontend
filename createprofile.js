
document.addEventListener('DOMContentLoaded', function() {
  fetchSchools()
  fetchIndustryInterests()
  fetchTimelines()
  fetchResponsibilities()
  fetchIdeas()

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    createProfile();
  })
});


// fetch schools from backend
async function fetchSchools() {
  try {
      const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/school');
      const schools = response.data;
      const schoolSelect = document.getElementById('currentSchool');
      schools.forEach(school => {
          const option = document.createElement('option');
          option.value = school.schoolName; 
          option.textContent = school.schoolName; 
          schoolSelect.appendChild(option);
      });
      // Process the fetched schools data here
  } catch (error) {
      console.error('There was a problem fetching the schools:', error);
  }
}


// fetch industry interests from backend

async function fetchIndustryInterests() {
    try {
        const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/industries');
        const industryInterests = response.data;
        
        const industryFieldset = document.getElementById('industryFieldset');
        
        industryFieldset.innerHTML = '<legend>Industry Interests:</legend>';
        
        industryInterests.forEach(industry => {
            const label = document.createElement('label');
            label.textContent = industry;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'industryInterests';
            checkbox.value = industry;

            label.insertBefore(checkbox, label.firstChild); 
            industryFieldset.appendChild(label);
            industryFieldset.appendChild(document.createElement('br'));
        });
        
    } catch (error) {
        console.error('There was a problem fetching the industry interests:', error);
    }
}



async function fetchTimelines() {
try {
    const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/timeline');
    const timelines = response.data;
    const timelineSelect = document.getElementById('timelineForFulltime');
    timelines.forEach(timeline => {
        const option = document.createElement('option');
        option.value = timeline; 
        option.textContent = timeline;
        timelineSelect.appendChild(option);
    });
} catch (error) {
    console.error('There was a problem fetching the timelines:', error);
}
}


// fetch responsibilities from backend

async function fetchResponsibilities() {
    try {
        const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/responsibilities');
        const responsibilities = response.data;
        
        const responsibilitiesFieldset = document.getElementById('responsibilitiesFieldset');
        
        responsibilitiesFieldset.innerHTML = '<legend>Areas you can be responsible for in a business:</legend>';
        
        responsibilities.forEach(responsibility => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'areasOfResponsibility';
            checkbox.value = responsibility;

            const label = document.createElement('label');
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${responsibility}`)); 

            responsibilitiesFieldset.appendChild(label);
            responsibilitiesFieldset.appendChild(document.createElement('br'));
        });
        
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
        option.value = idea; 
        option.textContent = idea;
        ideaSelect.appendChild(option);
    });
} catch (error) {
    console.error('There was a problem fetching the ideas:', error);
}
}

async function createProfile() {

    const form = document.querySelector('form');
    
    const token = localStorage.getItem('token');
    const payload = JSON.parse(atob(token.split('.')[1])); /
    const userId = payload.id;
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': null 
        }
    }

    const originalFormData = new FormData(form);

    const formData = new FormData();

    formData.append('userId', userId);

for (let [key, value] of originalFormData.entries()) {
    formData.append(key, value);
}

    let object = {};
    formData.forEach((value, key) => {
    object[key] = value;
    });
    const json = JSON.stringify(object)

    try {
        const response = await axios.post('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/profile', json, {
            headers: {
                'Content-Type': 'application/json','Authorization': `Bearer ${token}`
            }
        });
        alert('Profile created successfully!');
    } catch (error) {
        console.error('There was a problem creating the profile:', error);
        alert('There was a problem creating the profile. Please try again later.');
    }
}
