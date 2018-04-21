var screen = 0;
$(document).ready(function() {
	loadScreen();
});
var loadScreen = function() {
	$(".apps").hide();
	$(".splash").hide();
	$(".load").hide();
	setTimeout(function() {
		$(".load").fadeIn(1000, function() {
			setTimeout(function() {
				$(".load").fadeOut(1000, function() {
					setTimeout(function() {
						time();
						$(".splash").fadeIn(500, function() {});
					}, 750);
				});
			}, 2500);
		});
	}, 750);
}
var time = function() {
	var d = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  $(".splash .date").html(months[d.getMonth()] + " " + d.getDate());
  var time = "";
  time += Math.floor(d.getHours()/2) + ":";
  if(d.getMinutes() < 10) {
    	time += "0";
    }
  time += d.getMinutes();
  $(".splash .time").html(time);
}
var toSplash = function() {
	time();
	$(".apps").fadeOut(250, function() {
		$(".apps").hide();
		$(".splash").fadeIn();
	});
	screen == 0;
}
var toApps = function() {
	$(".splash").fadeOut(250, function() {
		$(".splash").hide();
		$(".apps").fadeIn(250);
		$(".apps .header").show();
	});
	$(".app .content").fadeOut(250, function() {
		$(".app .content").hide();
		$(".app").show();
		$(".app .header").show();
	});
	screen == 1;
}
var back = function() {
	if(screen ===0) {
		return;
	}
	else if(screen === 1) {
		toSplash();
	}
	else if(screen === 2) {
		toApps();
	}
}
$(".app").on("click", function(event) {
	$(".apps .header").hide();
	$(".app").not(this).hide();
	$(this).children(".content").fadeIn();
	$(this).children(".header").hide();
	screen == 2;
})
$("#app-call .content .num").on("click", function(event){
	$("#app-call .content .phoneNumber").append($(this).text())
});
$("#app-call .content .deleteNum").on("click", function(event){
	$(".phoneNumber").text(function(i, t){
		return t.slice(0, -1);
	})
});
$("#app-call .content .callNum").on("click", function(event){
	window.location = 'tel:' + $(".phoneNumber").text();
});
