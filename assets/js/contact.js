document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);

    fetch("/Vantistax digital/contact.php", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      alert(data.message);
      if (data.status === "success") {
        document.getElementById("contact-form").reset();
      }
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
  });