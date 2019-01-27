import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
import ExpectStatic = Chai.ExpectStatic;

chai.use(chaiAsPromised);

export const expect: ExpectStatic = chai.expect;
