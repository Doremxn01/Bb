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
    hls.loadSource('https://arydigital.aryzap.com/ff5f087d60a78eea3940b58f17985e49/63b2655f/v1/0183ea2408f90b8ed5941a38bc72/0183ea24302d0b8ed5941a38bc75/ARYDigitalHDh264_1080p.m3u8');
    hls.attachMedia(video);
    video.play();
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = 'https://arydigital.aryzap.com/ff5f087d60a78eea3940b58f17985e49/63b2655f/v1/0183ea2408f90b8ed5941a38bc72/0183ea24302d0b8ed5941a38bc75/ARYDigitalHDh264_1080p.m3u8';
    video.addEventListener('loadedmetadata',function() {
      video.play();
    });
  }
 
</script>

</body>
</html>
