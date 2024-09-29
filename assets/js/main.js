(function ($) {
	"use strict";

	function centerActiveBlock() {
		const $activeBlock = $(".chat-anim.active");
		const containerHeight = $(".chat-inner").height();
		console.log("containerHeight: " + containerHeight);
		const blockHeight = $activeBlock.outerHeight();
		console.log("blockHeight: " + blockHeight);

		// Calculate the top position to center the block
		const offset = containerHeight * 0.25;
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

		$(".introBtn").on("click", function () {
			clickCount++; // Increment click count

			if (clickCount === 1) {
				// First click: enable the first input and show the second input
				$(this)
					.parent()
					.find(".firstName input")
					.val("Albert Parker")
					.prop("disabled", false); // Enable the input
				$(this).parent().find(".lastName").slideDown(300); // Slide down the second input
			} else if (clickCount === 2) {
				// Second click: show the save button
				$(this).parents(".chat-anim").find(".save-btn").show(); // Show save button and enable it

				// Show the quick note with an upward movement
				$(this).parents(".chat-anim").find(".chat_icons").hide();
				$(this).parents(".chat-anim").next().slideDown(300);
				$(this).parents(".chat-anim").css("opacity", 0.4);
				$(this)
					.parents(".chat-anim")
					.removeClass("active")
					.next()
					.addClass("active");
				centerActiveBlock(); // Center the active block after showing
			}
		});

		// quick note block
		$(".quick_note_btn").on("click", function () {
			// Show the what i do with an upward movement
			$(this).parents(".chat-anim").next().slideDown(300);
			$(this).parents(".chat-anim").css("opacity", 0);
			$(this)
				.parents(".chat-anim")
				.removeClass("active")
				.next()
				.addClass("active");

			centerActiveBlock(); // Center the active block after showing
		});

		// what i do
		$(".cart-item").on("click", function () {
			// card is active
			$(this).addClass("active");

			// active & show the save button
			$(this).parents(".chat-anim").find(".save-btn").show(); // Show save button and enable it

			// Show the passed with an upward movement
			$(this).parents(".chat-anim").next().slideDown(300);
			$(this)
				.parents(".chat-anim")
				.removeClass("active")
				.next()
				.addClass("active");

			centerActiveBlock(); // Center the active block after showing
		});

		// passed
		$(".passedBtn").on("click", function () {
			$(this)
				.addClass("edit")
				.html('Edit <img src="assets/images/icons/edit.svg">');

			// click: enable the input and value Chris
			$(this)
				.parent()
				.find(".passedName input")
				.val("Chris")
				.prop("disabled", false); // Enable the input
			$(this).parent().find(".passedName label").text("Their name");

			// show the save button
			$(this).parents(".chat-anim").find(".save-btn").show();

			// hide chat icon
			$(this).parents(".chat-anim").find(".chat_icons").hide();

			// Show the relation with an upward movement
			$(this).parents(".chat-anim").next().slideDown(300);
			$(this)
				.parents(".chat-anim")
				.removeClass("active")
				.next()
				.addClass("active");

			centerActiveBlock(); // Center the active block after showing
		});
	});
})(jQuery);
