// Show Signup Page
function showSignup() {
    document.getElementById("welcomePage").classList.add("hidden");
    document.getElementById("signupPage").classList.remove("hidden");
}

// Simulate OTP Sending
function sendOTP() {
    let email = document.getElementById("email").value;
    if (!email) {
        alert("Please enter a valid email!");
        return;
    }
    
    alert("OTP has been sent to " + email);
    document.getElementById("signupPage").classList.add("hidden");
    document.getElementById("otpPage").classList.remove("hidden");
}

// Simulate OTP Verification
function verifyOTP() {
    let otp = document.getElementById("otp").value;
    if (otp !== "123456") {  // Default OTP for testing
        alert("Invalid OTP! Try again.");
        return;
    }

    alert("OTP Verified Successfully!");
    document.getElementById("otpPage").classList.add("hidden");
    document.getElementById("roleSelectionPage").classList.remove("hidden");
}

// Handle Role Selection
function selectRole(role) {
    document.getElementById("roleSelectionPage").classList.add("hidden");

    if (role === "admin") {
        document.getElementById("adminDashboard").classList.remove("hidden");
    } else if (role === "student") {
        document.getElementById("studentDashboard").classList.remove("hidden");
    } else if (role === "teacher") {
        document.getElementById("teacherDashboard").classList.remove("hidden");
    }
}

// Student Dashboard Navigation
function showExams() {
    document.getElementById("examSection").classList.toggle("hidden");
}

// Teacher - Create Exam
function createExam() {
    alert("Feature coming soon!");
}

// Admin - Monitor Exams
function monitorExams() {
    alert("Monitoring feature coming soon!");
}
