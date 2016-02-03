var request = new XMLHttpRequest();
var output;
var data_json;

request.open('GET', 'http://jsonplaceholder.typicode.com/posts/');
request.onreadystatechange = function(){

		if((request.status==200) && (request.readyState==4)){
			data_json = JSON.parse(request.response);
	        for(var i in data_json){
                var data = data_json[i];

                output = "<h3>" + data["title"] + "</h3>";
                output += "<p>" + data["body"] + "</p>";

	        }

            document.getElementById("feedContainer").innerHTML += output

		}
}

request.send();