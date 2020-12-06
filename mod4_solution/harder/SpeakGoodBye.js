(function (window) {

	var byeSpeaker = {};

	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
		results.push(speakWord + " " + name);
	};

	window.byeSpeaker = byeSpeaker;
})(window);