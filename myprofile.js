// This script fetches the user's profile from the server and displays it on the page.

document.addEventListener('DOMContentLoaded', async (event) => { // Make the function async
  const token = localStorage.getItem('token');
  console.log(`token: ${token}`);
  const payload = JSON.parse(atob(token.split('.')[1])); // Decode payload of JWT
  console.log(payload);
  const userId = payload.id;
  console.log(`userId: ${userId}`);
  if (!userId) {
    displayNoProfileMessage();
    return;
  }
  const config = {
    headers: { 'Authorization': `Bearer ${token}` },
    params: { userId: userId }
  };
  try {
    const response = await axios.get(`https://cofounder-connect-d2057df29b96.herokuapp.com/cofounders/profile`, config);
    const profile = response.data;
    console.log(profile);
    if (profile.length=0) {
      displayProfile(profile);
    } else {
      displayNoProfileMessage();
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

function displayNoProfileMessage() {
  console.log('No profile found. Create a profile?');
  const profileContainer = document.getElementById('profile-container');
  // Ensure the container is cleared before adding new content
  profileContainer.innerHTML = '';

  const newProfileButton = document.createElement('button');
  newProfileButton.textContent = 'Create Profile';
  newProfileButton.style.padding = "10px 20px"; 
  newProfileButton.style.marginTop = "20px"; 
  newProfileButton.addEventListener('click', () => {
    window.location.href = '/createprofile.html'; 
  });
  const noProfileMessage = document.createElement('p');
  noProfileMessage.textContent = `Looks like you haven't created a profile yet. Want to get started on creating one?`;

  profileContainer.appendChild(noProfileMessage);
  profileContainer.appendChild(newProfileButton);
}

function displayProfile(profile) {
  const myProfile = profile[0];
  console.log('Displaying profile:', profile);
  console.log(myProfile.ideasInterestedIn);

  const profileContainer = document.getElementById('profile-container')
  profileContainer.innerHTML = `
  <h3 style="padding: 20px; margin: 0;">${myProfile.name}</h3>
  ${myProfile.aboutMe}<br>
  <br>
  <strong>LinkedIn:</strong> <a href="${myProfile.linkedinURL}" target="_blank">${myProfile.linkedinURL}</a><br>
  <strong>Program Type:</strong> ${myProfile.programType}<br>
  <strong>Industry Interests:</strong> ${myProfile.industryInterests}<br>
  <strong>Is Technical:</strong> ${myProfile.isTechnical ? 'Yes' : 'No'}<br>
  <br>

  <strong>Education:</strong><br>
  ${myProfile.education}<br>
  <strong>Employment History:</strong><br>
  ${myProfile.employmentHistory}<br>
  <strong>Impressive Accomplishment:</strong><br>
  ${myProfile.impressiveAccomplishment}<br>
  <br>

  <strong>Has Idea:</strong> ${profile.hasIdea}<br>
  <strong>Potential Ideas:</strong><br>
  ${myProfile.ideasInterestedIn}<br>
  <br>

  <strong>My Ideal Cofounder:</strong> ${myProfile.cofounderDesiredQualities}<br>
  <strong>Areas I Can Be Responsible For:</strong> ${myProfile.areasOfResponsibility}(', ')}<br>
  <strong>Timeline For Getting Started:</strong> ${myProfile.timelineForFulltime}<br>
  <br>

  <strong>Email:</strong> ${myProfile.email}<br>
  <strong>Scheduling URL:</strong> <a href="${myProfile.schedulingURL}" target="_blank">${myProfile.schedulingURL}</a><br>`
}

