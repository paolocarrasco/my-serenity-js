/******************************************************************************
 * seerene(tm) - A framework for analyzing and visualizing complex software systems.
 * Copyright (C) 2005 - 2018 for all source codes:
 * seerene(tm) GmbH, Potsdam, Germany
 ******************************************************************************/
import {expect} from '../spec/expect';

export const isEqualTo = (expectedText: string) => (actualText: PromiseLike<string>) => {
  return expect(actualText).to.eventually.equal(expectedText);
};
