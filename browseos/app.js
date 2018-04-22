var screen = 0;
var storage = window.localStorage;
$(document).ready(function() {
	loadScreen();
});
var loadScreen = function() {
	$(".apps").hide();
	$(".splash").hide();
	$(".load").hide();
	$(".startup").hide();
	$(".setup").hide();
	setTimeout(function() {
		$(".load").fadeIn(1000, function() {
			setTimeout(function() {
				$(".load").fadeOut(1000, function() {
					if(storage.getItem('browseName') !== null) {
						var name = storage.getItem('browseName');
						console.log(name);
						$(".profile-name").text("Name: " + name);
						setTimeout(function() {
							time();
							$(".splash").fadeIn(500, function() {});
						}, 750);
					} else {
						setTimeout(function() {
							toStartup();
							$(".startup").fadeIn(500, function() {});
						}, 750);
					}
				});
			}, 2500);
		});
	}, 750);
}
var fadeOutAll = function() {
	$(".apps").fadeOut(500, function() {});
	$(".app").fadeOut(500, function() {});
	$(".setup").fadeOut(500, function() {});
	$(".splash").fadeOut(500, function() {});
	$(".startup").fadeOut(500, function() {});
	$(".load").fadeOut(500, function() {});
}
var time = function() {
	var d = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  $(".splash .date").html(months[d.getMonth()] + " " + d.getDate());
  var time = "";
  if(Math.floor(d.getHours()/2) !== 0) {
  	time += Math.floor(d.getHours()/2) + ":";
  } else {
  	time += "12:";
  }
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
	screen = 0;
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
	screen = 1;
}
var back = function() {
	if(screen == 0) {
		return;
	}
	else if(screen == 1) {
		toSplash();
	}
	else if(screen == 2) {
		toApps();
	}
}
var toStartup = function() {
	$(".setup").hide();
}
var startSetup = function() {
	$(".startup").fadeOut(500, function() {
		$(".setup").fadeIn(500, function() {});
	});
}
var finishSetup = function() {
	if($(".setup .setupName").val() !== null && $(".setup .setupName").val() !== "") {
		storage.setItem('browseName', $(".setup .setupName").val());
		fadeOutAll();
		loadScreen();
	}
}
var guest = function() {
	storage.setItem('browseName', 'Guest');
	fadeOutAll();
	loadScreen();
}
var logout = function() {
	storage.removeItem("browseName");
	$(".setup .setupName").val("")
	fadeOutAll();
	loadScreen();
}
$(".app").on("click", function(event) {
	$(".apps .header").hide();
	$(".app").not(this).hide();
	$(this).children(".content").fadeIn();
	$(this).children(".header").hide();
	screen = 2;
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
