import Pricing from '../4-pricing';
import Currency from '../3-currency';

describe('Pricing', () => {
  describe('Constructor', () => {
    test('should create instance with valid parameters', () => {
      const currency = new Currency('EUR', 'Euro');
      const pricing = new Pricing(100, currency);
      
      expect(pricing.amount).toBe(100);
      expect(pricing.currency).toBe(currency);
    });

    test('should throw TypeError for invalid amount', () => {
      const currency = new Currency('EUR', 'Euro');
      
      expect(() => new Pricing('invalid', currency)).toThrow(TypeError);
      expect(() => new Pricing('invalid', currency)).toThrow('amount must be a number');
    });

    test('should throw TypeError for invalid currency', () => {
      expect(() => new Pricing(100, 'invalid')).toThrow(TypeError);
      expect(() => new Pricing(100, 'invalid')).toThrow('currency must be an instance of Currency');
    });
  });

  describe('Getters and Setters', () => {
    let pricing;
    let currency;

    beforeEach(() => {
      currency = new Currency('EUR', 'Euro');
      pricing = new Pricing(100, currency);
    });

    test('should get amount correctly', () => {
      expect(pricing.amount).toBe(100);
    });

    test('should set valid amount', () => {
      pricing.amount = 200;
      expect(pricing.amount).toBe(200);
    });

    test('should throw TypeError when setting invalid amount', () => {
      expect(() => { pricing.amount = 'invalid'; }).toThrow(TypeError);
      expect(() => { pricing.amount = 'invalid'; }).toThrow('amount must be a number');
    });

    test('should get currency correctly', () => {
      expect(pricing.currency).toBe(currency);
    });

    test('should set valid currency', () => {
      const newCurrency = new Currency('USD', 'Dollar');
      pricing.currency = newCurrency;
      expect(pricing.currency).toBe(newCurrency);
    });

    test('should throw TypeError when setting invalid currency', () => {
      expect(() => { pricing.currency = 'invalid'; }).toThrow(TypeError);
      expect(() => { pricing.currency = 'invalid'; }).toThrow('currency must be an instance of Currency');
    });
  });

  describe('displayFullPrice method', () => {
    test('should display full price format correctly', () => {
      const currency = new Currency('EUR', 'Euro');
      const pricing = new Pricing(100, currency);
      
      expect(pricing.displayFullPrice()).toBe('100 Euro (EUR)');
    });

    test('should display different currencies correctly', () => {
      const currency = new Currency('USD', 'Dollar');
      const pricing = new Pricing(50, currency);
      
      expect(pricing.displayFullPrice()).toBe('50 Dollar (USD)');
    });

    test('should display after amount modification', () => {
      const currency = new Currency('EUR', 'Euro');
      const pricing = new Pricing(100, currency);
      
      pricing.amount = 150;
      expect(pricing.displayFullPrice()).toBe('150 Euro (EUR)');
    });

    test('should display after currency modification', () => {
      const currency1 = new Currency('EUR', 'Euro');
      const currency2 = new Currency('USD', 'Dollar');
      const pricing = new Pricing(100, currency1);
      
      pricing.currency = currency2;
      expect(pricing.displayFullPrice()).toBe('100 Dollar (USD)');
    });
  });

  describe('ConvertPrice static method', () => {
    test('should convert price correctly', () => {
      const result = Pricing.ConvertPrice(100, 1.2);
      expect(result).toBe(120);
    });

    test('should handle decimal conversion rates', () => {
      const result = Pricing.ConvertPrice(100, 0.85);
      expect(result).toBe(85);
    });

    test('should throw TypeError for invalid amount', () => {
      expect(() => Pricing.ConvertPrice('invalid', 1.2)).toThrow(TypeError);
      expect(() => Pricing.ConvertPrice('invalid', 1.2)).toThrow('Both amount and conversionRate must be numbers');
    });

    test('should throw TypeError for invalid conversion rate', () => {
      expect(() => Pricing.ConvertPrice(100, 'invalid')).toThrow(TypeError);
      expect(() => Pricing.ConvertPrice(100, 'invalid')).toThrow('Both amount and conversionRate must be numbers');
    });

    test('should throw TypeError for both invalid parameters', () => {
      expect(() => Pricing.ConvertPrice('invalid', 'invalid')).toThrow(TypeError);
      expect(() => Pricing.ConvertPrice('invalid', 'invalid')).toThrow('Both amount and conversionRate must be numbers');
    });
  });

  describe('Integration tests', () => {
    test('should work exactly like main file example', () => {
      const currency = new Currency('EUR', 'Euro');
      const pricing = new Pricing(100, currency);
      
      expect(pricing.displayFullPrice()).toBe('100 Euro (EUR)');
    });

    test('should handle complete workflow', () => {
      const currency = new Currency('USD', 'Dollar');
      const pricing = new Pricing(100, currency);
      
      // Test initial state
      expect(pricing.displayFullPrice()).toBe('100 Dollar (USD)');
      
      // Test price conversion
      const convertedAmount = Pricing.ConvertPrice(pricing.amount, 1.2);
      expect(convertedAmount).toBe(120);
      
      // Test setting new amount
      pricing.amount = convertedAmount;
      expect(pricing.displayFullPrice()).toBe('120 Dollar (USD)');
    });
  });
});
