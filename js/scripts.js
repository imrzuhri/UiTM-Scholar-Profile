/*!
 * Portfolio Theme - Updated Scripts.js
 * Copyright 2023
 */

window.addEventListener("DOMContentLoaded", () => {
  // Navbar shrink function
  const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) return;
    navbarCollapsible.classList.toggle("navbar-shrink", window.scrollY > 0);
  };

  // Shrink the navbar
  navbarShrink();
  document.addEventListener("scroll", navbarShrink);

  // Collapse responsive navbar when a nav item is clicked
  const navbarToggler = document.querySelector(".navbar-toggler");
  const responsiveNavItems = document.querySelectorAll(
    "#navbarResponsive .nav-link"
  );
  responsiveNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Handle modals
  const modals = document.querySelectorAll(".portfolio-modal");

  modals.forEach((modal) => {
    modal.addEventListener("hidden.bs.modal", () => {
      const modalBody = modal.querySelector(".modal-body");
      if (modalBody) modalBody.scrollTop = 0;

      document.body.classList.remove("modal-open");
      const modalBackdrop = document.querySelector(".modal-backdrop");
      if (modalBackdrop) modalBackdrop.remove();

      const hoverElements = document.querySelectorAll(".portfolio-hover");
      hoverElements.forEach((hover) => hover.classList.remove("hidden"));
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest(".close-modal")) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) modalInstance.hide();
      }
    });
  });

  const portfolioLinks = document.querySelectorAll(".portfolio-link");
  portfolioLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const hoverElements = document.querySelectorAll(".portfolio-hover");
      hoverElements.forEach((hover) => hover.classList.add("hidden"));
    });
  });

  // Scholar Form Popup functionality
  const scholarPopup = document.getElementById("scholarFormPopup");
  const createProfileButton = document.querySelector(".create-profile-button");
  const closeScholarPopup = document.querySelector(".close-popup");
  const profileImageInput = document.getElementById("profileImage");

  if (createProfileButton) {
    createProfileButton.onclick = () => {
      scholarPopup.style.display = "block";
    };
  }

  if (closeScholarPopup) {
    closeScholarPopup.onclick = () => {
      scholarPopup.style.display = "none";
    };
  }

  window.onclick = (event) => {
    if (event.target === scholarPopup) {
      scholarPopup.style.display = "none";
    }
  };

  if (profileImageInput) {
    profileImageInput.addEventListener("change", function () {
      const file = this.files[0];
      if (!file) return;

      const img = new Image();
      img.onload = function () {
        if (this.width !== 500 || this.height !== 500) {
          alert("Image size must be exactly 500x500 pixels.");
          profileImageInput.value = "";
        }
      };

      img.src = URL.createObjectURL(file);
    });
  }

  // Log In Form functionality
  const showLoginForm = document.getElementById("showLoginForm");
  const closeLoginForm = document.getElementById("closeLoginForm");
  const loginContainer = document.getElementById("loginContainer");

  if (showLoginForm && closeLoginForm && loginContainer) {
    showLoginForm.addEventListener("click", () => {
      loginContainer.style.display = "flex";
    });

    closeLoginForm.addEventListener("click", () => {
      loginContainer.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === loginContainer) {
        loginContainer.style.display = "none";
      }
    });
  } else {
    console.error("Log In Form elements are missing.");
  }

  console.log("Page loaded and script is running.");
});

document.addEventListener("DOMContentLoaded", () => {
    const showLoginForm = document.getElementById("showLoginForm");
    const closeLoginForm = document.getElementById("closeLoginForm");
    const loginContainer = document.getElementById("loginContainer");

    if (showLoginForm && closeLoginForm && loginContainer) {
        // Show the login popup when the button is clicked
        showLoginForm.addEventListener("click", () => {
            loginContainer.style.display = "flex"; // Show the popup
        });

        // Close the login popup when the close button is clicked
        closeLoginForm.addEventListener("click", () => {
            loginContainer.style.display = "none"; // Hide the popup
        });

        // Close the login popup when clicking outside of it
        window.addEventListener("click", (event) => {
            if (event.target === loginContainer) {
                loginContainer.style.display = "none"; // Hide the popup
            }
        });
    } else {
        console.error("Login popup elements are missing.");
    }
});

// Script to toggle the login form popup
const openLoginPopup = document.getElementById('openLoginPopup');
const loginFormPopup = document.getElementById('loginFormPopup');
const closePopup = document.querySelector('.close-popup');

openLoginPopup.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  loginFormPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  loginFormPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === loginFormPopup) {
    loginFormPopup.style.display = 'none';
  }
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const successMessage = document.createElement("div");
    successMessage.textContent = "Congrats! You successfully logged in!";
    successMessage.style.color = "#28a745"; // Green color for success
    successMessage.style.fontSize = "18px";
    successMessage.style.marginTop = "15px";

    // Insert the message above the login form
    const popupContent = document.querySelector(".popup-content");
    popupContent.insertBefore(successMessage, popupContent.firstChild);

    // Optionally, close the popup after showing the message
    setTimeout(() => {
      document.getElementById("loginFormPopup").style.display = "none";
    }, 2000); // Close after 2 seconds
  });

  // Show the popup
  document.getElementById("openLoginPopup").addEventListener("click", function () {
    document.getElementById("loginFormPopup").style.display = "block";
  });

  // Close the popup
  document.querySelector(".close-popup").addEventListener("click", function () {
    document.getElementById("loginFormPopup").style.display = "none";
  });

 document
   .getElementById("loginForm")
   .addEventListener("submit", function (event) {
     event.preventDefault(); // Prevent form submission

     // Check if a success message already exists
     let successMessage = document.querySelector(".success-message");

     if (!successMessage) {
       // Create and style the success message if it doesn't exist
       successMessage = document.createElement("div");
       successMessage.textContent = "Congrats! You successfully logged in!";
       successMessage.style.color = "#28a745"; // Green color for success
       successMessage.style.fontSize = "18px";
       successMessage.style.marginTop = "15px";
       successMessage.style.fontWeight = "bold";
       successMessage.classList.add("success-message");

       // Insert the message above the login form
       const popupContent = document.querySelector(".popup-content");
       popupContent.insertBefore(
         successMessage,
         document.querySelector(".popup-heading")
       );
     }

     // Close the popup after 2 seconds
     setTimeout(() => {
       document.getElementById("loginFormPopup").style.display = "none";

       // Remove the success message after closing the popup
       if (successMessage) {
         successMessage.remove();
       }
     }, 2000);
   });

 // Show the popup
 document
   .getElementById("openLoginPopup")
   .addEventListener("click", function () {
     document.getElementById("loginFormPopup").style.display = "block";
   });

 // Close the popup manually
 document.querySelector(".close-popup").addEventListener("click", function () {
   document.getElementById("loginFormPopup").style.display = "none";

   // Remove the success message when closing manually
   const successMessage = document.querySelector(".success-message");
   if (successMessage) {
     successMessage.remove();
   }
 });