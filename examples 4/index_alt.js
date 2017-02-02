var request = new XMLHttpRequest();
var output;
var data_json;

//request.open('GET', 'http://jsonplaceholder.typicode.com/posts/');
request.open('GET', 'https://raw.githubusercontent.com/mheadd/de-plow-history/master/data/196740.json');

request.onreadystatechange = function(){

	if((request.status==200) && (request.readyState==4)){
		data_json = JSON.parse(request.response);

		for(var i in data_json){
			var data = data_json[i];

			console.log(data_json);
			output = "<h3>" + data["title"] + "</h3>";
			output += "<p>" + data["body"] + "</p>";
		}

		document.getElementById("feedContainer").innerHTML += output

	}
}

request.send();
