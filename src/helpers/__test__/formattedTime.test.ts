import { formattedTime } from '../formattedTime';

describe('formattedTime', () => {
  it('should return the formatted time string', () => {
    const timestamp = 1691783990447;
    const expectedOutput = '8/11/2023, 22:59';

    const result = formattedTime(timestamp);

    expect(result).toEqual(expectedOutput);
  });
});
