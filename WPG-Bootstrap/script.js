document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.needs-validation');
    const form2 = document.querySelector('.form2');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });
    
    form2.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form2.classList.add('was-validated');
    });
});

function success(){
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('myForm');
        const successMessage = document.getElementById('successMessage');
    
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            // Check if the form is valid
            if (form.checkValidity()) {
                successMessage.style.display = 'block';
                form.reset();
    
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 2000);
            } else {
                // If the form is not valid, show validation feedback (Bootstrap style)
                form.classList.add('was-validated');
            }
        });
    });
    
}
success();