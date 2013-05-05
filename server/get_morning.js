var page = require('webpage').create();
width = 800;
height = 600;
page.open('http://xxx/morning.html', function () {
	page.clipRect = { top: 0, left: 10, width: 600, height: 800 }; 
	page.evaluate(function() {
    	document.body.bgColor = 'white';
	});
    page.render('morning.png');
    phantom.exit();
});