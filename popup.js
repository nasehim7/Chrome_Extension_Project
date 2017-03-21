
	var x;
	chrome.runtime.sendMessage("helcffjjocmjoikolmkhbggjlhcbobnd",{greeting: "hello"}, function(response) 
	{
  		x = response.farewell;	
  		document.getElementById("input").src = x;
	});
