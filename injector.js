var iFrame = document.createElement("iframe");
iFrame.src = chrome.extension.getURL("exampleindex.html");
iFrame.style = "background: #FFF;";
iFrame.height = 150;
iFrame.width = 2750;


document.body.insertBefore(iFrame, document.body.firstChild);

