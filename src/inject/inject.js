function toggle(toggleWide) {
  console.log(toggleWide);
  if (toggleWide) {
    document.body.classList.add("trello-wide-boy");
  } else {
    document.body.classList.remove("trello-wide-boy");
  }
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  this[message.method].call(this, message.toggle);
});
