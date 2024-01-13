const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","flag.svg","fonts/Satoshi-Variable.eot","fonts/Satoshi-Variable.ttf","fonts/Satoshi-Variable.woff","fonts/Satoshi-Variable.woff2","fonts/Satoshi-VariableItalic.eot","fonts/Satoshi-VariableItalic.ttf","fonts/Satoshi-VariableItalic.woff","fonts/Satoshi-VariableItalic.woff2","robots.txt","satoshi.css"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.WFrb-dor.js","app":"_app/immutable/entry/app.Ln-sVLox.js","imports":["_app/immutable/entry/start.WFrb-dor.js","_app/immutable/chunks/entry.DG1OwOEN.js","_app/immutable/chunks/scheduler.Qh0fDJEo.js","_app/immutable/chunks/index.cED0NsWl.js","_app/immutable/entry/app.Ln-sVLox.js","_app/immutable/chunks/scheduler.Qh0fDJEo.js","_app/immutable/chunks/index.FzMpYAU-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-XcqLJJFs.js')),
			__memo(() => import('./chunks/1-z1Y0vQ-1.js')),
			__memo(() => import('./chunks/2-Zkf-Y-y1.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/timer",
				pattern: /^\/api\/timer\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts--jlv5ko2.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
