"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var calc = (function () {
  function calc(x, y) {
    _classCallCheck(this, calc);

    this.x = x;
    this.y = y;
  }

  _createClass(calc, [{
    key: "mult",
    value: function mult() {
      return this.x * this.y;
    }
  }, {
    key: "somar",
    value: function somar() {
      return this.x + this.y;
    }
  }]);

  return calc;
})();
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hello = (function () {
  function hello(_hello) {
    _classCallCheck(this, hello);

    this.mesage = x;
  }

  _createClass(hello, [{
    key: "helloWorld",
    value: function helloWorld() {
      console.log(this.mesage);
    }
  }]);

  return hello;
})();
//# sourceMappingURL=babel.js.map