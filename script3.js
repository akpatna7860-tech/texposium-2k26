const chatbot = document.getElementById("chatbot");
const toggleBtn = document.getElementById("chatbot-toggle");
const closeBtn = document.getElementById("close-chat");
const chatBody = document.getElementById("chat-body");

toggleBtn.onclick = () => chatbot.style.display = "flex";
closeBtn.onclick = () => chatbot.style.display = "none";

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerText = message;
  chatBody.appendChild(userMsg);

  input.value = "";

  // Bot reply
  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";

  if (message.toLowerCase().includes("date")) {
    botMsg.innerText = "The event is on 14, 15 & 16 March 2026.";
  } 
  else if (message.toLowerCase().includes("venue")) {
    botMsg.innerText = "Venue: Supaul College of Engineering.";
  } 
  else {
    botMsg.innerText = "Please contact support for more details.";
  }

  chatBody.appendChild(botMsg);
  chatBody.scrollTop = chatBody.scrollHeight;
}
