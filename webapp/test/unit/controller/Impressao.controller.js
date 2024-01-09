/*global QUnit*/

sap.ui.define([
	"brcomaegea/impressao/controller/Impressao.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Impressao Controller");

	QUnit.test("I should test the Impressao controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
