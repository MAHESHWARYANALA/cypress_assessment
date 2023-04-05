//Brighthr portal Login
//
describe('empLogin', function () {
    it('UrlCheck', function () {

        cy.visit('https://app.brighthr.com/lite')           // Launch the BrightHr URL
        cy.clearCookies()                                   // Clear cookies for the currrent domain     
        cy.title().should('eq', "Lite - BrightHR")          // Assertion for title of Home Webpage.

        cy.get('.bg-white').click()                         // Click on Log In button 
        cy.title().should('eq', "Bright - Login")           // Assertion for title of Login Webpage.

        //Login with invalid credential
        cy.login("maheshwaryanala@gmail.com", "Password1234");

        //Invalid credentials error messsage check
        cy.get(".w-full.mb-4.text-error-700").contains("Invalid email address or password. Please check this is the email address") // Assertion

        //Login with valid credentials
        cy.login("maheshwaryanala@gmail.com", "Password123");

        //Navigate to the employee tab on the left-hand side of the panel 
        cy.get("div[title='Employees']").click()
        cy.title().should('eq', "Employee Hub - BrightHR")  // Assertion for title of Employee Hub Webpage.

        cy.contains('button', 'Add employee').click()       // Click on Add employee button

        // Defined two employee objects for testing purpose
        let firstEmp = { firstName: "Mahesh1", lastName: "Yanala1", email: "MaheshYanala@gmail.com", phoneNumber: "0123456789", jobTitle: "Quality Engineer" };
        let secondEmp = { firstName: "Mahesh2", lastName: "Yanala2", email: "MaheshYanala@gmail.com", phoneNumber: "0123456789", jobTitle: "Quality Engineer" };

        // calling method present in commands.js file to add an employee into HR system
        cy.addEmployee(firstEmp)

        //Click "Add another employee" button
        cy.contains('button', 'Add another employee').click()

        // calling method present in commands.js file to add an employee into HR system
        cy.addEmployee(secondEmp)

        // Closing add employee dialog box
        cy.get("#close-modal").click()

        // Verifying if the employees added successfully into system
        cy.verifyEmployee(firstEmp)
        cy.verifyEmployee(secondEmp)

    })

})