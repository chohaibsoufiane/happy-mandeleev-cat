"use strict";

// Tracks loaded SVG documents and object readiness.

function createSvgRegistry({ domDocument = document } = {}) {
  const docs = new Set();
  const docNames = new WeakMap();
  const newDocHandlers = [];
  const existingDocHandlers = [];

  function setDocName(doc, svgName) {
    if (!doc || !svgName) return;
    docNames.set(doc, svgName);
    if (doc.documentElement) doc.documentElement.setAttribute("data-comnyang-svg-name", svgName);
  }

  function runHandlers(handlers, doc, svgName) {
    for (const handler of handlers) handler(doc, svgName);
  }

  function registerDoc(doc, svgName = null) {
    if (!doc) return null;
    setDocName(doc, svgName);
    if (docs.has(doc)) {
      runHandlers(existingDocHandlers, doc, svgName);
      return doc;
    }
    docs.add(doc);
    runHandlers(newDocHandlers, doc, svgName);
    return doc;
  }

  function ensureObjectReady(id) {
    const el = domDocument.getElementById(id);
    if (el && !el.getAttribute("data")) {
      const src = el.getAttribute("data-src");
      if (src) el.setAttribute("data", src);
    }
    const doc = el && el.contentDocument;
    if (!doc) return null;
    if (!docs.has(doc)) {
      registerDoc(doc, id);
    } else {
      runHandlers(existingDocHandlers, doc, id);
    }
    return doc;
  }

  function registerObjectWhenReady(id, onReady) {
    const el = domDocument.getElementById(id);
    if (!el) return null;
    const register = () => {
      if (!el.contentDocument) return;
      registerDoc(el.contentDocument, id);
      if (onReady) onReady(el.contentDocument, id, el);
    };
    el.addEventListener("load", register);
    requestAnimationFrame(register);
    return el;
  }

  function forEach(callback) {
    for (const doc of docs) callback(doc);
  }

  function getName(doc) {
    return docNames.get(doc) || (doc && doc.documentElement && doc.documentElement.getAttribute("data-comnyang-svg-name"));
  }

  return {
    ensureObjectReady,
    forEach,
    getName,
    hasDoc: (doc) => docs.has(doc),
    onExistingDoc: (handler) => existingDocHandlers.push(handler),
    onNewDoc: (handler) => newDocHandlers.push(handler),
    registerDoc,
    registerObjectWhenReady,
  };
}

module.exports = {
  createSvgRegistry,
};
