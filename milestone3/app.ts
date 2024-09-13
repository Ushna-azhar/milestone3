function generateResume() {
    // Get form values
    const profilePictureInput = document.getElementById('profilePicture');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Handle profile picture
    let profilePictureURL = '';
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const file = profilePictureInput.files[0];
        const reader = new FileReader();
        
        // Define onload callback for FileReader
        reader.onload = function (e) {
            profilePictureURL = e.target.result; // Get the result as a data URL
            updateResumePreview(); // Update resume preview after loading the image
        };
        
        reader.readAsDataURL(file); // Read the file as a data URL
    } else {
        updateResumePreview(); // Update resume preview without image
    }

    function updateResumePreview() {
        // Generate resume preview HTML
        const resumePreview = `
            <div class="resume-header">
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture">` : ''}
                <h3>Name</h3>
                <p>${name}</p>
                <h3>Email</h3>
                <p>${email}</p>
                <h3>Phone</h3>
                <p>${phone}</p>
            </div>
            <div class="resume-body">
                <h3>Education Level</h3>
                <p>${education}</p>
                <h3>Professional Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        `;

        // Display the resume preview
        document.getElementById('resumePreview').innerHTML = resumePreview;
    }
}
