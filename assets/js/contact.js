var contactForm = document.getElementById("contactForm");

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm(e);
        });

        function submitForm(e) {
            var form = e.target;
            var formData = new FormData(form);

            var data = Object.fromEntries(formData.entries());

            console.log(data);
            console.log(data.phoneNumber);

            var link = document.createElement('a');

            link.href = `mailto:maaseya17@gmail.com?subject=${encodeURIComponent(data.subject)}&body=Selamat siang. Nama saya ${encodeURIComponent(data.name)}.%0D%0ASilahkan hubungi saya di ${encodeURIComponent(data.email)} atau ${encodeURIComponent(data.phoneNumber)}.%0D%0ABerikut pesan saya: ${encodeURIComponent(data.message)}`;    

            link.click();
        }