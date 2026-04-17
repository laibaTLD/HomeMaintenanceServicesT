(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/templates/HomeMaintenanceServices/app/lib/fetch-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Lightweight fetch-based API client to replace axios
// Reduces bundle size and improves performance
__turbopack_context__.s([
    "FetchError",
    ()=>FetchError,
    "api",
    ()=>api,
    "createFetchApi",
    ()=>createFetchApi,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
class FetchError extends Error {
    status;
    response;
    constructor(message, status, response){
        super(message), this.status = status, this.response = response;
        this.name = 'FetchError';
    }
}
const createFetchApi = (baseURL, defaultTimeout = 30000)=>{
    const sleep = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
    const request = async (endpoint, options = {}, retries = 3)=>{
        const { timeout = defaultTimeout, ...fetchOptions } = options;
        const url = endpoint.startsWith('http') ? endpoint : `${baseURL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), timeout);
        try {
            console.log(`[fetch-api] GET ${url}`);
            const response = await fetch(url, {
                ...fetchOptions,
                signal: controller.signal,
                headers: {
                    'Content-Type': 'application/json',
                    ...fetchOptions.headers
                }
            });
            clearTimeout(timeoutId);
            console.log(`[fetch-api] Response status: ${response.status}`);
            if (!response.ok) {
                // Handle 429 rate limit with retry and jitter
                if (response.status === 429 && retries > 0) {
                    const attempt = 3 - retries; // 1, 2, 3
                    const baseDelay = Math.min(Math.pow(2, attempt) * 1000, 5000); // 1s, 2s, 4s
                    const jitter = Math.random() * 500; // 0-500ms random jitter
                    const delay = baseDelay + jitter;
                    console.warn(`Rate limited (429), retrying in ${Math.round(delay)}ms... (${retries} retries left)`);
                    await sleep(delay);
                    return request(endpoint, options, retries - 1);
                }
                // Try to parse error response
                let errorMessage = `HTTP error! status: ${response.status}`;
                try {
                    const errorData = await response.json();
                    if (errorData.error?.message) {
                        errorMessage = errorData.error.message;
                    }
                } catch  {
                // Ignore error parsing failures
                }
                throw new FetchError(errorMessage, response.status, response);
            }
            // Handle empty responses
            const contentType = response.headers.get('content-type');
            const text = await response.text();
            if (!text || text.trim() === '') {
                console.log(`[fetch-api] Empty response for ${url}`);
                return {};
            }
            if (contentType && contentType.includes('application/json')) {
                const json = JSON.parse(text);
                console.log(`[fetch-api] JSON response for ${url}:`, json);
                return json;
            }
            return text;
        } catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    console.error(`[fetch-api] Timeout for ${url}`);
                    throw new FetchError('Request timeout', undefined, undefined);
                }
                // Don't log 404 errors as they're often expected (e.g., missing endpoints)
                const is404 = error.message?.includes('404') || error.message?.includes('status: 404');
                if (!is404) {
                    console.error(`[fetch-api] Error for ${url}:`, error.message);
                }
                throw new FetchError(error.message);
            }
            console.error(`[fetch-api] Unknown error for ${url}:`, error);
            throw new FetchError('Unknown error occurred');
        }
    };
    return {
        get: (endpoint, options)=>request(endpoint, {
                ...options,
                method: 'GET'
            }),
        post: (endpoint, data, options)=>request(endpoint, {
                ...options,
                method: 'POST',
                body: data ? JSON.stringify(data) : undefined
            }),
        put: (endpoint, data, options)=>request(endpoint, {
                ...options,
                method: 'PUT',
                body: data ? JSON.stringify(data) : undefined
            }),
        patch: (endpoint, data, options)=>request(endpoint, {
                ...options,
                method: 'PATCH',
                body: data ? JSON.stringify(data) : undefined
            }),
        delete: (endpoint, options)=>request(endpoint, {
                ...options,
                method: 'DELETE'
            })
    };
};
// Create API instance
const rawBaseUrl = ("TURBOPACK compile-time value", "http://localhost:5000/api") || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'http://localhost:5000/api');
const isLocalRaw = /^http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?\b/i.test(rawBaseUrl);
const API_BASE_URL = rawBaseUrl.startsWith('http://') && !isLocalRaw ? rawBaseUrl.replace(/^http:\/\//i, 'https://') : rawBaseUrl;
const api = createFetchApi(API_BASE_URL);
;
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogApi",
    ()=>blogApi,
    "default",
    ()=>__TURBOPACK__default__export__,
    "mediaApi",
    ()=>mediaApi,
    "pageApi",
    ()=>pageApi,
    "projectApi",
    ()=>projectApi,
    "serviceApi",
    ()=>serviceApi,
    "serviceAreaApi",
    ()=>serviceAreaApi,
    "siteApi",
    ()=>siteApi,
    "testimonialApi",
    ()=>testimonialApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/fetch-api.ts [app-client] (ecmascript)");
;
const siteApi = {
    getSiteBySlug: async (slug)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/public/sites/${slug}`);
        return response.data?.data ?? response.data;
    },
    getSites: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/sites');
        return response.data?.data ?? response.data;
    }
};
const pageApi = {
    getPagesBySite: async (siteSlug)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/public/sites/${siteSlug}/pages`);
        return response.data?.data ?? response.data;
    },
    getPageBySlug: async (siteSlug, pageSlug)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/public/sites/${siteSlug}/pages/${pageSlug}`);
        return response.data?.data ?? response.data;
    },
    getPage: async (pageId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/pages/${pageId}`);
        return response.data;
    }
};
const serviceApi = {
    getServicesBySite: async (siteSlug)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/public/sites/${siteSlug}/services`);
        return response.data?.data ?? response.data;
    },
    getServiceBySlug: async (siteSlug, serviceSlug)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/public/sites/${siteSlug}/services/${serviceSlug}`);
        return response.data?.data ?? response.data;
    },
    getServices: async (serviceIds)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/public/services/batch', {
            serviceIds
        });
        return response.data?.data ?? response.data;
    }
};
const blogApi = {
    getPostsBySite: async (siteSlug, limit)=>{
        const url = limit ? `/public/sites/${siteSlug}/blog?limit=${limit}` : `/public/sites/${siteSlug}/blog`;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url);
        return response.data?.data ?? response.data;
    },
    getPostBySlug: async (siteSlug, postSlug)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/public/sites/${siteSlug}/blog/${postSlug}`);
        return response.data?.data ?? response.data;
    }
};
const projectApi = {
    getProjectsBySite: async (siteSlug, limit)=>{
        const url = limit ? `/public/sites/${siteSlug}/projects?limit=${limit}` : `/public/sites/${siteSlug}/projects`;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url);
        return response.data?.data ?? response.data;
    },
    getProjectBySlug: async (siteSlug, projectSlug)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/public/sites/${siteSlug}/projects/${projectSlug}`);
        return response.data?.data ?? response.data;
    }
};
const testimonialApi = {
    getTestimonialsBySite: async (siteSlug)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/testimonials?siteSlug=${siteSlug}`);
        return response.data?.data ?? response.data ?? {
            testimonials: []
        };
    }
};
const serviceAreaApi = {
    getServiceAreaPagesBySite: async (siteSlug)=>{
        // Try both endpoint patterns for compatibility
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/public/sites/${siteSlug}/service-area-pages`);
            return response.data?.data ?? response.data ?? [];
        } catch (err) {
            // Fallback to empty array if endpoint doesn't exist
            console.warn('Service area pages endpoint not available');
            return [];
        }
    }
};
const mediaApi = {
    getMediaUrl: (path)=>{
        // If already a full URL, return as-is
        if (path?.startsWith('http')) {
            const isLocal = /^http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?\b/i.test(path);
            return isLocal ? path : path.replace(/^http:\/\//i, 'https://');
        }
        // Remove leading slash and /uploads/ prefix if present
        let cleanPath = path?.replace(/^\//, '') || '';
        cleanPath = cleanPath.replace(/^uploads\//, '');
        if (!cleanPath) return '';
        const baseUrl = ("TURBOPACK compile-time value", "http://localhost:5000/api")?.replace('/api', '') || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'http://localhost:5000');
        const isLocalBase = /^http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?\b/i.test(baseUrl);
        const httpsBaseUrl = isLocalBase ? baseUrl : baseUrl.replace(/^http:\/\//i, 'https://');
        return `${httpsBaseUrl}/uploads/${cleanPath}`;
    }
};
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebBuilderProvider",
    ()=>WebBuilderProvider,
    "useWebBuilder",
    ()=>useWebBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// Site slug from environment variable
const SITE_SLUG = ("TURBOPACK compile-time value", "default") || 'brightpath-home-services-mm9bo6ed-2n7p';
const WebBuilderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useWebBuilder = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WebBuilderContext);
    if (context === undefined) {
        throw new Error('useWebBuilder must be used within a WebBuilderProvider');
    }
    return context;
};
_s(useWebBuilder, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const WebBuilderProvider = ({ children })=>{
    _s1();
    const [site, setSite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [blogPosts, setBlogPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [testimonials, setTestimonials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [serviceAreaPages, setServiceAreaPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadSite = async (slug)=>{
        try {
            setLoading(true);
            setError(null);
            // Use real API when backend is available
            const siteData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteApi"].getSiteBySlug(slug);
            setSite(siteData);
            await Promise.all([
                loadPages(siteData.slug),
                loadServicesBySiteSlug(siteData.slug),
                loadBlogPosts(siteData.slug),
                loadProjects(siteData.slug),
                loadTestimonials(siteData.slug),
                loadServiceAreaPages(siteData.slug)
            ]);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load site');
        } finally{
            setLoading(false);
        }
    };
    const loadPage = async (siteSlug, pageSlug)=>{
        try {
            setLoading(true);
            setError(null);
            const pageData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageApi"].getPageBySlug(siteSlug, pageSlug);
            setCurrentPage(pageData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load page');
        } finally{
            setLoading(false);
        }
    };
    const loadPages = async (siteSlug)=>{
        try {
            const pagesData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageApi"].getPagesBySite(siteSlug);
            setPages(pagesData);
        } catch (err) {
            console.warn('Failed to load pages:', err instanceof Error ? err.message : 'Unknown error');
        }
    };
    const loadServicesBySiteSlug = async (siteSlug)=>{
        try {
            const servicesData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceApi"].getServicesBySite(siteSlug);
            setServices(servicesData);
        } catch (err) {
            console.warn('Failed to load services:', err instanceof Error ? err.message : 'Unknown error');
        }
    };
    const loadBlogPosts = async (siteSlug, limit)=>{
        try {
            const postsData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogApi"].getPostsBySite(siteSlug, limit);
            setBlogPosts(postsData);
        } catch (err) {
            console.warn('Failed to load blog posts:', err instanceof Error ? err.message : 'Unknown error');
        }
    };
    const loadProjects = async (siteSlug, limit)=>{
        try {
            const projectsData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectApi"].getProjectsBySite(siteSlug, limit);
            setProjects(projectsData);
        } catch (err) {
            console.warn('Failed to load projects:', err instanceof Error ? err.message : 'Unknown error');
        }
    };
    const loadTestimonials = async (siteSlug)=>{
        try {
            console.log('[WebBuilderProvider] Loading testimonials for site:', siteSlug);
            const testimonialsData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonialApi"].getTestimonialsBySite(siteSlug);
            console.log('[WebBuilderProvider] Testimonials loaded:', testimonialsData);
            setTestimonials(testimonialsData);
        } catch (err) {
            console.warn('Failed to load testimonials:', err instanceof Error ? err.message : 'Unknown error');
        }
    };
    const loadServiceAreaPages = async (siteSlug)=>{
        try {
            const serviceAreaPagesData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceAreaApi"].getServiceAreaPagesBySite(siteSlug);
            setServiceAreaPages(serviceAreaPagesData);
        } catch (err) {
            console.warn('Failed to load service area pages:', err instanceof Error ? err.message : 'Unknown error');
        }
    };
    // Auto-load site from env variable on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebBuilderProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            loadSite(SITE_SLUG);
        }
    }["WebBuilderProvider.useEffect"], []);
    // Poll for site updates every 3 seconds to detect theme/color changes from builder
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebBuilderProvider.useEffect": ()=>{
            if (!site?.slug) return;
            const intervalId = setInterval({
                "WebBuilderProvider.useEffect.intervalId": async ()=>{
                    try {
                        const siteData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteApi"].getSiteBySlug(site.slug);
                        setSite({
                            "WebBuilderProvider.useEffect.intervalId": (prevSite)=>{
                                // Only update if theme has changed
                                if (prevSite && JSON.stringify(prevSite.theme) !== JSON.stringify(siteData.theme)) {
                                    return siteData;
                                }
                                return prevSite;
                            }
                        }["WebBuilderProvider.useEffect.intervalId"]);
                    } catch (err) {
                    // Silently ignore polling errors to not disrupt user experience
                    }
                }
            }["WebBuilderProvider.useEffect.intervalId"], 3000);
            return ({
                "WebBuilderProvider.useEffect": ()=>clearInterval(intervalId)
            })["WebBuilderProvider.useEffect"];
        }
    }["WebBuilderProvider.useEffect"], [
        site?.slug
    ]);
    // Poll for projects updates every 5 seconds to detect new/updated published projects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebBuilderProvider.useEffect": ()=>{
            if (!site?.slug) return;
            const intervalId = setInterval({
                "WebBuilderProvider.useEffect.intervalId": async ()=>{
                    try {
                        const projectsData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectApi"].getProjectsBySite(site.slug);
                        setProjects({
                            "WebBuilderProvider.useEffect.intervalId": (prevProjects)=>{
                                if (JSON.stringify(prevProjects) !== JSON.stringify(projectsData)) {
                                    return projectsData;
                                }
                                return prevProjects;
                            }
                        }["WebBuilderProvider.useEffect.intervalId"]);
                    } catch (err) {
                    // Silently ignore polling errors
                    }
                }
            }["WebBuilderProvider.useEffect.intervalId"], 5000);
            return ({
                "WebBuilderProvider.useEffect": ()=>clearInterval(intervalId)
            })["WebBuilderProvider.useEffect"];
        }
    }["WebBuilderProvider.useEffect"], [
        site?.slug
    ]);
    // Poll for pages updates every 5 seconds so navigation updates after creating/publishing pages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebBuilderProvider.useEffect": ()=>{
            if (!site?.slug) return;
            const intervalId = setInterval({
                "WebBuilderProvider.useEffect.intervalId": async ()=>{
                    try {
                        const pagesData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageApi"].getPagesBySite(site.slug);
                        setPages({
                            "WebBuilderProvider.useEffect.intervalId": (prevPages)=>{
                                if (JSON.stringify(prevPages) !== JSON.stringify(pagesData)) {
                                    return pagesData;
                                }
                                return prevPages;
                            }
                        }["WebBuilderProvider.useEffect.intervalId"]);
                    } catch (err) {
                    // Silently ignore polling errors
                    }
                }
            }["WebBuilderProvider.useEffect.intervalId"], 5000);
            return ({
                "WebBuilderProvider.useEffect": ()=>clearInterval(intervalId)
            })["WebBuilderProvider.useEffect"];
        }
    }["WebBuilderProvider.useEffect"], [
        site?.slug
    ]);
    // Poll for services updates every 5 seconds to detect slug and content changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebBuilderProvider.useEffect": ()=>{
            if (!site?.slug) return;
            const intervalId = setInterval({
                "WebBuilderProvider.useEffect.intervalId": async ()=>{
                    try {
                        const servicesData = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceApi"].getServicesBySite(site.slug);
                        setServices({
                            "WebBuilderProvider.useEffect.intervalId": (prevServices)=>{
                                // Only update if services data has changed
                                if (JSON.stringify(prevServices) !== JSON.stringify(servicesData)) {
                                    return servicesData;
                                }
                                return prevServices;
                            }
                        }["WebBuilderProvider.useEffect.intervalId"]);
                    } catch (err) {
                    // Silently ignore polling errors
                    }
                }
            }["WebBuilderProvider.useEffect.intervalId"], 5000);
            return ({
                "WebBuilderProvider.useEffect": ()=>clearInterval(intervalId)
            })["WebBuilderProvider.useEffect"];
        }
    }["WebBuilderProvider.useEffect"], [
        site?.slug
    ]);
    const contextValue = {
        site,
        pages,
        services,
        blogPosts,
        projects,
        testimonials,
        serviceAreaPages,
        currentPage,
        setCurrentPage,
        loading,
        error,
        loadPage
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebBuilderContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(WebBuilderProvider, "I7AYCXHJxLU+N4p5y9WMc3cUCgw=");
_c = WebBuilderProvider;
var _c;
__turbopack_context__.k.register(_c, "WebBuilderProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/providers/ChatbotProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatbotProvider",
    ()=>ChatbotProvider,
    "useChatbotContext",
    ()=>useChatbotContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/fetch-api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ChatbotContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useChatbotContext = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ChatbotContext);
    if (context === undefined) {
        throw new Error('useChatbotContext must be used within a ChatbotProvider');
    }
    return context;
};
_s(useChatbotContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ChatbotProvider = ({ children, settings })=>{
    _s1();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize with welcome message when settings load
    __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ChatbotProvider.useEffect": ()=>{
            if (settings?.isEnabled && messages.length === 0) {
                setMessages([
                    {
                        id: 'welcome',
                        role: 'assistant',
                        content: settings.welcomeMessage,
                        timestamp: new Date()
                    }
                ]);
            }
        }
    }["ChatbotProvider.useEffect"], [
        settings
    ]);
    const toggleChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotProvider.useCallback[toggleChat]": ()=>{
            setIsOpen({
                "ChatbotProvider.useCallback[toggleChat]": (prev)=>!prev
            }["ChatbotProvider.useCallback[toggleChat]"]);
        }
    }["ChatbotProvider.useCallback[toggleChat]"], []);
    const openChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotProvider.useCallback[openChat]": ()=>{
            setIsOpen(true);
        }
    }["ChatbotProvider.useCallback[openChat]"], []);
    const closeChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotProvider.useCallback[closeChat]": ()=>{
            setIsOpen(false);
        }
    }["ChatbotProvider.useCallback[closeChat]"], []);
    const clearMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotProvider.useCallback[clearMessages]": ()=>{
            setMessages([]);
        }
    }["ChatbotProvider.useCallback[clearMessages]"], []);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatbotProvider.useCallback[sendMessage]": async (content)=>{
            if (!settings || !content.trim()) return;
            const userMessage = {
                id: Date.now().toString(),
                role: 'user',
                content: content.trim(),
                timestamp: new Date()
            };
            setMessages({
                "ChatbotProvider.useCallback[sendMessage]": (prev)=>[
                        ...prev,
                        userMessage
                    ]
            }["ChatbotProvider.useCallback[sendMessage]"]);
            setIsLoading(true);
            try {
                // Use backend proxy for secure API calls (API keys stay on backend)
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/chatbot/public/${settings.siteId}/chat`, {
                    message: content
                });
                const responseText = response.data?.data?.response || 'Sorry, I could not generate a response.';
                const assistantMessage = {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: responseText,
                    timestamp: new Date()
                };
                setMessages({
                    "ChatbotProvider.useCallback[sendMessage]": (prev)=>[
                            ...prev,
                            assistantMessage
                        ]
                }["ChatbotProvider.useCallback[sendMessage]"]);
            } catch (error) {
                console.error('Chatbot API error:', error);
                const errorMessage = {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: 'Sorry, I encountered an error. Please try again later.',
                    timestamp: new Date()
                };
                setMessages({
                    "ChatbotProvider.useCallback[sendMessage]": (prev)=>[
                            ...prev,
                            errorMessage
                        ]
                }["ChatbotProvider.useCallback[sendMessage]"]);
            } finally{
                setIsLoading(false);
            }
        }
    }["ChatbotProvider.useCallback[sendMessage]"], [
        settings
    ]);
    const contextValue = {
        isOpen,
        messages,
        isLoading,
        settings,
        toggleChat,
        openChat,
        closeChat,
        sendMessage,
        clearMessages
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatbotContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/providers/ChatbotProvider.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ChatbotProvider, "dnsrm0oL/iJ0ffltlM82F5jpA/g=");
_c = ChatbotProvider;
var _c;
__turbopack_context__.k.register(_c, "ChatbotProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/hooks/useChatbot.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChatbot",
    ()=>useChatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/fetch-api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useChatbot(siteId) {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useChatbot.useCallback[fetchSettings]": async ()=>{
            if (!siteId) {
                setSettings(null);
                return;
            }
            try {
                setLoading(true);
                setError(null);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$fetch$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/chatbot/public/${siteId}`);
                const data = response.data?.data ?? response.data;
                // Inject siteId into settings for proxy API calls
                setSettings(data ? {
                    ...data,
                    siteId
                } : null);
            } catch (err) {
                console.warn('Failed to load chatbot settings:', err);
                setSettings(null);
                setError(err instanceof Error ? err.message : 'Failed to load chatbot settings');
            } finally{
                setLoading(false);
            }
        }
    }["useChatbot.useCallback[fetchSettings]"], [
        siteId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChatbot.useEffect": ()=>{
            fetchSettings();
        }
    }["useChatbot.useEffect"], [
        fetchSettings
    ]);
    return {
        settings,
        loading,
        error,
        refetch: fetchSettings
    };
}
_s(useChatbot, "5KynAq5DyxGrUpWJUkjXKy61z7M=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatbotWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$ChatbotProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/ChatbotProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/loader-2.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ChatbotWidget() {
    _s();
    const { isOpen, messages, isLoading, settings, toggleChat, closeChat, sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$ChatbotProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatbotContext"])();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll to bottom of messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatbotWidget.useEffect": ()=>{
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }["ChatbotWidget.useEffect"], [
        messages
    ]);
    // Focus input when chat opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatbotWidget.useEffect": ()=>{
            if (isOpen && inputRef.current) {
                setTimeout({
                    "ChatbotWidget.useEffect": ()=>inputRef.current?.focus()
                }["ChatbotWidget.useEffect"], 100);
            }
        }
    }["ChatbotWidget.useEffect"], [
        isOpen
    ]);
    // Don't render if chatbot is disabled or no settings
    if (!settings?.isEnabled) {
        return null;
    }
    const handleSend = async ()=>{
        if (!inputValue.trim() || isLoading) return;
        const message = inputValue;
        setInputValue('');
        await sendMessage(message);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    // Get position styles based on settings
    const getPositionStyles = ()=>{
        switch(settings.position){
            case 'bottom-left':
                return {
                    bottom: '24px',
                    left: '24px'
                };
            case 'top-right':
                return {
                    top: '24px',
                    right: '24px'
                };
            case 'top-left':
                return {
                    top: '24px',
                    left: '24px'
                };
            case 'bottom-right':
            default:
                return {
                    bottom: '24px',
                    right: '80px'
                };
        }
    };
    const positionStyles = getPositionStyles();
    const isTopPosition = settings.position?.includes('top');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: toggleChat,
                className: "w-14 h-14 fixed bottom-[24px] right-[24px] rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 group z-[50]",
                style: {
                    background: `linear-gradient(135deg, ${settings.primaryColor} 0%, ${settings.secondaryColor} 100%)`,
                    boxShadow: `0 8px 32px ${settings.primaryColor}50, 0 4px 8px ${settings.primaryColor}30`
                },
                "aria-label": isOpen ? 'Close chat' : 'Open chat',
                children: settings.iconUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: settings.iconUrl,
                    alt: settings.botName,
                    className: "w-10 h-10 rounded-full object-cover ring-2 ring-white/20"
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 w-7 h-7 rounded-full animate-ping opacity-20",
                            style: {
                                backgroundColor: settings.secondaryColor
                            }
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                lineNumber: 76,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed z-[50] flex flex-col items-end`,
                style: positionStyles,
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 w-[300px] rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300",
                    style: {
                        background: `linear-gradient(180deg, ${settings.secondaryColor}15 0%, #ffffff 100%)`,
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${settings.secondaryColor}40`,
                        boxShadow: `0 25px 50px -12px ${settings.primaryColor}30, 0 0 0 1px ${settings.secondaryColor}20`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-4 flex items-center justify-between",
                            style: {
                                background: `linear-gradient(135deg, ${settings.primaryColor} 0%, ${settings.secondaryColor} 100%)`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                settings.iconUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: settings.iconUrl,
                                                    alt: settings.botName,
                                                    className: "w-10 h-10 rounded-full object-cover ring-2 ring-white/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full flex items-center justify-center ring-2 ring-white/30",
                                                    style: {
                                                        backgroundColor: 'rgba(255,255,255,0.2)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-5 h-5 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-semibold text-sm leading-tight",
                                                    children: settings.botName
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/70 text-xs",
                                                    children: "Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                        closeChat();
                                    },
                                    className: "p-2 rounded-full hover:bg-white/20 transition-all active:scale-95",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[280px] overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-transparent to-white/50",
                            children: [
                                messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl px-4 py-3 text-sm",
                                    style: {
                                        backgroundColor: `${settings.primaryColor}15`,
                                        color: settings.primaryColor,
                                        border: `1px solid ${settings.primaryColor}20`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: settings.botName
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        settings.welcomeMessage
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageBubble, {
                                        message: msg,
                                        primaryColor: settings.primaryColor,
                                        secondaryColor: settings.secondaryColor,
                                        isUser: msg.role === 'user'
                                    }, msg.id, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 text-gray-500 text-sm pl-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-8 h-8 rounded-full",
                                            style: {
                                                backgroundColor: `${settings.primaryColor}15`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 animate-spin",
                                                style: {
                                                    color: settings.primaryColor
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: [
                                                settings.botName,
                                                " is typing..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white border-t border-gray-100/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-4 py-3 rounded-full border-2 transition-all focus-within:shadow-lg",
                                style: {
                                    borderColor: `${settings.secondaryColor}40`,
                                    backgroundColor: '#f8f9fa'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        type: "text",
                                        value: inputValue,
                                        onChange: (e)=>setInputValue(e.target.value),
                                        onKeyDown: handleKeyDown,
                                        placeholder: settings.placeholderText,
                                        className: "flex-1 text-sm bg-transparent border-none outline-none placeholder:text-gray-400 text-gray-800"
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSend,
                                        disabled: !inputValue.trim() || isLoading,
                                        className: "w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95",
                                        style: {
                                            background: `linear-gradient(135deg, ${settings.primaryColor} 0%, ${settings.secondaryColor} 100%)`,
                                            boxShadow: `0 4px 14px ${settings.primaryColor}40`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            className: "w-4 h-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                lineNumber: 102,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(ChatbotWidget, "5QRIg1RLTYbR5n5Btc/Th2tGui0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$ChatbotProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatbotContext"]
    ];
});
_c = ChatbotWidget;
function MessageBubble({ message, primaryColor, secondaryColor, isUser }) {
    const formatTime = (date)=>{
        return new Date(date).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${isUser ? 'justify-end' : 'justify-start'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-[85%] rounded-[20px] px-4 py-3 ${isUser ? 'rounded-br-[8px] text-white' : 'rounded-bl-[8px] text-gray-800'}`,
            style: isUser ? {
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                boxShadow: `0 4px 15px ${primaryColor}30`
            } : {
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.04)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm leading-relaxed whitespace-pre-wrap",
                    children: message.content
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-[11px] mt-2 block font-medium ${isUser ? 'text-white/60' : 'text-gray-400'}`,
                    children: formatTime(message.timestamp)
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
            lineNumber: 262,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_c1 = MessageBubble;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatbotWidget");
__turbopack_context__.k.register(_c1, "MessageBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/providers/ChatbotProviderWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatbotProviderWrapper",
    ()=>ChatbotProviderWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$ChatbotProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/ChatbotProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useChatbot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useChatbot.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$chatbot$2f$ChatbotWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/chatbot/ChatbotWidget.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ChatbotProviderWrapper = ({ children })=>{
    _s();
    const { site } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useChatbot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatbot"])(site?._id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$ChatbotProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatbotProvider"], {
        settings: settings,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$chatbot$2f$ChatbotWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/providers/ChatbotProviderWrapper.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/providers/ChatbotProviderWrapper.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChatbotProviderWrapper, "P2nimDAlSqKWwJmDy8trSjd+T8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useChatbot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatbot"]
    ];
});
_c = ChatbotProviderWrapper;
var _c;
__turbopack_context__.k.register(_c, "ChatbotProviderWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary,
    "useErrorHandler",
    ()=>useErrorHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        // Call custom error handler if provided
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
        // In production, you might want to send this to an error reporting service
        if (("TURBOPACK compile-time value", "development") === 'production') {
        // Example: sendToErrorService(error, errorInfo);
        }
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-md mx-auto p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-red-500 text-6xl mb-4",
                            children: "⚠️"
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Something went wrong"
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "We're sorry, but something unexpected happened. Please try refreshing the page."
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.reload(),
                            className: "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                            children: "Refresh Page"
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        ("TURBOPACK compile-time value", "development") === 'development' && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "mt-6 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "cursor-pointer text-sm text-gray-500 hover:text-gray-700",
                                    children: "Error Details (Development Only)"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto text-red-600",
                                    children: this.state.error.stack
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx",
                            lineNumber: 61,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/ErrorBoundary.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
const useErrorHandler = ()=>{
    return (error, errorInfo)=>{
        console.error('Error caught by error handler:', error, errorInfo);
        if (("TURBOPACK compile-time value", "development") === 'production') {
        // Send to error reporting service
        // sendToErrorService(error, errorInfo);
        }
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ui/ThemeFontWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeFontWrapper",
    ()=>ThemeFontWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ThemeFontWrapper = ({ children })=>{
    _s();
    const { site } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const fonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeFontWrapper.useMemo[fonts]": ()=>{
            const heading = typeof site?.theme?.headingFont === 'string' ? site?.theme?.headingFont.trim() : '';
            const body = typeof site?.theme?.bodyFont === 'string' ? site?.theme?.bodyFont.trim() : '';
            return {
                heading: heading || undefined,
                body: body || undefined
            };
        }
    }["ThemeFontWrapper.useMemo[fonts]"], [
        site?.theme?.headingFont,
        site?.theme?.bodyFont
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeFontWrapper.useEffect": ()=>{
            if (typeof document === 'undefined') return;
            const uniqueFonts = Array.from(new Set([
                fonts.heading,
                fonts.body
            ].filter(Boolean)));
            if (uniqueFonts.length === 0) return;
            // Load fonts from Google Fonts. This assumes WebBuilder stores Google Fonts family names.
            // If a font isn't on Google Fonts, the browser will simply fall back.
            const familiesParam = uniqueFonts.map({
                "ThemeFontWrapper.useEffect.familiesParam": (f)=>`family=${encodeURIComponent(f).replace(/%20/g, '+')}:wght@300;400;500;600;700;800;900`
            }["ThemeFontWrapper.useEffect.familiesParam"]).join('&');
            const href = `https://fonts.googleapis.com/css2?${familiesParam}&display=swap`;
            const id = `wb-fonts-${uniqueFonts.join('|')}`;
            const existing = document.getElementById(id);
            if (existing) return;
            const link = document.createElement('link');
            link.id = id;
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        }
    }["ThemeFontWrapper.useEffect"], [
        fonts.heading,
        fonts.body
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: fonts.body || fonts.heading ? {
            fontFamily: fonts.body,
            ['--wb-heading-font']: fonts.heading,
            ['--wb-body-font']: fonts.body
        } : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/ui/ThemeFontWrapper.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeFontWrapper, "lNaHYdj6OfjTUBWUyQ90MrTqgbw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"]
    ];
});
_c = ThemeFontWrapper;
var _c;
__turbopack_context__.k.register(_c, "ThemeFontWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/i18n/LanguageProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const STORAGE_KEY = 'wb_language';
const COOKIE_KEY = 'wb_language';
const SUPPORTED_LANGUAGES = [
    'en',
    'es'
];
const FALLBACK_LANGUAGE = 'en';
const dictionaryLoaders = {
    en: ()=>__turbopack_context__.A("[project]/templates/HomeMaintenanceServices/app/locales/en/common.json (json, async loader)"),
    es: ()=>__turbopack_context__.A("[project]/templates/HomeMaintenanceServices/app/locales/es/common.json (json, async loader)")
};
function normalizeLanguage(input) {
    if (!input) return null;
    const raw = input.toLowerCase();
    const primary = raw.split('-')[0];
    if (SUPPORTED_LANGUAGES.includes(primary)) {
        return primary;
    }
    return null;
}
function readCookie(name) {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
}
function writeCookie(name, value, days = 365) {
    if (typeof document === 'undefined') return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; samesite=lax`;
}
function isSupported(lang) {
    return !!lang && SUPPORTED_LANGUAGES.includes(lang);
}
async function detectLanguageWithGeoIp() {
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GEOIP_URL;
    if (!url) return null;
    try {
        const res = await fetch(url, {
            method: 'GET'
        });
        if (!res.ok) return null;
        const data = await res.json();
        // Try common response shapes
        const countryCode = (data?.country_code || data?.countryCode || data?.country || '').toString().toUpperCase();
        // Minimal mapping (expandable)
        if ([
            'ES',
            'MX',
            'AR',
            'CO',
            'CL',
            'PE',
            'VE',
            'EC',
            'GT',
            'CU',
            'BO',
            'DO',
            'HN',
            'PY',
            'SV',
            'NI',
            'CR',
            'PA',
            'UY',
            'PR'
        ].includes(countryCode)) {
            return 'es';
        }
        return null;
    } catch  {
        return null;
    }
}
function interpolate(template, params) {
    if (!params) return template;
    return template.replace(/\{(\w+)\}/g, (_, key)=>(params[key] ?? `{${key}}`).toString());
}
function getByPath(obj, path) {
    return path.split('.').reduce((acc, part)=>acc && typeof acc === 'object' ? acc[part] : undefined, obj);
}
const LanguageProvider = ({ children })=>{
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(FALLBACK_LANGUAGE);
    const [dict, setDict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch  {
        // ignore
        }
        writeCookie(COOKIE_KEY, lang);
    };
    // Initial detection on first visit
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            let cancelled = false;
            async function init() {
                const stored = normalizeLanguage(({
                    "LanguageProvider.useEffect.init.stored": ()=>{
                        try {
                            return localStorage.getItem(STORAGE_KEY);
                        } catch  {
                            return null;
                        }
                    }
                })["LanguageProvider.useEffect.init.stored"]());
                const cookie = normalizeLanguage(readCookie(COOKIE_KEY));
                const browser = normalizeLanguage(typeof navigator !== 'undefined' ? navigator.language : null);
                let detected = stored || cookie || browser;
                if (!detected) {
                    detected = FALLBACK_LANGUAGE;
                }
                // If browser language isn't supported, optionally try Geo-IP
                if (!isSupported(detected)) {
                    const geo = await detectLanguageWithGeoIp();
                    detected = geo || FALLBACK_LANGUAGE;
                }
                if (cancelled) return;
                setLanguage(detected);
            }
            init();
            return ({
                "LanguageProvider.useEffect": ()=>{
                    cancelled = true;
                }
            })["LanguageProvider.useEffect"];
        }
    }["LanguageProvider.useEffect"], []);
    // Load dictionary when language changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            let cancelled = false;
            async function load() {
                setReady(false);
                try {
                    const loader = dictionaryLoaders[language] || dictionaryLoaders[FALLBACK_LANGUAGE];
                    const mod = await loader();
                    if (cancelled) return;
                    setDict(mod.default || {});
                } catch  {
                    if (cancelled) return;
                    setDict({});
                } finally{
                    if (cancelled) return;
                    setReady(true);
                }
                // Update html lang attribute
                if (typeof document !== 'undefined') {
                    document.documentElement.lang = language;
                }
            }
            load();
            return ({
                "LanguageProvider.useEffect": ()=>{
                    cancelled = true;
                }
            })["LanguageProvider.useEffect"];
        }
    }["LanguageProvider.useEffect"], [
        language
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[t]": ()=>{
            return ({
                "LanguageProvider.useMemo[t]": (key, params)=>{
                    const value = getByPath(dict, key);
                    if (typeof value === 'string') return interpolate(value, params);
                    if (value === 0) return '0';
                    if (typeof value === 'number') return String(value);
                    return key;
                }
            })["LanguageProvider.useMemo[t]"];
        }
    }["LanguageProvider.useMemo[t]"], [
        dict
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[value]": ()=>({
                language,
                setLanguage,
                t,
                ready
            })
    }["LanguageProvider.useMemo[value]"], [
        language,
        t,
        ready
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/i18n/LanguageProvider.tsx",
        lineNumber: 189,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "TTufjpc7KCnyOyCUG9rgL3k3ZRA=");
_c = LanguageProvider;
function useI18n() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!ctx) throw new Error('useI18n must be used within a LanguageProvider');
    return ctx;
}
_s1(useI18n, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__79c972ed._.js.map