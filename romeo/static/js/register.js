$(document).ready(function() {
    // Add submit handler to the form
    $('.register-form').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        const username = $('#username').val().trim();
        const password = $('#password').val();
        const confirmPassword = $('#confirm_password').val();

        // Clear previous error messages
        $('#message').text('').removeClass('d-block').addClass('d-none');

        // Validate inputs
        if (!username || !password || !confirmPassword) {
            $('#message')
                .text('Please fill in all fields')
                .removeClass('d-none')
                .addClass('d-block alert-danger');
            return;
        }

        if (password !== confirmPassword) {
            $('#message')
                .text('Passwords do not match')
                .removeClass('d-none')
                .addClass('d-block alert-danger');
            return;
        }

        // Password strength validation
        if (password.length < 8) {
            $('#message')
                .text('Password must be at least 8 characters long')
                .removeClass('d-none')
                .addClass('d-block alert-danger');
            return;
        }

        $.ajax({
            url: '/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ 
                username: username, 
                password: password 
            }),
            success: function(response) {
                if (response.success) {
                    $('#message')
                        .text('Registration successful! Redirecting to login...')
                        .removeClass('alert-danger')
                        .addClass('alert-success d-block');
                    
                    // Redirect after a short delay
                    setTimeout(function() {
                        window.location.href = '/';
                    }, 2000);
                } else {
                    $('#message')
                        .text(response.message)
                        .removeClass('d-none')
                        .addClass('d-block alert-danger');
                }
            },
            error: function(xhr, status, error) {
                $('#message')
                    .text('Error during registration: ' + error)
                    .removeClass('d-none')
                    .addClass('d-block alert-danger');
            }
        });
    });

    // Add input validation on blur
    $('#username').on('blur', function() {
        const username = $(this).val().trim();
        if (username.length < 3) {
            $('#message')
                .text('Username must be at least 3 characters long')
                .removeClass('d-none')
                .addClass('d-block alert-danger');
        }
    });
});