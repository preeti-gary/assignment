// Sample video transcript data
const videoTranscript = [
    { timestamp: 0, text: "Welcome to the course!" },
    { timestamp: 10, text: "In this video, we will learn about..." },
    // Add more transcript entries
];

// $(document).ready(function() {
//     $("#AddQuestion").click(function() {
//         // Serialize form data
//         var formData = $("#update_question").serialize();

//         // Send the data using AJAX
//         $.ajax({
//             type: "POST", // HTTP method
//             url: "insert_data.php", // Replace with the actual server endpoint URL
//             data: formData,
//             success: function(response) {
//                 console.log("Data sent successfully!", response);
//             },
//             error: function(xhr, status, error) {
//                 console.error("Error sending data:", error);
//             }
//         });
//     });
// });

function AddQuestion() {
  //Get the selected courseId from the JavaScript variable
  var courseId = selectedCourseId;

  // Update the form's courseId input value
  var courseIdInput = document.getElementById('courseId');
  courseIdInput.value = courseId;
 
    //document.getElementById("submit").innerHTML ="Please Wait....";
    $.ajax({
      url: "insert_data.php",
      type: "POST",
      data: $("#update_question").serialize(),
      success: function (data) {
        var response = JSON.parse(data);
        alert(response.message);
        if (response.error == false) 
        {
          setInterval(function () {
            location.reload();
        }, 2000);
        }
        document.getElementById("submit").innerHTML ="Submit";
      },
    });
    return false;
  }

  function playVideo(videoSrc, courseId) {
    $('#courseId').val(courseId);
    var videoPlayer = document.getElementById('videoPlayer');
    var transcriptElement = document.querySelector('.transcript');
    var askQuestionForm = document.getElementById('update_question');
    var questionListContainer = document.querySelector('.question-list');

    videoPlayer.src = videoSrc;
    transcriptElement.innerHTML = ''; // Clear previous transcript
    selectedCourseId = courseId; // Store the selected courseId

    // Display the video transcript (you can keep this part as it is)
    videoTranscript.forEach(entry => {
        transcriptElement.innerHTML += `<p data-timestamp="${entry.timestamp}">${entry.text}</p>`;
    });

    // Add event listener to sync the transcript with video playback (you can keep this part as it is)
    videoPlayer.addEventListener('timeupdate', function() {
        // ... (existing timeupdate functionality) ...
    });

    // Add event listener for form submission (you can keep this part as it is)
    askQuestionForm.addEventListener('submit', function(event) {
        // ... (existing form submission functionality) ...
    });

    // Fetch and display previously asked questions for the selected course
    fetchPreviousQuestions(courseId);
}

// Function to fetch and display previously asked questions for the selected course
function fetchPreviousQuestions(courseId) {
    var questionListContainer = document.querySelector('.question-list');
    $.ajax({
        url: "get_questions.php", // Modify this URL as needed to fetch questions for the given courseId
        type: "GET",
        data: { courseId: courseId }, // Send courseId to the server
        success: function(data) {
            var response = JSON.parse(data);
            questionListContainer.innerHTML = ''; // Clear previous questions

            // Display the fetched questions
            response.forEach(question => {
                questionListContainer.innerHTML += `<p><strong>${question.Name}</strong>: ${question.Question}</p>`;
            });
        },
        error: function() {
            // Handle error if needed
            questionListContainer.innerHTML = '<p>Error fetching questions.</p>';
        }
    });
}

// function AddQuestion() {
//     // var courseId = selectedCourseId;

//     // var courseIdInput = document.getElementById('courseId');
//     // courseIdInput.value = courseId;

//     document.getElementById("submit").innerHTML = "Please Wait....";
//     $.ajax({
//         url: "insert_data.php",
//         type: "POST",
//         data: $("#update_question").serialize(),
//         success: function(data) {
//             var response = JSON.parse(data);
//             alert(response.message);
//             if (!response.error) {
//                 fetchPreviousQuestions(courseId);
//                 document.getElementById("update_question").reset(); // Reset the form
//             }
//             document.getElementById("submit").innerHTML = "Submit";
//         },
//         error: function() {
//             console.error('Request failed');
//             document.getElementById("submit").innerHTML = "Submit";
//         }
//     });
//     return false;
// }





// $(document).ready(function() {
//   $('#update_question').submit(function(event) {
//       event.preventDefault(); // Prevent form from submitting normally
      
//       var formData = $(this).serialize(); // Serialize form data
//       $.ajax({
//           type: 'POST',
//           url: 'insert_data.php', // Replace 'your-server-url' with the actual server URL
//           data: formData,
//           success: function(response) {
//               console.log(response); // Handle successful response
//           },
//           error: function() {
//               console.error('Request failed'); // Handle error
//           }
//       });
//   });
// });

