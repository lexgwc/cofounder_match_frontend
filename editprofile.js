
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded and parsed');
  fetchSchools()
  fetchIndustryInterests()
  fetchTimelines()
  fetchResponsibilities()
  fetchIdeas()

  document.querySelector('form').addEventListener('submit', function(event) {
    console.log('button clicked')
    event.preventDefault(); // Prevent the form from submitting the traditional way
    editProfile();
  })
});


// fetch schools from backend
async function fetchSchools() {
  try {
      const response = await axios.get('http://localhost:3000/cofounders/school');
      const schools = response.data;
      const schoolSelect = document.getElementById('currentSchool');
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
        const response = await axios.get('http://localhost:3000/cofounders/industries');
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
            checkbox.name = 'industryInterests';
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
    const response = await axios.get('http://localhost:3000/cofounders/timeline');
    const timelines = response.data;
    const timelineSelect = document.getElementById('timelineForFulltime');
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
        const response = await axios.get('http://localhost:3000/cofounders/responsibilities');
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
            checkbox.name = 'areasOfResponsibility';
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
    const response = await axios.get('http://localhost:3000/cofounders/idea');
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

async function editProfile() {

    const form = document.querySelector('form');
    

    // get token from local storage
    const token = localStorage.getItem('token');
    console.log(`token: ${token}`);
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode payload of JWT
    console.log(payload);
    const userId = payload.id;
    console.log(`Log userId: ${userId}`);

    const originalFormData = new FormData(form);

    // Create a new FormData object for the final data
    const formData = new FormData();

    // First append the userId
    formData.append('userId', userId);


// Then append all other form data entries
for (let [key, value] of originalFormData.entries()) {
    formData.append(key, value);
}

    
    // for (let [key, value] of formData.entries()) {
    //     console.log(`${key}: ${value}`);
    // };

    let object = {};
    formData.forEach((value, key) => {
    object[key] = value;
    });
    const json = JSON.stringify(object)
    console.log(json);
    // Preparing the data for the POST request
    // Note: FormData will be directly passed to axios, as axios handles FormData automatically
    try {
        // TODO: replace with heroku
        const response = await axios.put('http://localhost:3000/cofounders/profile', json, {
            headers: {
                'Content-Type': 'application/json','Authorization': `Bearer ${token}`
            }
        });
        console.log('Profile updated successfully:', response.data);
        alert('Profile updated successfully!');
    } catch (error) {
        console.error('There was a problem creating the profile:', error);
        alert('There was a problem creating the profile. Please try again later.');
    }
}

// async function createProfile() {
//     const form = document.querySelector('form');
    
//     // Get token from local storage
//     const token = localStorage.getItem('token');
//     console.log(`token: ${token}`);
//     const payload = JSON.parse(atob(token.split('.')[1])); // Decode payload of JWT
//     console.log(payload);
//     const userId = payload.id;
//     console.log(`Log userId: ${userId}`);

//     const formData = new FormData(form);

//     // Append the userId to the FormData
//     formData.append('userId', userId);

//     // Log each formData entry for debugging
//     for (let [key, value] of formData.entries()) {
//         console.log(`${key}: ${value}`);
//     };

//     // Preparing the data for the POST request
//     try {
//         const response = await fetch('http://localhost:3000/cofounders/profile', {
//             method: 'POST',
//             body: formData,
//             headers: {
//                 'Authorization': `Bearer ${token}`
//                 // Do not set Content-Type for FormData; fetch does this automatically
//             }
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Profile created successfully:', data);
//         alert('Profile created successfully!');
//     } catch (error) {
//         console.error('There was a problem creating the profile:', error);
//         alert('There was a problem creating the profile. Please try again later.');
//     }
// }

