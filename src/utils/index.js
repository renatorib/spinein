const $select = sel => document.querySelector(sel);
const $html = ($el, text) => $el.innerHTML = text;
const rotate = ([first, ...rest]) => [...rest, first];

export default {
  $select,
  $html,
  rotate
}
