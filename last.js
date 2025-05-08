function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show-menu');
  }
  let isFilm3 = true;

  function toggleVideo() {
    const video = document.getElementById("backgroundVideo");
    const source = video.querySelector("source");

    if (isFilm3) {
      source.src = "FILM4.mp4";
      document.body.classList.add("black-text");
    } else {
      source.src = "FILM3.mp4";
      document.body.classList.remove("black-text");
    }

    isFilm3 = !isFilm3;
    video.load();
    video.play();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const mapIframe = document.getElementById("map");
    mapIframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.12911454178187!2d121.0016867!3d14.2891015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d610f4f0d42b%3A0xfb78d9c26ddf25cf!2s7-Eleven%20Lumbreras!5e0!3m2!1sen!2sph!4v1714980000000";
  });

  // Event listener for file selection
document.getElementById('fileUploadUnique').addEventListener('change', function() {
  var fileInput = this;
  var file = fileInput.files[0]; // Get the selected file
  var previewBox = document.getElementById('filePreviewBox');
  var previewText = document.getElementById('filePreviewText');

  if (file) {
    // Show the file name in the file name indicator
    document.getElementById('fileNameIndicator').textContent = file.name;

    // If the file is an image, show a preview of it
    if (file.type.startsWith('image/')) {
      var reader = new FileReader();
      reader.onload = function(e) {
        previewBox.innerHTML = `<img src="${e.target.result}" alt="File preview" class="file-preview-img">`;
      };
      reader.readAsDataURL(file);
    } else {
      // If the file is not an image, show the file name as text
      previewBox.innerHTML = `<span>${file.name}</span>`;
    }
  } else {
    // Reset the preview box if no file is selected
    previewBox.innerHTML = `<span>No file selected for preview</span>`;
    document.getElementById('fileNameIndicator').textContent = 'No file selected';
  }
});

document.getElementById('contactFormUnique').addEventListener('submit', function(e) {
  e.preventDefault();

  var name = document.getElementById('nameUnique').value;
  var email = document.getElementById('emailUnique').value;
  var message = document.getElementById('messageUnique').value;
  var fileInput = document.getElementById('fileUploadUnique');
  var file = fileInput.files[0]; // Get the selected file

  if (!file) {
    alert('Please upload a file!');
    return; // Stop if no file is selected
  }

  var telegramBotAPI = 'https://api.telegram.org/bot7761569878:AAHjZ8jLGwL9aBUI8mHExZh-kdsYyac51VA/';
  var chatId = '@ReccaDev'; // Your channel username

  var messageText = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Message: ${message}
File Uploaded: ${file.name}`; // Add the file name in the message

  var formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', messageText);  // The text message
  formData.append('document', file);  // The file selected by the user

  fetch(telegramBotAPI + 'sendDocument', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log("Data from Telegram API:", data); // Log the parsed data
      if (data.ok) {
        alert('Message and file sent successfully!');
        document.getElementById('contactFormUnique').reset();
        document.getElementById('filePreviewBox').innerHTML = '<span>No file selected for preview</span>'; // Reset preview box
        document.getElementById('fileNameIndicator').textContent = 'No file selected'; // Reset file name display
      } else {
        alert('Failed to send message! Error: ' + data.description);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong, please try again!');
    });
});
