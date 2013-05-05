#!/bin/sh

cd /home/xxx

/usr/local/bin/phantomjs get_morning.js
convert -rotate 180 morning.png morning_rotate.png
pngcrush -c 0 -nofilecheck morning_rotate.png morningpngcrush.png 
cp -f morningpngcrush.png /var/www/morningpngcrush.png
