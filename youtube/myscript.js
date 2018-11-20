function copy(e){
	document.getElementById(e).select();
	document.execCommand('copy');
	document.getElementById(e).blur();
}

var f = document.getElementById('form1');
f.onchange = f.onkeyup = function() {
	var id = document.getElementById('video_id').value; 
	document.getElementById('maxresdefault').value = "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg";
	document.getElementById('preview').src = "https://img.youtube.com/vi/" + id + "/mqdefault.jpg";
	document.getElementById('sddefault').value = "https://img.youtube.com/vi/" + id + "/sddefault.jpg";
	document.getElementById('hqdefault').value = "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
	document.getElementById('mqdefault').value = "https://img.youtube.com/vi/" + id + "/mqdefault.jpg";
	document.getElementById('default').value = "https://img.youtube.com/vi/" + id + "/default.jpg";
	document.getElementById('preview1').src = "https://img.youtube.com/vi/" + id + "/1.jpg";
	document.getElementById('1').value = "https://img.youtube.com/vi/" + id + "/1.jpg";
	document.getElementById('preview2').src = "https://img.youtube.com/vi/" + id + "/2.jpg";
	document.getElementById('2').value = "https://img.youtube.com/vi/" + id + "/2.jpg";
	document.getElementById('preview3').src = "https://img.youtube.com/vi/" + id + "/3.jpg";
	document.getElementById('3').value = "https://img.youtube.com/vi/" + id + "/3.jpg";
}