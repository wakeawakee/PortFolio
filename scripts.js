

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  const formData = {
    apikey: "c9f7f2f5-1799-4639-b2b8-06249289b214",
    subject: "New Contact Form Submission",
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
});


// Contact form submit
