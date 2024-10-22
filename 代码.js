window.onload = function(){
    var video=document.getElementById("video"); //获取video
	document.body.addEventListener('mousedown', function(){
		video.muted = false;
	}, false);  //点击事件，点击页面即可开启声音
}
