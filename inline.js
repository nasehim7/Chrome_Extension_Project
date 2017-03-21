
  var input = document.getElementById("input");
  var processor = document.getElementById("processor");
  var output = document.getElementById("output");
  window.addEventListener("message", function(event){
    if (event.source != processor.contentWindow) return;
    switch (event.data){
      case "ready":
        var xhr = new XMLHttpRequest;
        xhr.open('GET', input.getAttribute("src"), true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function(event) {
          processor.contentWindow.postMessage(this.response, "*");
        };
        xhr.send();
        break;
      
      default:
        output.textContent = event.data.replace(/\s+/g, " ");
      break;
    }
  }, true);
