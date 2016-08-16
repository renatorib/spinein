import utils from './utils';
import spinners from './data/spinners';

const { $select, $html, rotate } = utils;

const spine = (_spinner) => {
  const { frames, interval } = (typeof _spinner === 'string') ?
    spinners[_spinner] : _spinner;

  return {
    in: el => {
      let chars = frames;
      const $el = typeof el === 'string' ? $select(el) : el;
      const printnRotate = () => $html($el, chars[0]) && (chars = rotate(chars));

      printnRotate();

      return setInterval(printnRotate, interval);
    }
  }
}

spine.spinners = spinners;
spine.utils = utils;

module.exports = spine;
