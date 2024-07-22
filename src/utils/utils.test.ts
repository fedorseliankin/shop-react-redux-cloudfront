import { formatAsPrice, formatTitle } from './utils';

describe('formatAsPrice', () => {
    it('should format number to USD price string', () => {
        expect(formatAsPrice(500)).toBe('$500.00');
        expect(formatAsPrice(1234.56)).toBe('$1,234.56');
    });
});

describe('formatTitle', () => {
    it('should convert title to uppercase', () => {
        expect(formatTitle('hello world')).toBe('HELLO WORLD');
        expect(formatTitle('jest test')).toBe('JEST TEST');
    });
});