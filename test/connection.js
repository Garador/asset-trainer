var expect = require("chai").expect;
var assert = require("chai").assert;

describe("Tests MongoDB Connection", ()=>{

  it("Checks environment initialization and connection to MongoDB", (done)=>{
    require("../ini/mongo")();
    expect(global.mongoose).to.be.a("object")
    done();
  });
})

describe("Test i18n installation and working", ()=>{
  it("Checks i18n is correctly set-up", ()=>{
    require("../ini/i18n.js");  //Initialize i18n.
    var i18n = require("i18n");
    expect(i18n.__("Hello")).to.be.equal("Hello");
    i18n.setLocale("sp");
    expect(i18n.__("Hello")).to.be.equal("Hola");
  });
})
