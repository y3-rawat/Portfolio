import { p as promiseResolve, b as bootstrapLazy }
 from "./index-5514a13d.js"; const patchBrowser = () => 
 { var o = import.meta.url; const e = {}; return "" !== o && (e.resourcesUrl = new URL(".", o).href), promiseResolve(e) };
patchBrowser().then(o => bootstrapLazy([["ion-icon", [[1, "ion-icon", { mode: [1025], color: [1], ios: [1], md: [1],
     flipRtl: [4, "flip-rtl"], name: [513], src: [1], icon: [8], size: [1], lazy: [4], sanitize: [4], svgContent: [32], isVisible: [32] }]]]], o));