kindleframe
===========

The files you need to run on a server are in the folder /server. You'll need PhantomJS, imagemagick and pngcrush. You'll need to change the paths of where the files are stored, and set up a cron job to run this file every so often. You should end up with a png that the Kindle can read.

On the Kindle, you'll need to jailbreak it (left as an exercise for the reader), get it working on wi-fi, and set up a cron job on the kindle to read and display the picture from the server. Yo ucan use wget on the Kindle to download the file and eips -g to display it.

See the [original weather display](http://www.mpetroff.net/archives/2012/09/14/kindle-weather-display/) that this is based on, and the [notes from someone setting it up](http://www.shatteredhaven.com/2012/11/1347365-kindle-weather-display.html).

Released under the [MIT Licence](http://opensource.org/licenses/mit-license.php).
