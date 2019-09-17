const initChatbox = () => {
  const groups = document.querySelectorAll(".group")
  const messages = document.getElementById("messages")

  // In the future change this to subscribe to users saved group
  console.log(groups[0])
  if (groups[0]) {
    App[groups[0].dataset.id] = App.cable.subscriptions.create(
                         { channel: 'GroupChatsChannel', group_chat_id: groups[0].dataset.id }, {
                           received: (message) => {
                             messages.insertAdjacentHTML('beforeend',
                             `<li><span class="message-author">${message.author}:</span> <span class="message-content">${message.content}</span></li>`)
                           }
                         }
                       )
    groups[0].classList.add('active')
  }

  groups.forEach((group) => {
    group.addEventListener('click', (event) => {
      event.preventDefault();
      const current = document.getElementById('chatbox').querySelector('.active');
      if (current) {
        current.classList.remove('active');
      }

      // Unsubscribes from old channel
      App[current.dataset.id].unsubscribe();

      group.classList.add('active');

      let groupChatId = group.dataset.id
      messages.innerHTML = ""

      // Inserts messages from db fetched through api
      fetch(`/api/v1/group_chats/${groupChatId}/messages`)
      .then(response => response.json())
      .then((data) => {
        Object.values(data).forEach((message) => {
          messages.insertAdjacentHTML('beforeend',
          `<li><span class="message-author">${message.author}:</span> <span class="message-content">${message.content}</span></li>`)
        })
      })

      // Subscribes to new channel
      App[groupChatId] = App.cable.subscriptions.create(
        { channel: 'GroupChatsChannel', group_chat_id: groupChatId }, {
          received: (message) => {
            messages.insertAdjacentHTML('beforeend',
            `<li><span class="message-author">${message.author}:</span> <span class="message-content">${message.content}</span></li>`)
          }
        }
      )
    })
  })
};



export { initChatbox };
