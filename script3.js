const chatbot = document.getElementById("chatbot");
const toggleBtn = document.getElementById("chatbot-toggle");
const closeBtn = document.getElementById("close-chat");
const chatBody = document.getElementById("chat-body");
const input = document.getElementById("user-input");

// Safety check (prevents errors if element missing)
if (toggleBtn && closeBtn && input) {

  // Toggle Chat
  toggleBtn.addEventListener("click", () => {
    chatbot.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    chatbot.classList.remove("active");
  });

  // Send message on Enter key
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
}

function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, "user-message");
  input.value = "";

  showTyping();

  setTimeout(() => {
    removeTyping();
    const response = getBotResponse(message);
    addMessage(response, "bot-message");
  }, 800);
}

function addMessage(text, className) {
  const msg = document.createElement("div");
  msg.className = className;
  msg.innerText = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showTyping() {
  const typing = document.createElement("div");
  typing.className = "bot-message typing";
  typing.id = "typing-indicator";
  typing.innerText = "Typing...";
  chatBody.appendChild(typing);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById("typing-indicator");
  if (typing) typing.remove();
}

function getBotResponse(message) {
  const msg = message.toLowerCase();

  const eventsList = `
Here are the 18 Main Events:

1. Hackathon
2. Paper Presentation
3. Gaming Tournament
4. Coding Challenge
5. Robo Race
6. Robo Soccer
7. Robo War
8. Drone Racing
9. Webathon
10. App Development
11. Line Follower Robot
12. Circuit Designing
13. CAD Designing
14. MATLAB
15. E-Sports
16. Smart Automation
17. Poster Design
18. Technical Quiz
`;

  if (msg.includes("hi") || msg.includes("hello")) {
    return "Hello 👋 Welcome to TechFest 2026! How can I help you?";
  } 
  else if (msg.includes("date")) {
    return "The event is on 14, 15 & 16 March 2026.";
  } 
  else if (msg.includes("venue")) {
    return "Venue: Supaul College of Engineering.";
  } 
  else if (msg.includes("event")) {
    return eventsList;
  } 
  else if (msg.includes("register")) {
    return "You can register from the Registration page of this website.";
  } 
  else if (msg.includes("contact")) {
    return "For more information, contact us at:\n\n📧 techfest@supaulcollege.edu.in\n📞 Rupesh Kumar: +91 80840 92684 \n nishant paratap:+91 7488 594 347";
  } 
  else {
    return "Sorry, I don't have that information. Please ask about Date, Venue, Events, Registration or Contact.";
  }
}
