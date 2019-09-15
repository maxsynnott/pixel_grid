const initChatbox = () => {
  const groups = document.querySelectorAll(".group")
  const messages = document.getElementById("messages")
  groups.forEach((group) => {
    group.addEventListener('click', (event) => {
      event.preventDefault();
      const current = document.getElementById('chatbox').querySelector('.active');
      if (current) {
        current.classList.remove('active');
      }
      group.classList.add('active');
      messages.innerHTML = ""

      // TODO: API implementation
      console.log(`/api/v1/group_chats/${group.dataset.id}/messages`)
      fetch(`/api/v1/group_chats/${group.dataset.id}/messages`)
      .then(response => response.json())
      .then((data) => {
        Object.values(data).forEach((message) => {
          messages.insertAdjacentHTML('beforeend',
          `<li><span class="message-author">${message.author}:</span> <span class="message-content">${message.content}</span></li>`)
        })
      })
    })
  })
};

export { initChatbox };
