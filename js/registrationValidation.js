$(document).ready(function()
{
	$("#register").validate(
	{
		// rules dictate what is (in)valid
		rules:
		{
			cfname:
                        {
                            required: true,
                            pattern: /^[a-zA-Z\'\-\s]+$/
                        },

                        clname:
                        {
                            required: true,
                            pattern: /^[a-zA-Z\'\-\s]+$/
                        },

                        bday:
                        {
                            required: true
                        },

                        fname:
                        {
                            required: true,
                            pattern: /^[a-zA-Z\'\-\s]+$/
                        },

                        lname:
                        {
                            required: true,
                            pattern: /^[a-zA-Z\'\-\s]+$/
                        },

                        email:
			{
			    required: true,
			    email: true
			},

                        phnumber:
                        {
                            required: true,
                            number: true,
                            minlength: 7
                        },

                        sphnumber:
                        {
                            required: true,
                            number: true,
                            minlength: 7
                        }

		},

		// messages are what are displayed to the user
		messages:
		{
			cfname:
                        {
                            required: " Please enter a name",
                            pattern: " Please use only letters, spaces, hypens and apostrophes"
                        },

                        clname:
                        {
                            required: " Please enter a name",
                            pattern: " Please use only letters, spaces, hypens and apostrophes"
                        },

                        bday: " Please enter a birthday",

                        fname:
                        {
                            required: " Please enter a name",
                            pattern: " Please use only letters, spaces, hypens and apostrophes"
                        },

                        lname:
                        {
                            required: " Please enter a name",
                            pattern: " Please use only letters, spaces, hypens and apostrophes"
                        },

                        email: " Please enter a valid email address",

                        phnumber:
                        {
                            required: " Please enter a phone number",
                            number: " Please only use numbers",
                            minlength: " Please enter in at least seven digits"
                        },

                        sphnumber:
                        {
                            required: " Please enter a phone number",
                            number: " Please only use numbers",
                            minlength: " Please enter in at least seven digits"
                        }

		}
	});
});
