function safeJSONParse(input) {
    try {
      return JSON.parse(input);
    } catch (_) {
      return undefined;
    }
  }
  
  function safeJSONSerialize(input, replacer, space) {
    try {
      return String(JSON.stringify(input, replacer, space));
    } catch (_) {
      return '';
    }
  }
  
export default {
    parse: safeJSONParse,
    toString: safeJSONSerialize
};