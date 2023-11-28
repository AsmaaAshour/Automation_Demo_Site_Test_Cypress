///<reference types="Cypress"/>

describe("Automation Demo Site", () => {
  it("normal alert", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("https://demo.automationtesting.in/Alerts.html");

    cy.get(".analystic[href='#OKTab']").click();
    cy.get(".btn-danger").click();

    cy.on("window:alert", (msg) => {
      expect(msg).to.eq("I am an alert box!");
    });
  });

  it("promt alert ", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("https://demo.automationtesting.in/Alerts.html");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Automation-Tester");
    });
    cy.get(".analystic[href='#Textbox']").click();
    cy.get(".btn-info").click();
    cy.get("#demo1").contains("Automation-Tester");
  });

  it("confirm alert", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("https://demo.automationtesting.in/Alerts.html");

    cy.window().then((win) => {
      cy.stub(win, "confirm").returns(false);
    });

    cy.get(".analystic[href='#CancelTab']").click();
    cy.get(".btn-primary").click();

    cy.get("#demo").should("contain", "Pressed");
  });
});
