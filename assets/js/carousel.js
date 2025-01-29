const testimonials = [
    {
      text: "Vantistax Digital transformed my business website! Their team is highly professional, and the design exceeded my expectations.",
      author: "- John Doe, Small Business Owner",
    },
    {
      text: "Amazing service! They built a stunning and fast website for my company.",
      author: "- Jane Smith, Entrepreneur",
    },
    {
      text: "I highly recommend Vantistax Digital. Their attention to detail is unmatched!",
      author: "- Mike Johnson, Business Consultant",
    },
  ];

  let index = 0;
  const testimonialText = document.querySelector(".testimonial-text");
  const authorText = document.querySelector(".author");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateTestimonial() {
    testimonialText.textContent = testimonials[index].text;
    authorText.textContent = testimonials[index].author;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });