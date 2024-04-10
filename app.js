import axios from 'axios'

// document.addEventListener('DOMContentLoaded', function() {
//     fetchSchools()
//     fetchIndustryInterests()
//     fetchTimelines()
//     fetchResponsibilities()
//     fetchIdeas()

//     // Add event listener for form submission
//     document.querySelector('form').addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent the form from submitting the traditional way
//       findCofounders();
//     });
//   });
  
  
// fetch schools from backend
  async function fetchSchools() {
    try {
        const response = await axios.get('https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/school');
        const schools = response.data;
        const schoolSelect = document.getElementById('school');
        schools.forEach(school => {
            const option = document.createElement('option');
            option.value = school.schoolName; // Assuming 'school' is the value you want to send in the form
            option.textContent = school.schoolName; // Assuming 'school' is also what you want to display
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

fetchSchools()



