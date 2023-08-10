<?php
include("db.php");
?>
<!DOCTYPE html>
<html>
<head>
    <title>Interactive Video Course Platform</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="style.css">
    
</head>

<body>
    
    <div class="heading">
        <h1>Interactive Video Course Platform</h1>
        </div>
    <div class="courses-details">
        <div class="course">
            <h2>Course 1</h2>
            <p>Description of Course 1</p>
            <button onclick="playVideo('path/to/video1.mp4', 1)" data-courseid="1">Watch</button>
        </div>
        <div class="course">
            <h2>Course 2</h2>
            <p>Description of Course 2</p>
            <button onclick="playVideo('path/to/video1.mp4', 2)" data-courseid="2">Watch</button>
        </div>
    </div>
    <div class="video-player">
        <video id="videoPlayer" controls>
            <source src="" type="video/mp4">
        </video>
        <div class="transcript"></div>
    </div>
    <div class="ask-question">
        <div class="title">Submit Your Question</div>
        <form id = "update_question">
        <input type="hidden" name="courseId" id="courseId" value="">
        <div class="form">
            <div class="form1">
                <label class="form-label" for="username">Name</label><br>
                <input type="text" name="name" placeholder="Your Name" required>
                
            </div>
            <div class="form1">
                <label class="form-label" for="email">Email</label><br>
                <input type="text" name="email" placeholder="Your Email" required>
                
            </div>
            <div class="form1">
                <label class="form-label" for="question">Question</label><br>
                <textarea class="Your Question" name="question" placeholder="Your Question"></textarea>
                
            </div>
            <button type="submit"  id = "submit" onclick = "return AddQuestion()">Submit Question</button>
        </div>
        <div class="question-list"></div>
</form>
    </div>

    <script src="script.js"></script>
</body>
</html>
