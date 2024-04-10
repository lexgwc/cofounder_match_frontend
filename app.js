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

fetchSchools()









