function sendMail(contactForm) {
    emailjs.send("service_hhdxog5", "template_dojn8oa", {
        name: contactForm.fullname.value,
        email: contactForm.emailaddress.value,
        notes: contactForm.projectsummary.value
    }, "wttNOVww5wMYeLtpe");

    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

    return false;
}