describe('Проверка авторизации', function () {

     it('Верный логин, Верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');
        cy.get('#pass').type('USER_PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})

describe('Проверка, забыли пароль', function () {

     it('Забыли пароль, Верная почта)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('USER_LOGIN');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})

describe('Проверка на ошибку при авторизации(пароль)', function () {

     it('Верный логин, Неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');
        cy.get('#pass').type('USER_PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})

describe('Проверка на ошибку при авторизации(логин)', function () {

     it('Неверный логин, Верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');
        cy.get('#pass').type('USER_PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})

describe('Проверка на валидацию @ логина', function () {

     it('Логин без @, Верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');
        cy.get('#pass').type('USER_PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})

describe('Проверка регистра логина', function () {

     it('Верный логин с неверным регистром, Верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('USER_LOGIN');
        cy.get('#pass').type('USER_PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})