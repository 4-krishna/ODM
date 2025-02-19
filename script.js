// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyArGks2VnMZLvs3E_XMxraB-k25cj8DpT0",
    authDomain: "od-management-a0122.firebaseapp.com",
    projectId: "od-management-a0122",
    storageBucket: "od-management-a0122.firebasestorage.app",
    messagingSenderId: "861599745147",
    appId: "1:861599745147:web:5a7cc17ae4011204604ede",
    measurementId: "G-PPJ6TC32J8"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

// Login Function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Simulate form submission with your actual Firebase implementation
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Successfully logged in!');
                window.location.href = '/home.html'; // Redirect to home page
            })
            .catch((error) => {
                alert(error.message);
            });
    }
}

// Sign Up Function
function signup() {
    const email = document.getElementById('email').value;
    const password = prompt('Enter your password:');

    if (email && password) {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Successfully created account!');
                window.location.href = '/home.html'; // Redirect to home page
            })
            .catch((error) => {
                alert(error.message);
            });
    }
}

// Auth State Check
window.addEventListener('load', function() {
    const user = auth.currentUser;

    if (user) {
        alert('You are already logged in!');
        window.location.href = '/home.html';
    }
});

// Form Submit Handler
document.getElementById('login-form').addEventListener('submit', login);
