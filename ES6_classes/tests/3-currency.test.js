// tests/3-currency.test.js

describe('Currency', () => {
  const Currency = require('../3-currency');

  // Test du constructeur
  describe('Constructor', () => {
    test('should create instance with valid parameters', () => {
      const currency = new Currency('$', 'Dollars');
      
      expect(currency.code).toBe('$');
      expect(currency.name).toBe('Dollars');
    });

    test('should create instance with different currency', () => {
      const euro = new Currency('€', 'Euros');
      
      expect(euro.code).toBe('€');
      expect(euro.name).toBe('Euros');
    });
  });

  // Test des getters
  describe('Getters', () => {
    let currency;
    
    beforeEach(() => {
      currency = new Currency('$', 'Dollars');
    });

    test('should get code correctly', () => {
      expect(currency.code).toBe('$');
    });

    test('should get name correctly', () => {
      expect(currency.name).toBe('Dollars');
    });
  });

  // Test des setters
  describe('Setters', () => {
    let currency;
    
    beforeEach(() => {
      currency = new Currency('$', 'Dollars');
    });

    describe('Code setter', () => {
      test('should set valid code', () => {
        currency.code = '€';
        expect(currency.code).toBe('€');
      });

      test('should throw TypeError when setting non-string code', () => {
        expect(() => {
          currency.code = 123;
        }).toThrow(TypeError);
        
        expect(() => {
          currency.code = 123;
        }).toThrow('code must be a string');
      });

      test('should throw TypeError when setting null code', () => {
        expect(() => {
          currency.code = null;
        }).toThrow(TypeError);
      });

      test('should throw TypeError when setting undefined code', () => {
        expect(() => {
          currency.code = undefined;
        }).toThrow(TypeError);
      });
    });

    describe('Name setter', () => {
      test('should set valid name', () => {
        currency.name = 'Euros';
        expect(currency.name).toBe('Euros');
      });

      test('should throw TypeError when setting non-string name', () => {
        expect(() => {
          currency.name = 123;
        }).toThrow(TypeError);
        
        expect(() => {
          currency.name = 123;
        }).toThrow('name must be a string');
      });

      test('should throw TypeError when setting array as name', () => {
        expect(() => {
          currency.name = ['Dollar'];
        }).toThrow(TypeError);
      });

      test('should throw TypeError when setting object as name', () => {
        expect(() => {
          currency.name = { currency: 'Dollar' };
        }).toThrow(TypeError);
      });
    });
  });

  // Test de la méthode displayFullCurrency
  describe('displayFullCurrency method', () => {
    test('should display full currency format correctly', () => {
      const dollar = new Currency('$', 'Dollars');
      expect(dollar.displayFullCurrency()).toBe('Dollars ($)');
    });

    test('should display different currencies correctly', () => {
      const euro = new Currency('€', 'Euros');
      expect(euro.displayFullCurrency()).toBe('Euros (€)');
    });

    test('should display after code modification', () => {
      const currency = new Currency('$', 'Dollars');
      currency.code = '£';
      expect(currency.displayFullCurrency()).toBe('Dollars (£)');
    });

    test('should display after name modification', () => {
      const currency = new Currency('$', 'Dollars');
      currency.name = 'Pounds';
      expect(currency.displayFullCurrency()).toBe('Pounds ($)');
    });

    test('should display after both modifications', () => {
      const currency = new Currency('$', 'Dollars');
      currency.code = '¥';
      currency.name = 'Yen';
      expect(currency.displayFullCurrency()).toBe('Yen (¥)');
    });
  });

  // Tests d'intégration (workflow complet comme dans main)
  describe('Integration tests', () => {
    test('should work exactly like main file example', () => {
      const dollar = new Currency('$', 'Dollars');
      
      // Test que la méthode retourne le bon format
      expect(dollar.displayFullCurrency()).toBe('Dollars ($)');
    });

    test('should handle complete workflow with modifications', () => {
      const currency = new Currency('$', 'Dollars');
      
      // Vérification initiale
      expect(currency.displayFullCurrency()).toBe('Dollars ($)');
      
      // Modification du code
      currency.code = '€';
      expect(currency.displayFullCurrency()).toBe('Dollars (€)');
      
      // Modification du nom
      currency.name = 'Euros';
      expect(currency.displayFullCurrency()).toBe('Euros (€)');
    });
  });

  // Tests de cas spéciaux
  describe('Edge cases', () => {
    test('should handle empty strings', () => {
      const currency = new Currency('', '');
      expect(currency.displayFullCurrency()).toBe(' ()');
    });

    test('should handle single characters', () => {
      const currency = new Currency('$', 'D');
      expect(currency.displayFullCurrency()).toBe('D ($)');
    });

    test('should handle long strings', () => {
      const currency = new Currency('USD', 'United States Dollars');
      expect(currency.displayFullCurrency()).toBe('United States Dollars (USD)');
    });
  });
});
