// Accessing DOM elements
const nameInput = document.getElementById('name-input');
const surnameInput = document.getElementById('surname-input');
const emailInput = document.getElementById('email-input');
const topicInput = document.getElementById('topic-input');
const descriptionInput = document.getElementById('description-input');
const contactCheckbox = document.getElementById('contact-checkbox');
const sendButton = document.getElementById('send-button');

// Event listener for the Send button
sendButton.addEventListener('click', function() {
  // Retrieve the values from the input fields
  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const topic = topicInput.value;
  const description = descriptionInput.value;
  const allowContact = contactCheckbox.checked;

  // Perform validation if needed

  // Create an object with the form data
  const formData = {
    name: name,
    surname: surname,
    email: email,
    topic: topic,
    description: description,
    allowContact: allowContact
  };

  // Perform further operations with the form data, such as sending it to a server

  // Clear the input fields
  nameInput.value = '';
  surnameInput.value = '';
  emailInput.value = '';
  topicInput.value = '';
  descriptionInput.value = '';
  contactCheckbox.checked = false;

  // Display a confirmation message or perform any other desired actions
  alert('Form submitted successfully!');
});

// Event listeners for the name, surname, email, and topic boxes
nameInput.addEventListener('click', function() {
  // Clear the placeholder text when clicked
  nameInput.placeholder = '';
});

surnameInput.addEventListener('click', function() {
  surnameInput.placeholder = '';
});

emailInput.addEventListener('click', function() {
  emailInput.placeholder = '';
});

topicInput.addEventListener('click', function() {
  topicInput.placeholder = '';
});