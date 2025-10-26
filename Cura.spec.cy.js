describe("Cura Appointment Booking", () => {

  it('Visit the URL', () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
    cy.get("#btn-make-appointment").should('be.visible').click();
  });

  it("Login on Make Appointment", () => {
    //cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').should('be.visible').click();
  });

  it('Make Appointment', () => {
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
    cy.get('#chk_hospital_readmission').click();
    cy.get('#radio_program_medicaid').check().should('be.checked');
    cy.get('#txt_visit_date').type('20/02/2025');
    cy.get('#txt_comment').type("I'm booking the appointment for Dentist Dr.Anshul on 20/02/2025");
    cy.get('#btn-book-appointment').should('be.visible').click();
  });

  it('Verify the appointment', () => {
    // Example assertion: check for confirmation message
    cy.contains('Appointment Confirmation').should('be.visible');
  });

});