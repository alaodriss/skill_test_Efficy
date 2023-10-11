// Define the oppoStatus array containing information about different statuses and their success values
const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  // Define a FormComponent class
  const FormComponent = class {
    constructor() {
      // Initialize references to HTML elements
      this.selectElement = document.querySelector('select[name="status"]');
      this.successInput = document.querySelector('input[name="success"]');
      this.formElement = document.querySelector('form');
      this.outputElement = document.querySelector('.output');
    }
  
    // Function to populate the select element with options from oppoStatus
    populateSelectOptions() {
      for (const status of oppoStatus) {
        const option = document.createElement('option');
        option.value = status.K_OPPO_STATUS;
        option.text = status.STATUS;
        this.selectElement.appendChild(option);
      }
    }
  
    // Function to update the success value when the selected status is changed
    updateSuccessValue() {
      const selectedStatus = parseInt(this.selectElement.value);
      const selectedStatusInfo = oppoStatus.find(status => status.K_OPPO_STATUS === selectedStatus);
      if (selectedStatusInfo) {
        this.successInput.value = selectedStatusInfo.SUCCESS;
      }
    }
  
    // Function to handle form submission and display form data as JSON
    handleFormSubmit(event) {
      event.preventDefault();
      const formData = {
        "status": parseInt(this.selectElement.value),
        "success": parseInt(this.successInput.value)
      };
      this.outputElement.textContent = JSON.stringify(formData);
    }
  
    // Function to start the FormComponent by setting up event listeners
    start() {
      this.populateSelectOptions();
      this.selectElement.addEventListener('change', () => this.updateSuccessValue());
      this.formElement.addEventListener('submit', event => this.handleFormSubmit(event));
    }
  }
  
  // Create an instance of the FormComponent and start it
  const fc = new FormComponent();
  fc.start();
  