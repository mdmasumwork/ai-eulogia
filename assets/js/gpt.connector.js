(function ($) {
    "use strict";

    $(document).ready(function() {

        let userName = 'Albert';
        let userNickname = 'Albert';
        let contentType = 'Eulogy';
        let passedName = 'Chris';

        $(".quick_note_btn").on("click", function () {
            userName = $('#fullName').val();
            userNickname = $('#nickName').val();

            $(".username").html(userNickname);
        });

        $(".cart-item").on("click", function () {
            contentType = $('.content-type.active').attr('data-type');
            $(".content-type-text").html(contentType);
        });

        $(".passedBtn").on("click", function () {
            passedName = $('#passedName').val();
            $(".dead-person").html(passedName);
        });

        $('#generate-content-button').click(function() {
            // const userName = $('#fullName').val();
            // const userNickname = $('#nickName').val();
            // const contentType = $('.content-type.active').attr('data-type');
            // const passedName = $('#passedName').val();
            const relation = $('#relation').val();
            const contentTone = $('.content-tone.active').attr('data-tone');
            const confirmation = $('#confirmation').val();
            

            const prompt = `
                Hello, I need your help writing a ${contentType}. 

                My name is ${userName}, but you can call me ${userNickname}. 
                The content is for ${passedName}, who was my ${relation}. 

                I'd like the tone to be ${contentTone}. 
                Here’s some more information about ${passedName} to help personalize the content:

                ${confirmation}

                Please craft something thoughtful and meaningful using this information. Thank you.
            `;

            console.log(prompt);

            const apiKey = "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";
            
            $.ajax({
                url: 'https://api.openai.com/v1/chat/completions',  // Corrected endpoint for ChatGPT
                type: 'POST',
                contentType: 'application/json',
                headers: {
                    'Authorization': 'Bearer ' + apiKey
                },
                data: JSON.stringify({
                    model: "gpt-3.5-turbo",  // Corrected model for ChatGPT API
                    messages: [
                        { role: "system", content: "You are an AI that helps users write personalized content." },
                        { role: "user", content: prompt }
                    ],
                    max_tokens: 500
                }),
                success: function(response) {
                    const generatedText = response.choices[0].message.content.trim();  // Adjusted to handle ChatGPT response
                    $('#generated-content').html('<p>' + generatedText.replace(/\n/g, '</p><p>') + '</p>');
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                }
            });
        });
    });

})(jQuery);
