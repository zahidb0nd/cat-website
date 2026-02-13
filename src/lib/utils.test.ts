import { sanitize } from './utils';

describe('sanitize', () => {
  it('should return plain text unchanged', () => {
    expect(sanitize('Hello World')).toBe('Hello World');
  });

  it('should trim leading and trailing whitespace', () => {
    expect(sanitize('  Hello World  ')).toBe('Hello World');
  });

  it('should remove HTML tags', () => {
    expect(sanitize('<div>Hello</div>')).toBe('Hello');
    expect(sanitize('<b>Bold</b>')).toBe('Bold');
    expect(sanitize('<script>alert(1)</script>')).toBe('alert(1)');
  });

  it('should handle strings with multiple tags', () => {
    expect(sanitize('<p>Hello <span>World</span></p>')).toBe('Hello World');
  });

  it('should handle strings with both tags and whitespace', () => {
    expect(sanitize('  <p>  Hello  </p>  ')).toBe('Hello');
  });

  it('should return empty string for empty input', () => {
    expect(sanitize('')).toBe('');
  });

  it('should return empty string for input with only tags', () => {
    expect(sanitize('<div></div>')).toBe('');
  });

  it('should remove tags even if nested or malformed (regex limitations apply)', () => {
      // The current regex /<[^>]*>/g matches any < followed by non-> chars followed by >.
      // <<>> -> First match is < followed by < followed by >. i.e. <<>. Replaced by empty.
      // Remaining string is >.
      expect(sanitize('<<>>')).toBe('>');
      expect(sanitize('<>')).toBe('');
  });

  it('should handle nested-like structures by removing all tag-like sequences', () => {
      // <<script> matches as a tag (<<script>).
      // </script> matches as a tag.
      // Both are removed, leaving "alert(1)".
      expect(sanitize('<<script>alert(1)</script>')).toBe('alert(1)');
  });

  it('should preserve content that does not look like tags', () => {
      expect(sanitize('1 < 2')).toBe('1 < 2');
  });
});
