# Rabb.it-Clone
A simple node app that clones the basic features of www.rabb.it  

# About

My friends wanted a quick place to stream videos and chat together but we didn't have a fast enough upload speed for www.rabb.it so I put this together in an hour or two. It does what rabb.it does with the exception that the source is streamed from a remote file through VLC player on a server. That way we can download 1080p movies to the server (via transmission etc) and have a stream playing in a matter of seconds.

# Demo

http://wla.fun/stream

# Screenshot
![Screenshot](https://i.imgur.com/jNyg8xx.jpg)

# Requirements

* NodeJS
* Socket.IO
* Express

# Setup

* Copy the files to a directory and install the requirements `npm install [package name]` while in the directory.

* Update the files to suit your needs concerning the post and the stream URL etc. Personally, I run the vlc streaming on port `2095` and the chat server on `2086` because these ports are open by default in Cloudflare but it's completely up to you. The default VLC port for streaming is `8080`
* Change `YOUR_VIDEO_STREAM_LINK_HERE`  in `index.html` to the url of your stream.
* Update `YOUR_URL:PORT` appropriately `index.html`. Example: `http://yoursite.com:3000`
* Start VLC player in ubuntu, I like to use a remote desktop so I can access the GUI of ubuntu. I stream a video file under the `HTTP` option. The best quality I've found is if the source is MP4, that is 720p or under and the converted format is WEBM at around 1800Kbits. OGG works too but the video and audio is not synced up as the stream progresses.
* Run `node stream.js` to start app

You can install **PM2** to run as a scalable background process `pm2 start stream.js`, or use **tmux** etc. Your choice.

# Caveats

There is no real security added, this was just a project for friends. Feel free to tighten it up. Also the code is not optimized, I put it together lazily so you'll find a lot of inline css etc. Yes I know its not good practice and no, I don't care.
