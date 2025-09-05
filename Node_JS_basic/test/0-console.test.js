const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('should log the correct message', () => {
    expect.assertions(1);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    displayMessage('Hello NodeJS!');

    expect(consoleSpy).toHaveBeenCalledWith('Hello NodeJS!');
    consoleSpy.mockRestore();
  });
});
