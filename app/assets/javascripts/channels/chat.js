
App.chat = App.cable.subscriptions.create("ChatChannel", {
  received: (data) => {
    console.log(data)
    const messageBox = document.querySelector('.message-container');
    messageBox.insertAdjacentHTML('beforeend', `<h1>${data.content}<h1/>` )
  }
})


