;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "2GgFPWwKuQ"							}), success: c, error: e});						}, cb  = function(section, $) {(function(a){var b={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};a.zoom=function(b,c,d,e){var f,g,h,i,j,k,l,m=a(b),n=m.css("position"),o=a(c);return b.style.position=/(absolute|fixed)/.test(n)?n:"relative",b.style.overflow="hidden",d.style.width=d.style.height="",a(d).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:d.width*e,height:d.height*e,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(b),{init:function(){g=m.outerWidth(),f=m.outerHeight(),c===b?(i=g,h=f):(i=o.outerWidth(),h=o.outerHeight()),j=(d.width-g)/i,k=(d.height-f)/h,l=o.offset()},move:function(a){var b=a.pageX-l.left,c=a.pageY-l.top;c=Math.max(Math.min(c,h),0),b=Math.max(Math.min(b,i),0),d.style.left=b*-j+"px",d.style.top=c*-k+"px"}}},a.fn.zoom=function(c){return this.each(function(){var d=a.extend({},b,c||{}),e=d.target&&a(d.target)[0]||this,f=this,g=a(f),h=document.createElement("img"),i=a(h),j=!1,k=!1;if(!d.url){var l=f.querySelector("img");if(l&&(d.url=l.getAttribute("data-src")||l.currentSrc||l.src),!d.url)return}g.one("zoom.destroy",function(a,b){g.off(".zoom"),e.style.position=a,e.style.overflow=b,h.onload=null,i.remove()}.bind(this,e.style.position,e.style.overflow)),h.onload=function(){function b(b){l.init(),l.move(b),i.stop().fadeTo(a.support.opacity?d.duration:0,1,!!a.isFunction(d.onZoomIn)&&d.onZoomIn.call(h))}function c(){i.stop().fadeTo(d.duration,0,!!a.isFunction(d.onZoomOut)&&d.onZoomOut.call(h))}var l=a.zoom(e,f,h,d.magnify);"grab"===d.on?g.on("mousedown.zoom",function(d){1===d.which&&(a(document).one("mouseup.zoom",function(){c(),a(document).off("mousemove.zoom",l.move)}),b(d),a(document).on("mousemove.zoom",l.move),d.preventDefault())}):"click"===d.on?g.on("click.zoom",function(d){return j?void 0:(j=!0,b(d),a(document).on("mousemove.zoom",l.move),a(document).one("click.zoom",function(){c(),j=!1,a(document).off("mousemove.zoom",l.move)}),!1)}):"toggle"===d.on?g.on("click.zoom",function(a){j?c():b(a),j=!j}):"mouseover"===d.on&&(l.init(),g.on("mouseenter.zoom",b).on("mouseleave.zoom",c).on("mousemove.zoom",l.move)),d.touch&&g.on("touchstart.zoom",function(a){a.preventDefault(),k?(k=!1,c()):(k=!0,b(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(a){a.preventDefault(),l.move(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])}).on("touchend.zoom",function(a){a.preventDefault(),k&&(k=!1,c())}),a.isFunction(d.callback)&&d.callback.call(h)},h.setAttribute("role","presentation"),h.alt="",h.src=d.url})},a.fn.zoom.defaults=b})(window.jQuery);/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Swiper = factory());
}(this, function () { 'use strict';

  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */
  var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  } : document; // eslint-disable-line

  var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
  } : window; // eslint-disable-line

  /**
   * Dom7 2.1.3
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2019, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: February 11, 2019
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) { arr.push(els[i]); }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) { return false; }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) { return this[0].getAttribute(attrs); }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute(("data-" + key));
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) { return; }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
      else {
        var parents = $(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = (void 0);
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = (void 0);
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) { return; }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) { return win.getComputedStyle(this[0], null); }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) { return this; }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') { return false; }
    if (typeof selector === 'string') {
      if (el.matches) { return el.matches(selector); }
      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    } else if (selector === doc) { return el === doc; }
    else if (selector === win) { return el === win; }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) { i += 1; }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') { return this; }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) { return new Dom7([]); }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) { nextEls.push(next); }
      } else { nextEls.push(next); }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) { prevEls.push(prev); }
      } else { prevEls.push(prev); }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) { parents.push(parent); }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
    }
    return this;
  }
  function add() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if ( delay === void 0 ) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if ( axis === void 0 ) axis = 'x';

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[4]); }
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[5]); }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [], len$1 = arguments.length;
      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    var testDiv = doc.createElement('div');
    return {
      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
        return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
      }()),

      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0)),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,

      transition: (function checkTransition() {
        var style = testDiv.style;
        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
      }()),
      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
        var style = testDiv.style;
        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
      }()),

      flexbox: (function checkFlexbox() {
        var style = testDiv.style;
        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) { return true; }
        }
        return false;
      }()),

      observer: (function checkObserver() {
        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
      }()),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),

      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());

  var SwiperClass = function SwiperClass(params) {
    if ( params === void 0 ) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };

  SwiperClass.prototype.on = function on (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    function onceHandler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      handler.apply(self, args);
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off (events, handler) {
    var self = this;
    if (!self.eventsListeners) { return self; }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;
    if (!self.eventsListeners) { return self; }
    var events;
    var data;
    var context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules (modulesParams) {
      if ( modulesParams === void 0 ) modulesParams = {};

    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) { return; }
    Class.use(components);
  };

  SwiperClass.installModule = function installModule (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };

  SwiperClass.use = function use (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) { return Class.installModule(m); });
      return Class;
    }
    return Class.installModule.apply(Class, [ module ].concat( params ));
  };

  Object.defineProperties( SwiperClass, staticAccessors );

  function updateSize () {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }

    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides () {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
    else { slides.css({ marginRight: '', marginBottom: '' }); }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = (void 0);
        var column = (void 0);
        var row = (void 0);
        if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide
          .css(
            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
          )
          .attr('data-swiper-column', column)
          .attr('data-swiper-row', row);
      }
      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width'));
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            var boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height'));
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing$1 && boxSizing$1 === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);


      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
    }
    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) { snapGrid = [0]; }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
        else { slides.css({ marginRight: (spaceBetween + "px") }); }
      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight (speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) { break; }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
  }

  function updateSlidesOffset () {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) { return; }
    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

    var offsetCenter = -translate;
    if (rtl) { offsetCenter = translate; }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size)
                  || (slideAfter > 0 && slideAfter <= swiper.size)
                  || (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses () {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex (newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }

  function updateClickedSlide (e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) { slideFound = true; }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate (axis) {
    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) { currentTranslate = -currentTranslate; }

    return currentTranslate || 0;
  }

  function setTranslate (translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (!params.virtualTranslate) {
      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate () {
    return (-this.snapGrid[0]);
  }

  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
  };

  function setTransition (duration, byController) {
    var swiper = this;

    swiper.$wrapperEl.transition(duration);

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1 (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) { slideIndex = 0; }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) { return false; }
      }
    }

    var direction;
    if (slideIndex > activeIndex) { direction = 'next'; }
    else if (slideIndex < activeIndex) { direction = 'prev'; }
    else { direction = 'reset'; }


    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }

    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) { return -Math.floor(Math.abs(val)); }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) { return; }
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

    var slides = $wrapperEl.children(("." + (params.slideClass)));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(("." + (params.slideClass)));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) { appendSlides.push(el); }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
      slide.attr('data-swiper-slide-index', index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix () {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();


    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy () {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor (moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor () {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide (slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.append(slides[i]); }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide (slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide (index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide (slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides () {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap,
    };

    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


    // Windows
    if (windows) {
      device.os = 'windows';
      device.osVersion = windows[2];
      device.windows = true;
    }
    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }

    // Desktop
    device.desktop = !(device.os || device.android || device.webView);

    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

    // Minimal UI
    if (device.os && device.os === 'ios') {
      var osVersionArr = device.osVersion.split('.');
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi = !device.webView
        && (ipod || iphone)
        && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
        && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  }());

  function onTouchStart (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
    if (data.isTouched && data.isMoved) { return; }
    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$(e).closest(params.swipeHandler)[0]) { return; }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection
      && ((startX <= edgeSwipeThreshold)
      || (startX >= win.screen.width - edgeSwipeThreshold))
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) { data.allowThresholdMove = false; }
    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($(e.target).is(data.formElements)) { preventDefault = false; }
      if (
        doc.activeElement
        && $(doc.activeElement).is(data.formElements)
        && doc.activeElement !== e.target
      ) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') { return; }
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) { return; }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) { diff = -diff; }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }


    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger) { return; }

    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd (event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) { return; }
          swiper.emit('click', e);
        }, 300);
      }
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        swiper.emit('doubleTap', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) { swiper.allowClick = true; }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) { newPosition = -newPosition; }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
            swiper.emit('momentumBounce');

            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize () {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) { return; }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    if (params.freeMode) {
      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick (e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) { e.preventDefault(); }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

    // Set breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') { return; }
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      Utils.extend(swiper.params, breakpointParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint (breakpoints) {
    var swiper = this;
    // Get breakpoint for window width
    if (!breakpoints) { return undefined; }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (swiper.params.breakpointsInverse) {
        if (point <= win.innerWidth) {
          breakpoint = point;
        }
      } else if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

  function addClasses () {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push('initialized');
    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (!Support.flexbox) {
      suffixes.push('no-flexbox');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
    // WP8 Touch Events Fix
    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      suffixes.push(("wp8-" + (params.direction)));
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(' '));
  }

  function removeClasses () {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(' '));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) { callback(); }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages () {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) { swiper.update(); }
        swiper.emit('imagesReady');
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;

    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventInteractionOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsInverse: false,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',

    // Callbacks
    runCallbacksOnInit: true,
  };

  /* eslint no-param-reassign: "off" */

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/(function (SwiperClass) {
    function Swiper() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var el;
      var params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        (assign = args, el = assign[0], params = assign[1]);
      }
      if (!params) { params = {}; }

      params = Utils.extend({}, params);
      if (el && !params.el) { params.el = el; }

      SwiperClass.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object'
            && !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper);

      // Find Wrapper
      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          } else if (Support.prefixedPointerEvents) {
            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,

      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if ( SwiperClass ) Swiper.__proto__ = SwiperClass;
    Swiper.prototype = Object.create( SwiperClass && SwiperClass.prototype );
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };

    Swiper.prototype.update = function update () {
      var swiper = this;
      if (!swiper || swiper.destroyed) { return; }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };

    Swiper.prototype.changeDirection = function changeDirection (newDirection, needUpdate) {
      if ( needUpdate === void 0 ) needUpdate = true;

      var swiper = this;
      var currentDirection = swiper.params.direction;
      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }
      if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
        return swiper;
      }

      if (currentDirection === 'vertical') {
        swiper.$el
          .removeClass(((swiper.params.containerModifierClass) + "vertical wp8-vertical"))
          .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
        }
      }
      if (currentDirection === 'horizontal') {
        swiper.$el
          .removeClass(((swiper.params.containerModifierClass) + "horizontal wp8-horizontal"))
          .addClass(("" + (swiper.params.containerModifierClass) + newDirection));

        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
          swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
        }
      }

      swiper.params.direction = newDirection;

      swiper.slides.each(function (slideIndex, slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });

      swiper.emit('changeDirection');
      if (needUpdate) { swiper.update(); }

      return swiper;
    };

    Swiper.prototype.init = function init () {
      var swiper = this;
      if (swiper.initialized) { return; }

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    };

    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
      if ( deleteInstance === void 0 ) deleteInstance = true;
      if ( cleanStyles === void 0 ) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index')
            .removeAttr('data-swiper-column')
            .removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };

    Swiper.extendDefaults = function extendDefaults (newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties( Swiper, staticAccessors );

    return Swiper;
  }(SwiperClass));

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener('resize', swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if ( options === void 0 ) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });

      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) { return; }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) { offsetProp = 'right'; }
      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, (offset + "px"));
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) { appendIndexes.push(i$1); }
            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.push(slides[i]); }
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) { swiper.virtual.slides.unshift(slides[i]); }
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) { return; }
      var activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) { activeIndex -= 1; }
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) { activeIndex -= 1; }
        activeIndex = Math.max(activeIndex, 0);
      }
      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    },
  };

  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          removeSlide: Virtual.removeSlide.bind(swiper),
          removeAllSlides: Virtual.removeAllSlides.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth
            && point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) { return undefined; }
      }
      if (swiper.isHorizontal()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
        if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (kc === 40) { swiper.slideNext(); }
        if (kc === 38) { swiper.slidePrev(); }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) { return; }
      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) { return; }
      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported
      && doc.implementation
      && doc.implementation.hasFeature
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && doc.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    }()),
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
          else { return true; }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
        else { return true; }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) { return true; }

      if (params.invert) { delta = -delta; }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) { return true; }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        }
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
      } else {
        // Freemode or scrollContainer:
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + (delta * params.sensitivity);
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        }
        // Emit event
        swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
      }

      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (!swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) { return; }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) { return; }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) { return; }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.nextEl === 'string'
          && $nextEl.length > 1
          && swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.prevEl === 'string'
          && $prevEl.length > 1
          && swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick
          && !$(e.target).is($prevEl)
          && !$(e.target).is($nextEl)
        ) {
          var isHidden;
          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }
          if (isHidden === true) {
            swiper.emit('navigationShow', swiper);
          } else {
            swiper.emit('navigationHide', swiper);
          }
          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) { current -= total; }
        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(((params.bulletActiveClass) + "-main"));
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
            }
            $firstDisplayedBullet
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev"))
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev-prev"));
            $lastDisplayedBullet
              .next()
              .addClass(((params.bulletActiveClass) + "-next"))
              .next()
              .addClass(((params.bulletActiveClass) + "-next-next"));
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
          + ' / '
          + "<span class=\"" + (params.totalClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) { return; }

      var $el = $(params.el);
      if ($el.length === 0) { return; }

      if (
        swiper.params.uniqueNavElements
        && typeof params.el === 'string'
        && $el.length > 1
        && swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) { index += swiper.loopedSlides; }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
      if (params.clickable) {
        $el.off('click', ("." + (params.bulletClass)));
      }
    },
  };

  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) { return number; },
        formatFractionTotal: function (number) { return number; },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el
          && swiper.params.pagination.hideOnClick
          && swiper.pagination.$el.length > 0
          && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
          if (isHidden === true) {
            swiper.emit('paginationShow', swiper);
          } else {
            swiper.emit('paginationHide', swiper);
          }
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
        } else {
          $dragEl.transform(("translateX(" + newPos + "px)"));
        }
        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
        } else {
          $dragEl.transform(("translateY(" + newPos + "px)"));
        }
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;

      var pointerPosition;
      if (swiper.isHorizontal()) {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
      } else {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
      }
      var positionRatio;
      positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) { return; }
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) { return; }
      swiper.scrollbar.isTouched = false;
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
      if ($dragEl.length === 0) {
        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if ((x).indexOf('%') >= 0) {
        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
      } else {
        x = (x * progress * rtlFactor) + "px";
      }
      if ((y).indexOf('%') >= 0) {
        y = (parseInt(y, 10) * progress) + "%";
      } else {
        y = (y * progress) + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
      } else {
        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if ( duration === void 0 ) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) { parallaxDuration = 0; }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) { return 1; }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
      }
      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (image.isTouched) { return; }
      if (Device.android) { e.preventDefault(); }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) { return; }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal()
          && (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } if (
          !swiper.isHorizontal()
          && (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();

      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
      }

      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
      }

      // Velocity
      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');

        zoom.scale = 1;
        zoom.currentScale = 1;

        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) { return; }
      zoom.enabled = true;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) { return; }

      swiper.zoom.enabled = false;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
  };

  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };

      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom,
      });

      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') { return; }
      if (swiper.slides.length === 0) { return; }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
        : swiper.slides.eq(index);

      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) { return; }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');

        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
          if (background) {
            $imageEl.css('background-image', ("url(\"" + background + "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(("." + (params.preloaderClass))).remove();
          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });

        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
            return true;
          }
        } else if (slides[index]) { return true; }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
          }
        } else {
          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
        }
      }
    },
  };

  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) { return 0; }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) { return; }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) { return; }
      var $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) { return; }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) { return; }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) { return; }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
        if (typeof newIndex === 'undefined') { return; }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
      if (swiper.autoplay.running) { return false; }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) { return false; }
      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) { return; }
      if (swiper.autoplay.paused) { return; }
      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };

  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: (swiperWidth + "px") });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          var multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
        }
      }
      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };

  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
        $slideEl
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) { translateX = 0; }
        if (Math.abs(translateY) < 0.001) { translateY = 0; }
        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }

        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        }));
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
        else { slideToIndex = prevIndex; }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }

      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;

      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
          else { newThumbsIndex = prevThumbsIndex; }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) { return; }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1
  ];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);
  window.Swiper = Swiper;
  return Swiper;

}));
function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}"undefined"==typeof window.Shopify&&(window.Shopify={}),Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return void 0!==t},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,(t.prototype.constructor=t).baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){return(Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e)+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(o){if(!Shopify.isDefined(this.variants))return null;var t=Shopify.map(this.variants,function(t){var e="option"+(o+1);return t[e]==undefined?null:t[e]});return null==t[0]?null:Shopify.uniq(t)},Shopify.Product.prototype.getVariant=function(i){var r=null;return i.length!=this.options.length||Shopify.each(this.variants,function(t){for(var e=!0,o=0;o<i.length;o++){t["option"+(o+1)]!=i[o]&&(e=!1)}1!=e||(r=t)}),r},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="${{amount}}",Shopify.formatMoney=function(t,e){function n(t,e){return void 0===t?e:t}function o(t,e,o,i){if(e=n(e,2),o=n(o,","),i=n(i,"."),isNaN(t)||null==t)return 0;var r=(t=(t/100).toFixed(e)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+o)+(r[1]?i+r[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var i="",r=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(r)[1]){case"amount":i=o(t,2);break;case"amount_no_decimals":i=o(t,0);break;case"amount_with_comma_separator":i=o(t,2,".",",");break;case"amount_with_space_separator":i=o(t,2," ",",");break;case"amount_with_period_and_space_separator":i=o(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":i=o(t,0,".",",");break;case"amount_no_decimals_with_space_separator":i=o(t,0," ");break;case"amount_with_apostrophe_separator":i=o(t,2,"'",".")}return a.replace(r,i)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0};if(!this.selectVariantFromDropdown(t)){var e=this;setTimeout(function(){e.selectVariantFromParams(t)||e.fireOnChangeForFirstDropdown.call(e,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){this.selectVariantFromParams(t)||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=o[r.getAttribute("data-option")];null!=n&&this.optionExistInSelect(r,n)&&(r.value=n)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var i=this.selectorDivClass,r=this.product.optionNames();return Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",i),1<r.length){var o=document.createElement("label");o.htmlFor=t.element.id,o.innerHTML=t.name,e.appendChild(o)}return e.appendChild(t.element),e})},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,n,a,s){if(!Shopify.isDefined(a))a=!0;if(!Shopify.isDefined(s))s="/";var e=document.getElementById(t),o=e.childNodes,p=(e.parentNode,n.length),l=[];Shopify.each(o,function(t){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var e=t.innerHTML.split(new RegExp("\\s*\\"+s+"\\s*"));0==n.length&&(p=e.length-(a?1:0));var o=e.slice(0,p),i=a?e[p]:"",r=(t.getAttribute("value"),{available:!t.disabled,id:parseFloat(t.value),price:i,option1:o[0],option2:o[1],option3:o[2]});l.push(r)}});var i={variants:l};if(0==n.length){i.options=[];for(var r=0;r<p;r++)i.options[r]="option "+(r+1)}else i.options=n;return i},Shopify.SingleOptionSelector=function(o,i,t,e){this.multiSelector=o,this.values=e,this.index=i,this.name=t,this.element=document.createElement("select");for(var r=0;r<e.length;r++){var n=document.createElement("option");n.value=e[r],n.innerHTML=e[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(i+1)),this.element.id=o.domIdPrefix+"-option-"+i,this.element.onchange=function(t,e){e=e||{},o.updateSelectors(i,e)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);return null!==e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null==o)return null;var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};!function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t,n){return t(n={exports:{}},n.exports),n.exports}var e=r(function(I){!function(t){var c,n=Object.prototype,f=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",e=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag",u=t.regeneratorRuntime;if(u)I.exports=u;else{(u=t.regeneratorRuntime=I.exports).wrap=m;var l="suspendedStart",h="suspendedYield",v="executing",p="completed",d={},a={};a[i]=function(){return this};var s=Object.getPrototypeOf,y=s&&s(s(F([])));y&&y!==n&&f.call(y,i)&&(a=y);var g=S.prototype=b.prototype=Object.create(a);_.prototype=g.constructor=S,S.constructor=_,S[o]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===_||"GeneratorFunction"===(n.displayName||n.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,o in t||(t[o]="GeneratorFunction")),t.prototype=Object.create(g),t},u.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[e]=function(){return this},u.AsyncIterator=O,u.async=function(t,n,r,e){var i=new O(m(t,n,r,e));return u.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(g),g[o]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},u.keys=function(r){var e=[];for(var t in r)e.push(t);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},u.values=F,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&f.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function t(t,n){return o.type="throw",o.arg=r,e.next=t,n&&(e.method="next",e.arg=c),!!n}for(var n=this.tryEntries.length-1;0<=n;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var u=f.call(i,"catchLoc"),a=f.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&f.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=c),d}}}function m(t,n,r,e){var o,u,a,c,i=n&&n.prototype instanceof b?n:b,f=Object.create(i.prototype),s=new M(e||[]);return f._invoke=(o=t,u=r,a=s,c=l,function(t,n){if(c===v)throw new Error("Generator is already running");if(c===p){if("throw"===t)throw n;return j()}for(a.method=t,a.arg=n;;){var r=a.delegate;if(r){var e=A(r,a);if(e){if(e===d)continue;return e}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===l)throw c=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=v;var i=w(o,u,a);if("normal"===i.type){if(c=a.done?p:h,i.arg===d)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(c=p,a.method="throw",a.arg=i.arg)}}),f}function w(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function _(){}function S(){}function E(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function O(c){var n;this._invoke=function(r,e){function t(){return new Promise(function(t,n){!function n(t,r,e,i){var o=w(c[t],c,r);if("throw"!==o.type){var u=o.arg,a=u.value;return a&&"object"==typeof a&&f.call(a,"__await")?Promise.resolve(a.__await).then(function(t){n("next",t,e,i)},function(t){n("throw",t,e,i)}):Promise.resolve(a).then(function(t){u.value=t,e(u)},i)}i(o.arg)}(r,e,t,n)})}return n=n?n.then(t,t):t()}}function A(t,n){var r=t.iterator[n.method];if(r===c){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=c,A(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var e=w(r,t.iterator,n.arg);if("throw"===e.type)return n.method="throw",n.arg=e.arg,n.delegate=null,d;var i=e.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=c),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function x(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function F(n){if(n){var t=n[i];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,e=function t(){for(;++r<n.length;)if(f.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=c,t.done=!0,t};return e.next=e}}return{next:j}}function j(){return{value:c,done:!0}}}(function(){return this}()||Function("return this")())}),i=function(){return this}()||Function("return this")(),o=i.regeneratorRuntime&&0<=Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime"),u=o&&i.regeneratorRuntime;i.regeneratorRuntime=void 0;var a=e;if(o)i.regeneratorRuntime=u;else try{delete i.regeneratorRuntime}catch(t){i.regeneratorRuntime=void 0}var c=a,f=Math.ceil,s=Math.floor,l=function(t){return isNaN(t=+t)?0:(0<t?s:f)(t)},h=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},d=r(function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),y=r(function(t){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)}),v=(y.version,function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}),g=function(e,i,t){if(v(e),void 0===i)return e;switch(t){case 1:return function(t){return e.call(i,t)};case 2:return function(t,n){return e.call(i,t,n)};case 3:return function(t,n,r){return e.call(i,t,n,r)}}return function(){return e.apply(i,arguments)}},p=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t){if(!p(t))throw TypeError(t+" is not an object!");return t},w=function(t){try{return!!t()}catch(t){return!0}},b=!w(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),_=d.document,S=p(_)&&p(_.createElement),E=function(t){return S?_.createElement(t):{}},O=!b&&!w(function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a}),A=Object.defineProperty,P={f:b?Object.defineProperty:function(t,n,r){if(m(t),n=function(t,n){if(!p(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!p(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!p(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!p(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}(n,!0),m(r),O)try{return A(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},x=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},M=b?function(t,n,r){return P.f(t,n,x(1,r))}:function(t,n,r){return t[n]=r,t},F={}.hasOwnProperty,j=function(t,n){return F.call(t,n)},I="prototype",R=function(t,n,r){var e,i,o,u=t&R.F,a=t&R.G,c=t&R.S,f=t&R.P,s=t&R.B,l=t&R.W,h=a?y:y[n]||(y[n]={}),v=h[I],p=a?d:c?d[n]:(d[n]||{})[I];for(e in a&&(r=n),r)(i=!u&&p&&void 0!==p[e])&&j(h,e)||(o=i?p[e]:r[e],h[e]=a&&"function"!=typeof p[e]?r[e]:s&&i?g(o,d):l&&p[e]==o?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[I]=e[I],t}(o):f&&"function"==typeof o?g(Function.call,o):o,f&&((h.virtual||(h.virtual={}))[e]=o,t&R.R&&v&&!v[e]&&M(v,e,o)))};R.F=1,R.G=2,R.S=4,R.P=8,R.B=16,R.W=32,R.U=64,R.R=128;var L,T=R,N=M,k={},C={}.toString,U=function(t){return C.call(t).slice(8,-1)},D=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==U(t)?t.split(""):Object(t)},V=function(t){return D(h(t))},W=Math.min,G=function(t){return 0<t?W(l(t),9007199254740991):0},B=Math.max,z=Math.min,K=r(function(t){var n="__core-js_shared__",r=d[n]||(d[n]={});(t.exports=function(t,n){return r[t]||(r[t]=void 0!==n?n:{})})("versions",[]).push({version:y.version,mode:"pure",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})}),X=0,Y=Math.random(),q=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++X+Y).toString(36))},H=K("keys"),Q=function(t){return H[t]||(H[t]=q(t))},J=(L=!1,function(t,n,r){var e,i,o,u=V(t),a=G(u.length),c=(i=a,(e=l(e=r))<0?B(e+i,0):z(e,i));if(L&&n!=n){for(;c<a;)if((o=u[c++])!=o)return!0}else for(;c<a;c++)if((L||c in u)&&u[c]===n)return L||c||0;return!L&&-1}),$=Q("IE_PROTO"),Z="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),tt=Object.keys||function(t){return function(t,n){var r,e=V(t),i=0,o=[];for(r in e)r!=$&&j(e,r)&&o.push(r);for(;n.length>i;)j(e,r=n[i++])&&(~J(o,r)||o.push(r));return o}(t,Z)},nt=b?Object.defineProperties:function(t,n){m(t);for(var r,e=tt(n),i=e.length,o=0;o<i;)P.f(t,r=e[o++],n[r]);return t},rt=d.document,et=rt&&rt.documentElement,it=Q("IE_PROTO"),ot=function(){},ut="prototype",at=function(){var t,n=E("iframe"),r=Z.length;for(n.style.display="none",et.appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),at=t.F;r--;)delete at[ut][Z[r]];return at()},ct=Object.create||function(t,n){var r;return null!==t?(ot[ut]=m(t),r=new ot,ot[ut]=null,r[it]=t):r=at(),void 0===n?r:nt(r,n)},ft=r(function(t){var n=K("wks"),r=d.Symbol,e="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=e&&r[t]||(e?r:q)("Symbol."+t))}).store=n}),st=P.f,lt=ft("toStringTag"),ht=function(t,n,r){t&&!j(t=r?t:t.prototype,lt)&&st(t,lt,{configurable:!0,value:n})},vt={};M(vt,ft("iterator"),function(){return this});var pt,dt=function(t){return Object(h(t))},yt=Q("IE_PROTO"),gt=Object.prototype,mt=Object.getPrototypeOf||function(t){return t=dt(t),j(t,yt)?t[yt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?gt:null},wt=ft("iterator"),bt=!([].keys&&"next"in[].keys()),_t="values",St=function(){return this},Et=function(t,n,r,e,i,o,u){var a,c,f;c=n,f=e,(a=r).prototype=ct(vt,{next:x(1,f)}),ht(a,c+" Iterator");var s,l,h,v=function(t){if(!bt&&t in g)return g[t];switch(t){case"keys":case _t:return function(){return new r(this,t)}}return function(){return new r(this,t)}},p=n+" Iterator",d=i==_t,y=!1,g=t.prototype,m=g[wt]||g["@@iterator"]||i&&g[i],w=m||v(i),b=i?d?v("entries"):w:void 0,_="Array"==n&&g.entries||m;if(_&&(h=mt(_.call(new t)))!==Object.prototype&&h.next&&ht(h,p,!0),d&&m&&m.name!==_t&&(y=!0,w=function(){return m.call(this)}),u&&(bt||y||!g[wt])&&M(g,wt,w),k[n]=w,k[p]=St,i)if(s={values:d?w:v(_t),keys:o?w:v("keys"),entries:b},u)for(l in s)l in g||N(g,l,s[l]);else T(T.P+T.F*(bt||y),n,s);return s},Ot=(pt=!0,function(t,n){var r,e,i=String(h(t)),o=l(n),u=i.length;return o<0||u<=o?pt?"":void 0:(r=i.charCodeAt(o))<55296||56319<r||o+1===u||(e=i.charCodeAt(o+1))<56320||57343<e?pt?i.charAt(o):r:pt?i.slice(o,o+2):e-56320+(r-55296<<10)+65536});Et(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=Ot(n,r),this._i+=t.length,{value:t,done:!1})});var At=function(t,n){return{value:n,done:!!t}};Et(Array,"Array",function(t,n){this._t=V(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,At(1)):At(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values");k.Arguments=k.Array;for(var Pt=ft("toStringTag"),xt="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),Mt=0;Mt<xt.length;Mt++){var Ft=xt[Mt],jt=d[Ft],It=jt&&jt.prototype;It&&!It[Pt]&&M(It,Pt,Ft),k[Ft]=k.Array}var Rt,Lt,Tt,Nt=ft("toStringTag"),kt="Arguments"==U(function(){return arguments}()),Ct=function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),Nt))?r:kt?U(n):"Object"==(e=U(n))&&"function"==typeof n.callee?"Arguments":e},Ut=function(n,t,r,e){try{return e?t(m(r)[0],r[1]):t(r)}catch(t){var i=n.return;throw void 0!==i&&m(i.call(n)),t}},Dt=ft("iterator"),Vt=Array.prototype,Wt=function(t){return void 0!==t&&(k.Array===t||Vt[Dt]===t)},Gt=ft("iterator"),Bt=y.getIteratorMethod=function(t){if(null!=t)return t[Gt]||t["@@iterator"]||k[Ct(t)]},zt=r(function(t){var h={},v={},n=t.exports=function(t,n,r,e,i){var o,u,a,c,f=i?function(){return t}:Bt(t),s=g(r,e,n?2:1),l=0;if("function"!=typeof f)throw TypeError(t+" is not iterable!");if(Wt(f)){for(o=G(t.length);l<o;l++)if((c=n?s(m(u=t[l])[0],u[1]):s(t[l]))===h||c===v)return c}else for(a=f.call(t);!(u=a.next()).done;)if((c=Ut(a,s,u.value,n))===h||c===v)return c};n.BREAK=h,n.RETURN=v}),Kt=ft("species"),Xt=function(t,n){var r,e=m(t).constructor;return void 0===e||null==(r=m(e)[Kt])?n:v(r)},Yt=d.process,qt=d.setImmediate,Ht=d.clearImmediate,Qt=d.MessageChannel,Jt=d.Dispatch,$t=0,Zt={},tn="onreadystatechange",nn=function(){var t=+this;if(Zt.hasOwnProperty(t)){var n=Zt[t];delete Zt[t],n()}},rn=function(t){nn.call(t.data)};qt&&Ht||(qt=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return Zt[++$t]=function(){!function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}t.apply(r,n)}("function"==typeof t?t:Function(t),n)},Rt($t),$t},Ht=function(t){delete Zt[t]},"process"==U(Yt)?Rt=function(t){Yt.nextTick(g(nn,t,1))}:Jt&&Jt.now?Rt=function(t){Jt.now(g(nn,t,1))}:Qt?(Tt=(Lt=new Qt).port2,Lt.port1.onmessage=rn,Rt=g(Tt.postMessage,Tt,1)):d.addEventListener&&"function"==typeof postMessage&&!d.importScripts?(Rt=function(t){d.postMessage(t+"","*")},d.addEventListener("message",rn,!1)):Rt=tn in E("script")?function(t){et.appendChild(E("script"))[tn]=function(){et.removeChild(this),nn.call(t)}}:function(t){setTimeout(g(nn,t,1),0)});var en={set:qt,clear:Ht},on=en.set,un=d.MutationObserver||d.WebKitMutationObserver,an=d.process,cn=d.Promise,fn="process"==U(an);function sn(t){var r,e;this.promise=new t(function(t,n){if(void 0!==r||void 0!==e)throw TypeError("Bad Promise constructor");r=t,e=n}),this.resolve=v(r),this.reject=v(e)}var ln={f:function(t){return new sn(t)}},hn=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}},vn=d.navigator,pn=vn&&vn.userAgent||"",dn=function(t,n){if(m(t),p(n)&&n.constructor===t)return n;var r=ln.f(t);return(0,r.resolve)(n),r.promise},yn=ft("species"),gn=ft("iterator"),mn=!1;try{[7][gn]().return=function(){mn=!0}}catch(t){}var wn,bn,_n,Sn,En,On,An=function(t,n){if(!n&&!mn)return!1;var r=!1;try{var e=[7],i=e[gn]();i.next=function(){return{done:r=!0}},e[gn]=function(){return i},t(e)}catch(t){}return r},Pn=en.set,xn=function(){var r,e,i,t=function(){var t,n;for(fn&&(t=an.domain)&&t.exit();r;){n=r.fn,r=r.next;try{n()}catch(t){throw r?i():e=void 0,t}}e=void 0,t&&t.enter()};if(fn)i=function(){an.nextTick(t)};else if(!un||d.navigator&&d.navigator.standalone)if(cn&&cn.resolve){var n=cn.resolve(void 0);i=function(){n.then(t)}}else i=function(){on.call(d,t)};else{var o=!0,u=document.createTextNode("");new un(t).observe(u,{characterData:!0}),i=function(){u.data=o=!o}}return function(t){var n={fn:t,next:void 0};e&&(e.next=n),r||(r=n,i()),e=n}}(),Mn="Promise",Fn=d.TypeError,jn=d.process,In=jn&&jn.versions,Rn=In&&In.v8||"",Ln=d[Mn],Tn="process"==Ct(jn),Nn=function(){},kn=bn=ln.f,Cn=!!function(){try{var t=Ln.resolve(1),n=(t.constructor={})[ft("species")]=function(t){t(Nn,Nn)};return(Tn||"function"==typeof PromiseRejectionEvent)&&t.then(Nn)instanceof n&&0!==Rn.indexOf("6.6")&&-1===pn.indexOf("Chrome/66")}catch(t){}}(),Un=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},Dn=function(s,r){if(!s._n){s._n=!0;var e=s._c;xn(function(){for(var c=s._v,f=1==s._s,t=0,n=function(t){var n,r,e,i=f?t.ok:t.fail,o=t.resolve,u=t.reject,a=t.domain;try{i?(f||(2==s._h&&Gn(s),s._h=1),!0===i?n=c:(a&&a.enter(),n=i(c),a&&(a.exit(),e=!0)),n===t.promise?u(Fn("Promise-chain cycle")):(r=Un(n))?r.call(n,o,u):o(n)):u(c)}catch(t){a&&!e&&a.exit(),u(t)}};e.length>t;)n(e[t++]);s._c=[],s._n=!1,r&&!s._h&&Vn(s)})}},Vn=function(o){Pn.call(d,function(){var t,n,r,e=o._v,i=Wn(o);if(i&&(t=hn(function(){Tn?jn.emit("unhandledRejection",e,o):(n=d.onunhandledrejection)?n({promise:o,reason:e}):(r=d.console)&&r.error&&r.error("Unhandled promise rejection",e)}),o._h=Tn||Wn(o)?2:1),o._a=void 0,i&&t.e)throw t.v})},Wn=function(t){return 1!==t._h&&0===(t._a||t._c).length},Gn=function(n){Pn.call(d,function(){var t;Tn?jn.emit("rejectionHandled",n):(t=d.onrejectionhandled)&&t({promise:n,reason:n._v})})},Bn=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),Dn(n,!0))},zn=function(t){var r,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw Fn("Promise can't be resolved itself");(r=Un(t))?xn(function(){var n={_w:e,_d:!1};try{r.call(t,g(zn,n,1),g(Bn,n,1))}catch(t){Bn.call(n,t)}}):(e._v=t,e._s=1,Dn(e,!1))}catch(t){Bn.call({_w:e,_d:!1},t)}}};Cn||(Ln=function(t){!function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!")}(this,Ln,Mn,"_h"),v(t),wn.call(this);try{t(g(zn,this,1),g(Bn,this,1))}catch(t){Bn.call(this,t)}},(wn=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=function(t,n,r){for(var e in n)r&&t[e]?t[e]=n[e]:M(t,e,n[e]);return t}(Ln.prototype,{then:function(t,n){var r=kn(Xt(this,Ln));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=Tn?jn.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&Dn(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),_n=function(){var t=new wn;this.promise=t,this.resolve=g(zn,t,1),this.reject=g(Bn,t,1)},ln.f=kn=function(t){return t===Ln||t===Sn?new _n(t):bn(t)}),T(T.G+T.W+T.F*!Cn,{Promise:Ln}),ht(Ln,Mn),On="function"==typeof y[En=Mn]?y[En]:d[En],b&&On&&!On[yn]&&P.f(On,yn,{configurable:!0,get:function(){return this}}),Sn=y[Mn],T(T.S+T.F*!Cn,Mn,{reject:function(t){var n=kn(this);return(0,n.reject)(t),n.promise}}),T(T.S+!0*T.F,Mn,{resolve:function(t){return dn(this===Sn?Ln:this,t)}}),T(T.S+T.F*!(Cn&&An(function(t){Ln.all(t).catch(Nn)})),Mn,{all:function(t){var u=this,n=kn(u),a=n.resolve,c=n.reject,r=hn(function(){var e=[],i=0,o=1;zt(t,!1,function(t){var n=i++,r=!1;e.push(void 0),o++,u.resolve(t).then(function(t){r||(r=!0,e[n]=t,--o||a(e))},c)}),--o||a(e)});return r.e&&c(r.v),n.promise},race:function(t){var n=this,r=kn(n),e=r.reject,i=hn(function(){zt(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}}),T(T.P+T.R,"Promise",{finally:function(n){var r=Xt(this,y.Promise||d.Promise),t="function"==typeof n;return this.then(t?function(t){return dn(r,n()).then(function(){return t})}:n,t?function(t){return dn(r,n()).then(function(){throw t})}:n)}}),T(T.S,"Promise",{try:function(t){var n=ln.f(this),r=hn(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}});var Kn=y.Promise,Xn=r(function(t){t.exports={default:Kn,__esModule:!0}}),Yn=n(Xn),qn=n(r(function(t,n){n.__esModule=!0;var r,c=(r=Xn)&&r.__esModule?r:{default:r};n.default=function(t){return function(){var a=t.apply(this,arguments);return new c.default(function(o,u){return function n(t,r){try{var e=a[t](r),i=e.value}catch(t){return void u(t)}if(!e.done)return c.default.resolve(i).then(function(t){n("next",t)},function(t){n("throw",t)});o(i)}("next")})}}})),Hn=r(function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)}),Qn={}.hasOwnProperty,Jn=function(t,n){return Qn.call(t,n)},$n=function(t){try{return!!t()}catch(t){return!0}},Zn=!$n(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),tr=r(function(t){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)}),nr=(tr.version,function(t){return"object"==typeof t?null!==t:"function"==typeof t}),rr=function(t){if(!nr(t))throw TypeError(t+" is not an object!");return t},er=Hn.document,ir=nr(er)&&nr(er.createElement),or=function(t){return ir?er.createElement(t):{}},ur=!Zn&&!$n(function(){return 7!=Object.defineProperty(or("div"),"a",{get:function(){return 7}}).a}),ar=function(t,n){if(!nr(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!nr(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!nr(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!nr(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")},cr=Object.defineProperty,fr={f:Zn?Object.defineProperty:function(t,n,r){if(rr(t),n=ar(n,!0),rr(r),ur)try{return cr(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},sr=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},lr=Zn?function(t,n,r){return fr.f(t,n,sr(1,r))}:function(t,n,r){return t[n]=r,t},hr=0,vr=Math.random(),pr=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++hr+vr).toString(36))},dr=r(function(t){var o=pr("src"),n="toString",r=Function[n],u=(""+r).split(n);tr.inspectSource=function(t){return r.call(t)},(t.exports=function(t,n,r,e){var i="function"==typeof r;i&&(Jn(r,"name")||lr(r,"name",n)),t[n]!==r&&(i&&(Jn(r,o)||lr(r,o,t[n]?""+t[n]:u.join(String(n)))),t===Hn?t[n]=r:e?t[n]?t[n]=r:lr(t,n,r):(delete t[n],lr(t,n,r)))})(Function.prototype,n,function(){return"function"==typeof this&&this[o]||r.call(this)})}),yr=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},gr=function(e,i,t){if(yr(e),void 0===i)return e;switch(t){case 1:return function(t){return e.call(i,t)};case 2:return function(t,n){return e.call(i,t,n)};case 3:return function(t,n,r){return e.call(i,t,n,r)}}return function(){return e.apply(i,arguments)}},mr="prototype",wr=function(t,n,r){var e,i,o,u,a=t&wr.F,c=t&wr.G,f=t&wr.S,s=t&wr.P,l=t&wr.B,h=c?Hn:f?Hn[n]||(Hn[n]={}):(Hn[n]||{})[mr],v=c?tr:tr[n]||(tr[n]={}),p=v[mr]||(v[mr]={});for(e in c&&(r=n),r)o=((i=!a&&h&&void 0!==h[e])?h:r)[e],u=l&&i?gr(o,Hn):s&&"function"==typeof o?gr(Function.call,o):o,h&&dr(h,e,o,t&wr.U),v[e]!=o&&lr(v,e,u),s&&p[e]!=o&&(p[e]=o)};Hn.core=tr,wr.F=1,wr.G=2,wr.S=4,wr.P=8,wr.B=16,wr.W=32,wr.U=64,wr.R=128;var br=wr,_r=r(function(t){var r=pr("meta"),n=fr.f,e=0,i=Object.isExtensible||function(){return!0},o=!$n(function(){return i(Object.preventExtensions({}))}),u=function(t){n(t,r,{value:{i:"O"+ ++e,w:{}}})},a=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!nr(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!Jn(t,r)){if(!i(t))return"F";if(!n)return"E";u(t)}return t[r].i},getWeak:function(t,n){if(!Jn(t,r)){if(!i(t))return!0;if(!n)return!1;u(t)}return t[r].w},onFreeze:function(t){return o&&a.NEED&&i(t)&&!Jn(t,r)&&u(t),t}}}),Sr=(_r.KEY,_r.NEED,_r.fastKey,_r.getWeak,_r.onFreeze,r(function(t){var n="__core-js_shared__",r=Hn[n]||(Hn[n]={});(t.exports=function(t,n){return r[t]||(r[t]=void 0!==n?n:{})})("versions",[]).push({version:tr.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})})),Er=r(function(t){var n=Sr("wks"),r=Hn.Symbol,e="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=e&&r[t]||(e?r:pr)("Symbol."+t))}).store=n}),Or=fr.f,Ar=Er("toStringTag"),Pr=function(t,n,r){t&&!Jn(t=r?t:t.prototype,Ar)&&Or(t,Ar,{configurable:!0,value:n})},xr={f:Er},Mr=fr.f,Fr=function(t){var n=tr.Symbol||(tr.Symbol=Hn.Symbol||{});"_"==t.charAt(0)||t in n||Mr(n,t,{value:xr.f(t)})},jr={}.toString,Ir=function(t){return jr.call(t).slice(8,-1)},Rr=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==Ir(t)?t.split(""):Object(t)},Lr=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},Tr=function(t){return Rr(Lr(t))},Nr=Math.ceil,kr=Math.floor,Cr=function(t){return isNaN(t=+t)?0:(0<t?kr:Nr)(t)},Ur=Math.min,Dr=function(t){return 0<t?Ur(Cr(t),9007199254740991):0},Vr=Math.max,Wr=Math.min,Gr=function(t,n){return(t=Cr(t))<0?Vr(t+n,0):Wr(t,n)},Br=function(a){return function(t,n,r){var e,i=Tr(t),o=Dr(i.length),u=Gr(r,o);if(a&&n!=n){for(;u<o;)if((e=i[u++])!=e)return!0}else for(;u<o;u++)if((a||u in i)&&i[u]===n)return a||u||0;return!a&&-1}},zr=Sr("keys"),Kr=function(t){return zr[t]||(zr[t]=pr(t))},Xr=Br(!1),Yr=Kr("IE_PROTO"),qr=function(t,n){var r,e=Tr(t),i=0,o=[];for(r in e)r!=Yr&&Jn(e,r)&&o.push(r);for(;n.length>i;)Jn(e,r=n[i++])&&(~Xr(o,r)||o.push(r));return o},Hr="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Qr=Object.keys||function(t){return qr(t,Hr)},Jr={f:Object.getOwnPropertySymbols},$r={f:{}.propertyIsEnumerable},Zr=Array.isArray||function(t){return"Array"==Ir(t)},te=Zn?Object.defineProperties:function(t,n){rr(t);for(var r,e=Qr(n),i=e.length,o=0;o<i;)fr.f(t,r=e[o++],n[r]);return t},ne=Hn.document,re=ne&&ne.documentElement,ee=Kr("IE_PROTO"),ie=function(){},oe="prototype",ue=function(){var t,n=or("iframe"),r=Hr.length;for(n.style.display="none",re.appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),ue=t.F;r--;)delete ue[oe][Hr[r]];return ue()},ae=Object.create||function(t,n){var r;return null!==t?(ie[oe]=rr(t),r=new ie,ie[oe]=null,r[ee]=t):r=ue(),void 0===n?r:te(r,n)},ce=Hr.concat("length","prototype"),fe={f:Object.getOwnPropertyNames||function(t){return qr(t,ce)}},se=fe.f,le={}.toString,he="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],ve={f:function(t){return he&&"[object Window]"==le.call(t)?function(t){try{return se(t)}catch(t){return he.slice()}}(t):se(Tr(t))}},pe=Object.getOwnPropertyDescriptor,de={f:Zn?pe:function(t,n){if(t=Tr(t),n=ar(n,!0),ur)try{return pe(t,n)}catch(t){}if(Jn(t,n))return sr(!$r.f.call(t,n),t[n])}},ye=_r.KEY,ge=de.f,me=fr.f,we=ve.f,be=Hn.Symbol,_e=Hn.JSON,Se=_e&&_e.stringify,Ee="prototype",Oe=Er("_hidden"),Ae=Er("toPrimitive"),Pe={}.propertyIsEnumerable,xe=Sr("symbol-registry"),Me=Sr("symbols"),Fe=Sr("op-symbols"),je=Object[Ee],Ie="function"==typeof be,Re=Hn.QObject,Le=!Re||!Re[Ee]||!Re[Ee].findChild,Te=Zn&&$n(function(){return 7!=ae(me({},"a",{get:function(){return me(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=ge(je,n);e&&delete je[n],me(t,n,r),e&&t!==je&&me(je,n,e)}:me,Ne=function(t){var n=Me[t]=ae(be[Ee]);return n._k=t,n},ke=Ie&&"symbol"==typeof be.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof be},Ce=function(t,n,r){return t===je&&Ce(Fe,n,r),rr(t),n=ar(n,!0),rr(r),Jn(Me,n)?(r.enumerable?(Jn(t,Oe)&&t[Oe][n]&&(t[Oe][n]=!1),r=ae(r,{enumerable:sr(0,!1)})):(Jn(t,Oe)||me(t,Oe,sr(1,{})),t[Oe][n]=!0),Te(t,n,r)):me(t,n,r)},Ue=function(t,n){rr(t);for(var r,e=function(t){var n=Qr(t),r=Jr.f;if(r)for(var e,i=r(t),o=$r.f,u=0;i.length>u;)o.call(t,e=i[u++])&&n.push(e);return n}(n=Tr(n)),i=0,o=e.length;i<o;)Ce(t,r=e[i++],n[r]);return t},De=function(t){var n=Pe.call(this,t=ar(t,!0));return!(this===je&&Jn(Me,t)&&!Jn(Fe,t))&&(!(n||!Jn(this,t)||!Jn(Me,t)||Jn(this,Oe)&&this[Oe][t])||n)},Ve=function(t,n){if(t=Tr(t),n=ar(n,!0),t!==je||!Jn(Me,n)||Jn(Fe,n)){var r=ge(t,n);return!r||!Jn(Me,n)||Jn(t,Oe)&&t[Oe][n]||(r.enumerable=!0),r}},We=function(t){for(var n,r=we(Tr(t)),e=[],i=0;r.length>i;)Jn(Me,n=r[i++])||n==Oe||n==ye||e.push(n);return e},Ge=function(t){for(var n,r=t===je,e=we(r?Fe:Tr(t)),i=[],o=0;e.length>o;)!Jn(Me,n=e[o++])||r&&!Jn(je,n)||i.push(Me[n]);return i};Ie||(dr((be=function(){if(this instanceof be)throw TypeError("Symbol is not a constructor!");var n=pr(0<arguments.length?arguments[0]:void 0),r=function(t){this===je&&r.call(Fe,t),Jn(this,Oe)&&Jn(this[Oe],n)&&(this[Oe][n]=!1),Te(this,n,sr(1,t))};return Zn&&Le&&Te(je,n,{configurable:!0,set:r}),Ne(n)})[Ee],"toString",function(){return this._k}),de.f=Ve,fr.f=Ce,fe.f=ve.f=We,$r.f=De,Jr.f=Ge,Zn&&dr(je,"propertyIsEnumerable",De,!0),xr.f=function(t){return Ne(Er(t))}),br(br.G+br.W+br.F*!Ie,{Symbol:be});for(var Be="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ze=0;Be.length>ze;)Er(Be[ze++]);for(var Ke=Qr(Er.store),Xe=0;Ke.length>Xe;)Fr(Ke[Xe++]);br(br.S+br.F*!Ie,"Symbol",{for:function(t){return Jn(xe,t+="")?xe[t]:xe[t]=be(t)},keyFor:function(t){if(!ke(t))throw TypeError(t+" is not a symbol!");for(var n in xe)if(xe[n]===t)return n},useSetter:function(){Le=!0},useSimple:function(){Le=!1}}),br(br.S+br.F*!Ie,"Object",{create:function(t,n){return void 0===n?ae(t):Ue(ae(t),n)},defineProperty:Ce,defineProperties:Ue,getOwnPropertyDescriptor:Ve,getOwnPropertyNames:We,getOwnPropertySymbols:Ge}),_e&&br(br.S+br.F*(!Ie||$n(function(){var t=be();return"[null]"!=Se([t])||"{}"!=Se({a:t})||"{}"!=Se(Object(t))})),"JSON",{stringify:function(t){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);if(r=n=e[1],(nr(n)||void 0!==t)&&!ke(t))return Zr(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!ke(n))return n}),e[1]=n,Se.apply(_e,e)}}),be[Ee][Ae]||lr(be[Ee],Ae,be[Ee].valueOf),Pr(be,"Symbol"),Pr(Math,"Math",!0),Pr(Hn.JSON,"JSON",!0),br(br.S,"Object",{create:ae}),br(br.S+br.F*!Zn,"Object",{defineProperty:fr.f}),br(br.S+br.F*!Zn,"Object",{defineProperties:te});var Ye=function(t,n){var r=(tr.Object||{})[t]||Object[t],e={};e[t]=n(r),br(br.S+br.F*$n(function(){r(1)}),"Object",e)},qe=de.f;Ye("getOwnPropertyDescriptor",function(){return function(t,n){return qe(Tr(t),n)}});var He=function(t){return Object(Lr(t))},Qe=Kr("IE_PROTO"),Je=Object.prototype,$e=Object.getPrototypeOf||function(t){return t=He(t),Jn(t,Qe)?t[Qe]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Je:null};Ye("getPrototypeOf",function(){return function(t){return $e(He(t))}}),Ye("keys",function(){return function(t){return Qr(He(t))}}),Ye("getOwnPropertyNames",function(){return ve.f});var Ze=_r.onFreeze;Ye("freeze",function(n){return function(t){return n&&nr(t)?n(Ze(t)):t}});var ti=_r.onFreeze;Ye("seal",function(n){return function(t){return n&&nr(t)?n(ti(t)):t}});var ni=_r.onFreeze;Ye("preventExtensions",function(n){return function(t){return n&&nr(t)?n(ni(t)):t}}),Ye("isFrozen",function(n){return function(t){return!nr(t)||!!n&&n(t)}}),Ye("isSealed",function(n){return function(t){return!nr(t)||!!n&&n(t)}}),Ye("isExtensible",function(n){return function(t){return!!nr(t)&&(!n||n(t))}});var ri=Object.assign,ei=!ri||$n(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=ri({},t)[r]||Object.keys(ri({},n)).join("")!=e})?function(t,n){for(var r=He(t),e=arguments.length,i=1,o=Jr.f,u=$r.f;i<e;)for(var a,c=Rr(arguments[i++]),f=o?Qr(c).concat(o(c)):Qr(c),s=f.length,l=0;l<s;)u.call(c,a=f[l++])&&(r[a]=c[a]);return r}:ri;br(br.S+br.F,"Object",{assign:ei});var ii=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n};br(br.S,"Object",{is:ii});var oi=function(t,n){if(rr(t),!nr(n)&&null!==n)throw TypeError(n+": can't set as prototype!")},ui={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,e){try{(e=gr(Function.call,de.f(Object.prototype,"__proto__").set,2))(t,[]),r=!(t instanceof Array)}catch(t){r=!0}return function(t,n){return oi(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:oi};br(br.S,"Object",{setPrototypeOf:ui.set});var ai=Er("toStringTag"),ci="Arguments"==Ir(function(){return arguments}()),fi=function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),ai))?r:ci?Ir(n):"Object"==(e=Ir(n))&&"function"==typeof n.callee?"Arguments":e},si={};si[Er("toStringTag")]="z",si+""!="[object z]"&&dr(Object.prototype,"toString",function(){return"[object "+fi(this)+"]"},!0);var li=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)},hi=[].slice,vi={},pi=Function.bind||function(n){var r=yr(this),e=hi.call(arguments,1),i=function(){var t=e.concat(hi.call(arguments));return this instanceof i?function(t,n,r){if(!(n in vi)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";vi[n]=Function("F,a","return new F("+e.join(",")+")")}return vi[n](t,r)}(r,t.length,t):li(r,t,n)};return nr(r.prototype)&&(i.prototype=r.prototype),i};br(br.P,"Function",{bind:pi});var di=fr.f,yi=Function.prototype,gi=/^\s*function ([^ (]*)/;"name"in yi||Zn&&di(yi,"name",{configurable:!0,get:function(){try{return(""+this).match(gi)[1]}catch(t){return""}}});var mi=Er("hasInstance"),wi=Function.prototype;mi in wi||fr.f(wi,mi,{value:function(t){if("function"!=typeof this||!nr(t))return!1;if(!nr(this.prototype))return t instanceof this;for(;t=$e(t);)if(this.prototype===t)return!0;return!1}});var bi="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",_i="["+bi+"]",Si=RegExp("^"+_i+_i+"*"),Ei=RegExp(_i+_i+"*$"),Oi=function(t,n,r){var e={},i=$n(function(){return!!bi[t]()||"​"!="​"[t]()}),o=e[t]=i?n(Ai):bi[t];r&&(e[r]=o),br(br.P+br.F*i,"String",e)},Ai=Oi.trim=function(t,n){return t=String(Lr(t)),1&n&&(t=t.replace(Si,"")),2&n&&(t=t.replace(Ei,"")),t},Pi=Oi,xi=Hn.parseInt,Mi=Pi.trim,Fi=/^[-+]?0[xX]/,ji=8!==xi(bi+"08")||22!==xi(bi+"0x16")?function(t,n){var r=Mi(String(t),3);return xi(r,n>>>0||(Fi.test(r)?16:10))}:xi;br(br.G+br.F*(parseInt!=ji),{parseInt:ji});var Ii=Hn.parseFloat,Ri=Pi.trim,Li=1/Ii(bi+"-0")!=-1/0?function(t){var n=Ri(String(t),3),r=Ii(n);return 0===r&&"-"==n.charAt(0)?-0:r}:Ii;br(br.G+br.F*(parseFloat!=Li),{parseFloat:Li});var Ti=ui.set,Ni=function(t,n,r){var e,i=n.constructor;return i!==r&&"function"==typeof i&&(e=i.prototype)!==r.prototype&&nr(e)&&Ti&&Ti(t,e),t},ki=fe.f,Ci=de.f,Ui=fr.f,Di=Pi.trim,Vi="Number",Wi=Hn[Vi],Gi=Wi,Bi=Wi.prototype,zi=Ir(ae(Bi))==Vi,Ki="trim"in String.prototype,Xi=function(t){var n=ar(t,!1);if("string"==typeof n&&2<n.length){var r,e,i,o=(n=Ki?n.trim():Di(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,a=n.slice(2),c=0,f=a.length;c<f;c++)if((u=a.charCodeAt(c))<48||i<u)return NaN;return parseInt(a,e)}}return+n};if(!Wi(" 0o1")||!Wi("0b1")||Wi("+0x1")){Wi=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof Wi&&(zi?$n(function(){Bi.valueOf.call(r)}):Ir(r)!=Vi)?Ni(new Gi(Xi(n)),r,Wi):Xi(n)};for(var Yi,qi=Zn?ki(Gi):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Hi=0;qi.length>Hi;Hi++)Jn(Gi,Yi=qi[Hi])&&!Jn(Wi,Yi)&&Ui(Wi,Yi,Ci(Gi,Yi));(Wi.prototype=Bi).constructor=Wi,dr(Hn,Vi,Wi)}var Qi=function(t,n){if("number"!=typeof t&&"Number"!=Ir(t))throw TypeError(n);return+t},Ji=function(t){var n=String(Lr(this)),r="",e=Cr(t);if(e<0||e==1/0)throw RangeError("Count can't be negative");for(;0<e;(e>>>=1)&&(n+=n))1&e&&(r+=n);return r},$i=1..toFixed,Zi=Math.floor,to=[0,0,0,0,0,0],no="Number.toFixed: incorrect invocation!",ro=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*to[r],to[r]=e%1e7,e=Zi(e/1e7)},eo=function(t){for(var n=6,r=0;0<=--n;)r+=to[n],to[n]=Zi(r/t),r=r%t*1e7},io=function(){for(var t=6,n="";0<=--t;)if(""!==n||0===t||0!==to[t]){var r=String(to[t]);n=""===n?r:n+Ji.call("0",7-r.length)+r}return n},oo=function(t,n,r){return 0===n?r:n%2==1?oo(t,n-1,r*t):oo(t*t,n/2,r)};br(br.P+br.F*(!!$i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!$n(function(){$i.call({})})),"Number",{toFixed:function(t){var n,r,e,i,o=Qi(this,no),u=Cr(t),a="",c="0";if(u<0||20<u)throw RangeError(no);if(o!=o)return"NaN";if(o<=-1e21||1e21<=o)return String(o);if(o<0&&(a="-",o=-o),1e-21<o)if(r=(n=function(t){for(var n=0,r=t;4096<=r;)n+=12,r/=4096;for(;2<=r;)n+=1,r/=2;return n}(o*oo(2,69,1))-69)<0?o*oo(2,-n,1):o/oo(2,n,1),r*=4503599627370496,0<(n=52-n)){for(ro(0,r),e=u;7<=e;)ro(1e7,0),e-=7;for(ro(oo(10,e,1),0),e=n-1;23<=e;)eo(1<<23),e-=23;eo(1<<e),ro(1,1),eo(2),c=io()}else ro(0,r),ro(1<<-n,0),c=io()+Ji.call("0",u);return c=0<u?a+((i=c.length)<=u?"0."+Ji.call("0",u-i)+c:c.slice(0,i-u)+"."+c.slice(i-u)):a+c}});var uo=1..toPrecision;br(br.P+br.F*($n(function(){return"1"!==uo.call(1,void 0)})||!$n(function(){uo.call({})})),"Number",{toPrecision:function(t){var n=Qi(this,"Number#toPrecision: incorrect invocation!");return void 0===t?uo.call(n):uo.call(n,t)}}),br(br.S,"Number",{EPSILON:Math.pow(2,-52)});var ao=Hn.isFinite;br(br.S,"Number",{isFinite:function(t){return"number"==typeof t&&ao(t)}});var co=Math.floor,fo=function(t){return!nr(t)&&isFinite(t)&&co(t)===t};br(br.S,"Number",{isInteger:fo}),br(br.S,"Number",{isNaN:function(t){return t!=t}});var so=Math.abs;br(br.S,"Number",{isSafeInteger:function(t){return fo(t)&&so(t)<=9007199254740991}}),br(br.S,"Number",{MAX_SAFE_INTEGER:9007199254740991}),br(br.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991}),br(br.S+br.F*(Number.parseFloat!=Li),"Number",{parseFloat:Li}),br(br.S+br.F*(Number.parseInt!=ji),"Number",{parseInt:ji});var lo=Math.log1p||function(t){return-1e-8<(t=+t)&&t<1e-8?t-t*t/2:Math.log(1+t)},ho=Math.sqrt,vo=Math.acosh;br(br.S+br.F*!(vo&&710==Math.floor(vo(Number.MAX_VALUE))&&vo(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:94906265.62425156<t?Math.log(t)+Math.LN2:lo(t-1+ho(t-1)*ho(t+1))}});var po=Math.asinh;br(br.S+br.F*!(po&&0<1/po(0)),"Math",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}});var yo=Math.atanh;br(br.S+br.F*!(yo&&1/yo(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}});var go=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1};br(br.S,"Math",{cbrt:function(t){return go(t=+t)*Math.pow(Math.abs(t),1/3)}}),br(br.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}});var mo=Math.exp;br(br.S,"Math",{cosh:function(t){return(mo(t=+t)+mo(-t))/2}});var wo=Math.expm1,bo=!wo||22025.465794806718<wo(10)||wo(10)<22025.465794806718||-2e-17!=wo(-2e-17)?function(t){return 0==(t=+t)?t:-1e-6<t&&t<1e-6?t+t*t/2:Math.exp(t)-1}:wo;br(br.S+br.F*(bo!=Math.expm1),"Math",{expm1:bo});var _o=Math.pow,So=_o(2,-52),Eo=_o(2,-23),Oo=_o(2,127)*(2-Eo),Ao=_o(2,-126),Po=Math.fround||function(t){var n,r,e=Math.abs(t),i=go(t);return e<Ao?i*(e/Ao/Eo+1/So-1/So)*Ao*Eo:Oo<(r=(n=(1+Eo/So)*e)-(n-e))||r!=r?i*(1/0):i*r};br(br.S,"Math",{fround:Po});var xo=Math.abs;br(br.S,"Math",{hypot:function(t,n){for(var r,e,i=0,o=0,u=arguments.length,a=0;o<u;)a<(r=xo(arguments[o++]))?(i=i*(e=a/r)*e+1,a=r):i+=0<r?(e=r/a)*e:r;return a===1/0?1/0:a*Math.sqrt(i)}});var Mo=Math.imul;br(br.S+br.F*$n(function(){return-5!=Mo(4294967295,5)||2!=Mo.length}),"Math",{imul:function(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}}),br(br.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}}),br(br.S,"Math",{log1p:lo}),br(br.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}}),br(br.S,"Math",{sign:go});var Fo=Math.exp;br(br.S+br.F*$n(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(bo(t)-bo(-t))/2:(Fo(t-1)-Fo(-t-1))*(Math.E/2)}});var jo=Math.exp;br(br.S,"Math",{tanh:function(t){var n=bo(t=+t),r=bo(-t);return n==1/0?1:r==1/0?-1:(n-r)/(jo(t)+jo(-t))}}),br(br.S,"Math",{trunc:function(t){return(0<t?Math.floor:Math.ceil)(t)}});var Io=String.fromCharCode,Ro=String.fromCodePoint;br(br.S+br.F*(!!Ro&&1!=Ro.length),"String",{fromCodePoint:function(t){for(var n,r=[],e=arguments.length,i=0;i<e;){if(n=+arguments[i++],Gr(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?Io(n):Io(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}}),br(br.S,"String",{raw:function(t){for(var n=Tr(t.raw),r=Dr(n.length),e=arguments.length,i=[],o=0;o<r;)i.push(String(n[o++])),o<e&&i.push(String(arguments[o]));return i.join("")}}),Pi("trim",function(t){return function(){return t(this,3)}});var Lo=function(a){return function(t,n){var r,e,i=String(Lr(t)),o=Cr(n),u=i.length;return o<0||u<=o?a?"":void 0:(r=i.charCodeAt(o))<55296||56319<r||o+1===u||(e=i.charCodeAt(o+1))<56320||57343<e?a?i.charAt(o):r:a?i.slice(o,o+2):e-56320+(r-55296<<10)+65536}},To={},No={};lr(No,Er("iterator"),function(){return this});var ko=function(t,n,r){t.prototype=ae(No,{next:sr(1,r)}),Pr(t,n+" Iterator")},Co=Er("iterator"),Uo=!([].keys&&"next"in[].keys()),Do="values",Vo=function(){return this},Wo=function(t,n,r,e,i,o,u){ko(r,n,e);var a,c,f,s=function(t){if(!Uo&&t in p)return p[t];switch(t){case"keys":case Do:return function(){return new r(this,t)}}return function(){return new r(this,t)}},l=n+" Iterator",h=i==Do,v=!1,p=t.prototype,d=p[Co]||p["@@iterator"]||i&&p[i],y=d||s(i),g=i?h?s("entries"):y:void 0,m="Array"==n&&p.entries||d;if(m&&(f=$e(m.call(new t)))!==Object.prototype&&f.next&&(Pr(f,l,!0),"function"!=typeof f[Co]&&lr(f,Co,Vo)),h&&d&&d.name!==Do&&(v=!0,y=function(){return d.call(this)}),(Uo||v||!p[Co])&&lr(p,Co,y),To[n]=y,To[l]=Vo,i)if(a={values:h?y:s(Do),keys:o?y:s("keys"),entries:g},u)for(c in a)c in p||dr(p,c,a[c]);else br(br.P+br.F*(Uo||v),n,a);return a},Go=Lo(!0);Wo(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=Go(n,r),this._i+=t.length,{value:t,done:!1})});var Bo=Lo(!1);br(br.P,"String",{codePointAt:function(t){return Bo(this,t)}});var zo=Er("match"),Ko=function(t){var n;return nr(t)&&(void 0!==(n=t[zo])?!!n:"RegExp"==Ir(t))},Xo=function(t,n,r){if(Ko(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(Lr(t))},Yo=Er("match"),qo=function(n){var r=/./;try{"/./"[n](r)}catch(t){try{return r[Yo]=!1,!"/./"[n](r)}catch(t){}}return!0},Ho="endsWith",Qo=""[Ho];br(br.P+br.F*qo(Ho),"String",{endsWith:function(t){var n=Xo(this,t,Ho),r=1<arguments.length?arguments[1]:void 0,e=Dr(n.length),i=void 0===r?e:Math.min(Dr(r),e),o=String(t);return Qo?Qo.call(n,o,i):n.slice(i-o.length,i)===o}});var Jo="includes";br(br.P+br.F*qo(Jo),"String",{includes:function(t){return!!~Xo(this,t,Jo).indexOf(t,1<arguments.length?arguments[1]:void 0)}}),br(br.P,"String",{repeat:Ji});var $o="startsWith",Zo=""[$o];br(br.P+br.F*qo($o),"String",{startsWith:function(t){var n=Xo(this,t,$o),r=Dr(Math.min(1<arguments.length?arguments[1]:void 0,n.length)),e=String(t);return Zo?Zo.call(n,e,r):n.slice(r,r+e.length)===e}});var tu=/"/g,nu=function(t,n,r,e){var i=String(Lr(t)),o="<"+n;return""!==r&&(o+=" "+r+'="'+String(e).replace(tu,"&quot;")+'"'),o+">"+i+"</"+n+">"},ru=function(n,t){var r={};r[n]=t(nu),br(br.P+br.F*$n(function(){var t=""[n]('"');return t!==t.toLowerCase()||3<t.split('"').length}),"String",r)};ru("anchor",function(n){return function(t){return n(this,"a","name",t)}}),ru("big",function(t){return function(){return t(this,"big","","")}}),ru("blink",function(t){return function(){return t(this,"blink","","")}}),ru("bold",function(t){return function(){return t(this,"b","","")}}),ru("fixed",function(t){return function(){return t(this,"tt","","")}}),ru("fontcolor",function(n){return function(t){return n(this,"font","color",t)}}),ru("fontsize",function(n){return function(t){return n(this,"font","size",t)}}),ru("italics",function(t){return function(){return t(this,"i","","")}}),ru("link",function(n){return function(t){return n(this,"a","href",t)}}),ru("small",function(t){return function(){return t(this,"small","","")}}),ru("strike",function(t){return function(){return t(this,"strike","","")}}),ru("sub",function(t){return function(){return t(this,"sub","","")}}),ru("sup",function(t){return function(){return t(this,"sup","","")}}),br(br.S,"Date",{now:function(){return(new Date).getTime()}}),br(br.P+br.F*$n(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var n=He(this),r=ar(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}});var eu=Date.prototype.getTime,iu=Date.prototype.toISOString,ou=function(t){return 9<t?t:"0"+t},uu=$n(function(){return"0385-07-25T07:06:39.999Z"!=iu.call(new Date(-5e13-1))})||!$n(function(){iu.call(new Date(NaN))})?function(){if(!isFinite(eu.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":9999<n?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+ou(t.getUTCMonth()+1)+"-"+ou(t.getUTCDate())+"T"+ou(t.getUTCHours())+":"+ou(t.getUTCMinutes())+":"+ou(t.getUTCSeconds())+"."+(99<r?r:"0"+ou(r))+"Z"}:iu;br(br.P+br.F*(Date.prototype.toISOString!==uu),"Date",{toISOString:uu});var au=Date.prototype,cu="Invalid Date",fu="toString",su=au[fu],lu=au.getTime;new Date(NaN)+""!=cu&&dr(au,fu,function(){var t=lu.call(this);return t==t?su.call(this):cu});var hu=Er("toPrimitive"),vu=Date.prototype;hu in vu||lr(vu,hu,function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return ar(rr(this),"number"!=t)}),br(br.S,"Array",{isArray:Zr});var pu=function(n,t,r,e){try{return e?t(rr(r)[0],r[1]):t(r)}catch(t){var i=n.return;throw void 0!==i&&rr(i.call(n)),t}},du=Er("iterator"),yu=Array.prototype,gu=function(t){return void 0!==t&&(To.Array===t||yu[du]===t)},mu=function(t,n,r){n in t?fr.f(t,n,sr(0,r)):t[n]=r},wu=Er("iterator"),bu=tr.getIteratorMethod=function(t){if(null!=t)return t[wu]||t["@@iterator"]||To[fi(t)]},_u=Er("iterator"),Su=!1;try{[7][_u]().return=function(){Su=!0}}catch(t){}var Eu=function(t,n){if(!n&&!Su)return!1;var r=!1;try{var e=[7],i=e[_u]();i.next=function(){return{done:r=!0}},e[_u]=function(){return i},t(e)}catch(t){}return r};br(br.S+br.F*!Eu(function(t){}),"Array",{from:function(t){var n,r,e,i,o=He(t),u="function"==typeof this?this:Array,a=arguments.length,c=1<a?arguments[1]:void 0,f=void 0!==c,s=0,l=bu(o);if(f&&(c=gr(c,2<a?arguments[2]:void 0,2)),null==l||u==Array&&gu(l))for(r=new u(n=Dr(o.length));s<n;s++)mu(r,s,f?c(o[s],s):o[s]);else for(i=l.call(o),r=new u;!(e=i.next()).done;s++)mu(r,s,f?pu(i,c,[e.value,s],!0):e.value);return r.length=s,r}}),br(br.S+br.F*$n(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);t<n;)mu(r,t,arguments[t++]);return r.length=n,r}});var Ou=function(t,n){return!!t&&$n(function(){n?t.call(null,function(){},1):t.call(null)})},Au=[].join;br(br.P+br.F*(Rr!=Object||!Ou(Au)),"Array",{join:function(t){return Au.call(Tr(this),void 0===t?",":t)}});var Pu=[].slice;br(br.P+br.F*$n(function(){re&&Pu.call(re)}),"Array",{slice:function(t,n){var r=Dr(this.length),e=Ir(this);if(n=void 0===n?r:n,"Array"==e)return Pu.call(this,t,n);for(var i=Gr(t,r),o=Gr(n,r),u=Dr(o-i),a=new Array(u),c=0;c<u;c++)a[c]="String"==e?this.charAt(i+c):this[i+c];return a}});var xu=[].sort,Mu=[1,2,3];br(br.P+br.F*($n(function(){Mu.sort(void 0)})||!$n(function(){Mu.sort(null)})||!Ou(xu)),"Array",{sort:function(t){return void 0===t?xu.call(He(this)):xu.call(He(this),yr(t))}});var Fu=Er("species"),ju=function(t,n){return Zr(r=t)&&("function"!=typeof(e=r.constructor)||e!==Array&&!Zr(e.prototype)||(e=void 0),nr(e)&&null===(e=e[Fu])&&(e=void 0)),new(void 0===e?Array:e)(n);var r,e},Iu=function(l,t){var h=1==l,v=2==l,p=3==l,d=4==l,y=6==l,g=5==l||y,m=t||ju;return function(t,n,r){for(var e,i,o=He(t),u=Rr(o),a=gr(n,r,3),c=Dr(u.length),f=0,s=h?m(t,c):v?m(t,0):void 0;f<c;f++)if((g||f in u)&&(i=a(e=u[f],f,o),l))if(h)s[f]=i;else if(i)switch(l){case 3:return!0;case 5:return e;case 6:return f;case 2:s.push(e)}else if(d)return!1;return y?-1:p||d?d:s}},Ru=Iu(0),Lu=Ou([].forEach,!0);br(br.P+br.F*!Lu,"Array",{forEach:function(t){return Ru(this,t,arguments[1])}});var Tu=Iu(1);br(br.P+br.F*!Ou([].map,!0),"Array",{map:function(t){return Tu(this,t,arguments[1])}});var Nu=Iu(2);br(br.P+br.F*!Ou([].filter,!0),"Array",{filter:function(t){return Nu(this,t,arguments[1])}});var ku=Iu(3);br(br.P+br.F*!Ou([].some,!0),"Array",{some:function(t){return ku(this,t,arguments[1])}});var Cu=Iu(4);br(br.P+br.F*!Ou([].every,!0),"Array",{every:function(t){return Cu(this,t,arguments[1])}});var Uu=function(t,n,r,e,i){yr(n);var o=He(t),u=Rr(o),a=Dr(o.length),c=i?a-1:0,f=i?-1:1;if(r<2)for(;;){if(c in u){e=u[c],c+=f;break}if(c+=f,i?c<0:a<=c)throw TypeError("Reduce of empty array with no initial value")}for(;i?0<=c:c<a;c+=f)c in u&&(e=n(e,u[c],c,o));return e};br(br.P+br.F*!Ou([].reduce,!0),"Array",{reduce:function(t){return Uu(this,t,arguments.length,arguments[1],!1)}}),br(br.P+br.F*!Ou([].reduceRight,!0),"Array",{reduceRight:function(t){return Uu(this,t,arguments.length,arguments[1],!0)}});var Du=Br(!1),Vu=[].indexOf,Wu=!!Vu&&1/[1].indexOf(1,-0)<0;br(br.P+br.F*(Wu||!Ou(Vu)),"Array",{indexOf:function(t){return Wu?Vu.apply(this,arguments)||0:Du(this,t,arguments[1])}});var Gu=[].lastIndexOf,Bu=!!Gu&&1/[1].lastIndexOf(1,-0)<0;br(br.P+br.F*(Bu||!Ou(Gu)),"Array",{lastIndexOf:function(t){if(Bu)return Gu.apply(this,arguments)||0;var n=Tr(this),r=Dr(n.length),e=r-1;for(1<arguments.length&&(e=Math.min(e,Cr(arguments[1]))),e<0&&(e=r+e);0<=e;e--)if(e in n&&n[e]===t)return e||0;return-1}});var zu=[].copyWithin||function(t,n){var r=He(this),e=Dr(r.length),i=Gr(t,e),o=Gr(n,e),u=2<arguments.length?arguments[2]:void 0,a=Math.min((void 0===u?e:Gr(u,e))-o,e-i),c=1;for(o<i&&i<o+a&&(c=-1,o+=a-1,i+=a-1);0<a--;)o in r?r[i]=r[o]:delete r[i],i+=c,o+=c;return r},Ku=Er("unscopables"),Xu=Array.prototype;null==Xu[Ku]&&lr(Xu,Ku,{});var Yu=function(t){Xu[Ku][t]=!0};br(br.P,"Array",{copyWithin:zu}),Yu("copyWithin");var qu=function(t){for(var n=He(this),r=Dr(n.length),e=arguments.length,i=Gr(1<e?arguments[1]:void 0,r),o=2<e?arguments[2]:void 0,u=void 0===o?r:Gr(o,r);i<u;)n[i++]=t;return n};br(br.P,"Array",{fill:qu}),Yu("fill");var Hu=Iu(5),Qu="find",Ju=!0;Qu in[]&&Array(1)[Qu](function(){Ju=!1}),br(br.P+br.F*Ju,"Array",{find:function(t){return Hu(this,t,1<arguments.length?arguments[1]:void 0)}}),Yu(Qu);var $u=Iu(6),Zu="findIndex",ta=!0;Zu in[]&&Array(1)[Zu](function(){ta=!1}),br(br.P+br.F*ta,"Array",{findIndex:function(t){return $u(this,t,1<arguments.length?arguments[1]:void 0)}}),Yu(Zu);var na=Er("species"),ra=function(t){var n=Hn[t];Zn&&n&&!n[na]&&fr.f(n,na,{configurable:!0,get:function(){return this}})};ra("Array");var ea=function(t,n){return{value:n,done:!!t}},ia=Wo(Array,"Array",function(t,n){this._t=Tr(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,ea(1)):ea(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values");To.Arguments=To.Array,Yu("keys"),Yu("values"),Yu("entries");var oa=function(){var t=rr(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n},ua=fr.f,aa=fe.f,ca=Hn.RegExp,fa=ca,sa=ca.prototype,la=/a/g,ha=/a/g,va=new ca(la)!==la;if(Zn&&(!va||$n(function(){return ha[Er("match")]=!1,ca(la)!=la||ca(ha)==ha||"/a/i"!=ca(la,"i")}))){ca=function(t,n){var r=this instanceof ca,e=Ko(t),i=void 0===n;return!r&&e&&t.constructor===ca&&i?t:Ni(va?new fa(e&&!i?t.source:t,n):fa((e=t instanceof ca)?t.source:t,e&&i?oa.call(t):n),r?this:sa,ca)};for(var pa=function(n){n in ca||ua(ca,n,{configurable:!0,get:function(){return fa[n]},set:function(t){fa[n]=t}})},da=aa(fa),ya=0;da.length>ya;)pa(da[ya++]);(sa.constructor=ca).prototype=sa,dr(Hn,"RegExp",ca)}ra("RegExp"),Zn&&"g"!=/./g.flags&&fr.f(RegExp.prototype,"flags",{configurable:!0,get:oa});var ga="toString",ma=/./[ga],wa=function(t){dr(RegExp.prototype,ga,t,!0)};$n(function(){return"/a/b"!=ma.call({source:"a",flags:"b"})})?wa(function(){var t=rr(this);return"/".concat(t.source,"/","flags"in t?t.flags:!Zn&&t instanceof RegExp?oa.call(t):void 0)}):ma.name!=ga&&wa(function(){return ma.call(this)});var ba=function(n,t,r){var e=Er(n),i=r(Lr,e,""[n]),o=i[0],u=i[1];$n(function(){var t={};return t[e]=function(){return 7},7!=""[n](t)})&&(dr(String.prototype,n,o),lr(RegExp.prototype,e,2==t?function(t,n){return u.call(t,this,n)}:function(t){return u.call(t,this)}))};ba("match",1,function(e,i,t){return[function(t){var n=e(this),r=null==t?void 0:t[i];return void 0!==r?r.call(t,n):new RegExp(t)[i](String(n))},t]}),ba("replace",2,function(i,o,u){return[function(t,n){var r=i(this),e=null==t?void 0:t[o];return void 0!==e?e.call(t,r,n):u.call(String(r),t,n)},u]}),ba("search",1,function(e,i,t){return[function(t){var n=e(this),r=null==t?void 0:t[i];return void 0!==r?r.call(t,n):new RegExp(t)[i](String(n))},t]}),ba("split",2,function(i,o,u){var v=Ko,p=u,d=[].push,t="split",y="length",g="lastIndex";if("c"=="abbc"[t](/(b)*/)[1]||4!="test"[t](/(?:)/,-1)[y]||2!="ab"[t](/(?:ab)*/)[y]||4!="."[t](/(.?)(.?)/)[y]||1<"."[t](/()()/)[y]||""[t](/.?/)[y]){var m=void 0===/()??/.exec("")[1];u=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!v(t))return p.call(r,t,n);var e,i,o,u,a,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),s=0,l=void 0===n?4294967295:n>>>0,h=new RegExp(t.source,f+"g");for(m||(e=new RegExp("^"+h.source+"$(?!\\s)",f));(i=h.exec(r))&&!(s<(o=i.index+i[0][y])&&(c.push(r.slice(s,i.index)),!m&&1<i[y]&&i[0].replace(e,function(){for(a=1;a<arguments[y]-2;a++)void 0===arguments[a]&&(i[a]=void 0)}),1<i[y]&&i.index<r[y]&&d.apply(c,i.slice(1)),u=i[0][y],s=o,c[y]>=l));)h[g]===i.index&&h[g]++;return s===r[y]?!u&&h.test("")||c.push(""):c.push(r.slice(s)),c[y]>l?c.slice(0,l):c}}else"0"[t](void 0,0)[y]&&(u=function(t,n){return void 0===t&&0===n?[]:p.call(this,t,n)});return[function(t,n){var r=i(this),e=null==t?void 0:t[o];return void 0!==e?e.call(t,r,n):u.call(String(r),t,n)},u]});var _a,Sa,Ea,Oa=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t},Aa=r(function(t){var h={},v={},n=t.exports=function(t,n,r,e,i){var o,u,a,c,f=i?function(){return t}:bu(t),s=gr(r,e,n?2:1),l=0;if("function"!=typeof f)throw TypeError(t+" is not iterable!");if(gu(f)){for(o=Dr(t.length);l<o;l++)if((c=n?s(rr(u=t[l])[0],u[1]):s(t[l]))===h||c===v)return c}else for(a=f.call(t);!(u=a.next()).done;)if((c=pu(a,s,u.value,n))===h||c===v)return c};n.BREAK=h,n.RETURN=v}),Pa=Er("species"),xa=function(t,n){var r,e=rr(t).constructor;return void 0===e||null==(r=rr(e)[Pa])?n:yr(r)},Ma=Hn.process,Fa=Hn.setImmediate,ja=Hn.clearImmediate,Ia=Hn.MessageChannel,Ra=Hn.Dispatch,La=0,Ta={},Na="onreadystatechange",ka=function(){var t=+this;if(Ta.hasOwnProperty(t)){var n=Ta[t];delete Ta[t],n()}},Ca=function(t){ka.call(t.data)};Fa&&ja||(Fa=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return Ta[++La]=function(){li("function"==typeof t?t:Function(t),n)},_a(La),La},ja=function(t){delete Ta[t]},"process"==Ir(Ma)?_a=function(t){Ma.nextTick(gr(ka,t,1))}:Ra&&Ra.now?_a=function(t){Ra.now(gr(ka,t,1))}:Ia?(Ea=(Sa=new Ia).port2,Sa.port1.onmessage=Ca,_a=gr(Ea.postMessage,Ea,1)):Hn.addEventListener&&"function"==typeof postMessage&&!Hn.importScripts?(_a=function(t){Hn.postMessage(t+"","*")},Hn.addEventListener("message",Ca,!1)):_a=Na in or("script")?function(t){re.appendChild(or("script"))[Na]=function(){re.removeChild(this),ka.call(t)}}:function(t){setTimeout(gr(ka,t,1),0)});var Ua={set:Fa,clear:ja},Da=Ua.set,Va=Hn.MutationObserver||Hn.WebKitMutationObserver,Wa=Hn.process,Ga=Hn.Promise,Ba="process"==Ir(Wa);function za(t){var r,e;this.promise=new t(function(t,n){if(void 0!==r||void 0!==e)throw TypeError("Bad Promise constructor");r=t,e=n}),this.resolve=yr(r),this.reject=yr(e)}var Ka,Xa,Ya,qa,Ha={f:function(t){return new za(t)}},Qa=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}},Ja=Hn.navigator,$a=Ja&&Ja.userAgent||"",Za=function(t,n){if(rr(t),nr(n)&&n.constructor===t)return n;var r=Ha.f(t);return(0,r.resolve)(n),r.promise},tc=function(t,n,r){for(var e in n)dr(t,e,n[e],r);return t},nc=Ua.set,rc=function(){var r,e,i,t=function(){var t,n;for(Ba&&(t=Wa.domain)&&t.exit();r;){n=r.fn,r=r.next;try{n()}catch(t){throw r?i():e=void 0,t}}e=void 0,t&&t.enter()};if(Ba)i=function(){Wa.nextTick(t)};else if(!Va||Hn.navigator&&Hn.navigator.standalone)if(Ga&&Ga.resolve){var n=Ga.resolve(void 0);i=function(){n.then(t)}}else i=function(){Da.call(Hn,t)};else{var o=!0,u=document.createTextNode("");new Va(t).observe(u,{characterData:!0}),i=function(){u.data=o=!o}}return function(t){var n={fn:t,next:void 0};e&&(e.next=n),r||(r=n,i()),e=n}}(),ec="Promise",ic=Hn.TypeError,oc=Hn.process,uc=oc&&oc.versions,ac=uc&&uc.v8||"",cc=Hn[ec],fc="process"==fi(oc),sc=function(){},lc=Xa=Ha.f,hc=!!function(){try{var t=cc.resolve(1),n=(t.constructor={})[Er("species")]=function(t){t(sc,sc)};return(fc||"function"==typeof PromiseRejectionEvent)&&t.then(sc)instanceof n&&0!==ac.indexOf("6.6")&&-1===$a.indexOf("Chrome/66")}catch(t){}}(),vc=function(t){var n;return!(!nr(t)||"function"!=typeof(n=t.then))&&n},pc=function(s,r){if(!s._n){s._n=!0;var e=s._c;rc(function(){for(var c=s._v,f=1==s._s,t=0,n=function(t){var n,r,e,i=f?t.ok:t.fail,o=t.resolve,u=t.reject,a=t.domain;try{i?(f||(2==s._h&&gc(s),s._h=1),!0===i?n=c:(a&&a.enter(),n=i(c),a&&(a.exit(),e=!0)),n===t.promise?u(ic("Promise-chain cycle")):(r=vc(n))?r.call(n,o,u):o(n)):u(c)}catch(t){a&&!e&&a.exit(),u(t)}};e.length>t;)n(e[t++]);s._c=[],s._n=!1,r&&!s._h&&dc(s)})}},dc=function(o){nc.call(Hn,function(){var t,n,r,e=o._v,i=yc(o);if(i&&(t=Qa(function(){fc?oc.emit("unhandledRejection",e,o):(n=Hn.onunhandledrejection)?n({promise:o,reason:e}):(r=Hn.console)&&r.error&&r.error("Unhandled promise rejection",e)}),o._h=fc||yc(o)?2:1),o._a=void 0,i&&t.e)throw t.v})},yc=function(t){return 1!==t._h&&0===(t._a||t._c).length},gc=function(n){nc.call(Hn,function(){var t;fc?oc.emit("rejectionHandled",n):(t=Hn.onrejectionhandled)&&t({promise:n,reason:n._v})})},mc=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),pc(n,!0))},wc=function(t){var r,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw ic("Promise can't be resolved itself");(r=vc(t))?rc(function(){var n={_w:e,_d:!1};try{r.call(t,gr(wc,n,1),gr(mc,n,1))}catch(t){mc.call(n,t)}}):(e._v=t,e._s=1,pc(e,!1))}catch(t){mc.call({_w:e,_d:!1},t)}}};hc||(cc=function(t){Oa(this,cc,ec,"_h"),yr(t),Ka.call(this);try{t(gr(wc,this,1),gr(mc,this,1))}catch(t){mc.call(this,t)}},(Ka=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=tc(cc.prototype,{then:function(t,n){var r=lc(xa(this,cc));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=fc?oc.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&pc(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),Ya=function(){var t=new Ka;this.promise=t,this.resolve=gr(wc,t,1),this.reject=gr(mc,t,1)},Ha.f=lc=function(t){return t===cc||t===qa?new Ya(t):Xa(t)}),br(br.G+br.W+br.F*!hc,{Promise:cc}),Pr(cc,ec),ra(ec),qa=tr[ec],br(br.S+br.F*!hc,ec,{reject:function(t){var n=lc(this);return(0,n.reject)(t),n.promise}}),br(br.S+br.F*!hc,ec,{resolve:function(t){return Za(this,t)}}),br(br.S+br.F*!(hc&&Eu(function(t){cc.all(t).catch(sc)})),ec,{all:function(t){var u=this,n=lc(u),a=n.resolve,c=n.reject,r=Qa(function(){var e=[],i=0,o=1;Aa(t,!1,function(t){var n=i++,r=!1;e.push(void 0),o++,u.resolve(t).then(function(t){r||(r=!0,e[n]=t,--o||a(e))},c)}),--o||a(e)});return r.e&&c(r.v),n.promise},race:function(t){var n=this,r=lc(n),e=r.reject,i=Qa(function(){Aa(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}});var bc=function(t,n){if(!nr(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t},_c=fr.f,Sc=_r.fastKey,Ec=Zn?"_s":"size",Oc=function(t,n){var r,e=Sc(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r},Ac={getConstructor:function(t,o,r,e){var i=t(function(t,n){Oa(t,i,o,"_i"),t._t=o,t._i=ae(null),t._f=void 0,t._l=void 0,t[Ec]=0,null!=n&&Aa(n,r,t[e],t)});return tc(i.prototype,{clear:function(){for(var t=bc(this,o),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[Ec]=0},delete:function(t){var n=bc(this,o),r=Oc(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[Ec]--}return!!r},forEach:function(t){bc(this,o);for(var n,r=gr(t,1<arguments.length?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!Oc(bc(this,o),t)}}),Zn&&_c(i.prototype,"size",{get:function(){return bc(this,o)[Ec]}}),i},def:function(t,n,r){var e,i,o=Oc(t,n);return o?o.v=r:(t._l=o={i:i=Sc(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[Ec]++,"F"!==i&&(t._i[i]=o)),t},getEntry:Oc,setStrong:function(t,r,n){Wo(t,r,function(t,n){this._t=bc(t,r),this._k=n,this._l=void 0},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?ea(0,"keys"==n?r.k:"values"==n?r.v:[r.k,r.v]):(t._t=void 0,ea(1))},n?"entries":"values",!n,!0),ra(r)}},Pc=function(e,t,n,r,i,o){var u=Hn[e],a=u,c=i?"set":"add",f=a&&a.prototype,s={},l=function(t){var r=f[t];dr(f,t,"delete"==t?function(t){return!(o&&!nr(t))&&r.call(this,0===t?0:t)}:"has"==t?function(t){return!(o&&!nr(t))&&r.call(this,0===t?0:t)}:"get"==t?function(t){return o&&!nr(t)?void 0:r.call(this,0===t?0:t)}:"add"==t?function(t){return r.call(this,0===t?0:t),this}:function(t,n){return r.call(this,0===t?0:t,n),this})};if("function"==typeof a&&(o||f.forEach&&!$n(function(){(new a).entries().next()}))){var h=new a,v=h[c](o?{}:-0,1)!=h,p=$n(function(){h.has(1)}),d=Eu(function(t){new a(t)}),y=!o&&$n(function(){for(var t=new a,n=5;n--;)t[c](n,n);return!t.has(-0)});d||(((a=t(function(t,n){Oa(t,a,e);var r=Ni(new u,t,a);return null!=n&&Aa(n,i,r[c],r),r})).prototype=f).constructor=a),(p||y)&&(l("delete"),l("has"),i&&l("get")),(y||v)&&l(c),o&&f.clear&&delete f.clear}else a=r.getConstructor(t,e,i,c),tc(a.prototype,n),_r.NEED=!0;return Pr(a,e),s[e]=a,br(br.G+br.W+br.F*(a!=u),s),o||r.setStrong(a,e,i),a},xc=(Pc("Map",function(t){return function(){return t(this,0<arguments.length?arguments[0]:void 0)}},{get:function(t){var n=Ac.getEntry(bc(this,"Map"),t);return n&&n.v},set:function(t,n){return Ac.def(bc(this,"Map"),0===t?0:t,n)}},Ac,!0),Pc("Set",function(t){return function(){return t(this,0<arguments.length?arguments[0]:void 0)}},{add:function(t){return Ac.def(bc(this,"Set"),t=0===t?0:t,t)}},Ac),_r.getWeak),Mc=Iu(5),Fc=Iu(6),jc=0,Ic=function(t){return t._l||(t._l=new Rc)},Rc=function(){this.a=[]},Lc=function(t,n){return Mc(t.a,function(t){return t[0]===n})};Rc.prototype={get:function(t){var n=Lc(this,t);if(n)return n[1]},has:function(t){return!!Lc(this,t)},set:function(t,n){var r=Lc(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(n){var t=Fc(this.a,function(t){return t[0]===n});return~t&&this.a.splice(t,1),!!~t}};var Tc={getConstructor:function(t,r,e,i){var o=t(function(t,n){Oa(t,o,r,"_i"),t._t=r,t._i=jc++,t._l=void 0,null!=n&&Aa(n,e,t[i],t)});return tc(o.prototype,{delete:function(t){if(!nr(t))return!1;var n=xc(t);return!0===n?Ic(bc(this,r)).delete(t):n&&Jn(n,this._i)&&delete n[this._i]},has:function(t){if(!nr(t))return!1;var n=xc(t);return!0===n?Ic(bc(this,r)).has(t):n&&Jn(n,this._i)}}),o},def:function(t,n,r){var e=xc(rr(n),!0);return!0===e?Ic(t).set(n,r):e[t._i]=r,t},ufstore:Ic},Nc=(r(function(t){var o,n=Iu(0),r="WeakMap",e=_r.getWeak,u=Object.isExtensible,i=Tc.ufstore,a={},c=function(t){return function(){return t(this,0<arguments.length?arguments[0]:void 0)}},f={get:function(t){if(nr(t)){var n=e(t);return!0===n?i(bc(this,r)).get(t):n?n[this._i]:void 0}},set:function(t,n){return Tc.def(bc(this,r),t,n)}},s=t.exports=Pc(r,c,f,Tc,!0,!0);$n(function(){return 7!=(new s).set((Object.freeze||Object)(a),7).get(a)})&&(o=Tc.getConstructor(c,r),ei(o.prototype,f),_r.NEED=!0,n(["delete","has","get","set"],function(e){var t=s.prototype,i=t[e];dr(t,e,function(t,n){if(nr(t)&&!u(t)){this._f||(this._f=new o);var r=this._f[e](t,n);return"set"==e?this:r}return i.call(this,t,n)})}))}),"WeakSet");Pc(Nc,function(t){return function(){return t(this,0<arguments.length?arguments[0]:void 0)}},{add:function(t){return Tc.def(bc(this,Nc),t,!0)}},Tc,!1,!0);for(var kc,Cc=pr("typed_array"),Uc=pr("view"),Dc=!(!Hn.ArrayBuffer||!Hn.DataView),Vc=Dc,Wc=0,Gc="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");Wc<9;)(kc=Hn[Gc[Wc++]])?(lr(kc.prototype,Cc,!0),lr(kc.prototype,Uc,!0)):Vc=!1;var Bc={ABV:Dc,CONSTR:Vc,TYPED:Cc,VIEW:Uc},zc=function(t){if(void 0===t)return 0;var n=Cr(t),r=Dr(n);if(n!==r)throw RangeError("Wrong length!");return r},Kc=r(function(t,n){var r=fe.f,e=fr.f,i="ArrayBuffer",o="DataView",u="prototype",l="Wrong index!",a=Hn[i],c=Hn[o],f=Hn.Math,h=Hn.RangeError,v=Hn.Infinity,s=a,p=f.abs,d=f.pow,y=f.floor,g=f.log,m=f.LN2,w="byteLength",b="byteOffset",_=Zn?"_b":"buffer",S=Zn?"_l":w,E=Zn?"_o":b;function O(t,n,r){var e,i,o,u=new Array(r),a=8*r-n-1,c=(1<<a)-1,f=c>>1,s=23===n?d(2,-24)-d(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=p(t))!=t||t===v?(i=t!=t?1:0,e=c):(e=y(g(t)/m),t*(o=d(2,-e))<1&&(e--,o*=2),2<=(t+=1<=e+f?s/o:s*d(2,1-f))*o&&(e++,o/=2),c<=e+f?(i=0,e=c):1<=e+f?(i=(t*o-1)*d(2,n),e+=f):(i=t*d(2,f-1)*d(2,n),e=0));8<=n;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,a+=n;0<a;u[l++]=255&e,e/=256,a-=8);return u[--l]|=128*h,u}function A(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,a=i-7,c=r-1,f=t[c--],s=127&f;for(f>>=7;0<a;s=256*s+t[c],c--,a-=8);for(e=s&(1<<-a)-1,s>>=-a,a+=n;0<a;e=256*e+t[c],c--,a-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-v:v;e+=d(2,n),s-=u}return(f?-1:1)*e*d(2,s-n)}function P(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function x(t){return[255&t]}function M(t){return[255&t,t>>8&255]}function F(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function j(t){return O(t,52,8)}function I(t){return O(t,23,4)}function R(t,n,r){e(t[u],n,{get:function(){return this[r]}})}function L(t,n,r,e){var i=zc(+r);if(i+n>t[S])throw h(l);var o=t[_]._b,u=i+t[E],a=o.slice(u,u+n);return e?a:a.reverse()}function T(t,n,r,e,i,o){var u=zc(+r);if(u+n>t[S])throw h(l);for(var a=t[_]._b,c=u+t[E],f=e(+i),s=0;s<n;s++)a[c+s]=f[o?s:n-s-1]}if(Bc.ABV){if(!$n(function(){a(1)})||!$n(function(){new a(-1)})||$n(function(){return new a,new a(1.5),new a(NaN),a.name!=i})){for(var N,k=(a=function(t){return Oa(this,a),new s(zc(t))})[u]=s[u],C=r(s),U=0;C.length>U;)(N=C[U++])in a||lr(a,N,s[N]);k.constructor=a}var D=new c(new a(2)),V=c[u].setInt8;D.setInt8(0,2147483648),D.setInt8(1,2147483649),!D.getInt8(0)&&D.getInt8(1)||tc(c[u],{setInt8:function(t,n){V.call(this,t,n<<24>>24)},setUint8:function(t,n){V.call(this,t,n<<24>>24)}},!0)}else a=function(t){Oa(this,a,i);var n=zc(t);this._b=qu.call(new Array(n),0),this[S]=n},c=function(t,n,r){Oa(this,c,o),Oa(t,a,o);var e=t[S],i=Cr(n);if(i<0||e<i)throw h("Wrong offset!");if(e<i+(r=void 0===r?e-i:Dr(r)))throw h("Wrong length!");this[_]=t,this[E]=i,this[S]=r},Zn&&(R(a,w,"_l"),R(c,"buffer","_b"),R(c,w,"_l"),R(c,b,"_o")),tc(c[u],{getInt8:function(t){return L(this,1,t)[0]<<24>>24},getUint8:function(t){return L(this,1,t)[0]},getInt16:function(t){var n=L(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=L(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return P(L(this,4,t,arguments[1]))},getUint32:function(t){return P(L(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return A(L(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return A(L(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){T(this,1,t,x,n)},setUint8:function(t,n){T(this,1,t,x,n)},setInt16:function(t,n){T(this,2,t,M,n,arguments[2])},setUint16:function(t,n){T(this,2,t,M,n,arguments[2])},setInt32:function(t,n){T(this,4,t,F,n,arguments[2])},setUint32:function(t,n){T(this,4,t,F,n,arguments[2])},setFloat32:function(t,n){T(this,4,t,I,n,arguments[2])},setFloat64:function(t,n){T(this,8,t,j,n,arguments[2])}});Pr(a,i),Pr(c,o),lr(c[u],Bc.VIEW,!0),n[i]=a,n[o]=c}),Xc=Hn.ArrayBuffer,Yc=Kc.ArrayBuffer,qc=Kc.DataView,Hc=Bc.ABV&&Xc.isView,Qc=Yc.prototype.slice,Jc=Bc.VIEW,$c="ArrayBuffer";br(br.G+br.W+br.F*(Xc!==Yc),{ArrayBuffer:Yc}),br(br.S+br.F*!Bc.CONSTR,$c,{isView:function(t){return Hc&&Hc(t)||nr(t)&&Jc in t}}),br(br.P+br.U+br.F*$n(function(){return!new Yc(2).slice(1,void 0).byteLength}),$c,{slice:function(t,n){if(void 0!==Qc&&void 0===n)return Qc.call(rr(this),t);for(var r=rr(this).byteLength,e=Gr(t,r),i=Gr(void 0===n?r:n,r),o=new(xa(this,Yc))(Dr(i-e)),u=new qc(this),a=new qc(o),c=0;e<i;)a.setUint8(c++,u.getUint8(e++));return o}}),ra($c),br(br.G+br.W+br.F*!Bc.ABV,{DataView:Kc.DataView});var Zc=r(function(t){if(Zn){var g=Hn,m=$n,w=br,b=Bc,n=Kc,h=gr,_=Oa,r=sr,S=lr,e=tc,i=Cr,E=Dr,O=zc,o=Gr,u=ar,a=Jn,A=fi,P=nr,v=He,p=gu,x=ae,M=$e,F=fe.f,d=bu,c=pr,f=Er,s=Iu,l=Br,y=xa,j=ia,I=To,R=Eu,L=ra,T=qu,N=zu,k=fr,C=de,U=k.f,D=C.f,V=g.RangeError,W=g.TypeError,G=g.Uint8Array,B="ArrayBuffer",z="Shared"+B,K="BYTES_PER_ELEMENT",X="prototype",Y=Array[X],q=n.ArrayBuffer,H=n.DataView,Q=s(0),J=s(2),$=s(3),Z=s(4),tt=s(5),nt=s(6),rt=l(!0),et=l(!1),it=j.values,ot=j.keys,ut=j.entries,at=Y.lastIndexOf,ct=Y.reduce,ft=Y.reduceRight,st=Y.join,lt=Y.sort,ht=Y.slice,vt=Y.toString,pt=Y.toLocaleString,dt=f("iterator"),yt=f("toStringTag"),gt=c("typed_constructor"),mt=c("def_constructor"),wt=b.CONSTR,bt=b.TYPED,_t=b.VIEW,St="Wrong length!",Et=s(1,function(t,n){return Mt(y(t,t[mt]),n)}),Ot=m(function(){return 1===new G(new Uint16Array([1]).buffer)[0]}),At=!!G&&!!G[X].set&&m(function(){new G(1).set({})}),Pt=function(t,n){var r=i(t);if(r<0||r%n)throw V("Wrong offset!");return r},xt=function(t){if(P(t)&&bt in t)return t;throw W(t+" is not a typed array!")},Mt=function(t,n){if(!(P(t)&&gt in t))throw W("It is not a typed array constructor!");return new t(n)},Ft=function(t,n){return jt(y(t,t[mt]),n)},jt=function(t,n){for(var r=0,e=n.length,i=Mt(t,e);r<e;)i[r]=n[r++];return i},It=function(t,n,r){U(t,n,{get:function(){return this._d[r]}})},Rt=function(t){var n,r,e,i,o,u,a=v(t),c=arguments.length,f=1<c?arguments[1]:void 0,s=void 0!==f,l=d(a);if(null!=l&&!p(l)){for(u=l.call(a),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);a=e}for(s&&2<c&&(f=h(f,arguments[2],2)),n=0,r=E(a.length),i=Mt(this,r);n<r;n++)i[n]=s?f(a[n],n):a[n];return i},Lt=function(){for(var t=0,n=arguments.length,r=Mt(this,n);t<n;)r[t]=arguments[t++];return r},Tt=!!G&&m(function(){pt.call(new G(1))}),Nt=function(){return pt.apply(Tt?ht.call(xt(this)):xt(this),arguments)},kt={copyWithin:function(t,n){return N.call(xt(this),t,n,2<arguments.length?arguments[2]:void 0)},every:function(t){return Z(xt(this),t,1<arguments.length?arguments[1]:void 0)},fill:function(t){return T.apply(xt(this),arguments)},filter:function(t){return Ft(this,J(xt(this),t,1<arguments.length?arguments[1]:void 0))},find:function(t){return tt(xt(this),t,1<arguments.length?arguments[1]:void 0)},findIndex:function(t){return nt(xt(this),t,1<arguments.length?arguments[1]:void 0)},forEach:function(t){Q(xt(this),t,1<arguments.length?arguments[1]:void 0)},indexOf:function(t){return et(xt(this),t,1<arguments.length?arguments[1]:void 0)},includes:function(t){return rt(xt(this),t,1<arguments.length?arguments[1]:void 0)},join:function(t){return st.apply(xt(this),arguments)},lastIndexOf:function(t){return at.apply(xt(this),arguments)},map:function(t){return Et(xt(this),t,1<arguments.length?arguments[1]:void 0)},reduce:function(t){return ct.apply(xt(this),arguments)},reduceRight:function(t){return ft.apply(xt(this),arguments)},reverse:function(){for(var t,n=this,r=xt(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function(t){return $(xt(this),t,1<arguments.length?arguments[1]:void 0)},sort:function(t){return lt.call(xt(this),t)},subarray:function(t,n){var r=xt(this),e=r.length,i=o(t,e);return new(y(r,r[mt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,E((void 0===n?e:o(n,e))-i))}},Ct=function(t,n){return Ft(this,ht.call(xt(this),t,n))},Ut=function(t){xt(this);var n=Pt(arguments[1],1),r=this.length,e=v(t),i=E(e.length),o=0;if(r<i+n)throw V(St);for(;o<i;)this[n+o]=e[o++]},Dt={entries:function(){return ut.call(xt(this))},keys:function(){return ot.call(xt(this))},values:function(){return it.call(xt(this))}},Vt=function(t,n){return P(t)&&t[bt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Wt=function(t,n){return Vt(t,n=u(n,!0))?r(2,t[n]):D(t,n)},Gt=function(t,n,r){return!(Vt(t,n=u(n,!0))&&P(r)&&a(r,"value"))||a(r,"get")||a(r,"set")||r.configurable||a(r,"writable")&&!r.writable||a(r,"enumerable")&&!r.enumerable?U(t,n,r):(t[n]=r.value,t)};wt||(C.f=Wt,k.f=Gt),w(w.S+w.F*!wt,"Object",{getOwnPropertyDescriptor:Wt,defineProperty:Gt}),m(function(){vt.call({})})&&(vt=pt=function(){return st.call(this)});var Bt=e({},kt);e(Bt,Dt),S(Bt,dt,Dt.values),e(Bt,{slice:Ct,set:Ut,constructor:function(){},toString:vt,toLocaleString:Nt}),It(Bt,"buffer","b"),It(Bt,"byteOffset","o"),It(Bt,"byteLength","l"),It(Bt,"length","e"),U(Bt,yt,{get:function(){return this[bt]}}),t.exports=function(t,l,n,o){var h=t+((o=!!o)?"Clamped":"")+"Array",r="get"+t,u="set"+t,v=g[h],a=v||{},e=v&&M(v),i=!v||!b.ABV,c={},f=v&&v[X],p=function(t,i){U(t,i,{get:function(){return t=i,(n=this._d).v[r](t*l+n.o,Ot);var t,n},set:function(t){return n=i,r=t,e=this._d,o&&(r=(r=Math.round(r))<0?0:255<r?255:255&r),void e.v[u](n*l+e.o,r,Ot);var n,r,e},enumerable:!0})};i?(v=n(function(t,n,r,e){_(t,v,h,"_d");var i,o,u,a,c=0,f=0;if(P(n)){if(!(n instanceof q||(a=A(n))==B||a==z))return bt in n?jt(v,n):Rt.call(v,n);i=n,f=Pt(r,l);var s=n.byteLength;if(void 0===e){if(s%l)throw V(St);if((o=s-f)<0)throw V(St)}else if(s<(o=E(e)*l)+f)throw V(St);u=o/l}else u=O(n),i=new q(o=u*l);for(S(t,"_d",{b:i,o:f,l:o,e:u,v:new H(i)});c<u;)p(t,c++)}),f=v[X]=x(Bt),S(f,"constructor",v)):m(function(){v(1)})&&m(function(){new v(-1)})&&R(function(t){new v,new v(null),new v(1.5),new v(t)},!0)||(v=n(function(t,n,r,e){var i;return _(t,v,h),P(n)?n instanceof q||(i=A(n))==B||i==z?void 0!==e?new a(n,Pt(r,l),e):void 0!==r?new a(n,Pt(r,l)):new a(n):bt in n?jt(v,n):Rt.call(v,n):new a(O(n))}),Q(e!==Function.prototype?F(a).concat(F(e)):F(a),function(t){t in v||S(v,t,a[t])}),(v[X]=f).constructor=v);var s=f[dt],d=!!s&&("values"==s.name||null==s.name),y=Dt.values;S(v,gt,!0),S(f,bt,h),S(f,_t,!0),S(f,mt,v),(o?new v(1)[yt]==h:yt in f)||U(f,yt,{get:function(){return h}}),c[h]=v,w(w.G+w.W+w.F*(v!=a),c),w(w.S,h,{BYTES_PER_ELEMENT:l}),w(w.S+w.F*m(function(){a.of.call(v,1)}),h,{from:Rt,of:Lt}),K in f||S(f,K,l),w(w.P,h,kt),L(h),w(w.P+w.F*At,h,{set:Ut}),w(w.P+w.F*!d,h,Dt),f.toString!=vt&&(f.toString=vt),w(w.P+w.F*m(function(){new v(1).slice()}),h,{slice:Ct}),w(w.P+w.F*(m(function(){return[1,2].toLocaleString()!=new v([1,2]).toLocaleString()})||!m(function(){f.toLocaleString.call([1,2])})),h,{toLocaleString:Nt}),I[h]=d?s:y,d||S(f,dt,y)}}else t.exports=function(){}});Zc("Int8",1,function(e){return function(t,n,r){return e(this,t,n,r)}}),Zc("Uint8",1,function(e){return function(t,n,r){return e(this,t,n,r)}}),Zc("Uint8",1,function(e){return function(t,n,r){return e(this,t,n,r)}},!0),Zc("Int16",2,function(e){return function(t,n,r){return e(this,t,n,r)}}),Zc("Uint16",2,function(e){return function(t,n,r){return e(this,t,n,r)}}),Zc("Int32",4,function(e){return function(t,n,r){return e(this,t,n,r)}}),Zc("Uint32",4,function(e){return function(t,n,r){return e(this,t,n,r)}}),Zc("Float32",4,function(e){return function(t,n,r){return e(this,t,n,r)}}),Zc("Float64",8,function(e){return function(t,n,r){return e(this,t,n,r)}});var tf=(Hn.Reflect||{}).apply,nf=Function.apply;br(br.S+br.F*!$n(function(){tf(function(){})}),"Reflect",{apply:function(t,n,r){var e=yr(t),i=rr(r);return tf?tf(e,n,i):nf.call(e,n,i)}});var rf=(Hn.Reflect||{}).construct,ef=$n(function(){function t(){}return!(rf(function(){},[],t)instanceof t)}),of=!$n(function(){rf(function(){})});br(br.S+br.F*(ef||of),"Reflect",{construct:function(t,n){yr(t),rr(n);var r=arguments.length<3?t:yr(arguments[2]);if(of&&!ef)return rf(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(pi.apply(t,e))}var i=r.prototype,o=ae(nr(i)?i:Object.prototype),u=Function.apply.call(t,o,n);return nr(u)?u:o}}),br(br.S+br.F*$n(function(){Reflect.defineProperty(fr.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,n,r){rr(t),n=ar(n,!0),rr(r);try{return fr.f(t,n,r),!0}catch(t){return!1}}});var uf=de.f;br(br.S,"Reflect",{deleteProperty:function(t,n){var r=uf(rr(t),n);return!(r&&!r.configurable)&&delete t[n]}});var af=function(t){this._t=rr(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};ko(af,"Object",function(){var t,n=this._k;do{if(this._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),br(br.S,"Reflect",{enumerate:function(t){return new af(t)}}),br(br.S,"Reflect",{get:function t(n,r){var e,i,o=arguments.length<3?n:arguments[2];return rr(n)===o?n[r]:(e=de.f(n,r))?Jn(e,"value")?e.value:void 0!==e.get?e.get.call(o):void 0:nr(i=$e(n))?t(i,r,o):void 0}}),br(br.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return de.f(rr(t),n)}}),br(br.S,"Reflect",{getPrototypeOf:function(t){return $e(rr(t))}}),br(br.S,"Reflect",{has:function(t,n){return n in t}});var cf=Object.isExtensible;br(br.S,"Reflect",{isExtensible:function(t){return rr(t),!cf||cf(t)}});var ff=Hn.Reflect,sf=ff&&ff.ownKeys||function(t){var n=fe.f(rr(t)),r=Jr.f;return r?n.concat(r(t)):n};br(br.S,"Reflect",{ownKeys:sf});var lf=Object.preventExtensions;br(br.S,"Reflect",{preventExtensions:function(t){rr(t);try{return lf&&lf(t),!0}catch(t){return!1}}}),br(br.S,"Reflect",{set:function t(n,r,e){var i,o,u=arguments.length<4?n:arguments[3],a=de.f(rr(n),r);if(!a){if(nr(o=$e(n)))return t(o,r,e,u);a=sr(0)}if(Jn(a,"value")){if(!1===a.writable||!nr(u))return!1;if(i=de.f(u,r)){if(i.get||i.set||!1===i.writable)return!1;i.value=e,fr.f(u,r,i)}else fr.f(u,r,sr(0,e));return!0}return void 0!==a.set&&(a.set.call(u,e),!0)}}),ui&&br(br.S,"Reflect",{setPrototypeOf:function(t,n){ui.check(t,n);try{return ui.set(t,n),!0}catch(t){return!1}}});var hf=Br(!0);br(br.P,"Array",{includes:function(t){return hf(this,t,1<arguments.length?arguments[1]:void 0)}}),Yu("includes");tr.Array.includes;var vf=function(t,n,r,e){var i=String(Lr(t)),o=i.length,u=void 0===r?" ":String(r),a=Dr(n);if(a<=o||""==u)return i;var c=a-o,f=Ji.call(u,Math.ceil(c/u.length));return f.length>c&&(f=f.slice(0,c)),e?f+i:i+f};br(br.P+br.F*/Version\/10\.\d+(\.\d+)? Safari\//.test($a),"String",{padStart:function(t){return vf(this,t,1<arguments.length?arguments[1]:void 0,!0)}});tr.String.padStart;br(br.P+br.F*/Version\/10\.\d+(\.\d+)? Safari\//.test($a),"String",{padEnd:function(t){return vf(this,t,1<arguments.length?arguments[1]:void 0,!1)}});tr.String.padEnd;Fr("asyncIterator");xr.f("asyncIterator");br(br.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,r,e=Tr(t),i=de.f,o=sf(e),u={},a=0;o.length>a;)void 0!==(r=i(e,n=o[a++]))&&mu(u,n,r);return u}});tr.Object.getOwnPropertyDescriptors;var pf=$r.f,df=function(a){return function(t){for(var n,r=Tr(t),e=Qr(r),i=e.length,o=0,u=[];o<i;)pf.call(r,n=e[o++])&&u.push(a?[n,r[n]]:r[n]);return u}},yf=df(!1);br(br.S,"Object",{values:function(t){return yf(t)}});tr.Object.values;var gf=df(!0);br(br.S,"Object",{entries:function(t){return gf(t)}});tr.Object.entries;br(br.P+br.R,"Promise",{finally:function(n){var r=xa(this,tr.Promise||Hn.Promise),t="function"==typeof n;return this.then(t?function(t){return Za(r,n()).then(function(){return t})}:n,t?function(t){return Za(r,n()).then(function(){throw t})}:n)}});tr.Promise.finally;var mf=[].slice,wf=/MSIE .\./.test($a),bf=function(i){return function(t,n){var r=2<arguments.length,e=!!r&&mf.call(arguments,2);return i(r?function(){("function"==typeof t?t:Function(t)).apply(this,e)}:t,n)}};br(br.G+br.B+br.F*wf,{setTimeout:bf(Hn.setTimeout),setInterval:bf(Hn.setInterval)}),br(br.G+br.B,{setImmediate:Ua.set,clearImmediate:Ua.clear});for(var _f=Er("iterator"),Sf=Er("toStringTag"),Ef=To.Array,Of={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Af=Qr(Of),Pf=0;Pf<Af.length;Pf++){var xf,Mf=Af[Pf],Ff=Of[Mf],jf=Hn[Mf],If=jf&&jf.prototype;if(If&&(If[_f]||lr(If,_f,Ef),If[Sf]||lr(If,Sf,Mf),To[Mf]=Ef,Ff))for(xf in ia)If[xf]||dr(If,xf,ia[xf],!0)}function Rf(){return new RegExp("v1.0/shopify-xr.en.js$")}t._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),t._babelPolyfill=!0;var Lf,Tf="//d2wy8f7a9ursnm.cloudfront.net/v5/bugsnag.min.js",Nf="a51246d2a1f718541183be260c6215bd",kf=(Lf=qn(c.mark(function t(){var n;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!Df){t.next=2;break}return t.abrupt("return",Df);case 2:return t.next=4,new Yn(function(t,n){if(window.bugsnag)t(window.bugsnag);else{var r=document.createElement("script");r.onload=function(){window.bugsnag||n(new Error("No window.bugsnag after bugsnag was loaded")),t(window.bugsnag)},r.onerror=function(){document.head.removeChild(r),n(new Error("Failed to load bugsnag"))},r.setAttribute("src",Tf),document.head.appendChild(r)}});case 4:return n=t.sent,Df=n({apiKey:Nf,consoleBreadcrumbsEnabled:!1,beforeSend:Cf}),t.abrupt("return",Df);case 7:case"end":return t.stop()}},t,this)})),function(){return Lf.apply(this,arguments)});function Cf(t){if(0===t.stacktrace.length)return!1;t.updateMetaData("debugStacktrace",{files:t.stacktrace.map(function(t){return t.file}),filter:Rf().toString()}),t.app.version="1.0.1";var n=t.stacktrace.filter(function(t){return!/native code/.test(t.file)});return 0!==n.length&&!!Rf().test(n[0].file)}var Uf,Df=void 0,Vf={client:null,initialize:(Uf=qn(c.mark(function t(){return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,kf();case 2:this.client=t.sent;case 3:case"end":return t.stop()}},t,this)})),function(){return Uf.apply(this,arguments)}),notify:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"error";if(null===this.client)throw new Error("Client not initialized before notify");this.client.notify(t,{severity:n})}},Wf=function(t,n,r){n in t?P.f(t,n,x(0,r)):t[n]=r};T(T.S+T.F*!An(function(t){}),"Array",{from:function(t){var n,r,e,i,o=dt(t),u="function"==typeof this?this:Array,a=arguments.length,c=1<a?arguments[1]:void 0,f=void 0!==c,s=0,l=Bt(o);if(f&&(c=g(c,2<a?arguments[2]:void 0,2)),null==l||u==Array&&Wt(l))for(r=new u(n=G(o.length));s<n;s++)Wf(r,s,f?c(o[s],s):o[s]);else for(i=l.call(o),r=new u;!(e=i.next()).done;s++)Wf(r,s,f?Ut(i,c,[e.value,s],!0):e.value);return r.length=s,r}});var Gf=y.Array.from,Bf=r(function(t){t.exports={default:Gf,__esModule:!0}}),zf=n(Bf),Kf=n(r(function(t,n){n.__esModule=!0;var r,e=(r=Bf)&&r.__esModule?r:{default:r};n.default=function(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return(0,e.default)(t)}})),Xf={f:Object.getOwnPropertySymbols},Yf={f:{}.propertyIsEnumerable},qf=Object.assign,Hf=!qf||w(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=qf({},t)[r]||Object.keys(qf({},n)).join("")!=e})?function(t,n){for(var r=dt(t),e=arguments.length,i=1,o=Xf.f,u=Yf.f;i<e;)for(var a,c=D(arguments[i++]),f=o?tt(c).concat(o(c)):tt(c),s=f.length,l=0;l<s;)u.call(c,a=f[l++])&&(r[a]=c[a]);return r}:qf;T(T.S+T.F,"Object",{assign:Hf});var Qf=y.Object.assign,Jf=n(r(function(t){t.exports={default:Qf,__esModule:!0}})),$f=n(r(function(t,n){n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}}));T(T.S+T.F*!b,"Object",{defineProperty:P.f});var Zf=y.Object,ts=function(t,n,r){return Zf.defineProperty(t,n,r)},ns=r(function(t){t.exports={default:ts,__esModule:!0}});n(ns);var rs=n(r(function(t,n){n.__esModule=!0;var r,i=(r=ns)&&r.__esModule?r:{default:r};n.default=function(){function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),(0,i.default)(t,e.key,e)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()})),es="shopify_xr_launch",is="shopify_xr_loadstart",os="shopify_xr_loadend",us="shopify_xr_enabled",as="data-shopify-xr-hidden",cs={SCENE_VIEWER:"scene_viewer",AR_QUICKLOOK:"ar_quicklook",NOT_SUPPORTED:"not_supported"},fs=void 0;!function(r){var t,n=r.URLSearchParams?r.URLSearchParams:null,e=n&&"a=1"===new n({a:1}).toString(),i=n&&"+"===new n("s=%2B").get("s"),u="__URLSearchParams__",o=!n||((t=new n).append("s"," &"),"s=+%26"===t.toString()),a=l.prototype,c=!(!r.Symbol||!r.Symbol.iterator);if(!(n&&e&&i&&o)){a.append=function(t,n){y(this[u],t,n)},a.delete=function(t){delete this[u][t]},a.get=function(t){var n=this[u];return t in n?n[t][0]:null},a.getAll=function(t){var n=this[u];return t in n?n[t].slice(0):[]},a.has=function(t){return t in this[u]},a.set=function(t,n){this[u][t]=[""+n]},a.toString=function(){var t,n,r,e,i=this[u],o=[];for(n in i)for(r=h(n),t=0,e=i[n];t<e.length;t++)o.push(r+"="+h(e[t]));return o.join("&")};var f=!!i&&n&&!e&&r.Proxy;r.URLSearchParams=f?new Proxy(n,{construct:function(t,n){return new t(new l(n[0]).toString())}}):l;var s=r.URLSearchParams.prototype;s.polyfill=!0,s.forEach=s.forEach||function(r,e){var t=d(this.toString());Object.getOwnPropertyNames(t).forEach(function(n){t[n].forEach(function(t){r.call(e,t,n,this)},this)},this)},s.sort=s.sort||function(){var t,n,r,e=d(this.toString()),i=[];for(t in e)i.push(t);for(i.sort(),n=0;n<i.length;n++)this.delete(i[n]);for(n=0;n<i.length;n++){var o=i[n],u=e[o];for(r=0;r<u.length;r++)this.append(o,u[r])}},s.keys=s.keys||function(){var r=[];return this.forEach(function(t,n){r.push(n)}),p(r)},s.values=s.values||function(){var n=[];return this.forEach(function(t){n.push(t)}),p(n)},s.entries=s.entries||function(){var r=[];return this.forEach(function(t,n){r.push([n,t])}),p(r)},c&&(s[r.Symbol.iterator]=s[r.Symbol.iterator]||s.entries)}function l(t){((t=t||"")instanceof URLSearchParams||t instanceof l)&&(t=t.toString()),this[u]=d(t)}function h(t){var n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g,function(t){return n[t]})}function v(t){return decodeURIComponent(t.replace(/\+/g," "))}function p(n){var t={next:function(){var t=n.shift();return{done:void 0===t,value:t}}};return c&&(t[r.Symbol.iterator]=function(){return t}),t}function d(t){var n={};if("object"==typeof t)for(var r in t)t.hasOwnProperty(r)&&y(n,r,t[r]);else{0===t.indexOf("?")&&(t=t.slice(1));for(var e=t.split("&"),i=0;i<e.length;i++){var o=e[i],u=o.indexOf("=");-1<u?y(n,v(o.slice(0,u)),v(o.slice(u+1))):o&&y(n,v(o),"")}}return n}function y(t,n,r){var e="string"==typeof r?r:null!=r&&"function"==typeof r.toString?r.toString():JSON.stringify(r);n in t?t[n].push(e):t[n]=[e]}}(void 0!==t?t:"undefined"!=typeof window?window:t);var ss="debug-xr",ls={AR_QUICKLOOK:"arql",SCENE_VIEWER:"sv"};function hs(t){var n,r,e,i,o=(n=new URLSearchParams(window.location.search).get(ss))===ls.AR_QUICKLOOK?cs.AR_QUICKLOOK:n===ls.SCENE_VIEWER?cs.SCENE_VIEWER:null;return null!==o?o:(e=/Version\/(1[3-9\._]+).*Safari.*/.test((r=t).userAgent)&&(/iPad|iPhone|iPod/.test(r.userAgent)||"MacIntel"===r.platform&&1<r.maxTouchPoints),i=/(CPU OS|iPhone OS) 1[3-9]_.*CriOS\//.test(r.userAgent)&&(/iPad|iPhone|iPod/.test(r.userAgent)||"MacIntel"===r.platform&&1<r.maxTouchPoints),(e||i)&&function(){if(void 0===fs){var t=document.createElement("a");fs=Boolean(t.relList&&t.relList.supports&&t.relList.supports("ar"))}return fs}()?cs.AR_QUICKLOOK:/Android ([7-9]|1[0-9])/.test(t.userAgent)?cs.SCENE_VIEWER:cs.NOT_SUPPORTED)}var vs=function(){function c(t,n){var r=t.model3dId,e=t.glbUrl,i=t.usdzUrl,o=t.title,u=t.element;if($f(this,c),r){var a=n.get(r);Jf(this,a)}i&&(this.usdzUrl=i),e&&(this.glbUrl=e),this.title=o||null,this.element=u||null,this.xrMode=hs(navigator)}return rs(c,null,[{key:"fromElement",value:function(t,n){return new c({model3dId:t.getAttribute("data-shopify-model3d-id"),usdzUrl:t.getAttribute("data-shopify-usdz-url"),glbUrl:t.getAttribute("data-shopify-glb-url"),title:t.getAttribute("data-shopify-title"),element:t},n)}}]),rs(c,[{key:"hasXRModelAvailable",value:function(){var t=this.usdzUrl,n=this.glbUrl,r=this.xrMode;return!(r!==cs.AR_QUICKLOOK||!t||""===t)||!(r!==cs.SCENE_VIEWER||!n||""===n)}},{key:"createXREvent",value:function(){var t=this.title,n=this.xrMode,r={title:t,xrMode:n,element:this.element};switch(n){case cs.AR_QUICKLOOK:r.srcUrl=this.usdzUrl;break;case cs.SCENE_VIEWER:r.srcUrl=this.glbUrl;break;default:r.srcUrl=null}return new CustomEvent(es,{detail:r})}}]),c}(),ps="[data-shopify-xr]";function ds(t,i,n){if(t.removeAttribute(as),t.style&&t.style.removeProperty("display"),!n.includes(t)){t.addEventListener("click",function(t){return n=i,r=t.currentTarget,void((e=vs.fromElement(r,n)).hasXRModelAvailable()&&document.dispatchEvent(e.createXREvent()));var n,r,e}),n.push(t);var r=new CustomEvent(us,{detail:{element:t}});document.dispatchEvent(r)}}function ys(n,r){[].concat(Kf(document.querySelectorAll(ps))).forEach(function(t){vs.fromElement(t,n).hasXRModelAvailable()&&ds(t,n,r)})}function gs(r,t){return{setModels:function(t){this.addModels(t),console.warn("ShopifyXR: setModels will be deprecated in a future release. Use addModels instead.")},addModels:function(t){r.add(t)},launchXR:function(t){var n=new vs(t,r);document.dispatchEvent(n.createXREvent())},setupXRElements:function(){ys(r,t)},getEnabledElements:function(){return t}}}function ms(t,n){var r="ShopifyXR",e=new gs(t,n);if(!0===window.hasOwnProperty(r)){var i=window.ShopifyXR.q;i&&0<i.length&&function(t,n){for(var r=t.shift();r;){var e=zf(r);n[e.shift()].apply(n,Kf(e)),r=t.shift()}}(i,e)}window[r]=e}var ws="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";function bs(t){var n,r,e=(n=document.createElement("a"),r=document.createElement("img"),n.setAttribute("rel","ar"),r.setAttribute("src",ws),r.style.width="100%",r.style.height="100%",n.appendChild(r),n);e.href=t.detail.srcUrl,e.click()}var _s=ft("iterator"),Ss=y.isIterable=function(t){var n=Object(t);return void 0!==n[_s]||"@@iterator"in n||k.hasOwnProperty(Ct(n))},Es=r(function(t){t.exports={default:Ss,__esModule:!0}});n(Es);var Os=y.getIterator=function(t){var n=Bt(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return m(n.call(t))},As=r(function(t){t.exports={default:Os,__esModule:!0}});n(As);var Ps=n(r(function(t,n){n.__esModule=!0;var r=e(Es),c=e(As);function e(t){return t&&t.__esModule?t:{default:t}}n.default=function(t,n){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,n){var r=[],e=!0,i=!1,o=void 0;try{for(var u,a=(0,c.default)(t);!(e=(u=a.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){i=!0,o=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw o}}return r}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})),xs="shopify-xr-no-ar-fallback",Ms=!1;function Fs(t){if("undefined"!=typeof Shopify&&Shopify.designMode)alert("This functionality is not available in the theme editor on your device.");else{var n=t.detail,r=n.srcUrl,e=n.title,i=r.replace("https://",""),o=window.location.href,u=o.split("#"),a=Ps(u,2),c=["intent://"+i+"?link="+o+"&title="+e,"#Intent;","scheme=https;","package=com.google.ar.core;","action=android.intent.action.VIEW;","S.browser_fallback_url="+[a[0],(a[1]||"")+xs].join(encodeURIComponent("#"))+";","end"].join(""),f=document.createElement("a");f.href=c,f.click(),Ms=!0}}function js(){location.hash.includes(xs)&&Ms&&(alert("This functionality is not available on your device."),location.hash=location.hash.replace(xs,""),Ms=!1)}var Is=null;function Rs(n,t){Is||(Is=setTimeout(function(){var t=new CustomEvent(os,{detail:n});document.dispatchEvent(t),clearTimeout(Is),Is=null},t))}var Ls=5e3;function Ts(){var t,n=hs(navigator),i=(t=n)===cs.AR_QUICKLOOK?bs:t===cs.SCENE_VIEWER?Fs:null;i&&(document.addEventListener(es,function(t){var n,r,e;n=t,r=i,e=new CustomEvent(is,{detail:n.detail}),document.dispatchEvent(e),r(n),Rs(n.detail,Ls)},{passive:!0}),n===cs.SCENE_VIEWER&&window.addEventListener("hashchange",js))}var Ns=new function(){var r={};function e(t){var n=t.sources.filter(function(t){return"usdz"===t.format}),r=t.sources.filter(function(t){return"glb"===t.format});return{usdzUrl:0<n.length?n[0].url:null,glbUrl:0<r.length?r[0].url:null}}return{extractModelUrls:e,add:function(t){t.forEach(function(t){var n=t.id;r[n]=e(t)})},get:function(t){return r[t]||null}}},ks=[];qn(c.mark(function t(){var n,r;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Vf.initialize();case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),t.t0;case 8:Ts(),ms(Ns,ks),ys(Ns,ks),n=hs(navigator),r=n!==cs.NOT_SUPPORTED,document.dispatchEvent(new CustomEvent("shopify_xr_initialized",{detail:{shopifyXREnabled:r}}));case 14:case"end":return t.stop()}},t,this,[[0,5]])}))()}();
!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(e){return null!=e?e.constructor:null},l=function(e,t){return Boolean(e&&t&&e instanceof t)},c=function(e){return a(e)===Object},u=function(e){return a(e)===String},d=function(e){return l(e,NodeList)},f=function(e){return Array.isArray(e)},h=function(e){return null==e},m={string:u,nodeList:d,array:f,nullOrUndefined:h,element:function(e){return l(e,Element) || l(e,window.top.Element)},object:c,boolean:function(e){return a(e)===Boolean},empty:function(e){return h(e)||(u(e)||f(e)||d(e))&&!e.length||c(e)&&!Object.keys(e).length},jqueryObject:function(e){return window.jQuery&&e instanceof jQuery}},p=function(){function t(){e(this,t),this.cache=[]}return n(t,[{key:"cacheInstance",value:function(e){this.cache.push({viewer:e.viewer,instance:e})}},{key:"getCachedInstance",value:function(e){var t=this.cache.find((function(t){var n=t.viewer;return e===n}));return t?t.instance:null}},{key:"removeFromCache",value:function(e){var t=this.cache.find((function(t){var n=t.viewer;return e===n}));if(!t)return null;var n=this.cache.indexOf(t);return this.cache.splice(n,1)[0]}}]),t}();function v(e,t,n){var i=document.createElement(e);return m.object(t)&&function(e,t){m.element(e)&&!m.empty(t)&&Object.entries(t).filter((function(e){var t=s(e,2)[1];return!m.nullOrUndefined(t)})).forEach((function(t){var n=s(t,2),i=n[0],o=n[1];return e.setAttribute(i,o)}))}(i,t),m.string(n)&&(i.innerText=n),i}function y(e){m.nodeList(e)||m.array(e)?Array.from(e).forEach(y):m.element(e)&&m.element(e.parentNode)&&e.parentNode.removeChild(e)}function g(e,t){if(m.element(e)){var n=t;m.boolean(n)||(n=!e.hidden),e.hidden=n}}function b(e,t,n){if(m.nodeList(e))return Array.from(e).map((function(e){return b(e,t,n)}));if(m.element(e)){var i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}var w={config:{controls:["zoom-in","zoom-out","fullscreen"],iconUrl:"https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/".concat("v1.0/sprites.svg"),focusOnPlay:!0}};"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var T=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){e.exports=function(){var e=Object.freeze||function(e){return e},t=e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),n=e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),i=e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),o=e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),r=e(["#text"]),s=Object.freeze||function(e){return e},a=s(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","minlength","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),l=s(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),c=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),u=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),d=Object.hasOwnProperty,f=Object.setPrototypeOf,h=("undefined"!=typeof Reflect&&Reflect).apply;function m(e,t){f&&f(e,null);for(var n=t.length;n--;){var i=t[n];if("string"==typeof i){var o=i.toLowerCase();o!==i&&(Object.isFrozen(t)||(t[n]=o),i=o)}e[i]=!0}return e}function p(e){var t={},n=void 0;for(n in e)h(d,e,[n])&&(t[n]=e[n]);return t}h||(h=function(e,t,n){return e.apply(t,n)});var v=Object.seal||function(e){return e},y=v(/\{\{[\s\S]*|[\s\S]*\}\}/gm),g=v(/<%[\s\S]*|[\s\S]*%>/gm),b=v(/^data-[\-\w.\u00B7-\uFFFF]/),w=v(/^aria-[\-\w]+$/),T=v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),L=v(/^(?:\w+script|data):/i),E=v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function k(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var S=("undefined"!=typeof Reflect&&Reflect).apply,O=Array.prototype.slice,x=Object.freeze,_=function(){return"undefined"==typeof window?null:window};S||(S=function(e,t,n){return e.apply(t,n)});var M=function(e,t){if("object"!==(void 0===e?"undefined":A(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};return function e(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_(),d=function(t){return e(t)};if(d.version="2.0.7",d.removed=[],!s||!s.document||9!==s.document.nodeType)return d.isSupported=!1,d;var f=s.document,h=!1,v=!1,C=s.document,N=s.DocumentFragment,F=s.HTMLTemplateElement,P=s.Node,D=s.NodeFilter,z=s.NamedNodeMap,R=void 0===z?s.NamedNodeMap||s.MozNamedAttrMap:z,j=s.Text,I=s.Comment,B=s.DOMParser,U=s.TrustedTypes;if("function"==typeof F){var H=C.createElement("template");H.content&&H.content.ownerDocument&&(C=H.content.ownerDocument)}var V=M(U,f),q=V?V.createHTML(""):"",Z=C,W=Z.implementation,G=Z.createNodeIterator,Y=Z.getElementsByTagName,X=Z.createDocumentFragment,K=f.importNode,Q={};d.isSupported=W&&void 0!==W.createHTMLDocument&&9!==C.documentMode;var J=y,$=g,ee=b,te=w,ne=L,ie=E,oe=T,re=null,se=m({},[].concat(k(t),k(n),k(i),k(o),k(r))),ae=null,le=m({},[].concat(k(a),k(l),k(c),k(u))),ce=null,ue=null,de=!0,fe=!0,he=!1,me=!1,pe=!1,ve=!1,ye=!1,ge=!1,be=!1,we=!1,Te=!1,Le=!1,Ee=!0,Ae=!0,ke=!1,Se={},Oe=m({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),xe=m({},["audio","video","img","source","image"]),_e=null,Me=m({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ce=null,Ne=C.createElement("form"),Fe=function(e){Ce&&Ce===e||(e&&"object"===(void 0===e?"undefined":A(e))||(e={}),re="ALLOWED_TAGS"in e?m({},e.ALLOWED_TAGS):se,ae="ALLOWED_ATTR"in e?m({},e.ALLOWED_ATTR):le,_e="ADD_URI_SAFE_ATTR"in e?m(p(Me),e.ADD_URI_SAFE_ATTR):Me,ce="FORBID_TAGS"in e?m({},e.FORBID_TAGS):{},ue="FORBID_ATTR"in e?m({},e.FORBID_ATTR):{},Se="USE_PROFILES"in e&&e.USE_PROFILES,de=!1!==e.ALLOW_ARIA_ATTR,fe=!1!==e.ALLOW_DATA_ATTR,he=e.ALLOW_UNKNOWN_PROTOCOLS||!1,me=e.SAFE_FOR_JQUERY||!1,pe=e.SAFE_FOR_TEMPLATES||!1,ve=e.WHOLE_DOCUMENT||!1,be=e.RETURN_DOM||!1,we=e.RETURN_DOM_FRAGMENT||!1,Te=e.RETURN_DOM_IMPORT||!1,Le=e.RETURN_TRUSTED_TYPE||!1,ge=e.FORCE_BODY||!1,Ee=!1!==e.SANITIZE_DOM,Ae=!1!==e.KEEP_CONTENT,ke=e.IN_PLACE||!1,oe=e.ALLOWED_URI_REGEXP||oe,pe&&(fe=!1),we&&(be=!0),Se&&(re=m({},[].concat(k(r))),ae=[],!0===Se.html&&(m(re,t),m(ae,a)),!0===Se.svg&&(m(re,n),m(ae,l),m(ae,u)),!0===Se.svgFilters&&(m(re,i),m(ae,l),m(ae,u)),!0===Se.mathMl&&(m(re,o),m(ae,c),m(ae,u))),e.ADD_TAGS&&(re===se&&(re=p(re)),m(re,e.ADD_TAGS)),e.ADD_ATTR&&(ae===le&&(ae=p(ae)),m(ae,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&m(_e,e.ADD_URI_SAFE_ATTR),Ae&&(re["#text"]=!0),ve&&m(re,["html","head","body"]),re.table&&(m(re,["tbody"]),delete ce.tbody),x&&x(e),Ce=e)},Pe=function(e){d.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=q}},De=function(e,t){try{d.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){d.removed.push({attribute:null,from:t})}t.removeAttribute(e)},ze=function(e){var t=void 0,n=void 0;if(ge)e="<remove></remove>"+e;else{var i=e.match(/^[\s]+/);(n=i&&i[0])&&(e=e.slice(n.length))}if(h)try{t=(new B).parseFromString(e,"text/html")}catch(e){}if(v&&m(ce,["title"]),!t||!t.documentElement){var o=(t=W.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=V?V.createHTML(e):e}return e&&n&&t.body.insertBefore(C.createTextNode(n),t.body.childNodes[0]||null),Y.call(t,ve?"html":"body")[0]};d.isSupported&&(function(){try{ze('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(h=!0)}catch(e){}}(),function(){try{var e=ze("<x/><title>&lt;/title&gt;&lt;img&gt;");/<\/title/.test(e.querySelector("title").innerHTML)&&(v=!0)}catch(e){}}());var Re=function(e){return G.call(e.ownerDocument||e,e,D.SHOW_ELEMENT|D.SHOW_COMMENT|D.SHOW_TEXT,(function(){return D.FILTER_ACCEPT}),!1)},je=function(e){return"object"===(void 0===P?"undefined":A(P))?e instanceof P:e&&"object"===(void 0===e?"undefined":A(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ie=function(e,t,n){Q[e]&&Q[e].forEach((function(e){e.call(d,t,n,Ce)}))},Be=function(e){var t,n=void 0;if(Ie("beforeSanitizeElements",e,null),!((t=e)instanceof j||t instanceof I||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof R&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute&&"string"==typeof t.namespaceURI))return Pe(e),!0;var i=e.nodeName.toLowerCase();if(Ie("uponSanitizeElement",e,{tagName:i,allowedTags:re}),("svg"===i||"math"===i)&&0!==e.querySelectorAll("p, br").length)return Pe(e),!0;if(!re[i]||ce[i]){if(Ae&&!Oe[i]&&"function"==typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",V?V.createHTML(o):o)}catch(e){}return Pe(e),!0}return"noscript"===i&&/<\/noscript/i.test(e.innerHTML)?(Pe(e),!0):"noembed"===i&&/<\/noembed/i.test(e.innerHTML)?(Pe(e),!0):(!me||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(d.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),pe&&3===e.nodeType&&(n=(n=(n=e.textContent).replace(J," ")).replace($," "),e.textContent!==n&&(d.removed.push({element:e.cloneNode()}),e.textContent=n)),Ie("afterSanitizeElements",e,null),!1)},Ue=function(e,t,n){if(Ee&&("id"===t||"name"===t)&&(n in C||n in Ne))return!1;if(fe&&ee.test(t));else if(de&&te.test(t));else{if(!ae[t]||ue[t])return!1;if(_e[t]);else if(oe.test(n.replace(ie,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==n.indexOf("data:")||!xe[e])if(he&&!ne.test(n.replace(ie,"")));else if(n)return!1}return!0},He=function(e){var t=void 0,n=void 0,i=void 0,o=void 0,r=void 0;Ie("beforeSanitizeAttributes",e,null);var s=e.attributes;if(s){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ae};for(r=s.length;r--;){var l=t=s[r],c=l.name,u=l.namespaceURI;if(n=t.value.trim(),i=c.toLowerCase(),a.attrName=i,a.attrValue=n,a.keepAttr=!0,Ie("uponSanitizeAttribute",e,a),n=a.attrValue,"name"===i&&"IMG"===e.nodeName&&s.id)o=s.id,s=S(O,s,[]),De("id",e),De(c,e),s.indexOf(o)>r&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===i&&"file"===n&&a.keepAttr&&(ae[i]||!ue[i]))continue;"id"===c&&e.setAttribute(c,""),De(c,e)}if(a.keepAttr)if(/svg|math/i.test(e.namespaceURI)&&new RegExp("</("+Object.keys(Oe).join("|")+")","i").test(n))De(c,e);else{pe&&(n=(n=n.replace(J," ")).replace($," "));var f=e.nodeName.toLowerCase();if(Ue(f,i,n))try{u?e.setAttributeNS(u,c,n):e.setAttribute(c,n),d.removed.pop()}catch(e){}}}Ie("afterSanitizeAttributes",e,null)}},Ve=function e(t){var n=void 0,i=Re(t);for(Ie("beforeSanitizeShadowDOM",t,null);n=i.nextNode();)Ie("uponSanitizeShadowNode",n,null),Be(n)||(n.content instanceof N&&e(n.content),He(n));Ie("afterSanitizeShadowDOM",t,null)};return d.sanitize=function(e,t){var n=void 0,i=void 0,o=void 0,r=void 0,a=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!je(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!d.isSupported){if("object"===A(s.toStaticHTML)||"function"==typeof s.toStaticHTML){if("string"==typeof e)return s.toStaticHTML(e);if(je(e))return s.toStaticHTML(e.outerHTML)}return e}if(ye||Fe(t),d.removed=[],ke);else if(e instanceof P)1===(i=(n=ze("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===i.nodeName?n=i:"HTML"===i.nodeName?n=i:n.appendChild(i);else{if(!be&&!pe&&!ve&&Le&&-1===e.indexOf("<"))return V?V.createHTML(e):e;if(!(n=ze(e)))return be?null:q}n&&ge&&Pe(n.firstChild);for(var l=Re(ke?e:n);o=l.nextNode();)3===o.nodeType&&o===r||Be(o)||(o.content instanceof N&&Ve(o.content),He(o),r=o);if(r=null,ke)return e;if(be){if(we)for(a=X.call(n.ownerDocument);n.firstChild;)a.appendChild(n.firstChild);else a=n;return Te&&(a=K.call(f,a,!0)),a}var c=ve?n.outerHTML:n.innerHTML;return pe&&(c=(c=c.replace(J," ")).replace($," ")),V&&Le?V.createHTML(c):c},d.setConfig=function(e){Fe(e),ye=!0},d.clearConfig=function(){Ce=null,ye=!1},d.isValidAttribute=function(e,t,n){Ce||Fe({});var i=e.toLowerCase(),o=t.toLowerCase();return Ue(i,o,n)},d.addHook=function(e,t){"function"==typeof t&&(Q[e]=Q[e]||[],Q[e].push(t))},d.removeHook=function(e){Q[e]&&Q[e].pop()},d.removeHooks=function(e){Q[e]&&(Q[e]=[])},d.removeAllHooks=function(){Q={}},d}()}()}));function L(e,t){return new Promise((function(n,i){if(m.string(t)&&null!==document.getElementById(t))n();else{var o=v("div",{hidden:"",id:t});(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise((function(n,i){try{var o=new XMLHttpRequest;if(!("withCredentials"in o))return;o.addEventListener("load",(function(){if("text"===t)try{n(JSON.parse(o.responseText))}catch(e){n(o.responseText)}else n(o.response)})),o.addEventListener("error",(function(){throw new Error(o.status)})),o.open("GET",e,!0),o.responseType=t,o.send()}catch(e){i(e)}}))})(e).then((function(e){m.empty(e)&&n(),o.innerHTML=T.sanitize(e),document.body.insertBefore(o,document.body.firstChild),n(o)})).catch((function(e){i(e)}))}}))}var E=["zoom-in","zoom-out","fullscreen"];function A(e){var t=e.iconName,n=e.classList,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("focusable",!1),i.setAttribute("class",n.join(" "));var o=document.createElementNS("http://www.w3.org/2000/svg","use");return o.setAttributeNS("http://www.w3.org/1999/xlink","path","#".concat(t)),o.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#".concat(t)),i.appendChild(o),i}var k={build:function(e){var t=e.viewer,n=e.elements,i=e.container,o=e.config,r=o.controls,s=o.iconUrl,a=v("div",{class:"shopify-model-viewer-ui__sr-only","data-shopify-model-viewer-ui-sr-only":"",role:"status"}),l=v("div",{class:"shopify-model-viewer-ui__controls-overlay"});if(i.insertBefore(a,t),i.appendChild(l),this.buildControlButton(e,l),r&&Array.isArray(r)&&r.length){var c=r.filter((function(e){return!E.includes(e)}));if(c.length>0)throw Error("Unrecognized controls passed to ModelViewerUI: ".concat(c.join(", ")));L(s,"sprites-mvui").then((function(e){n.sprites=e})).catch((function(){throw Error("Failed to load sprite from URL")})),n.zoomLevel=a,this.buildControlList(e,l)}},buildControlList:function(e,t){var n=e.config.controls,i=v("div",{class:"shopify-model-viewer-ui__controls-area"});t.appendChild(i),n.forEach((function(t){var n=v("button",{class:"shopify-model-viewer-ui__button shopify-model-viewer-ui__button--control shopify-model-viewer-ui__button--".concat(t)});switch(t){case"zoom-in":n.setAttribute("aria-label","Zoom In"),n.appendChild(A({iconName:"zoom-in-icon",classList:["shopify-model-viewer-ui__control-icon"]}));break;case"zoom-out":n.setAttribute("aria-label","Zoom Out"),n.appendChild(A({iconName:"zoom-out-icon",classList:["shopify-model-viewer-ui__control-icon"]}));break;case"fullscreen":n.setAttribute("aria-label","Enter Fullscreen"),n.appendChild(A({iconName:"enter-fullscreen-icon",classList:["shopify-model-viewer-ui__control-icon","shopify-model-viewer-ui__control-icon--enter-fullscreen"]})),n.appendChild(A({iconName:"exit-fullscreen-icon",classList:["shopify-model-viewer-ui__control-icon","shopify-model-viewer-ui__control-icon--exit-fullscreen"]}))}e.elements.buttons[t]=n,i.appendChild(n)})),e.elements.controlArea=i},buildControlButton:function(e,t){var n=e.elements,i=v("button",{class:"shopify-model-viewer-ui__button shopify-model-viewer-ui__button--poster"});i.setAttribute("aria-label","Play 3D Viewer"),i.appendChild(A({iconName:"threed-icon-button-control",classList:["shopify-model-viewer-ui__poster-control-icon"]})),n.controlButton=i,t.appendChild(i)}};function S(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}function O(e,t){for(var n=0;n<e.length;n++){if(e[n].identifier===t)return n}return-1}var x=4;var _={isDragging:!1,cursorStartPosition:null},M=function(){function t(n){e(this,t),this.mvui=n,this.state=r({},_),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.resetState=this.resetState.bind(this)}return n(t,[{key:"add",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=this.mvui.container;this.state=r({},e),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseup",this.onMouseUp)}},{key:"remove",value:function(){var e=this.mvui.container;e.removeEventListener("mousedown",this.onMouseDown),e.removeEventListener("mousemove",this.onMouseMove),e.removeEventListener("mouseup",this.onMouseUp)}},{key:"onMouseDown",value:function(e){this.resetState(),this.state.cursorStartPosition={x:e.pageX,y:e.pageY}}},{key:"onMouseMove",value:function(e){var t,n,i=this.state.cursorStartPosition;m.nullOrUndefined(i)||(t=i,n={x:e.pageX,y:e.pageY},(Math.abs(t.x-n.x)>x||Math.abs(t.y-n.y)>x)&&(this.state.isDragging=!0))}},{key:"onMouseUp",value:function(e){var t=this.mvui,n=t.interacting,i=t.elements,o=t.toggleable,r=i.controlArea,s=this.state.isDragging;r.contains(e.target)?this.resetState():(n||s?o&&n&&!s&&t.pause():t.play(),this.resetState())}},{key:"resetState",value:function(){this.state=r({},_)}}]),t}(),C=10;var N={isDragging:!1,isPinchZooming:!1,ongoingTouches:[],touchStartPositions:[]},F=function(){function t(n){e(this,t),this.mvui=n,this.state=r({},N),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.resetState=this.resetState.bind(this)}return n(t,[{key:"add",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=this.mvui.container;this.state=r({},e),t.addEventListener("touchstart",this.onTouchStart),t.addEventListener("touchmove",this.onTouchMove),t.addEventListener("touchend",this.onTouchEnd)}},{key:"remove",value:function(){var e=this.mvui.container;e.removeEventListener("touchstart",this.onTouchStart),e.removeEventListener("touchmove",this.onTouchMove),e.removeEventListener("touchend",this.onTouchEnd)}},{key:"onTouchStart",value:function(e){for(var t,n=this.state,i=n.ongoingTouches,o=n.touchStartPositions,r=e.changedTouches,s=0;s<r.length;s++){var a={identifier:(t=r[s]).identifier,pageX:t.pageX,pageY:t.pageY};i.push(a),o.push({x:a.pageX,y:a.pageY})}}},{key:"onTouchMove",value:function(e){var t,n,i=e.changedTouches,o=this.state,r=o.ongoingTouches,s=o.touchStartPositions;r.length>=2&&(this.state.isPinchZooming=!0);for(var a=0;a<i.length;a++){var l=i[a],c=l.pageX,u=l.pageY,d=O(r,l.identifier);if(-1!==d){var f=s[d];t=f,n={x:c,y:u},(Math.abs(t.x-n.x)>C||Math.abs(t.y-n.y)>C)&&(this.state.isDragging=!0)}}}},{key:"onTouchEnd",value:function(e){for(var t=e.changedTouches,n=e.target,i=this.mvui,o=i.interacting,r=i.elements,s=i.toggleable,a=r.controlArea,l=this.state,c=l.isDragging,u=l.isPinchZooming,d=l.ongoingTouches,f=l.touchStartPositions,h=0;h<t.length;h++){var m=O(d,t[h].identifier);-1!==m&&(d.splice(m,1),f.splice(m,1))}0===d.length&&this.resetState(),a.contains(n)||(o||c||u?s&&o&&!c&&!u&&i.pause():i.play())}},{key:"resetState",value:function(){this.state=r({},N)}}]),t}(),P=function(){function t(n){e(this,t),this.mvui=n,"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?this.touchListeners=new F(n):this.mouseListeners=new M(n),this.onModelVisibilityChanged=this.onModelVisibilityChanged.bind(this),this.onViewerKeyPress=this.onViewerKeyPress.bind(this),this.onControlButtonClick=this.onControlButtonClick.bind(this),this.onFullscreenChange=this.onFullscreenChange.bind(this),this.onUIButtonFocus=this.onUIButtonFocus.bind(this),this.onUIButtonBlur=this.onUIButtonBlur.bind(this),this.onZoomOut=this.onZoomOut.bind(this),this.onZoomIn=this.onZoomIn.bind(this),this.onFullscreen=this.onFullscreen.bind(this)}return n(t,[{key:"add",value:function(){var e=this,t=this.mvui,n=t.viewer,i=t.elements,o=i.buttons,r=i.controlButton;for(var s in n.addEventListener("model-visibility",this.onModelVisibilityChanged),n.addEventListener("keypress",this.onViewerKeyPress),r.addEventListener("click",this.onControlButtonClick),["fullscreenchange","mozfullscreenchange","webkitfullscreenchange"].forEach((function(t){document.addEventListener(t,e.onFullscreenChange,!1)})),o)Object.prototype.hasOwnProperty.call(o,s)&&(o[s].addEventListener("focus",this.onUIButtonFocus),o[s].addEventListener("blur",this.onUIButtonBlur));var a=o["zoom-in"];a&&a.addEventListener("click",this.onZoomIn);var l=o["zoom-out"];l&&l.addEventListener("click",this.onZoomOut);var c=o.fullscreen;c&&c.addEventListener("click",this.onFullscreen),this.mouseListeners&&this.mouseListeners.add(),this.touchListeners&&this.touchListeners.add()}},{key:"remove",value:function(){var e=this,t=this.mvui,n=t.viewer,i=t.elements,o=i.buttons,r=i.controlButton;for(var s in n.removeEventListener("model-visibility",this.onModelVisibilityChanged),n.removeEventListener("keypress",this.onViewerKeyPress),r.removeEventListener("click",this.onControlButtonClick),["fullscreenchange","mozfullscreenchange","webkitfullscreenchange"].forEach((function(t){document.removeEventListener(t,e.onFullscreenChange,!1)})),o)Object.prototype.hasOwnProperty.call(o,s)&&(o[s].removeEventListener("focus",this.onUIButtonFocus),o[s].removeEventListener("blur",this.onUIButtonBlur));this.mouseEventListeners&&this.mouseListeners.remove(),this.touchListeners&&this.touchListeners.remove()}},{key:"onModelVisibilityChanged",value:function(e){var t=this.mvui,n=t.viewer,i=e.target,o=e.detail;i===n&&(t.modelIsVisible=o.visible)}},{key:"onViewerKeyPress",value:function(e){var t=this.mvui;if(t.interacting){var n=e.which||e.keyCode;switch(String.fromCharCode(n)){case"-":t.zoom(8);break;case"+":t.zoom(-8);break;case"f":t.toggleFullscreen()}}}},{key:"onControlButtonClick",value:function(){var e=this.mvui;e.interacting||e.play()}},{key:"onFullscreenChange",value:function(){var e=this.mvui.container;S()?e.classList.add("shopify-model-viewer-ui--fullscreen"):e.classList.remove("shopify-model-viewer-ui--fullscreen")}},{key:"onUIButtonFocus",value:function(){this.mvui.container.classList.add("shopify-model-viewer-ui--child-focused")}},{key:"onUIButtonBlur",value:function(){this.mvui.container.classList.remove("shopify-model-viewer-ui--child-focused")}},{key:"onZoomOut",value:function(e){e.stopPropagation(),this.mvui.zoom(8)}},{key:"onZoomIn",value:function(e){e.stopPropagation(),this.mvui.zoom(-8)}},{key:"onFullscreen",value:function(e){e.stopPropagation(),this.mvui.toggleFullscreen()}}]),t}(),D={add:function(e){var t=e.state.listeners;t||((t=new P(e)).add(),e.state.listeners=t)},remove:function(e){e.state.listeners.remove()}},z=new p;var R=function(){function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,t),this.config=r({},w.config,{},i);var o=function(e){var t=e;if(m.string(t)&&(t=document.querySelector(t)),m.jqueryObject(t)&&(t=t[0]),m.array(t)||m.nodeList(t))throw Error("Use static setup method when using an array or nodeList of elements");if(m.nullOrUndefined(t)||!m.element(t))throw Error("Please pass in a query selector, element, or jQuery instance");return t}(n),s=z.getCachedInstance(o);if(s)return s;var a,l,c,u=o.getAttribute("reveal"),d=Boolean(o.getAttribute("toggleable"));if(this.state={elements:{original:o.cloneNode(!0),buttons:{},container:null,controlButton:null,controlArea:null,zoomLevel:null,sprites:null},viewerProperties:{reveal:u,interaction:o.getAttribute("interaction"),orbit:o.cameraOrbit,fov:o.fieldOfView,zoomLevelTimeout:null},viewer:o,interacting:"interaction"!==u,toggleable:!!m.boolean(d)&&d,modelIsVisible:!1},this.defineProperties(),!m.element(this.container)){var f=v("div",{class:"shopify-model-viewer-ui"});void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&f.classList.add("shopify-model-viewer-ui--desktop"),a=this.viewer,l=f,c=a.length?a:[a],Array.from(c).reverse().forEach((function(e,t){var n=t>0?l.cloneNode(!0):l,i=e.parentNode,o=e.nextSibling;n.appendChild(e),o?i.insertBefore(n,o):i.appendChild(n)})),this.container=f}z.cacheInstance(this),k.build(this),D.add(this),this.interacting?g(this.elements.controlButton,!0):(g(this.elements.controlButton,!1),b(o,"shopify-model-viewer-ui__disabled",!0),o.setAttribute("tabindex","-1"))}return n(t,[{key:"destroy",value:function(){if(this.state){var e,t,n=this.state.elements,i=n.sprites,o=n.original;i&&y(i),e=o,t=this.container,m.element(t)&&m.element(t.parentNode)&&m.element(e)&&t.parentNode.replaceChild(e,t),D.remove(this),z.removeFromCache(this.viewer),this.state=null}}},{key:"zoom",value:function(e){var t=this.viewer,n=this.elements,i=this.viewerProperties,o=t.getFieldOfView();o+=e;var r=Math.min(Math.max(o,10),45);t.fieldOfView="".concat(r,"deg");var s=100*(r-45)/-35;n.zoomLevel.innerText="".concat(Math.round(s),"% ").concat("Zoomed","."),clearTimeout(i.zoomLevelTimeout),i.zoomLevelTimeout=setTimeout((function(){n.zoomLevel.innerText=""}),5e3)}},{key:"toggleFullscreen",value:function(){var e=this.container,t=this.elements.buttons.fullscreen;S()?(t.setAttribute("aria-label","Enter Fullscreen"),document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()):(t.setAttribute("aria-label","Exit Fullscreen"),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT))}},{key:"play",value:function(){var e=this.elements,t=this.viewer,n=this.modelIsVisible,i=e.controlButton,o=e.controlArea;"interaction"===t.getAttribute("reveal")&&t.setAttribute("reveal","auto"),g(i,!0),t.dispatchEvent(new CustomEvent("shopify_model_viewer_ui_toggle_play",{detail:{modelViewerUI:this}})),b(t,"shopify-model-viewer-ui__disabled",!1),t.setAttribute("tabindex","0"),this.config.focusOnPlay&&t.focus(),n&&b(o,"shopify-model-viewer-ui__controls-area--playing",!0),this.interacting=!0}},{key:"pause",value:function(){var e=this.elements,t=this.viewer,n=this.viewerProperties,i=e.controlButton,o=e.controlArea,r=n.orbit,s=n.fov;g(i,!1),t.dispatchEvent(new CustomEvent("shopify_model_viewer_ui_toggle_pause",{detail:{modelViewerUI:this}})),b(t,"shopify-model-viewer-ui__disabled",!0),b(o,"shopify-model-viewer-ui__controls-area--playing",!1),t.setAttribute("tabindex","-1"),t.blur(),t.cameraOrbit=r,t.fieldOfView=s,t.pause(),this.interacting=!1}},{key:"defineProperties",value:function(){Object.defineProperty(this,"elements",{value:this.state.elements,writable:!1}),Object.defineProperty(this,"viewer",{value:this.state.viewer,writable:!1}),Object.defineProperty(this,"viewerProperties",{value:this.state.viewerProperties,writable:!1}),Object.defineProperty(this,"toggleable",{value:this.state.toggleable,writable:!1}),Object.defineProperty(this,"interacting",{value:this.state.interacting,writable:!0}),Object.defineProperty(this,"container",{value:this.elements.container,writable:!0})}},{key:"modelIsVisible",get:function(){return this.state.modelIsVisible},set:function(e){this.state.modelIsVisible=e;var t=this.elements,n=t.controlArea,i=t.controlButton;e&&!m.nullOrUndefined(n)&&(g(i,!0),b(n,"shopify-model-viewer-ui__controls-area--playing",!0))}}],[{key:"setup",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;return m.string(e)?i=Array.from(document.querySelectorAll(e)):m.nodeList(e)?i=Array.from(e):m.array(e)&&(i=e.filter(m.element)),m.empty(i)?null:i.map((function(e){return new t(e,n)}))}}]),t}();window.Shopify=window.Shopify||{},window.Shopify.ModelViewerUI=R}();
window.HUB = window.HUB || {};
 
window.HUB.formatMoney = window.HUB.formatMoney ||  function(t, r) {
    function n(t, r) {
        return void 0 === t ? r : t
    }
    function e(t, r, e, o) {
        if (r = n(r, 2),
        e = n(e, ","),
        o = n(o, "."),
        isNaN(t) || null == t)
            return 0;
        var a = (t = (t / 100).toFixed(r)).split(".");
        return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + e) + (a[1] ? o + a[1] : "")
    }
    "string" == typeof t && (t = t.replace(".", ""));
    var o = ""
      , a = /\{\{\s*(\w+)\s*\}\}/
      , i = r || '${{amount}}';
    switch (i.match(a)[1]) {
    case "amount":
        o = e(t, 2);
        break;
    case "amount_no_decimals":
        o = e(t, 0);
        break;
    case "amount_with_comma_separator":
        o = e(t, 2, ".", ",");
        break;
    case "amount_with_space_separator":
        o = e(t, 2, " ", ",");
        break;
    case "amount_with_period_and_space_separator":
        o = e(t, 2, " ", ".");
        break;
    case "amount_no_decimals_with_comma_separator":
        o = e(t, 0, ".", ",");
        break;
    case "amount_no_decimals_with_space_separator":
        o = e(t, 0, ".", "");
        break;
    case "amount_with_space_separator":
        o = e(t, 2, ",", "");
        break;
    case "amount_with_apostrophe_separator":
        o = e(t, 2, "'", ".")
    }
    return i.replace(a, o)
};;var cb  = function($) {
var $_this = jQuery(this).closest('.lh-product-single'),
    data_slide = {
      speed : 500,
      breakpointsInverse : true,
      watchSlidesVisibility : true,
      grabCursor : true,
      autoHeight: true,
      watchOverflow : true,
    }
var $for = $_this.find('.lh-details-images .lh-slick-big');
var $nav = $_this.find('.lh-details-images .lh-slick-nav');
var thumb = new Swiper($nav, jQuery.extend({
  slidesPerView: 'auto',
  spaceBetween: 20,
  direction: 'vertical'
},data_slide));
var slide = new Swiper($for, jQuery.extend({
  slidesPerView: 1,
  noSwipingClass: "no-answer-yet",
  navigation: {
      nextEl: '.lh-slide-lg-nav .swiper-button-next',
      prevEl: '.lh-slide-lg-nav .swiper-button-prev',
  },
  on : {
    slideChange: function(){
      thumb.slideTo(slide.realIndex,300,false);
      var vid = $(slide.visibleSlides[0]).data('variant_id');
      if (vid) {
          vid = vid.toString();
          var id = $_this.find('[name="id"]').val();
          if(!id || !vid.includes(id.toString()))
            $_this.find('[name="id"]').attr('vid',parseInt(vid.split(',')[0]))[0].dispatchEvent(new Event('swatch'));
      }
    },
    slideChangeTransitionEnd: function(){
      thumb.update();
      $_this.removeClass('lh-onchange-variant');
    }
  },
  thumbs: {
    swiper:thumb
  }
},data_slide));
setTimeout(function() {
    jQuery.fn.zoom && $_this.find('.zoom__image > img').each(function() {
        var $this = jQuery(this);
        $this.trigger('zoom.destroy');
        $this.closest('.zoom__image').zoom({
            url: $this.attr('data-bigimg'),
            touch: false
        });
    });
}, 2000);

 };						cb.bind($('section[data-section-id="2GgFPWwKuQ"] include[data-name="product-images"][data-id="1"]').get(0))(jQuery);;var cb  = function($) {
var _this = jQuery(this),
		$this = jQuery(_this).closest('.lh-product-single'),
		slide = jQuery($this).find('.block-slide-lg');

var id = $this.data('pid'),money_format =decodeURIComponent($this.data('moneyFormat')).replace(/\+/g,' ');
var current_variant = null;
	if(window.LAYOUTHUB_LIVE){
		_this.find('.lh-add_to_cart,.lh-buy-now').click(function(event) {
				event.preventDefault();
		});
	}else{
		_this.find('.lh-buy-now').click(function(event) {
				event.preventDefault();
				var $form = $this.find('form');
				var quantity = $form.find('[name="quantity"]').val();
				var id = $form.find('[name="id"]').val();
				location.href="/cart/"+id+':'+quantity;
		});
	}
	_this.find('.lh-size-chart,.lh-shipping').click(function(e) {
			e.preventDefault();
	    _this.closest('.lh-product-single').find('#' + $(this).data('id')).fadeToggle(300);
	});
	function hideSelectbox()
	{
		_this.find('.lh-swatch-variations').map(function(){
			var index = jQuery(this).data('optionIndex');
			_this.find('.lh-option-wrappers .selector-wrapper:eq('+index+')').hide();
		});
	}

	function ProductOptionsInit() {
	    if (!window.Shopify || !window.Shopify.OptionSelectors) return 1;
	    if (!id || !document.getElementById('lh-product-json-' + id)) return;
	    var $product_json = null;
			 try{
			 $product_json = JSON.parse(document.getElementById('lh-product-json-' + id).innerHTML)
			 }catch(e){};
			if(!$product_json) return 0;
	    var productSelect = new window.Shopify.OptionSelectors('product-select-' + id, {
	        product: $product_json,
	        onVariantSelected: selectCallback,
	        enableHistoryState: (window.LAYOUTHUB_LIVE) ? false : $this.data('vid_url')
	    });
	    hideSelectbox();
	    $this.find('#product-select-' + id).on('swatch', function(evt, vid) {
	        productSelect.selectVariant(evt.target.getAttribute('vid'));
	    });
	    var $format = $this.data('moneyFormat');

	    function selectCallback(variant, selector) {
          current_variant = variant;
					setMaxQuantity(current_variant);
					var progress 	= $this.find('.lh-product-progress'),
						label_sale 	= $this.find('.lh-sale_label'),
						add_cart 		= $this.find('.lh-add_to_cart'),
						sold_out 		= $this.find('.lh-sold-out-title');
					if(variant){
						try {
							if (variant.featured_image && slide[0].swiper ) {
								var index = $this.find('.block-slide-sm .items-media[data-variant_id*="'+variant.id+'"]').index(),
										current = slide[0].swiper.realIndex;
								if(index != current)
									slide[0].swiper.slideTo(index,200);
								else
									throw "not change";
							}else{
								throw 'erorr';
							}
						} catch (e) {
								$this.removeClass('lh-onchange-variant');
								//console.info(e);
						}
	        }else{
						_this.find('.lh-btn-cart').attr('disabled', 'disabled');
						_this.find('.lh-cart-button-group').attr('data-available',false);
						sold_out.css({"display":"block","margin":0}).find('span').attr("data-lhi","trans_unavai").html(section.settings.trans_unavai);
						$this.find('.lh-content-summary').attr('data-hidden',true);
						$this.find('.lh-compare-at-price,.lh-price').css('display','none');
						progress.removeClass("lh-show");
						label_sale.css('display','none');
						$this.removeClass('lh-onchange-variant');
						return;
					}
					var quantity 	= variant.inventory_quantity,
							policy		= variant.inventory_policy;
					var isSale = variant.available && (current_variant.price < current_variant.compare_at_price);
					if(progress.length && quantity){
						var min = parseInt(progress.data('minShow')),
								total = parseInt(progress.data('total')),
								left = variant.inventory_quantity,
								is_show = left > 0 && left < min;
						if(is_show) progress.addClass("lh-show")
						else progress.removeClass("lh-show");
						if(is_show){
							progress.find('.lh-text-bar span').text(left);
							progress.find('.lh-progress-bar').css('width',Math.round(left * 100 / total) + "%");
						}
					}else progress.removeClass('lh-show');
					if(quantity < 1 && policy == 'continue'){
						add_cart.addClass('lh-pre-order').attr('data-lhi','trans_pre_order').text(add_cart.data('preOrder'));
					}else{
						add_cart.removeClass('lh-pre-order').attr('data-lhi','trans_add_to_cart').text(add_cart.data('addCart'));
					}
					$this.find('.lh-content-summary').attr('data-hidden', !isSale);
					sold_out.css({"display" : variant.available ? 'none':'block'}).find('span').attr("data-lhi","trans_outstock").html(section.settings.trans_outstock);
	        $this.find('.lh-price,.lh-countdown-product').css('display','block');
	        $this.find('.lh-btn-cart').removeAttr('disabled');
					_this.find('.lh-cart-button-group').attr('data-available',variant.available );
	        $this.find('.lh-price').html(window.HUB.formatMoney(variant.price,money_format));
					$this.find('.lh-product-sku .lh-sku').html(variant.sku ? variant.sku: "N/A");
	        if (isSale) {
							label_sale.css('display','block');
	            $this.find('.lh-compare-at-price').css('display','block').html(window.HUB.formatMoney(variant.compare_at_price,money_format));
	        } else {
							label_sale.css('display','none');
	            $this.find('.lh-compare-at-price').css('display','none');
	        }


	        if (variant.inventory_management == "shopify") {

	            $this.find('.lh-title-instock').css('display','block');
	        } else {
	            $this.find('.lh-title-instock').css('display','none');
	        }
	        if (variant.options.length) {
	            for (var i = 0 ; i < variant.options.length ; i++) {
								var wrap_swatch = $this.find('[data-option-index="' + i + '"]');
								if(wrap_swatch.hasClass('lh-swatch-simple')){
									wrap_swatch.find('.lh-selected-text').text(variant.options[i]);
								}
								wrap_swatch.find(`[data-value='${variant.options[i].replace(/'/g, "&#39;")}']`).addClass('active').siblings().removeClass('active');
	            }
	        }
	    };
	    $this.find('.lh-swatch-select').on('click', function() {
	        var _this = $(this);
					if(!_this.hasClass('active') && !$this.hasClass('lh-onchange-variant')){
						$this.addClass('lh-onchange-variant');
		        _this.siblings('li').removeClass('active');
		        _this.addClass('active');
		        var index = _this.closest('.swatch-index').attr('data-option-index');
		        $this.find('select#product-select-' + id + '-option-' + index).val(_this.data('value')).trigger('change');
					}
	    });
	}

	ProductOptionsInit();
	setDefaultTextCombobox();
	function setDefaultTextCombobox(){
		_this.find('.lh-wrap-combobox').each(function(){
			var selected_text = $(this).find('.lh-selected-text');
			selected_text.text($(this).find('.lh-swatch-select.active span').text());
		});
	}
	eventCombobox();
	function eventCombobox() {
			_this.find('.lh-swatch-simple').each(function(){
				var __this 				= $(this),
						index 				= __this.data('option-index'),
						option_select = $this.find('select#product-select-' + id + '-option-' + index),
						wrap_cb 			= __this.find('.lh-wrap-combobox');
				__this.find('.lh-selected-text').click(function(){
					__this.find('.list-swatch-items').slideToggle(200);
					__this.toggleClass('lh-show');
					__this.siblings('.lh-show').removeClass('lh-show').find('.list-swatch-items').slideUp(100);
				});
				__this.find('.list-swatch-items .lh-swatch-select').click(function(){
					var val = $(this).data('value');
					option_select.val(val).trigger('change');
					$(this).parent().slideUp(100);
					__this.find('.lh-selected-text').text(val);
					__this.removeClass('lh-show');
				});
			});
			_this.find('.lh-swatch-simple').mousedown(function(e){
				var __this = $(e.target),
						block_variant = __this.closest('.lh-swatch-simple');
				if(block_variant.hasClass('lh-show') && __this.is('.lh-wrap-combobox')){
					block_variant.removeClass('lh-show').find('.list-swatch-items').slideUp(100)
				}
			})
	}
	function setMaxQuantity(variant){
		var input = $this.find('.lh-control input[name="quantity"]');
		try{
			var max = 9999;
			if(variant.available){
				if(variant.inventory_management && variant.inventory_policy == 'deny')
					max = variant.inventory_quantity
			}else max = 0;
			var value = parseInt(input.val());
			input.attr('max',max);
			if(value > max){
				input.val(max);
			}else if(value == 0 && max > 0){
				input.val(1);
			}
		}catch(err){input.attr('max',0);input.val(0)}
	}
 };						cb.bind($('section[data-section-id="2GgFPWwKuQ"] include[data-name="product-form"][data-id="2"]').get(0))(jQuery);;var cb  = function($) {
  var $this = jQuery(this),
    $dom  = $this.find('.lh-tabs-product');
     $this.find('.lh-wrap-title-tab').on('click','a',function(event){
    event.preventDefault();
    if($dom.hasClass('lh-changing')) return;
    $dom.addClass('lh-changing');
    var _this = jQuery(this).parent(),
        dataId = $(this).data('id');
    _this.toggleClass('active');
    $this.find('#' + dataId).slideToggle(200, function(){
      $dom.removeClass('lh-changing')
    });


  });
  $this.find('.lh-item-faq').each(function(){
    var item = $(this);
    item.find('.lh-faq-link').click(function(){
      if(item.hasClass('lh-changing')) return;
      item.addClass('lh-changing');
      item.toggleClass('lh-show');
      item.find('.lh-faq-contents').slideToggle(200,function(){
        item.removeClass('lh-changing');
      });
    })
  })
  function closeTab(){
    $this.find('.lh-wrap-title-tab.active').removeClass('active')
    $this.find('.lh-tab-content.active').removeClass('active').slideUp();
  }
  closeTab();
var $review = $this.find('#shopify-product-reviews');
if ($review && (window.LAYOUTHUB_LIVE || window.location.protocol === 'blob:')) {
  window.Shopify = window.Shopify || {};
  if(!window.Shopify.shop)window.Shopify.shop = 'tea-dev.myshopify.com';

  var pid = $this.find('.lh-tab-contents').data('pid');
  if (pid && isNaN(parseInt($review.data('pid')))) {
    $review.attr('data-id', pid);
    if (!document.querySelector('#lh-fake-review')) {
      jQuery.get('https://productreviews.shopifycdn.com/assets/v4/spr.js', function(code) {
      var regex = new RegExp(['"','/','/'].join(''),'gm');
      code = code.replace(regex, '"https://').replace(/SPR\./g,'window.SPR.').replace('window.SPR=','window.SPR=window.SPR || ');;
      code = code.replace('return r=t.remote_id.toString()','if(!t.remote_id)return 0;return r=t.remote_id.toString()');
      code = code.replace('return r.fn.serializeObject','return !r || !r.fb ? false : r.fn.serializeObject');
        var blob = new Blob([code], {
          type: "application/javascript"
        });
        var url = URL.createObjectURL(blob);
        var script = document.createElement("script");
        script.src = url;
        script.id = "lh-fake-review";
        script.type = "text/javascript";
        if (!window.SPR)
        document.head.append(script);
      })
    } else {

      if (window.SPR && window.SPR.$) {
        window.SPR.loadjQueryExtentions(window.SPR.$);
        window.SPR.$(document).ready(function() {
          return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
        })
      }
    }

  }
}

 };						cb.bind($('section[data-section-id="2GgFPWwKuQ"] include[data-name="tabs"][data-id="4"]').get(0))(jQuery);;var cb  = function($) {
	if(document.querySelector('.page-container') && window.getComputedStyle(document.querySelector('.page-container')).transform.indexOf('matrix') != -1){
		document.querySelector('.page-container').style.webkitTransform='none';
		document.querySelector('.page-container').style.transform='none';
	}
	var _this = jQuery(this);
	_this.find('.lh-modal').on("click",function(e){
		if($(e.target).closest('.lh-modal-body').length == 0){
			_this.find('.lh-modal').fadeOut(100);
		}
	})
	_this.find('.lh-wrap-product-rating').click(function(){
		var tab_review = _this.closest('#hub-sections').find('.lh-section-rating');
		if(tab_review.length){
			tab_review[0].scrollIntoView({
			    behavior: "smooth",
			    block: "start"
			});
		}
	});
	function setupShopifyXr(){
    if (!window.ShopifyXR) {
			//document.removeEventListener('shopify_xr_initialized',setupShopifyXr);
      		window.document.addEventListener('shopify_xr_initialized', setupShopifyXr);
    }else{
      		var model_json = _this.find('script[id*=lh-product-media-]').html();
			try{
				model_json = JSON.parse(model_json);
			}catch(err){
				window.document.addEventListener('shopify_xr_initialized', setupShopifyXr);
				return 1;
			}
			if(model_json.length){
	      window.ShopifyXR.addModels(model_json);
	      window.ShopifyXR.setupXRElements();
			}
			_this.find('.block-slide-lg model-viewer').each(function(){
				var __this = $(this);
				var model = new Shopify.ModelViewerUI(__this);

			})
    }
  }
  if(!window.LAYOUTHUB_LIVE)
	 setupShopifyXr();
  window.LAYOUTHUB_LIVE && _this.find('.lh-product-single').addClass('lh-live');
 };						cb.bind($('section[data-section-id="2GgFPWwKuQ"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="2GgFPWwKuQ"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/wbYa79FjKrymskDP/product/",						settings: {"trans_unavai":"Unavailable","trans_outstock":"Out of stock"}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "YJNduQ21Bt"							}), success: c, error: e});						}, cb  = function(section, $) {;var cb  = function($) {
function initRating(){
  if (!document.querySelector('#lh-fake-review') && !window.SPR && window.LAYOUTHUB_LIVE === true) {
    jQuery.get('https://productreviews.shopifycdn.com/assets/v4/spr.js', function(code) {

        var regex = new RegExp(['"','/','/'].join(''),'gm');
        code = code.replace(regex, '"https://').replace(/SPR\./g,'window.SPR.').replace('window.SPR=','window.SPR=window.SPR || ');
        code = code.replace('return r=t.remote_id.toString()','if(!t.remote_id)return 0;return r=t.remote_id.toString()');
        code = code.replace('return r.fn.serializeObject','return !r || !r.fb ? false : r.fn.serializeObject');
      var blob = new Blob([code], {
        type: "application/javascript"
      });
      var url = URL.createObjectURL(blob);
      var script = document.createElement("script");
      script.src = url;
      script.id = "lh-fake-review";
      script.type = "text/javascript";
      if (!window.SPR)
      document.head.append(script);
    })
  } else {

    if (window.SPR && window.SPR.$) {
        window.SPR.loadjQueryExtentions(window.SPR.$);
        window.SPR.$(document).ready(function() {
            return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
        })
    }
  }
}
initRating();
 };						cb.bind($('section[data-section-id="YJNduQ21Bt"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="YJNduQ21Bt"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/wbYa79FjKrymskDP/review/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "g4mCAFfp2r"							}), success: c, error: e});						}, cb  = function(section, $) {function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}"undefined"==typeof window.Shopify&&(window.Shopify={}),Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return void 0!==t},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,(t.prototype.constructor=t).baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){return(Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e)+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(o){if(!Shopify.isDefined(this.variants))return null;var t=Shopify.map(this.variants,function(t){var e="option"+(o+1);return t[e]==undefined?null:t[e]});return null==t[0]?null:Shopify.uniq(t)},Shopify.Product.prototype.getVariant=function(i){var r=null;return i.length!=this.options.length||Shopify.each(this.variants,function(t){for(var e=!0,o=0;o<i.length;o++){t["option"+(o+1)]!=i[o]&&(e=!1)}1!=e||(r=t)}),r},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="${{amount}}",Shopify.formatMoney=function(t,e){function n(t,e){return void 0===t?e:t}function o(t,e,o,i){if(e=n(e,2),o=n(o,","),i=n(i,"."),isNaN(t)||null==t)return 0;var r=(t=(t/100).toFixed(e)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+o)+(r[1]?i+r[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var i="",r=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(r)[1]){case"amount":i=o(t,2);break;case"amount_no_decimals":i=o(t,0);break;case"amount_with_comma_separator":i=o(t,2,".",",");break;case"amount_with_space_separator":i=o(t,2," ",",");break;case"amount_with_period_and_space_separator":i=o(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":i=o(t,0,".",",");break;case"amount_no_decimals_with_space_separator":i=o(t,0," ");break;case"amount_with_apostrophe_separator":i=o(t,2,"'",".")}return a.replace(r,i)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0};if(!this.selectVariantFromDropdown(t)){var e=this;setTimeout(function(){e.selectVariantFromParams(t)||e.fireOnChangeForFirstDropdown.call(e,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){this.selectVariantFromParams(t)||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=o[r.getAttribute("data-option")];null!=n&&this.optionExistInSelect(r,n)&&(r.value=n)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var i=this.selectorDivClass,r=this.product.optionNames();return Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",i),1<r.length){var o=document.createElement("label");o.htmlFor=t.element.id,o.innerHTML=t.name,e.appendChild(o)}return e.appendChild(t.element),e})},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,n,a,s){if(!Shopify.isDefined(a))a=!0;if(!Shopify.isDefined(s))s="/";var e=document.getElementById(t),o=e.childNodes,p=(e.parentNode,n.length),l=[];Shopify.each(o,function(t){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var e=t.innerHTML.split(new RegExp("\\s*\\"+s+"\\s*"));0==n.length&&(p=e.length-(a?1:0));var o=e.slice(0,p),i=a?e[p]:"",r=(t.getAttribute("value"),{available:!t.disabled,id:parseFloat(t.value),price:i,option1:o[0],option2:o[1],option3:o[2]});l.push(r)}});var i={variants:l};if(0==n.length){i.options=[];for(var r=0;r<p;r++)i.options[r]="option "+(r+1)}else i.options=n;return i},Shopify.SingleOptionSelector=function(o,i,t,e){this.multiSelector=o,this.values=e,this.index=i,this.name=t,this.element=document.createElement("select");for(var r=0;r<e.length;r++){var n=document.createElement("option");n.value=e[r],n.innerHTML=e[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(i+1)),this.element.id=o.domIdPrefix+"-option-"+i,this.element.onchange=function(t,e){e=e||{},o.updateSelectors(i,e)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);return null!==e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null==o)return null;var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};window.HUB = window.HUB || {};

window.HUB.formatMoney = window.HUB.formatMoney ||  function(t, r) {
    function n(t, r) {
        return void 0 === t ? r : t
    }
    function e(t, r, e, o) {
        if (r = n(r, 2),
        e = n(e, ","),
        o = n(o, "."),
        isNaN(t) || null == t)
            return 0;
        var a = (t = (t / 100).toFixed(r)).split(".");
        return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + e) + (a[1] ? o + a[1] : "")
    }
    "string" == typeof t && (t = t.replace(".", ""));
    var o = ""
      , a = /\{\{\s*(\w+)\s*\}\}/
      , i = r || '${{amount}}';
    switch (i.match(a)[1]) {
    case "amount":
        o = e(t, 2);
        break;
    case "amount_no_decimals":
        o = e(t, 0);
        break;
    case "amount_with_comma_separator":
        o = e(t, 2, ".", ",");
        break;
    case "amount_with_space_separator":
        o = e(t, 2, " ", ",");
        break;
    case "amount_with_period_and_space_separator":
        o = e(t, 2, " ", ".");
        break;
    case "amount_no_decimals_with_comma_separator":
        o = e(t, 0, ".", ",");
        break;
    case "amount_no_decimals_with_space_separator":
        o = e(t, 0, ".", "");
        break;
    case "amount_with_space_separator":
        o = e(t, 2, ",", "");
        break;
    case "amount_with_apostrophe_separator":
        o = e(t, 2, "'", ".")
    }
    return i.replace(a, o)
};;var cb  = function($) {
	var $this 			  = jQuery(this),
      $dom          = $this.closest('.lh-collection-slide'),
      money_format  = decodeURIComponent($dom.data('moneyFormat')).replace(/\+/g,' ');
  var initSelectVariant = function(){
    var $doms = $this.find('.lh-product-swatch');
  	if( $doms.length){
      $doms.each(function(){
        var _this = jQuery(this),
          select_id = _this.find('.lh-block_variants').attr('id');
        var $json_data = _this.find('script[id^="lh-swatch-json-"]').html();
        try{$json_data = JSON.parse($json_data);}catch(e){$json_data = {}};
  			var selectCallback = function(variant, selector) {
          var $block_content = $(selector.variantIdField).closest('.lh-collection-item');
          var input_id      = $block_content.find('input[name="id"]'),
              price_wrapper = $block_content.find('.lh-price'),
              thumb_wrapper = $block_content.find('.lh-collection-thumb'),
              sale_label    = $block_content.find('.lh-onsale span'),
              $soldout      = $block_content.find('.lh-sold-out'),
              pic_one       = $block_content.find('.lh-collection-thumb img.hover-image');
  				if (variant) {
  					input_id.val(variant.id)
  					if(variant.featured_image != null){
  						var img = new Image();
              var url_new = resizeImage(variant.featured_image.src,section.settings.image_size.trim());
              pic_one.attr('src',url_new);
              img.onload = function() {
                thumb_wrapper.removeClass('lh-loading');
  						}
  						img.src = url_new;
  					}else{
  						thumb_wrapper.removeClass('lh-loading');
  					}
            $block_content.attr('data-v-type','');
  					var html_price = '';
            if(!variant.available){
              $soldout.attr('data-lhi','trans_soldout_text').html(section.settings.trans_soldout_text);
              $block_content.attr('data-v-type','soldout');
            }
            if(variant.compare_at_price > variant.price){
              if(variant.available){
                $block_content.attr('data-v-type','sale');
                sale_label.html(Math.round((1 - variant.price / variant.compare_at_price) * 100) + "%");
              }
              html_price += `
              <del class="lh-product-compare-price">`+window.HUB.formatMoney(variant.compare_at_price, money_format)+`</del>`;
            }
            html_price += `
            <ins class="lh-product-price">`+window.HUB.formatMoney(variant.price, money_format)+`</ins>`
            price_wrapper.html(html_price);
            for(var i = 1 ; i <= 3 ; i++){
              if(variant['option' + i]){
                var wrap_swatch = $block_content.find('.lh-content__variants_list[data-option-index="' + (i - 1) + '"]'),
                    value 			= variant['option' + i];
                if(!wrap_swatch.length) continue;
                var wrap_active = wrap_swatch.find(`.lh-swatch-on-grid:has([data-value='${value.replace(/'/g, "&#39;")}'])`);
                wrap_active.addClass('active').siblings().removeClass('active');
              }
            }
  				} else {
            $soldout.attr('data-lhi','unavailable_text').html(section.settings.unavailable_text);
            $block_content.attr('data-v-type','unavai');
  					thumb_wrapper.removeClass('lh-loading');
  				}
  			}
  			if($json_data && select_id){
          var $option_selections = new Shopify.OptionSelectors(select_id, { product: $json_data , onVariantSelected: selectCallback });
        }
      });
    }
  }
	var resizeImage = function(t, r) {

            try {
                if (t.indexOf('cdn.shopify.com') === -1)
                    return t;
                if (!r || "original" == r ||  "full" == r || "master" == r)
                    return t;
                var o = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)((\#[0-9a-z\-]+)?(\?v=.*)?)?$/igm);
		        if (null == o)
		            return null;
		        var i = t.split(o[0])
		          , x = o[0];
		        return i[0] + "_" + r + x;
            } catch (o) {
                return t
            }
        }
  function onClickVariant() {
    $this.find('.lh-content__variants_list').each(function(){
      var ul_variant = $(this)
      var id = ul_variant.data('target');
      ul_variant.find('>li').on('click',function(e){
				ul_variant.closest('.lh-collection-item').find('.lh-collection-thumb').addClass('lh-loading');
        var li_variant = $(this);
        var thumb = li_variant.closest('.lh-product-item').find('.lh-product-thumb');
        //thumb.addClass('lh-loading');
        li_variant.parent().find('>li.active').removeClass('active');
        li_variant.addClass('active')
        li_variant.parents('.lh-product-swatch').find('#' + id)
          .val(li_variant.find('.lh-swatch').data('value'))
          .trigger('change');
      })
    })
  }
  function initRating(){
    if (!document.querySelector('#lh-fake-review') && !window.SPR && window.LAYOUTHUB_LIVE === true) {
      jQuery.get('https://productreviews.shopifycdn.com/assets/v4/spr.js', function(code) {

          var regex = new RegExp(['"','/','/'].join(''),'gm');
          code = code.replace(regex, '"https://').replace(/SPR\./g,'window.SPR.').replace('window.SPR=','window.SPR=window.SPR || ');
          code = code.replace('return r=t.remote_id.toString()','if(!t.remote_id)return 0;return r=t.remote_id.toString()');
          code = code.replace('return r.fn.serializeObject','return !r || !r.fb ? false : r.fn.serializeObject');
        var blob = new Blob([code], {
          type: "application/javascript"
        });
        var url = URL.createObjectURL(blob);
        var script = document.createElement("script");
        script.src = url;
        script.id = "lh-fake-review";
        script.type = "text/javascript";
        if (!window.SPR)
        document.head.append(script);
      })
    } else {

      if (window.SPR && window.SPR.$) {
          window.SPR.loadjQueryExtentions(window.SPR.$);
          window.SPR.$(document).ready(function() {
              return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
          })
      }
    }
  }
  function initAll(){
    initSelectVariant();
    onClickVariant();
    if(window.LAYOUTHUB_LIVE || window.location.protocol === 'blob:'){
      initRating();
    }
  }
  initAll();
 };						cb.bind($('section[data-section-id="g4mCAFfp2r"] include[data-name="content"][data-id="1"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="g4mCAFfp2r"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/wbYa79FjKrymskDP/o-product/",						settings: {"image_size":"540x540_crop_center","trans_soldout_text":"SOLD OUT","unavailable_text":"UNAVAILABLE"}					}, jQuery);})(jQuery);;console.log('This page layout has been built by https://www.layouthub.com');