var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/index.ts
class ReactAndRails {
  static clientAdapter;
  static serverAdapter;
  static createElement(type, props) {
    return (this.clientAdapter || this.serverAdapter).createElement(type, props);
  }
  static render(reactNode, domNode) {
    return ReactAndRails.clientAdapter.render(reactNode, domNode);
  }
  static hydrate(reactNode, domNode) {
    ReactAndRails.clientAdapter.hydrate(reactNode, domNode);
  }
  static renderToString(reactNode) {
    return ReactAndRails.serverAdapter.renderToString(reactNode);
  }
}
export {
  ReactAndRails as default
};
