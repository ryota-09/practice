const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher');

describe('QuizFetcherのクラス', () => {
  describe('fetchメソッドの確認', () => {
    it('fetchのクラスメソッドを持つ', () => {
      assert.strictEqual(typeof QuizFetcher.fetch, 'function');
    })
  })
});
