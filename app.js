var storage = window.localStorage;
$(document).ready(function() {
	loadScreen();
});
var loadScreen = function() {
	if(storage.getItem('first') === null || storage.getItem('first') === "") {
		$(".nav").hide();
		$(".header").hide();
		$(".container-m").hide();
		$(".startup *").hide(0, function(){
			$(".heading1").fadeIn(500, function() {
				setTimeout(function() {
					$(".heading1").fadeOut(500, function() {
						$(".heading2").fadeIn(400, function() {
							setTimeout(function() {
								$(".heading2").fadeOut(400, function() {
									$(".heading3").fadeIn(250, function() {
										setTimeout(function() {
											$(".heading3").fadeOut(250, function() {
												$(".heading4").fadeIn(100, function() {
													setTimeout(function() {
														$(".heading4").fadeOut(100, function() {
															$(".heading5").fadeIn(50, function() {
																setTimeout(function() {
																	$(".heading5").fadeOut(50, function() {
																		$(".heading6").fadeIn(50, function() {
																			setTimeout(function() {
																				$(".heading6").fadeOut(50, function() {
																					$(".heading7").fadeIn(50, function() {
																						setTimeout(function() {
																							$(".heading7").fadeOut(750, function() {
																								setTimeout(function() {
																									$(".startup").fadeOut(250, function() {
																										$(".nav").fadeIn();
																										$(".header").fadeIn();
																										$(".container-m").fadeIn();
																										storage.setItem('first', "no");
																									});
																								}, 500);
																							});
																						}, 1500);
																					});
																				});
																			}, 100);
																		});
																	});
																}, 100);
															});
														});
													}, 100);
												});
											});
										}, 250);
									});
								});
							}, 400);
						});
					});
				}, 500);
			});
		});
	} else {
		$(".startup").hide();
	}
};