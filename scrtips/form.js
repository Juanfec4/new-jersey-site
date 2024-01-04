let isOpen = false;
//Get root element
let rootElement = document.getElementById("root");

//Open form
const openForm = async (formPath) => {
  if (!isOpen) {
    //Set open variable
    isOpen = true;

    // Get html from
    const res = await fetch(formPath);
    const formHTML = await res.text();

    // Create a new div element and add form to it
    let formContainer = document.createElement("div");
    formContainer.innerHTML = formHTML;

    //Add form container class
    formContainer.classList.add("form-container");

    //Add form to html on page
    rootElement.appendChild(formContainer);
  }
};

//Toggle form
const toggleForm = (e) => {
  if (isOpen) {
    isOpen = false;
    e = e || window.event;
    e.preventDefault();

    // Get form
    let formContainer = document.querySelector(".form-container");

    // Check if formContainer exists before attempting to remove it
    if (formContainer) {
      // Remove form (close)
      formContainer.parentNode.removeChild(formContainer);
    }
  }
};

//Submit
const handleSubmitForm = (e) => {
  return toggleForm(e);
};

//Validate email confirmation
const validateEmailConfirmation = () => {
  const emailInput = document.getElementById("email-input");
  const emailConfirmationInput = document.getElementById("email-confirmation-input");
  const errorLabel = document.getElementById("email-confirmation-error");

  if (emailInput.value !== emailConfirmationInput.value) {
    errorLabel.textContent = "Emails do not match";
  } else {
    errorLabel.textContent = "";
  }
};
