// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmc0UDtOFaLrGWbVj2ROugpyyxAZAuBHg",
    authDomain: "pay-it-forward-a1ab8.firebaseapp.com",
    projectId: "pay-it-forward-a1ab8",
    storageBucket: "pay-it-forward-a1ab8.appspot.com",
    messagingSenderId: "788159566096",
    appId: "1:788159566096:web:aa40dcf3d843c98abc1595",
    measurementId: "G-5NPK7TMQZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a task to Firestore
async function addTask() {
    const posterName = document.getElementById('task-poster').value;
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;

    if (posterName && title && desc) {
        try {
            await addDoc(collection(db, "tasks"), {
                posterName,
                title,
                desc,
                timestamp: new Date(),
            });
            alert('Task added successfully!');
            loadTasks(); // Refresh tasks after adding
        } catch (error) {
            console.error("Error adding task: ", error);
            alert("Error adding task. Please try again.");
        }
    } else {
        alert('Please fill out all fields before adding a task.');
    }
}

// Load tasks from Firestore
async function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the list

    try {
        const tasksQuery = query(collection(db, "tasks"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(tasksQuery);

        querySnapshot.forEach((doc) => {
            const task = doc.data();
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${task.title}</strong>
                <p>${task.desc}</p>
                <p><em>Posted by: ${task.posterName}</em></p>
            `;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading tasks: ", error);
        alert("Error loading tasks. Please try again.");
    }
}

// Load tasks on page load
window.onload = loadTasks;
