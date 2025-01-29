const testimonials = [
    {
      text: "Vantistax Digital transformed my business website! Their team is highly professional, and the design exceeded my expectations.",
      author: "- John Doe, Small Business Owner",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      text: "Amazing service! They built a stunning and fast website for my company.",
      author: "- Jane Smith, Entrepreneur",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      text: "I highly recommend Vantistax Digital. Their attention to detail is unmatched!",
      author: "- Mike Johnson, Business Consultant",
      rating: 5,
      image: "https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg"
    },
  ];

  let index = 0;
  const testimonialText = document.querySelector(".testimonial-text");
  const authorText = document.querySelector(".author");
  const starsContainer = document.querySelector(".stars");
  const testimonialImg = document.querySelector(".testimonial-img");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateTestimonial() {
    testimonialText.classList.remove("fade-in");
    authorText.classList.remove("fade-in");
    starsContainer.classList.remove("fade-in");
    testimonialImg.classList.remove("fade-in");

    setTimeout(() => {
      testimonialText.textContent = testimonials[index].text;
      authorText.textContent = testimonials[index].author;
      testimonialImg.src = testimonials[index].image;

      starsContainer.innerHTML = "";
      for (let i = 0; i < testimonials[index].rating; i++) {
        starsContainer.innerHTML += '<i class="fas fa-star"></i>';
      }
      for (let i = testimonials[index].rating; i < 5; i++) {
        starsContainer.innerHTML += '<i class="far fa-star"></i>';
      }

      testimonialText.classList.add("fade-in");
      authorText.classList.add("fade-in");
      starsContainer.classList.add("fade-in");
      testimonialImg.classList.add("fade-in");
    }, 300);
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
  }

  function prevTestimonial() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  }

  nextBtn.addEventListener("click", nextTestimonial);
  prevBtn.addEventListener("click", prevTestimonial);

  setInterval(nextTestimonial, 5000);

  updateTestimonial();
