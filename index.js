<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Play .m3u8 File in HTML5 video player</title>
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <!-- Include the hls.js library -->

<!-- Create a video element -->
<video id="video" controls></video>

<!-- Use hls.js to create a player and load the .m3u8 file -->
<script>
  var video = document.getElementById('video');
  if(Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource('https://prod-ent-live-gm.jiocinema.com/hls/live/2105483/hd_akamai_androidmob_avc_24x7_bbhindi_day02/master_1080p.m3u8');
    hls.attachMedia(video);
    video.play();
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = 'https://prod-ent-live-gm.jiocinema.com/hls/live/2105483/hd_akamai_androidmob_avc_24x7_bbhindi_day02/master_1080p.m3u8';
    video.addEventListener('loadedmetadata',function() {
      video.play();
    });
  }
 
</script>

</body>
</html>
