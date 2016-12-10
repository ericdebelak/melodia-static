$(document).ready(function()
{
	$("#contact").validate(
	{
		// rules dictate what is (in)valid
		rules:
		{
			name:
                        {
                            required: true,
                            pattern: /^[a-zA-Z\'\-\s]+$/
                        },

                        email:
			{
			    required: true,
			    email: true
			},

                        message:
                        {
                            required: true
                        }
		},

		// messages are what are displayed to the user
		messages:
		{
			name:
                        {
                            required: " Please enter a name",
                            pattern: " Please use only letters, spaces, hypens and apostrophes"
                        },

                        email: " Please enter a valid email address",

                        message: " Please enter a message"

		}
	});
});
