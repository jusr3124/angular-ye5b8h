import { ConcatFirstSixCharPipe } from './concat-first-six-char.pipe';

describe('ConcatFirstSixCharPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatFirstSixCharPipe();
    expect(pipe).toBeTruthy();
  });
});
