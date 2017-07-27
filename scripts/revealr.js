'use strict';

var revealr = {
    els: {
        button: null
    },
    revealTimeline: function revealTimeline(e) {
        e.preventDefault();
        var button = e.target;
        var container = button.parentElement;
        var wrapper = container.querySelector('.wrapper');
        var fader = container.querySelector('.timeline-fader');
        var list = container.querySelector('.timeline');
        if (list.classList.contains('revealed')) {
            fader.style.opacity = 1;
            list.classList.remove('revealed');
            wrapper.style.maxHeight = '300px';
            button.innerHTML = 'View Full Timeline';
        } else {
            fader.style.opacity = 0;
            list.classList.add('revealed');
            wrapper.style.maxHeight = list.offsetHeight + 'px';
            button.innerHTML = 'Collapse Timeline';
        }
    },
    init: function init(target) {
        //        var buttons = document.querySelectorAll(target);
        //        for (var _iterator = buttons, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        //            var _ref;
        //
        //            if (_isArray) {
        //                if (_i >= _iterator.length) break;
        //                _ref = _iterator[_i++];
        //            } else {
        //                _i = _iterator.next();
        //                if (_i.done) break;
        //                _ref = _i.value;
        //            }
        //
        //            var button = _ref;
        //            console.log(_ref);
        //
        //            button.addEventListener('click', this.revealTimeline, false);
        //        }

        var button = document.getElementById(target);
        button.addEventListener('click', this.revealTimeline, false);
    }
};

//revealr.init('.timeline-reveal');
