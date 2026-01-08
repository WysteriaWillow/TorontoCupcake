let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

mybutton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function toggleChat() {
  const chatWindow = document.getElementById('chatWindow');
  if (chatWindow.classList.contains('d-none')) {
    chatWindow.classList.remove('d-none');
  } else {
    chatWindow.classList.add('d-none');
  }
}
window.addEventListener('click', function (event) {
  const chatWindow = document.getElementById('chatWindow');
  const chatBtn = document.getElementById('btn-chat');

  if (!chatWindow.classList.contains('d-none')) {
    if (!chatWindow.contains(event.target) && !chatBtn.contains(event.target)) {
      chatWindow.classList.add('d-none');
    }
  }
});
document.getElementById('sendBtn').addEventListener('click', sendMessage);

// Allow pressing "Enter" to send
document.getElementById('userConcern').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('userConcern');
    const messageArea = document.getElementById('messageArea');
    
    if (input.value.trim() !== "") {
        const userMsg = document.createElement('div');
        userMsg.style.textAlign = 'right';
        userMsg.style.margin = '10px 0';
        userMsg.innerHTML = `<span style="background: #ff85a2; color: white; padding: 8px 12px; border-radius: 15px; display: inline-block; font-size: 0.85rem;">${input.value}</span>`;
        
        messageArea.appendChild(userMsg);
        
        input.value = "";
        messageArea.scrollTop = messageArea.scrollHeight;
        
        setTimeout(() => {
            const reply = document.createElement('div');
            reply.style.margin = '10px 0';
            reply.innerHTML = `<span style="background: #eee; color: #333; padding: 8px 12px; border-radius: 15px; display: inline-block; font-size: 0.85rem;">Thanks! A baker will get back to you shortly.</span>`;
            messageArea.appendChild(reply);
            messageArea.scrollTop = messageArea.scrollHeight;
        }, 1000);
    }
}
