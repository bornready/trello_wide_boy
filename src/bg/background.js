var toggleWide = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggleWide = !toggleWide;
  chrome.tabs.executeScript(tab.id, {file: 'inject.js'}, function() {
    // chrome.tabs.sendMessage(tab.id, {method: 'toggle', toggle: toggleWide});
    chrome.tabs.sendMessage(tab.id, {method: 'toggle', toggle: toggleWide});
  });
});
