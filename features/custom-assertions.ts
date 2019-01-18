import {expect} from '../spec/expect';

/**
 * It verifies that the actual value contains the same items as the expected.
 * @param expected An array of texts to validate against.
 */
export const hasSameContentAs = (expected: string[]) => actual => {
    return expect(actual).to.eventually.deep.equal(expected);
};
