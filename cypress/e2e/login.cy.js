

describe('Login Test', () => {
    const baseUrl = 'https://wa-gateway.ayocoding.com/auth/login';
  
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit(baseUrl);
    });
  
    it('should successfully log in with valid credentials', () => {
      // Replace with valid credentials
      const phoneNumber = Cypress.env('PHONE_NUMBER') || '6281234567890'; // Use an environment variable or a hardcoded value
      const password = Cypress.env('PASSWORD') || 'yourpassword'; // Use an environment variable or a hardcoded value
  
      // Interact with the login form
      cy.get("[//input[@type='tel']").type(phoneNumber); // Adjust the selector if needed
      cy.get("[//input[@type='password']").type(password); // Adjust the selector if needed
      cy.get("[//button[@type='submit']").click(); // Adjust the selector if needed
  
    //   cy.contains('Invalid phoneNumber or password').should('be.visible');
      // Assert that the user is redirected to the dashboard or another page
    //   cy.url().should('include', '/dashboard'); // Adjust the URL path as needed
    //   cy.contains('Welcome').should('be.visible'); // Adjust the text as needed
    });
  
    it('should show an error message for invalid credentials', () => {
      // Use invalid credentials
      const phoneNumber = Cypress.env('PHONE_NUMBER') || '6281234567890'; // Use an environment variable or a hardcoded value
      const password = Cypress.env('PASSWORD') || 'wrongpassword'; // Use an environment variable or a hardcoded value
  
      // Interact with the login form
      cy.get("[//input[@type='tel']").type(phoneNumber); // Adjust the selector if needed
      cy.get("[//input[@type='password']").type(password); // Adjust the selector if needed
      cy.get("[//button[@type='submit']").click(); // Adjust the selector if needed
  
      // Assert that an error message is displayed
    //   cy.contains('Invalid phoneNumber or password').should('be.visible'); // Adjust the text as needed
    });
  });