/// <reference types="cypress" />

describe("Wyszukiwanie elementów w cypress", () => {
	beforeEach(() => {
		cy.visit("https://fabrykatestow.pl");
	});

	it("5 po ID", () => {
		cy.get("#header-grid");
		cy.get("#menu-item-1871");
		cy.get("#content");
		cy.get("#custom_html-3");
		cy.get("#newsletter");
	});

	it("5 po klasie", () => {
		cy.get(".elementor-icon-box-icon");
		cy.get(".gallery-icon");
		cy.get(".elementor-button");
		cy.get(".textwidget");
		cy.get(".wp-image-914");
	});

	it("5 po atrybucie", () => {
		cy.get('a[href="https://fabrykatestow.pl/kontakt/"]');
		cy.get('div[data-widget_type="image.default"]');
		cy.get('img[fetchpriority="high"]');
		cy.get('div[data-item-id="primary-menu"]');
		cy.get('img[data-variant="logo"]');
	});

	it("5 po tekscie", () => {
		cy.contains("ZERO RYZYKA");
		cy.contains("Zobacz co oferujemy");
		cy.contains("WordPress");
		cy.contains("ZAPISZ MNIE NA NEWSLETTER!");
		cy.contains("Sprawdź nasze kursy");
	});
});
