console.log("mainSpec.js loaded.");

describe("Checks if mainTest is loaded.", ()=>{
  beforeAll(()=>{

  });
  describe("Check for constants", ()=>{
    expect(MAIN_CONSTANT).to.equal(true);
  });
  describe("Check for variables", ()=>{
    expect(mainVariable).to.equal(true);
  })
})
