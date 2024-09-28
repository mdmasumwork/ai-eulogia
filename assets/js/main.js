(function ($) {
	"use strict";

	// Function to center the active block
	function centerActiveBlock() {
		const $activeBlock = $(".chat-anim.active");
		const containerHeight = $(".chat-inner").height();
		console.log("containerHeight: " + containerHeight);
		const blockHeight = $activeBlock.outerHeight();
		console.log("blockHeight: " + blockHeight);

		// Calculate the top position to center the block
		const offset = containerHeight / 2 - blockHeight / 1.5;
		console.log("offset: " + offset);

		console.log("Top: " + $activeBlock.position().top);
		const newTop = offset - $activeBlock.position().top;
		console.log("newTop: " + newTop);

		// Animate the container to move the active block to the center
		$(".chat-inner").css("top", newTop);
	}

	// Center the active block on load
	$(window).on("load", function () {
		$(".intro").addClass("show"); // Add 'show' class only to the first chat-anim block
		$(".chat-anim:first").addClass("active"); // Add 'show' class only to the first chat-anim block
		centerActiveBlock(); // Center the active block after showing

		let clickCount = 0; // Track the number of clicks

		$(".anim-btn").on("click", function () {
			clickCount++; // Increment click count

			if (clickCount === 1) {
				// First click: enable the first input and show the second input
				$("#name").val("Tanvir").prop("disabled", false); // Enable the input
				$(".form_input").last().slideDown(300); // Slide down the second input
			} else if (clickCount === 2) {
				// Second click: show the save button
				$(".save-btn").show(); // Show save button and enable it

				// Show the quick note with an upward movement
				// $(this).parents(".chat-anim").next().slideDown(300);
				$(this)
					.parents(".chat-anim")
					.removeClass("active")
					.next()
					.addClass("active");
				centerActiveBlock(); // Center the active block after showing
			}
		});
	});
})(jQuery);
