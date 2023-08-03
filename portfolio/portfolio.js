var typed = new Typed (".text", {
    strings : ["FRONTEND DEVELOPING","HTML5","CSS3","JAVASCRIPT"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true,
  });

  
const scriptURL = 'https://script.google.com/macros/s/AKfycbxJaX_FgsdpGaOv4yAUFPFfhpv6VCUxOFalq1Zul-jEUJ4U28gDuyN2O5WQCa2_OyA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
})
