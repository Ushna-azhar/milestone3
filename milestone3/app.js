function generateResume() {
    // Get form values
    var profilePictureInput = document.getElementById('profilePicture');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Handle profile picture
    var profilePictureURL = '';
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        var file = profilePictureInput.files[0];
        var reader = new FileReader();
        // Define onload callback for FileReader
        reader.onload = function (e) {
            profilePictureURL = e.target.result; // Get the result as a data URL
            updateResumePreview(); // Update resume preview after loading the image
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
    else {
        updateResumePreview(); // Update resume preview without image
    }
    function updateResumePreview() {
        // Generate resume preview HTML
        var resumePreview = "\n            <div class=\"resume-header\">\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\">") : '', "\n                <h3>Name</h3>\n                <p>").concat(name, "</p>\n                <h3>Email</h3>\n                <p>").concat(email, "</p>\n                <h3>Phone</h3>\n                <p>").concat(phone, "</p>\n            </div>\n            <div class=\"resume-body\">\n                <h3>Education Level</h3>\n                <p>").concat(education, "</p>\n                <h3>Professional Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </div>\n        ");
        // Display the resume preview
        document.getElementById('resumePreview').innerHTML = resumePreview;
    }
}
