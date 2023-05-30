const formSubmissions = [];
let timerId;

function handleSubmit(event) {
  event.preventDefault();

  const navn = document.getElementById('navn').value;
  const efternavn = document.getElementById('efternavn').value;
  const emne = document.getElementById('emne').value;
  const email = document.getElementById('email').value;
  const beskrivelse = document.getElementById('beskrivelse').value;

  const formData = {
    navn,
    efternavn,
    emne,
    email,
    beskrivelse
  };

  formSubmissions.push(formData);

  document.getElementById('navn').value = '';
  document.getElementById('efternavn').value = '';
  document.getElementById('emne').value = '';
  document.getElementById('email').value = '';
  document.getElementById('beskrivelse').value = '';

  if (formSubmissions.length >= 2) {
    alert('You have reached the maximum number of submissions.');

    // Start the timer for resetting the maximum submissions after 10 seconds
    startTimer();
  } else {
    alert('Form submitted successfully!');
  }

  displaySubmissions();
}

function displaySubmissions() {
  const submissionsList = document.getElementById('submissions-list');
  submissionsList.innerHTML = '';

  if (formSubmissions.length === 0) {
    submissionsList.innerHTML = 'No submissions yet.';
  } else {
    for (let i = 0; i < formSubmissions.length; i++) {
      const submission = formSubmissions[i];
      const listItem = document.createElement('li');
      listItem.textContent = `${submission.navn} ${submission.efternavn}: ${submission.emne}`;
      submissionsList.appendChild(listItem);
    }
  }
}

function startTimer() {
  const resetTime = 3; // 3 seconds
  let timeRemaining = resetTime;

  // Display the initial countdown
  alert(`Maximum submissions will reset in ${timeRemaining} seconds.`);

  // Disable the "Send" button
  document.getElementById('submit-btn').disabled = true;

  // Update the countdown every second
  timerId = setInterval(() => {
    timeRemaining--;

    // Display the updated countdown
    alert(`Maximum submissions will reset in ${timeRemaining} seconds.`);

    // When the countdown reaches 0, reset the maximum submissions and enable the submit button
    if (timeRemaining === 0) {
      clearInterval(timerId);
      formSubmissions.length = 0;
      document.getElementById('submit-btn').disabled = false;
      alert('Maximum submissions have been reset. You can now submit the form.');
    }
  }, 300);
}

// Add an event listener to the form submit event
document.getElementById('submit-btn').addEventListener('click', handleSubmit);
