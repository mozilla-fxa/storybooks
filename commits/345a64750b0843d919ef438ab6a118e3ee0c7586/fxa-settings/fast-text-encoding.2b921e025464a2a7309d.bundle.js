(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1268:function(module,exports,__webpack_require__){(function(global,Buffer){!function(l){function m(){}function k(a,c){if(a=void 0===a?"utf-8":a,c=void 0===c?{fatal:!1}:c,-1===r.indexOf(a.toLowerCase()))throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('"+a+"') is invalid.");if(c.fatal)throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.")}function q(a){for(var c=0,f=Math.min(65536,a.length+1),e=new Uint16Array(f),h=[],d=0;;){var b=c<a.length;if(!b||d>=f-1){if(h.push(String.fromCharCode.apply(null,e.subarray(0,d))),!b)return h.join("");a=a.subarray(c),d=c=0}if(0==(128&(b=a[c++])))e[d++]=b;else if(192==(224&b)){var g=63&a[c++];e[d++]=(31&b)<<6|g}else if(224==(240&b)){g=63&a[c++];var n=63&a[c++];e[d++]=(31&b)<<12|g<<6|n}else if(240==(248&b)){65535<(b=(7&b)<<18|(g=63&a[c++])<<12|(n=63&a[c++])<<6|63&a[c++])&&(b-=65536,e[d++]=b>>>10&1023|55296,b=56320|1023&b),e[d++]=b}}}if(l.TextEncoder&&l.TextDecoder)return!1;var r=["utf-8","utf8","unicode-1-1-utf-8"];Object.defineProperty(m.prototype,"encoding",{value:"utf-8"}),m.prototype.encode=function(a,c){if((c=void 0===c?{stream:!1}:c).stream)throw Error("Failed to encode: the 'stream' option is unsupported.");c=0;for(var f=a.length,e=0,h=Math.max(32,f+(f>>>1)+7),d=new Uint8Array(h>>>3<<3);c<f;){var b=a.charCodeAt(c++);if(55296<=b&&56319>=b){if(c<f){var g=a.charCodeAt(c);56320==(64512&g)&&(++c,b=((1023&b)<<10)+(1023&g)+65536)}if(55296<=b&&56319>=b)continue}if(e+4>d.length&&(h+=8,h=(h*=1+c/a.length*2)>>>3<<3,(g=new Uint8Array(h)).set(d),d=g),0==(4294967168&b))d[e++]=b;else{if(0==(4294965248&b))d[e++]=b>>>6&31|192;else if(0==(4294901760&b))d[e++]=b>>>12&15|224,d[e++]=b>>>6&63|128;else{if(0!=(4292870144&b))continue;d[e++]=b>>>18&7|240,d[e++]=b>>>12&63|128,d[e++]=b>>>6&63|128}d[e++]=63&b|128}}return d.slice?d.slice(0,e):d.subarray(0,e)},Object.defineProperty(k.prototype,"encoding",{value:"utf-8"}),Object.defineProperty(k.prototype,"fatal",{value:!1}),Object.defineProperty(k.prototype,"ignoreBOM",{value:!1});var p=q;"function"==typeof Buffer&&Buffer.from?p=function t(a){return Buffer.from(a.buffer,a.byteOffset,a.byteLength).toString("utf-8")}:"function"==typeof Blob&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&(p=function u(a){var c=URL.createObjectURL(new Blob([a],{type:"text/plain;charset=UTF-8"}));try{var f=new XMLHttpRequest;return f.open("GET",c,!1),f.send(),f.responseText}catch(e){return q(a)}finally{URL.revokeObjectURL(c)}}),k.prototype.decode=function(a,c){if((c=void 0===c?{stream:!1}:c).stream)throw Error("Failed to decode: the 'stream' option is unsupported.");return a=a instanceof Uint8Array?a:a.buffer instanceof ArrayBuffer?new Uint8Array(a.buffer):new Uint8Array(a),p(a)},l.TextEncoder=m,l.TextDecoder=k}("undefined"!=typeof window?window:void 0!==global?global:this)}).call(this,__webpack_require__(33),__webpack_require__(1237).Buffer)}}]);
//# sourceMappingURL=fast-text-encoding.2b921e025464a2a7309d.bundle.js.map