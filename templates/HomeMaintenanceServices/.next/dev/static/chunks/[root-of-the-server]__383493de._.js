(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "getImageSrc",
    ()=>getImageSrc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function getImageSrc(path) {
    if (!path) return '';
    // Convert to string if it's not already (handles objects, numbers, etc.)
    const pathStr = String(path);
    if (!pathStr) return '';
    // Already an absolute URL
    if (/^https?:\/\//i.test(pathStr)) {
        const isLocal = /^http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?\b/i.test(pathStr);
        return isLocal ? pathStr : pathStr.replace(/^http:\/\//i, 'https://');
    }
    // Data URL
    if (pathStr.startsWith('data:')) return pathStr;
    // Media Library path - resolve to backend URL
    const baseUrl = ("TURBOPACK compile-time value", "http://localhost:5000/api")?.replace('/api', '') || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'http://localhost:5000');
    const isLocalBase = /^http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?\b/i.test(baseUrl);
    const httpsBaseUrl = isLocalBase ? baseUrl : baseUrl.replace(/^http:\/\//i, 'https://');
    // Strip leading slash and /uploads/ if present to avoid double uploads in path
    let cleanPath = pathStr.replace(/^\//, '');
    if (cleanPath.startsWith('uploads/')) {
        cleanPath = cleanPath.substring(8); // Remove 'uploads/'
    }
    // Return the resolved path with /uploads/ prefix
    return `${httpsBaseUrl}/uploads/${cleanPath}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThemeColors",
    ()=>useThemeColors,
    "useThemeFonts",
    ()=>useThemeFonts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
function useThemeColors() {
    _s();
    const { site } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const theme = site?.theme;
    return {
        // Text colors - prefer new light/dark variants, fallback to legacy
        mainText: theme?.mainTextColor || '#1F2937',
        secondaryText: theme?.secondaryTextColor || '#6B7280',
        // For dark backgrounds - use light text
        darkPrimaryText: theme?.darkPrimaryColor || '#FFFFFF',
        darkSecondaryText: theme?.darkSecondaryColor || '#D1D5DB',
        // For light backgrounds - use dark text
        lightPrimaryText: theme?.lightPrimaryColor || '#1F2937',
        lightSecondaryText: theme?.lightSecondaryColor || '#6B7280',
        // Background colors
        pageBackground: theme?.pageBackgroundColor || '#FFFFFF',
        sectionBackground: theme?.sectionBackgroundColorLight || '#F9FAFB',
        sectionBackgroundLight: theme?.sectionBackgroundColorLight || '#F9FAFB',
        sectionBackgroundDark: theme?.sectionBackgroundColorDark || '#111827',
        cardBackground: theme?.cardBackgroundColorLight || '#FFFFFF',
        cardBackgroundLight: theme?.cardBackgroundColorLight || '#FFFFFF',
        cardBackgroundDark: theme?.cardBackgroundColorDark || '#1F2937',
        // Button/UI colors
        primaryButton: theme?.primaryButtonColorDark || '#3B82F6',
        primaryButtonLight: theme?.primaryButtonColorLight || '#60A5FA',
        primaryButtonDark: theme?.primaryButtonColorDark || '#3B82F6',
        hoverActive: theme?.hoverActiveColorDark || '#2563EB',
        hoverActiveLight: theme?.hoverActiveColorLight || '#3B82F6',
        hoverActiveDark: theme?.hoverActiveColorDark || '#2563EB',
        inactive: theme?.inactiveColorDark || '#9CA3AF',
        inactiveLight: theme?.inactiveColorLight || '#D1D5DB',
        inactiveDark: theme?.inactiveColorDark || '#6B7280'
    };
}
_s(useThemeColors, "jnKd4kgiBFwQWROz8L0u2aG1vuI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"]
    ];
});
function useThemeFonts() {
    _s1();
    const { site } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    return {
        heading: site?.theme?.headingFont,
        body: site?.theme?.bodyFont
    };
}
_s1(useThemeFonts, "jnKd4kgiBFwQWROz8L0u2aG1vuI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const Header = ()=>{
    _s();
    const { site, pages, services, serviceAreaPages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredService, setHoveredService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const mobileMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const servicesDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Delay timeouts for smoother hover
    const dropdownTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const serviceTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 20)
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Clear timeouts on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            return ({
                "Header.useEffect": ()=>{
                    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                    if (serviceTimeoutRef.current) clearTimeout(serviceTimeoutRef.current);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (event)=>{
                    if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
                        setIsServicesDropdownOpen(false);
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Header.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    if (!site) return null;
    const publishedPages = pages.filter((page)=>page.status === 'published');
    const contactPage = publishedPages.find((p)=>p.slug.includes('contact'));
    // Define the order for navigation pages
    const pageOrder = [
        'home',
        'about',
        'service-list',
        'blog-list'
    ];
    // Sort pages according to the defined order, then by name for remaining pages
    const navPages = publishedPages.filter((p)=>!p.slug.includes('contact')).sort((a, b)=>{
        const aIndex = pageOrder.indexOf(a.pageType);
        const bIndex = pageOrder.indexOf(b.pageType);
        // If both are in the defined order, sort by that order
        if (aIndex !== -1 && bIndex !== -1) {
            return aIndex - bIndex;
        }
        // If only one is in the defined order, prioritize it
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        // For remaining pages, sort alphabetically
        return a.name.localeCompare(b.name);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 left-0 w-full z-[50] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-between px-6 lg:px-10 h-20 rounded-full border transition-all duration-500 shadow-2xl ${isScrolled ? 'bg-white/10 backdrop-blur-xl border-black/5' : 'bg-white/90 backdrop-blur-md border-white/20'}`,
                    style: {
                        color: isScrolled ? themeColors.darkPrimaryText : themeColors.primaryButton
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 shrink-0",
                            children: site.theme.logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(site.theme.logoUrl),
                                alt: site.business.name,
                                className: "h-10 w-auto object-contain"
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-black uppercase tracking-tighter",
                                style: {
                                    fontFamily: themeFonts.heading,
                                    color: isScrolled ? themeColors.darkPrimaryText : themeColors.lightPrimaryText
                                },
                                children: site.business.name || 'Buildify'
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center space-x-8",
                            children: navPages.map((page)=>{
                                // Check if this is the services page
                                if (page.pageType === 'service-list') {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: servicesDropdownRef,
                                        className: "relative",
                                        onMouseEnter: ()=>{
                                            // Clear any existing timeout
                                            if (dropdownTimeoutRef.current) {
                                                clearTimeout(dropdownTimeoutRef.current);
                                            }
                                            setIsServicesDropdownOpen(true);
                                        },
                                        onMouseLeave: ()=>{
                                            // Add delay before closing
                                            dropdownTimeoutRef.current = setTimeout(()=>{
                                                setIsServicesDropdownOpen(false);
                                            }, 200); // 200ms delay
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${page.slug}`,
                                                className: `text-xs font-bold uppercase tracking-[0.2em] transition-all hover:opacity-50 flex items-center gap-1 ${isScrolled ? 'text-black' : 'text-white'}`,
                                                style: {
                                                    color: isScrolled ? themeColors.darkSecondaryText : themeColors.primaryButton
                                                },
                                                children: [
                                                    page.name,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3 h-3 transition-transform duration-200",
                                                        style: {
                                                            transform: isServicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                                        },
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isServicesDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-3 w-80 rounded-2xl shadow-2xl border py-3 z-50 backdrop-blur-xl",
                                                style: {
                                                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)',
                                                    borderColor: isScrolled ? `${themeColors.darkSecondaryText}20` : `${themeColors.primaryButton}30`
                                                },
                                                onMouseEnter: ()=>{
                                                    // Clear any existing timeout when entering dropdown
                                                    if (dropdownTimeoutRef.current) {
                                                        clearTimeout(dropdownTimeoutRef.current);
                                                    }
                                                },
                                                onMouseLeave: ()=>{
                                                    // Add delay before closing when leaving dropdown
                                                    dropdownTimeoutRef.current = setTimeout(()=>{
                                                        setIsServicesDropdownOpen(false);
                                                    }, 200);
                                                },
                                                children: services && services.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-5 py-2 text-xs font-black uppercase tracking-[0.3em] border-b",
                                                            style: {
                                                                color: themeColors.primaryButton,
                                                                borderColor: `${themeColors.primaryButton}20`,
                                                                fontFamily: themeFonts.body
                                                            },
                                                            children: "Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        services.filter((service)=>service.status === 'published').map((service)=>{
                                                            // Get service areas from the service's own serviceAreas field
                                                            const serviceAreasForService = service.serviceAreas || [];
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative group",
                                                                onMouseEnter: ()=>{
                                                                    // Clear any existing timeout
                                                                    if (serviceTimeoutRef.current) {
                                                                        clearTimeout(serviceTimeoutRef.current);
                                                                    }
                                                                    setHoveredService(service._id);
                                                                },
                                                                onMouseLeave: ()=>{
                                                                    // Add delay before closing nested dropdown
                                                                    serviceTimeoutRef.current = setTimeout(()=>{
                                                                        setHoveredService(null);
                                                                    }, 150); // 150ms delay for nested dropdown
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/service/${service.slug}`,
                                                                        className: "block px-5 py-3 transition-all duration-300 hover:bg-gray-50",
                                                                        style: {
                                                                            color: themeColors.darkSecondaryText,
                                                                            fontFamily: themeFonts.body
                                                                        },
                                                                        onClick: ()=>setIsServicesDropdownOpen(false),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-medium",
                                                                                    children: service.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                                    lineNumber: 224,
                                                                                    columnNumber: 41
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                serviceAreasForService.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-3 h-3 transition-transform duration-200",
                                                                                    style: {
                                                                                        color: themeColors.primaryButton,
                                                                                        transform: hoveredService === service._id ? 'rotate(180deg)' : 'rotate(0deg)'
                                                                                    },
                                                                                    fill: "currentColor",
                                                                                    viewBox: "0 0 20 20",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        fillRule: "evenodd",
                                                                                        d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                                                        clipRule: "evenodd"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                                        lineNumber: 235,
                                                                                        columnNumber: 45
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                                    lineNumber: 226,
                                                                                    columnNumber: 43
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 39
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 37
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    serviceAreasForService.length > 0 && hoveredService === service._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute left-full top-0 ml-2 w-72 rounded-2xl shadow-2xl border py-3 z-50 backdrop-blur-xl",
                                                                        style: {
                                                                            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)',
                                                                            borderColor: isScrolled ? `${themeColors.darkSecondaryText}10` : `${themeColors.primaryButton}20`
                                                                        },
                                                                        onMouseEnter: ()=>{
                                                                            // Clear any existing timeout when entering nested dropdown
                                                                            if (serviceTimeoutRef.current) {
                                                                                clearTimeout(serviceTimeoutRef.current);
                                                                            }
                                                                        },
                                                                        onMouseLeave: ()=>{
                                                                            // Add delay before closing nested dropdown
                                                                            serviceTimeoutRef.current = setTimeout(()=>{
                                                                                setHoveredService(null);
                                                                            }, 150);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "px-5 py-2 text-xs font-black uppercase tracking-[0.3em] border-b",
                                                                                style: {
                                                                                    color: themeColors.primaryButton,
                                                                                    borderColor: `${themeColors.primaryButton}20`,
                                                                                    fontFamily: themeFonts.body
                                                                                },
                                                                                children: "Service Areas"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                                lineNumber: 262,
                                                                                columnNumber: 41
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            serviceAreasForService.map((area, index)=>{
                                                                                // Generate slug for service area including region for uniqueness
                                                                                const regionName = area.region || '';
                                                                                const citySlug = regionName ? `${String(area.city).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${String(regionName).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}` : String(area.city).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: `/service/${service.slug}/service-areas/${citySlug}`,
                                                                                    className: "block px-5 py-3 transition-all duration-300 hover:bg-gray-50",
                                                                                    style: {
                                                                                        color: themeColors.darkSecondaryText,
                                                                                        fontFamily: themeFonts.body
                                                                                    },
                                                                                    onClick: ()=>setIsServicesDropdownOpen(false),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm font-medium",
                                                                                        children: [
                                                                                            area.city,
                                                                                            ", ",
                                                                                            area.region
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                                        lineNumber: 293,
                                                                                        columnNumber: 47
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, index, false, {
                                                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                                    lineNumber: 283,
                                                                                    columnNumber: 45
                                                                                }, ("TURBOPACK compile-time value", void 0));
                                                                            })
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 39
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, service.slug, true, {
                                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 35
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                                lineNumber: 158,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, page.slug, true, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                }
                                // Regular navigation items
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: page.pageType === 'home' ? '/' : `/${page.slug}`,
                                    className: `text-xs font-bold uppercase tracking-[0.2em] transition-all hover:opacity-50 ${isScrolled ? 'text-black' : 'text-white'}`,
                                    style: {
                                        color: isScrolled ? themeColors.darkSecondaryText : themeColors.primaryButton
                                    },
                                    children: page.name
                                }, page.slug, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                    lineNumber: 312,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: contactPage ? `/${contactPage.slug}` : '#',
                                    className: "hidden md:flex items-center h-12 px-8 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all",
                                    style: {
                                        backgroundColor: isScrolled ? themeColors.darkPrimaryText : themeColors.primaryButton,
                                        color: isScrolled ? themeColors.primaryButton : themeColors.darkPrimaryText
                                    },
                                    children: contactPage?.name || 'Contact Us'
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 flex items-center justify-center rounded-full border transition-all",
                                    style: {
                                        borderColor: isScrolled ? `${themeColors.darkPrimaryText}20` : `${themeColors.primaryButton}30`,
                                        color: isScrolled ? themeColors.lightPrimaryText : themeColors.primaryButton
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileMenuOpen(true),
                                    className: "lg:hidden p-2 transition-colors",
                                    style: {
                                        color: isScrolled ? themeColors.darkPrimaryText : themeColors.primaryButton
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: mobileMenuRef,
                    className: "fixed inset-0 bg-white z-[200] flex flex-col p-10 animate-in fade-in zoom-in duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-black uppercase tracking-tighter",
                                    style: {
                                        color: themeColors.darkPrimaryText
                                    },
                                    children: site.business.name
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    className: "p-2",
                                    style: {
                                        color: themeColors.darkPrimaryText
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-6",
                            children: [
                                navPages.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: page.pageType === 'home' ? '/' : `/${page.slug}`,
                                        className: "text-4xl font-black uppercase tracking-tighter text-black hover:italic",
                                        style: {
                                            fontFamily: themeFonts.heading,
                                            color: themeColors.darkPrimaryText
                                        },
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: page.name
                                    }, page.slug, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))),
                                contactPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${contactPage.slug}`,
                                    className: "text-4xl font-black uppercase tracking-tighter text-black hover:italic",
                                    style: {
                                        fontFamily: themeFonts.heading,
                                        color: themeColors.darkPrimaryText
                                    },
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    children: contactPage.name
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                                    lineNumber: 395,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
                    lineNumber: 363,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "dNoMrBrFGjCZvGeg/ATKsrw19eA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TiptapRenderer",
    ()=>TiptapRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
const isObject = (v)=>typeof v === 'object' && v !== null;
// Block types that should NOT be nested inside a paragraph
const BLOCK_TYPES = new Set([
    'paragraph',
    'heading',
    'blockquote',
    'codeBlock',
    'bulletList',
    'orderedList',
    'listItem',
    'taskList',
    'taskItem',
    'table',
    'tableRow',
    'tableCell',
    'tableHeader',
    'doc'
]);
const isBlockNode = (node)=>{
    return isObject(node) && typeof node.type === 'string' && BLOCK_TYPES.has(node.type);
};
const getFullImageUrl = (url)=>{
    if (!url) return undefined;
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return url;
    return `/uploads/${url}`;
};
// Normalize common malformed structures
const normalizeNode = (node)=>{
    if (node == null) return null;
    if (typeof node === 'string') {
        const trimmed = node.trim();
        // Always try to parse stringified JSON
        if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
            try {
                const parsed = JSON.parse(trimmed);
                return normalizeNode(parsed);
            } catch (error) {
                // If parsing fails, return the string as-is to be displayed as text
                return node;
            }
        }
        // Return plain strings as-is
        return node;
    }
    if (Array.isArray(node)) {
        return node.map(normalizeNode).filter(Boolean);
    }
    if (!isObject(node)) return node;
    // Handle doc-inside-text
    if (node.type === 'text' && isObject(node.text)) {
        return normalizeNode(node.text);
    }
    // Handle doc - normalize its content
    if (node.type === 'doc' && Array.isArray(node.content)) {
        return {
            type: 'doc',
            content: normalizeContentArray(node.content)
        };
    }
    // Handle paragraph with nested blocks - EXTRACT the blocks!
    if (node.type === 'paragraph' && Array.isArray(node.content)) {
        const inlineContent = [];
        const extractedBlocks = [];
        for (const child of node.content){
            if (isBlockNode(child) && child.type !== 'text') {
                // This is a nested block - EXTRACT it!
                extractedBlocks.push(child);
            } else {
                inlineContent.push(child);
            }
        }
        // If we extracted blocks, return them as siblings (not nested)
        if (extractedBlocks.length > 0) {
            console.log('normalizeNode: extracted', extractedBlocks.length, 'blocks from paragraph');
            // Return as a doc with multiple children so the parent can handle them
            const children = [];
            if (inlineContent.length > 0) {
                children.push({
                    type: 'paragraph',
                    content: inlineContent.map(normalizeNode)
                });
            }
            children.push(...extractedBlocks.map(normalizeNode));
            return {
                type: 'doc',
                content: children
            };
        }
        // Valid paragraph with only inline content
        return {
            ...node,
            content: inlineContent.map(normalizeNode).filter(Boolean)
        };
    }
    // Normalize content array for other nodes
    if (Array.isArray(node.content)) {
        return {
            ...node,
            content: node.content.map(normalizeNode).filter(Boolean)
        };
    }
    return node;
};
// Normalize an array of content, flattening any extracted docs
const normalizeContentArray = (content)=>{
    const result = [];
    for (const item of content){
        const normalized = normalizeNode(item);
        if (!normalized) continue;
        // If normalization returned a doc, flatten its content
        if (normalized.type === 'doc' && Array.isArray(normalized.content)) {
            result.push(...normalized.content);
        } else {
            result.push(normalized);
        }
    }
    return result;
};
// Extract plain text from a node for fallback
const extractText = (node)=>{
    if (node == null) return '';
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (!isObject(node)) return String(node);
    if (node.type === 'text') {
        if (typeof node.text === 'string') return node.text;
        return extractText(node.text);
    }
    if (Array.isArray(node.content)) {
        return node.content.map(extractText).join('');
    }
    return '';
};
// Render marks (bold, italic, etc.)
const renderMarks = (text, marks)=>{
    if (!marks || marks.length === 0) return text;
    return marks.reduce((acc, mark, idx)=>{
        switch(mark?.type){
            case 'bold':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: acc
                }, idx, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 158,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'italic':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    children: acc
                }, idx, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 160,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'strike':
            case 'strikethrough':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("s", {
                    children: acc
                }, idx, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 163,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'code':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "bg-gray-100 px-1 rounded text-sm",
                    children: acc
                }, idx, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 165,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'link':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: mark.attrs?.href || '#',
                    target: mark.attrs?.target || '_self',
                    rel: mark.attrs?.rel || undefined,
                    className: "hover:underline",
                    children: acc
                }, idx, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'underline':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("u", {
                    children: acc
                }, idx, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 179,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return acc;
        }
    }, text);
};
// Render a single node to React elements
const renderNode = (node, key)=>{
    if (node == null) return null;
    if (typeof node === 'string' || typeof node === 'number') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: String(node)
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 191,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (Array.isArray(node)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: node.map((child, i)=>renderNode(child, i))
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 196,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isObject(node)) return null;
    const normalized = normalizeNode(node);
    if (!normalized) return null;
    // Handle doc - just render content
    if (normalized.type === 'doc') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: normalized.content?.map((child, i)=>renderNode(child, i))
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Handle text node
    if (normalized.type === 'text') {
        const text = typeof normalized.text === 'string' ? normalized.text : extractText(normalized.text);
        if (!text) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: renderMarks(text, normalized.marks)
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 220,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Handle heading
    if (normalized.type === 'heading') {
        const level = normalized.attrs?.level || 1;
        const children = normalized.content?.map((child, i)=>renderNode(child, i));
        switch(level){
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold",
                    children: children
                }, key, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 229,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0));
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold",
                    children: children
                }, key, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 230,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0));
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold",
                    children: children
                }, key, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 231,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0));
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-xl font-bold",
                    children: children
                }, key, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 232,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0));
            case 5:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                    className: "text-lg font-bold",
                    children: children
                }, key, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 233,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0));
            case 6:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    className: "text-base font-bold",
                    children: children
                }, key, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 234,
                    columnNumber: 22
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold",
                    children: children
                }, key, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 235,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0));
        }
    }
    // Handle paragraph
    if (normalized.type === 'paragraph') {
        const children = normalized.content?.map((child, i)=>renderNode(child, i));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: children
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 242,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Handle image
    if (normalized.type === 'image') {
        const src = getFullImageUrl(normalized.attrs?.src);
        if (!src) return null;
        const alt = normalized.attrs?.alt || '';
        const title = normalized.attrs?.title;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            title: title,
            className: "max-w-full h-auto rounded-lg",
            loading: "lazy"
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Handle hard break
    if (normalized.type === 'hardBreak') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 265,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Handle list items
    if (normalized.type === 'listItem') {
        const children = normalized.content?.map((child, i)=>renderNode(child, i));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: children
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 271,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Handle bullet list
    if (normalized.type === 'bulletList') {
        const children = normalized.content?.map((child, i)=>renderNode(child, i));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "list-disc pl-5",
            children: children
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 277,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Handle ordered list
    if (normalized.type === 'orderedList') {
        const children = normalized.content?.map((child, i)=>renderNode(child, i));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "list-decimal pl-5",
            children: children
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 283,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Handle blockquote
    if (normalized.type === 'blockquote') {
        const children = normalized.content?.map((child, i)=>renderNode(child, i));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
            className: "border-l-4 border-gray-300 pl-4 italic",
            children: children
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 290,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Handle code block
    if (normalized.type === 'codeBlock') {
        const content = extractText(normalized.content);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            className: "bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                children: content
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                lineNumber: 301,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 300,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Default: try to render content
    if (Array.isArray(normalized.content)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: normalized.content.map((child, i)=>renderNode(child, i))
        }, key, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 309,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
const TiptapRenderer = ({ content, className, as = 'div' })=>{
    // Handle null/undefined
    if (content == null) return null;
    // Handle plain text strings directly (not Tiptap JSON)
    if (typeof content === 'string') {
        const trimmed = content.trim();
        // If it looks like JSON, try to parse it
        if ((trimmed.startsWith('{') || trimmed.startsWith('[')) && (trimmed.endsWith('}') || trimmed.endsWith(']'))) {
            try {
                const parsed = JSON.parse(trimmed);
                const normalized = normalizeNode(parsed);
                if (!normalized) return null;
                const rendered = renderNode(normalized);
                if (as === 'inline') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: className,
                        children: rendered
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                        lineNumber: 338,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('prose prose-gray max-w-none', className),
                    children: rendered
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 341,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            } catch  {
                // JSON parse failed, render as plain text
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: className,
                    children: trimmed
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                    lineNumber: 347,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            }
        }
        // Plain text - render directly
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: trimmed
        }, void 0, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 351,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Normalize and render Tiptap JSON content
    const normalized = normalizeNode(content);
    if (!normalized) return null;
    // If normalized is a string, render it directly
    if (typeof normalized === 'string') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: normalized
        }, void 0, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 361,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // If it's a doc with single paragraph/heading, render inline-friendly ONLY when as="inline"
    if (as === 'inline' && normalized.type === 'doc' && Array.isArray(normalized.content) && normalized.content.length > 0) {
        const firstNode = normalized.content[0];
        // Single heading - render just the heading content
        if (normalized.content.length === 1 && firstNode?.type === 'heading') {
            const children = firstNode.content?.map((child, i)=>renderNode(child, i));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: className,
                children: children
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                lineNumber: 371,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        // Single paragraph - render just the paragraph content
        if (normalized.content.length === 1 && firstNode?.type === 'paragraph') {
            const children = firstNode.content?.map((child, i)=>renderNode(child, i));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: className,
                children: children
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
                lineNumber: 377,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        // For inline mode with multiple nodes, render all nodes but without block-level formatting
        const children = normalized.content.map((child, i)=>{
            if (child.type === 'heading') {
                return child.content?.map((textChild, j)=>renderNode(textChild, `${i}-${j}`));
            } else if (child.type === 'paragraph') {
                return child.content?.map((textChild, j)=>renderNode(textChild, `${i}-${j}`));
            }
            return renderNode(child, i);
        }).flat();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 389,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Render full structure
    const rendered = renderNode(normalized);
    if (as === 'inline') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: rendered
        }, void 0, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
            lineNumber: 396,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('prose prose-gray max-w-none', className),
        children: rendered
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TiptapRenderer;
var _c;
__turbopack_context__.k.register(_c, "TiptapRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Footer = ()=>{
    _s();
    const { site, pages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const socialLinks = site?.socialLinks || [];
    const footerColumns = site?.footer?.columns || [];
    const columnSocialLinks = footerColumns.filter((col)=>col.title?.toLowerCase().includes('social')).flatMap((col)=>col.links || []).map((link)=>({
            platform: link.label?.toLowerCase() || 'link',
            url: link.url
        }));
    const allSocialLinks = [
        ...socialLinks,
        ...columnSocialLinks
    ];
    const copyright = site?.footer?.copyright || '';
    // Define the order for navigation pages to match Header
    const pageOrder = [
        'home',
        'about',
        'service-list',
        'blog-list'
    ];
    // Sort pages according to the defined order, then by name for remaining pages
    const navPages = pages.filter((p)=>p.status === 'published' && !p.slug.includes('contact')).sort((a, b)=>{
        const aIndex = pageOrder.indexOf(a.pageType);
        const bIndex = pageOrder.indexOf(b.pageType);
        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        return a.name.localeCompare(b.name);
    });
    const contactPage = pages.find((p)=>p.status === 'published' && p.slug.includes('contact'));
    const allNavPages = [
        ...navPages,
        ...contactPage ? [
            contactPage
        ] : []
    ];
    const renderCopyright = ()=>{
        if (!copyright) {
            return `© ${new Date().getFullYear()} ${site?.name}. All rights reserved.`;
        }
        if (typeof copyright === 'object' && copyright.type === 'doc') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                content: copyright,
                as: "inline"
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                lineNumber: 53,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        return String(copyright);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "pt-12 pb-4 overflow-hidden",
        style: {
            backgroundColor: themeColors.sectionBackgroundDark,
            color: themeColors.darkPrimaryText
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5 space-y-10",
                            children: [
                                site?.theme?.logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(site.theme.logoUrl),
                                    alt: site?.name || 'Logo',
                                    className: "h-20 w-auto object-contain brightness-0 invert",
                                    style: {
                                        filter: 'brightness(0) invert(1)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-serif italic",
                                    style: {
                                        fontFamily: themeFonts.heading
                                    },
                                    children: site?.name
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                site?.footer?.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm opacity-60 leading-relaxed max-w-sm",
                                    style: {
                                        fontFamily: themeFonts.body
                                    },
                                    children: site.footer.description
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] tracking-[0.4em] uppercase font-bold opacity-50",
                                            style: {
                                                fontFamily: themeFonts.body
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: allNavPages.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `/${p.slug === 'home' ? '' : p.slug}`,
                                                        className: "text-base hover:translate-x-1 inline-block transition-transform duration-300",
                                                        style: {
                                                            fontFamily: themeFonts.body
                                                        },
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, `${p.slug}-${idx}`, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                allSocialLinks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] tracking-[0.4em] uppercase font-bold opacity-50",
                                            style: {
                                                fontFamily: themeFonts.body
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            children: allSocialLinks.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.url,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        className: "group flex items-center gap-2 text-base",
                                                        style: {
                                                            fontFamily: themeFonts.body
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "capitalize",
                                                                children: link.platform
                                                            }, void 0, false, {
                                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                size: 14,
                                                                className: "opacity-0 group-hover:opacity-100 -translate-y-1 transition-all"
                                                            }, void 0, false, {
                                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, `${link.platform}-${idx}`, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 col-span-2 md:col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] tracking-[0.4em] uppercase font-bold opacity-50 block",
                                            style: {
                                                fontFamily: themeFonts.body
                                            },
                                            children: "Find Us"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                site?.business?.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                                    className: "not-italic text-base leading-relaxed opacity-70",
                                                    style: {
                                                        fontFamily: themeFonts.body
                                                    },
                                                    children: [
                                                        site.business.address.street,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 51
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        site.business.address.city,
                                                        ", ",
                                                        site.business.address.state,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 80
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        site.business.address.zipCode
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 pt-4 border-t border-white/10",
                                                    children: [
                                                        site?.business?.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] uppercase tracking-widest opacity-40 block",
                                                                    children: "Email Us"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `mailto:${site.business.email}`,
                                                                    className: "block text-sm hover:underline transition-all duration-300 break-all",
                                                                    style: {
                                                                        fontFamily: themeFonts.body
                                                                    },
                                                                    children: site.business.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        site?.business?.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] uppercase tracking-widest opacity-40 block",
                                                                    children: "Call Us"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `tel:${site.business.phone}`,
                                                                    className: "block text-lg font-medium hover:opacity-70 transition-opacity",
                                                                    style: {
                                                                        fontFamily: themeFonts.heading
                                                                    },
                                                                    children: site.business.phone
                                                                }, void 0, false, {
                                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 pt-2 border-t flex flex-col justify-between items-center gap-6",
                    style: {
                        borderColor: `${themeColors.inactive}20`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] uppercase tracking-widest opacity-40",
                            style: {
                                fontFamily: themeFonts.body
                            },
                            children: renderCopyright()
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-8",
                            children: [
                                site?.legal?.termsOfService?.heading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/terms-of-service",
                                    className: "text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity",
                                    children: site.legal.termsOfService.heading
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/terms-of-service",
                                    className: "text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                site?.legal?.privacyPolicy?.heading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/privacy-policy",
                                    className: "text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity",
                                    children: site.legal.privacyPolicy.heading
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/privacy-policy",
                                    className: "text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 transition-opacity",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        }),
                                    className: "text-[10px] uppercase tracking-[0.3em] font-bold hover:text-white transition-colors",
                                    style: {
                                        color: themeColors.primaryButton
                                    },
                                    children: "Back to Top ↑"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Footer, "910vwUS8FxFPDAWGNNHEGQiSJOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$embla$2d$carousel$2d$react$40$8$2e$6$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/embla-carousel-react@8.6.0_react@19.2.3/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const HeroSection = ({ hero, className })=>{
    _s();
    if (!hero?.enabled) return null;
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const mediaItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroSection.useMemo[mediaItems]": ()=>{
            const items = Array.isArray(hero.mediaItems) ? hero.mediaItems : [];
            if (items.length > 0) return items;
            return hero.media ? [
                hero.media
            ] : [];
        }
    }["HeroSection.useMemo[mediaItems]"], [
        hero
    ]);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$embla$2d$carousel$2d$react$40$8$2e$6$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        loop: true
    });
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[onSelect]": ()=>{
            if (!emblaApi) return;
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }["HeroSection.useCallback[onSelect]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (!emblaApi) return;
            onSelect();
            emblaApi.on('select', onSelect);
            emblaApi.on('reInit', onSelect);
        }
    }["HeroSection.useEffect"], [
        emblaApi,
        onSelect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (!emblaApi) return;
            const interval = setInterval({
                "HeroSection.useEffect.interval": ()=>emblaApi.scrollNext()
            }["HeroSection.useEffect.interval"], 5000);
            return ({
                "HeroSection.useEffect": ()=>clearInterval(interval)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        emblaApi
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative w-full h-screen overflow-hidden', className),
        style: {
            backgroundColor: themeColors.pageBackground
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                ref: emblaRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full",
                    children: mediaItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 grow-0 basis-full h-full relative",
                            children: [
                                item?.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    className: "h-full w-full object-cover",
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(item.url),
                                    autoPlay: true,
                                    muted: true,
                                    loop: true,
                                    playsInline: true
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(item.url),
                                    alt: "",
                                    className: "h-full w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/40"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6",
                children: [
                    hero.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 animate-fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block px-6 py-2 border border-white/30 rounded-full backdrop-blur-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xs lg:text-sm font-medium tracking-[0.3em] uppercase",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: hero.subtitle,
                                    as: "inline"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hero.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl md:max-w-5xl mb-4 md:mb-6 animate-slide-up",
                        style: {
                            color: '#FFFFFF'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[0.95] tracking-tight",
                            style: {},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: hero.title
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hero.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xs md:max-w-xl animate-fade-in delay-300",
                        style: {
                            color: 'rgba(255, 255, 255, 0.85)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm md:text-base lg:text-lg leading-relaxed font-light",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: hero.description
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hero.primaryCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/contact-us",
                            className: "group flex items-center gap-2 md:gap-3 transition-all px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl",
                            style: {
                                backgroundColor: themeColors.primaryButton,
                                color: '#FFFFFF'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.backgroundColor = themeColors.hoverActive;
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.backgroundColor = themeColors.primaryButton;
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-xs md:text-sm uppercase tracking-wider",
                                    children: hero.primaryCta.label
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-full p-1 md:p-1.5 group-hover:rotate-45 transition-transform",
                                    style: {
                                        backgroundColor: 'rgba(255,255,255,0.2)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        className: "w-3.5 h-3.5 md:w-4 md:h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3",
                        children: mediaItems.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>emblaApi?.scrollTo(i),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all duration-500", selectedIndex === i ? "h-6 md:h-8 bg-white" : "bg-white/30")
                            }, i, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroSection, "sofYSQ6NrjalPCJbhXHnJxJFjSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$embla$2d$carousel$2d$react$40$8$2e$6$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AboutSection = ({ aboutSection, className })=>{
    _s();
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    if (!aboutSection?.enabled) return null;
    const imageUrl = aboutSection.image ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(typeof aboutSection.image === 'object' && aboutSection.image !== null ? aboutSection.image.url : aboutSection.image) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-20 lg:py-32 overflow-hidden', className),
        style: {
            backgroundColor: themeColors.pageBackground || '#F5F2ED'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative order-2 lg:order-1",
                        children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden shadow-2xl",
                                    style: {
                                        aspectRatio: '1/1'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: imageUrl,
                                        alt: typeof aboutSection.image === 'object' ? aboutSection.image?.altText || 'Our Story' : 'Our Story',
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                        lineNumber: 45,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-6 right-6 lg:-right-8 bg-white/90 backdrop-blur-md px-8 py-5 shadow-xl border border-white/20 max-w-[240px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm italic text-center",
                                        style: {
                                            color: '#8B6E4E'
                                        },
                                        children: '"About Us"'
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-square rounded-[40px] bg-neutral-200 flex items-center justify-center italic text-neutral-400",
                            children: "Image Placeholder"
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "order-1 lg:order-2 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] tracking-[0.3em] uppercase font-bold",
                                        style: {
                                            color: '#8B6E4E'
                                        },
                                        children: "OUR STORY"
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-[1px] bg-[#8B6E4E]/30"
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            aboutSection.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl lg:text-6xl font-serif leading-[1.15]",
                                style: {
                                    color: themeColors.lightPrimaryText || '#1A1A1A'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: aboutSection.title
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            aboutSection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-base lg:text-lg leading-relaxed text-black/70 space-y-4",
                                style: {},
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: aboutSection.description
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/about-us",
                                    className: "inline-block text-sm font-bold tracking-wider uppercase border-b border-black/20 pb-1 transition-all hover:border-black",
                                    style: {
                                        color: themeColors.lightPrimaryText || '#1A1A1A'
                                    },
                                    children: "Read More About Us"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AboutSection, "5lqYk0qZV62Kcw5Fii0SO6vxrv0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = AboutSection;
const __TURBOPACK__default__export__ = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesSection",
    ()=>ServicesSection,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Utility function to get full image URL
const getFullImageUrl = (url)=>{
    if (!url) return undefined;
    // If it's already a full URL, return as-is
    if (url.startsWith('http')) {
        const isLocal = /^http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?\b/i.test(url);
        return isLocal ? url : url.replace(/^http:\/\//i, 'https://');
    }
    // Important: uploads are served from the backend root as `/uploads/*`, NOT `/api/uploads/*`.
    const apiBase = ("TURBOPACK compile-time value", "http://localhost:5000/api") || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'http://localhost:5000/api');
    const origin = apiBase.replace(/\/?api\/?$/, '');
    const isLocalOrigin = /^http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?\b/i.test(origin);
    const backendOrigin = isLocalOrigin ? origin : origin.replace(/^http:\/\//i, 'https://');
    if (url.startsWith('/uploads/')) {
        return `${backendOrigin}${url}`;
    }
    return `${backendOrigin}${url.startsWith('/') ? '' : '/'}${url}`;
};
// Sample tags for each service (can be customized in the builder later)
const defaultTags = {
    0: [
        'SaaS Platform',
        'Web Platform',
        'Mobile App'
    ],
    1: [
        'UX Audit',
        'Analysis',
        'Research'
    ],
    2: [
        'Net Core',
        'PHP',
        'React',
        'Node.js',
        'Angular'
    ],
    3: [
        'Testing',
        'Planning, creating following KPIs',
        'Documentation'
    ]
};
// Background colors for alternating expanded items
const bgColors = [
    'rgba(254, 249, 232, 0.6)',
    'rgba(224, 242, 254, 0.6)',
    'rgba(254, 242, 242, 0.6)',
    'rgba(240, 253, 244, 0.6)'
];
const ServicesSection = ({ servicesSection, className })=>{
    _s();
    const { site, services, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    if (!servicesSection?.enabled) return null;
    // Always use services from WebBuilder provider
    const displayServices = services;
    // Show loading state if services are still loading
    if (loading && services.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-16 lg:py-24', className),
            style: {
                backgroundColor: themeColors.sectionBackground
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 lg:px-8 max-w-6xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        1,
                        2,
                        3,
                        4
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-8 p-8 rounded-2xl bg-gray-100 animate-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-8 bg-gray-300 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 bg-gray-300 rounded w-64"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-gray-300 rounded w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                            lineNumber: 74,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-12 md:py-16 lg:py-24 xl:py-32', className),
        style: {
            backgroundColor: themeColors.sectionBackground
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 max-w-6xl xl:max-w-7xl",
            children: [
                (servicesSection.title || servicesSection.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 md:mb-12 lg:mb-16 text-center",
                    children: [
                        servicesSection.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold",
                            style: {
                                color: themeColors.lightPrimaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: servicesSection.title
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                lineNumber: 102,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        servicesSection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 md:mt-4 max-w-2xl xl:max-w-3xl mx-auto text-sm md:text-base lg:text-lg",
                            style: {
                                color: themeColors.lightSecondaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: servicesSection.description
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                            lineNumber: 106,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-0 md:space-y-1 lg:space-y-2",
                    children: displayServices.map((service, index)=>{
                        const isActive = activeIndex === index;
                        const serviceTags = service.tags || defaultTags[index] || [];
                        const bgColor = isActive ? bgColors[index % bgColors.length] : 'transparent';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative rounded-2xl transition-all duration-300",
                            style: {
                                backgroundColor: isActive ? bgColor : 'transparent'
                            },
                            onMouseEnter: ()=>setActiveIndex(index),
                            onMouseLeave: ()=>setActiveIndex(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-stretch gap-4 md:gap-6 lg:gap-8 xl:gap-12 p-4 md:p-6 lg:p-8 xl:p-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 text-sm md:text-base font-medium pt-2",
                                            style: {
                                                color: themeColors.lightSecondaryText,
                                                minWidth: '2rem'
                                            },
                                            children: String(index + 1).padStart(2, '0')
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-tight",
                                                    style: {
                                                        color: themeColors.lightPrimaryText
                                                    },
                                                    children: service.name
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                serviceTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-1.5 md:gap-2 mt-2 md:mt-3",
                                                    children: serviceTags.map((tag, tagIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs md:text-sm",
                                                                    style: {
                                                                        color: themeColors.lightSecondaryText
                                                                    },
                                                                    children: tag
                                                                }, void 0, false, {
                                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                tagIndex < serviceTags.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs md:text-sm",
                                                                    style: {
                                                                        color: themeColors.lightSecondaryText
                                                                    },
                                                                    children: "•"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, tag, true, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-hidden transition-all duration-300",
                                                    style: {
                                                        maxHeight: isActive ? '200px' : '0px',
                                                        opacity: isActive ? 1 : 0,
                                                        marginTop: isActive ? '1rem' : '0px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl",
                                                        style: {
                                                            color: themeColors.lightSecondaryText
                                                        },
                                                        children: typeof service.shortDescription === 'string' ? service.shortDescription : service.shortDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                            content: service.shortDescription
                                                        }, void 0, false, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 57
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 lg:hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/service/${service.slug}`,
                                                        className: "inline-flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded-full text-xs md:text-sm font-medium border transition-all duration-200 active:scale-95",
                                                        style: {
                                                            borderColor: themeColors.lightPrimaryText,
                                                            color: themeColors.lightPrimaryText,
                                                            backgroundColor: 'transparent',
                                                            minHeight: '44px'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.backgroundColor = themeColors.lightPrimaryText;
                                                            e.currentTarget.style.color = themeColors.pageBackground;
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                            e.currentTarget.style.color = themeColors.lightPrimaryText;
                                                        },
                                                        children: "Learn More"
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden lg:block overflow-hidden transition-all duration-300",
                                                    style: {
                                                        maxHeight: isActive ? '100px' : '0px',
                                                        opacity: isActive ? 1 : 0
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/service/${service.slug}`,
                                                        className: "mt-4 inline-flex items-center gap-2 px-5 py-2.5 xl:px-6 xl:py-3 rounded-full text-xs md:text-sm font-medium border transition-all duration-200 hover:scale-105 active:scale-95",
                                                        style: {
                                                            borderColor: themeColors.lightPrimaryText,
                                                            color: themeColors.lightPrimaryText,
                                                            backgroundColor: 'transparent',
                                                            minHeight: '44px'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.backgroundColor = themeColors.lightPrimaryText;
                                                            e.currentTarget.style.color = themeColors.pageBackground;
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                            e.currentTarget.style.color = themeColors.lightPrimaryText;
                                                        },
                                                        children: "Learn More"
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        service.thumbnailImage && service.thumbnailImage.url && service.thumbnailImage.url.trim() !== '' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 w-40 lg:w-64",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-full min-h-32 lg:min-h-40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: getFullImageUrl(service.thumbnailImage.url) || '',
                                                    alt: service.thumbnailImage.altText || service.name,
                                                    className: "absolute inset-0 w-full h-full object-cover rounded-xl shadow-sm transition-all duration-300 group-hover:scale-105",
                                                    style: {
                                                        opacity: isActive ? 1 : 0,
                                                        transform: isActive ? 'scale(1)' : 'scale(0.98)',
                                                        pointerEvents: 'none'
                                                    },
                                                    onError: (e)=>{
                                                        e.currentTarget.style.display = 'none';
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                                lineNumber: 259,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                            lineNumber: 258,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                index < displayServices.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-6 lg:mx-8 h-px",
                                    style: {
                                        backgroundColor: 'rgba(0,0,0,0.08)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                                    lineNumber: 280,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, service._id, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServicesSection, "9II9UWfx0ZFWI4oEJ8C6OcpsvWw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = ServicesSection;
const __TURBOPACK__default__export__ = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceHighlightsSection",
    ()=>ServiceHighlightsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$react$2d$countup$40$6$2e$5$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/react-countup@6.5.3_react@19.2.3/node_modules/react-countup/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$react$2d$intersection$2d$observer_34f60253a03bda9fac321fc225b23583$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/react-intersection-observer_34f60253a03bda9fac321fc225b23583/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const ServiceHighlightsSection = ({ serviceHighlightsSection, className })=>{
    _s();
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const { site } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const { ref: sectionRef, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$react$2d$intersection$2d$observer_34f60253a03bda9fac321fc225b23583$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.25
    });
    // Check if section exists and is enabled
    const isEnabled = serviceHighlightsSection?.enabled === true || serviceHighlightsSection != null;
    if (!isEnabled) {
        return null;
    }
    // Sort highlights by order
    const sortedHighlights = [
        ...serviceHighlightsSection.highlights || []
    ].sort((a, b)=>(a.order || 0) - (b.order || 0)).slice(0, 4); // Usually 4 items as per reference
    const sectionTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ServiceHighlightsSection.useMemo[sectionTitle]": ()=>{
            if (!serviceHighlightsSection.title) return null;
            return typeof serviceHighlightsSection.title === 'string' ? serviceHighlightsSection.title : null;
        }
    }["ServiceHighlightsSection.useMemo[sectionTitle]"], [
        serviceHighlightsSection.title
    ]);
    const parseCounter = (raw)=>{
        if (typeof raw !== 'string') return null;
        const s = raw.trim();
        if (!s) return null;
        const match = s.match(/([0-9][0-9,\.]*)(\+?)/);
        if (!match) return null;
        const value = Number(match[1].replace(/,/g, ''));
        if (Number.isNaN(value)) return null;
        const suffix = match[2] || '';
        return {
            value,
            suffix
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-16 lg:py-24 relative overflow-hidden', className),
        style: {
            backgroundColor: serviceHighlightsSection.backgroundColor || themeColors.sectionBackground
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: sectionRef,
            className: "container mx-auto px-4 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-12 gap-10 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5",
                        children: [
                            serviceHighlightsSection.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-semibold leading-tight",
                                style: {
                                    color: themeColors.lightPrimaryText
                                },
                                children: sectionTitle ? sectionTitle : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: serviceHighlightsSection.title
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                    lineNumber: 77,
                                    columnNumber: 48
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            serviceHighlightsSection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 max-w-md text-sm leading-relaxed",
                                style: {
                                    color: themeColors.lightSecondaryText
                                },
                                children: typeof serviceHighlightsSection.description === 'string' ? serviceHighlightsSection.description : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: serviceHighlightsSection.description
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-8 sm:gap-y-12",
                            children: sortedHighlights.map((highlight, index)=>{
                                const counter = parseCounter(highlight.price);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight whitespace-nowrap",
                                            style: {
                                                color: themeColors.lightPrimaryText,
                                                lineHeight: 1
                                            },
                                            children: counter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    inView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$react$2d$countup$40$6$2e$5$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: counter.value,
                                                        duration: 1.6,
                                                        separator: ",",
                                                        preserveValue: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0)) : 0,
                                                    counter.suffix
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: typeof highlight.price === 'string' ? highlight.price : '—'
                                            }, void 0, false)
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                            lineNumber: 103,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        highlight.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 text-base font-medium",
                                            style: {
                                                color: themeColors.lightPrimaryText
                                            },
                                            children: typeof highlight.title === 'string' ? highlight.title : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                content: highlight.title,
                                                as: "inline"
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                                lineNumber: 136,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                            lineNumber: 129,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        highlight.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-sm leading-relaxed max-w-xs",
                                            style: {
                                                color: themeColors.lightSecondaryText
                                            },
                                            children: typeof highlight.description === 'string' ? highlight.description : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                content: highlight.description
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                                lineNumber: 149,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                            lineNumber: 142,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                                    lineNumber: 102,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServiceHighlightsSection, "LidNfyn2m55MhT/NFDogH7F9Ar4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$react$2d$intersection$2d$observer_34f60253a03bda9fac321fc225b23583$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ServiceHighlightsSection;
var _c;
__turbopack_context__.k.register(_c, "ServiceHighlightsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const TestimonialsSection = ({ testimonialsSection, className })=>{
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const items = testimonialsSection?.testimonials || [];
    const scrollToIndex = (idx)=>{
        const track = trackRef.current;
        if (!track) return;
        const target = track.querySelector(`[data-testimonial-index="${idx}"]`);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        }
    };
    const scrollByCard = (direction)=>{
        const next = Math.max(0, Math.min(items.length - 1, activeIndex + direction));
        scrollToIndex(next);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialsSection.useEffect": ()=>{
            const track = trackRef.current;
            if (!track || items.length === 0) return;
            const handler = {
                "TestimonialsSection.useEffect.handler": ()=>{
                    const children = Array.from(track.querySelectorAll('[data-testimonial-index]'));
                    const trackRect = track.getBoundingClientRect();
                    const trackCenterX = trackRect.left + trackRect.width / 2;
                    let bestIdx = 0;
                    let bestDist = Number.POSITIVE_INFINITY;
                    children.forEach({
                        "TestimonialsSection.useEffect.handler": (el)=>{
                            const rect = el.getBoundingClientRect();
                            const elCenterX = rect.left + rect.width / 2;
                            const dist = Math.abs(elCenterX - trackCenterX);
                            if (dist < bestDist) {
                                bestDist = dist;
                                bestIdx = Number(el.dataset.testimonialIndex || 0);
                            }
                        }
                    }["TestimonialsSection.useEffect.handler"]);
                    setActiveIndex(bestIdx);
                }
            }["TestimonialsSection.useEffect.handler"];
            track.addEventListener('scroll', handler, {
                passive: true
            });
            return ({
                "TestimonialsSection.useEffect": ()=>track.removeEventListener('scroll', handler)
            })["TestimonialsSection.useEffect"];
        }
    }["TestimonialsSection.useEffect"], [
        items.length
    ]);
    if (!testimonialsSection?.enabled || items.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative py-24 lg:py-32 overflow-hidden', className),
        style: {
            backgroundColor: themeColors.sectionBackground
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 flex flex-col items-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] tracking-[0.4em] uppercase font-bold",
                                        style: {
                                            color: themeColors.primaryButton
                                        },
                                        children: "GUEST STORIES"
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-[1px]",
                                        style: {
                                            backgroundColor: `${themeColors.primaryButton}40`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            testimonialsSection.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl lg:text-4xl font-serif leading-tight max-w-3xl",
                                style: {
                                    color: themeColors.lightPrimaryText
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: testimonialsSection.title
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                    lineNumber: 92,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: trackRef,
                                className: "flex gap-12 lg:gap-24 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 items-center",
                                style: {
                                    scrollbarWidth: 'none'
                                },
                                children: items.map((t, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-testimonial-index": idx,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-full md:min-w-[70%] lg:min-w-[60%] snap-center transition-all duration-700 ease-out", activeIndex === idx ? "opacity-100 scale-100" : "opacity-30 scale-95 grayscale"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                    className: "w-12 h-12 mb-10 opacity-20",
                                                    style: {
                                                        color: themeColors.primaryButton
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed mb-12",
                                                    style: {
                                                        color: themeColors.lightPrimaryText
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                        content: t.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs tracking-[0.3em] uppercase font-black mb-2",
                                                            style: {
                                                                color: themeColors.primaryButton
                                                            },
                                                            children: t.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] tracking-widest opacity-60 uppercase",
                                                            style: {
                                                                color: themeColors.lightSecondaryText
                                                            },
                                                            children: [
                                                                t.role,
                                                                " ",
                                                                t.company && `• ${t.company}`
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 113,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, `${t.name}-${idx}`, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 flex flex-col items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 h-[2px] w-32 md:w-48 bg-black/5 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 left-0 h-full transition-all duration-500",
                                            style: {
                                                backgroundColor: themeColors.primaryButton,
                                                width: `${(activeIndex + 1) / items.length * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 149,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollByCard(-1),
                                                className: "group flex items-center gap-2 transition-all",
                                                style: {
                                                    color: themeColors.lightPrimaryText
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        className: "w-5 h-5 group-hover:-translate-x-1 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] tracking-[0.2em] font-bold uppercase",
                                                        children: "Prev"
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                lineNumber: 159,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] tracking-[0.2em] font-bold opacity-30",
                                                children: [
                                                    String(activeIndex + 1).padStart(2, '0'),
                                                    " / ",
                                                    String(items.length).padStart(2, '0')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                lineNumber: 168,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollByCard(1),
                                                className: "group flex items-center gap-2 transition-all",
                                                style: {
                                                    color: themeColors.lightPrimaryText
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] tracking-[0.2em] font-bold uppercase",
                                                        children: "Next"
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                                lineNumber: 172,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                        lineNumber: 158,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-transparent via-black/10 to-transparent"
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TestimonialsSection, "doiObYTVOI7z9wgVb/z5WI0X1I4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const FAQSection = ({ faqSection, className })=>{
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    if (!faqSection?.enabled || !faqSection.items || faqSection.items.length === 0) return null;
    const toggle = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-24 lg:py-32 overflow-hidden', className),
        style: {
            backgroundColor: themeColors.pageBackground
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-12 gap-16 lg:gap-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-24 lg:top-32",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] tracking-[0.4em] uppercase font-bold",
                                            style: {
                                                color: themeColors.lightPrimaryText
                                            },
                                            children: "Common Enquiries"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-[1px]",
                                            style: {
                                                backgroundColor: `${themeColors.primaryButton}40`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                            lineNumber: 44,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                faqSection.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl lg:text-7xl leading-tight",
                                    style: {
                                        color: themeColors.lightPrimaryText
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                        content: faqSection.title
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                faqSection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 max-w-sm text-lg font-light leading-relaxed opacity-70",
                                    style: {
                                        color: themeColors.lightSecondaryText
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                        content: faqSection.description
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                        lineNumber: 65,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                            lineNumber: 36,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-0",
                            children: faqSection.items.map((item, index)=>{
                                const isOpen = openIndex === index;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b transition-all duration-500",
                                    style: {
                                        borderColor: `${themeColors.inactive}30`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>toggle(index),
                                            className: "w-full flex items-center justify-between py-8 text-left group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] mt-2 font-bold tracking-tighter opacity-30 group-hover:opacity-100 transition-opacity",
                                                            style: {
                                                                color: themeColors.lightPrimaryText
                                                            },
                                                            children: (index + 1).toString().padStart(2, '0')
                                                        }, void 0, false, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xl lg:text-2xl transition-all duration-300", isOpen ? "italic" : ""),
                                                            style: {
                                                                color: themeColors.lightPrimaryText
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                                content: item.question,
                                                                as: "inline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shrink-0 ml-4 transition-transform duration-500",
                                                    style: {
                                                        color: themeColors.lightPrimaryText
                                                    },
                                                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                        strokeWidth: 1.5,
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 59
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        strokeWidth: 1.5,
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 99
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                            lineNumber: 82,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid transition-all duration-500 ease-in-out", isOpen ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-12 lg:pl-16 text-base lg:text-lg font-light leading-relaxed opacity-70 max-w-2xl",
                                                    style: {
                                                        color: themeColors.lightSecondaryText
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                        content: item.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                                lineNumber: 121,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                            lineNumber: 115,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                                    lineNumber: 77,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                        lineNumber: 72,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FAQSection, "UJyrX4AbpJIUz7RacKlGk3KEBts=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = FAQSection;
const __TURBOPACK__default__export__ = FAQSection;
var _c;
__turbopack_context__.k.register(_c, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASection",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const CTASection = ({ ctaSection, className })=>{
    _s();
    const safeCta = ctaSection ?? {
        enabled: false
    };
    const { site } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [parallaxOffsetY, setParallaxOffsetY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const backgroundImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CTASection.useMemo[backgroundImageUrl]": ()=>{
            return safeCta.backgroundImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(safeCta.backgroundImage) : null;
        }
    }["CTASection.useMemo[backgroundImageUrl]"], [
        safeCta.backgroundImage
    ]);
    // Intersection Observer for Scroll Animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CTASection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "CTASection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setIsVisible(true);
                }
            }["CTASection.useEffect"], {
                threshold: 0.2
            });
            if (sectionRef.current) observer.observe(sectionRef.current);
            return ({
                "CTASection.useEffect": ()=>observer.disconnect()
            })["CTASection.useEffect"];
        }
    }["CTASection.useEffect"], []);
    // Subtle Parallax Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CTASection.useEffect": ()=>{
            const handleScroll = {
                "CTASection.useEffect.handleScroll": ()=>{
                    if (!sectionRef.current) return;
                    const rect = sectionRef.current.getBoundingClientRect();
                    const scrollPercent = rect.top / window.innerHeight;
                    setParallaxOffsetY(scrollPercent * 100);
                }
            }["CTASection.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "CTASection.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["CTASection.useEffect"];
        }
    }["CTASection.useEffect"], []);
    if (!safeCta?.enabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 scale-125",
                style: {
                    backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
                    backgroundColor: safeCta.backgroundColor || themeColors.primaryButton,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `translateY(${parallaxOffsetY * -0.5}px) scale(1.1)`,
                    transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
                }
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 bg-black/40 backdrop-blur-[1px]"
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10",
                style: {
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 container mx-auto px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-8 flex flex-col items-center gap-4 transition-all duration-1000 delay-100", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] tracking-[0.5em] uppercase font-bold text-white/90",
                                    style: {},
                                    children: "Begin Your Journey"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-[1px] bg-white/40"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        safeCta.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-white mb-8 transition-all duration-1000 delay-300", isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"),
                            style: {},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: safeCta.title
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                                lineNumber: 109,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                            lineNumber: 102,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        safeCta.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base md:text-lg text-white/80 max-w-2xl font-light mb-12 leading-relaxed transition-all duration-1000 delay-500", isVisible ? "opacity-100" : "opacity-0"),
                            style: {},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: safeCta.description
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                                lineNumber: 122,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                            lineNumber: 115,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        safeCta.primaryButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-all duration-1000 delay-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/contact-us",
                                className: "group relative flex items-center gap-8 px-10 py-5 rounded-full transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
                                style: {
                                    fontFamily: themeFonts.body,
                                    backgroundColor: themeColors.primaryButton,
                                    color: '#FFFFFF'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.backgroundColor = themeColors.hoverActive;
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.backgroundColor = themeColors.primaryButton;
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-black uppercase tracking-[0.2em] z-10",
                                        children: safeCta.primaryButton.label
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                                        lineNumber: 147,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500",
                                        style: {
                                            backgroundColor: 'rgba(255,255,255,0.2)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            className: "w-4 h-4 group-hover:rotate-45 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                                            lineNumber: 154,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full bg-white opacity-0 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                                        lineNumber: 158,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                                lineNumber: 132,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                            lineNumber: 128,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-12 bg-white rounded-t-[60px] z-30"
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CTASection, "YAuiAql3AmY6xHoC7gpCua/UUaw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyChooseUsSection",
    ()=>WhyChooseUsSection,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const WhyChooseUsSection = ({ whyChooseUsSection, className })=>{
    _s();
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    if (!whyChooseUsSection?.enabled) return null;
    const items = whyChooseUsSection.items || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-20 lg:py-32', className),
        style: {
            backgroundColor: themeColors.pageBackground || '#F5F2ED'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: [
                (whyChooseUsSection.title || whyChooseUsSection.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16 lg:mb-24 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] tracking-[0.4em] uppercase font-bold",
                                    style: {
                                        color: '#8B6E4E'
                                    },
                                    children: "OUR VALUES"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-[1px] bg-[#8B6E4E]/30"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                            lineNumber: 33,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        whyChooseUsSection.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-4xl font-serif leading-tight mb-6",
                            style: {
                                color: themeColors.lightPrimaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: whyChooseUsSection.title
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        whyChooseUsSection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-base lg:text-lg font-light leading-relaxed mx-auto opacity-80",
                            style: {
                                color: themeColors.lightSecondaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: whyChooseUsSection.description
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12",
                    children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group flex flex-col space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-bold tracking-tighter opacity-30 group-hover:opacity-100 transition-opacity",
                                    style: {
                                        color: '#8B6E4E'
                                    },
                                    children: (idx + 1).toString().padStart(2, '0')
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                item?.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-serif",
                                    style: {
                                        color: themeColors.lightPrimaryText
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                        content: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                        lineNumber: 84,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-[1px] bg-black/5"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                item?.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm leading-relaxed opacity-70 font-light",
                                    style: {
                                        color: themeColors.lightSecondaryText
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                        content: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                                    lineNumber: 91,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                            lineNumber: 67,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WhyChooseUsSection, "5lqYk0qZV62Kcw5Fii0SO6vxrv0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = WhyChooseUsSection;
const __TURBOPACK__default__export__ = WhyChooseUsSection;
var _c;
__turbopack_context__.k.register(_c, "WhyChooseUsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompanyDetailSection",
    ()=>CompanyDetailSection,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CompanyDetailSection = ({ companyDetailSection, className })=>{
    _s();
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    if (!companyDetailSection?.enabled) return null;
    const details = companyDetailSection.details || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-24 lg:py-32', className),
        style: {
            backgroundColor: themeColors.pageBackground
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-12 max-w-7xl",
            children: [
                (companyDetailSection.title || companyDetailSection.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-20 max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] tracking-[0.4em] uppercase font-bold opacity-60 block mb-6",
                            style: {
                                color: themeColors.lightPrimaryText
                            },
                            children: "Company Insights"
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        companyDetailSection.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight",
                            style: {
                                color: themeColors.lightPrimaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: companyDetailSection.title
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        companyDetailSection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-lg lg:text-xl leading-relaxed opacity-80",
                            style: {
                                color: themeColors.lightSecondaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: companyDetailSection.description
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                details.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-32 lg:space-y-48",
                    children: details.map((d, idx)=>{
                        const title = d?.title || d?.label;
                        const description = d?.description || d?.value;
                        const imageUrl = d?.image?.url;
                        const isEven = idx % 2 === 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col lg:items-center gap-12 lg:gap-24", isEven ? "lg:flex-row" : "lg:flex-row-reverse"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-3/5",
                                    children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(imageUrl),
                                                alt: d?.image?.altText || 'Detail image',
                                                className: "w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                                lineNumber: 79,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                                lineNumber: 84,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                        lineNumber: 78,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[250px] md:h-[300px] lg:h-[400px] rounded-[2.5rem] flex items-center justify-center",
                                        style: {
                                            backgroundColor: `${themeColors.inactive}15`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-20 text-4xl font-bold",
                                            children: [
                                                "0",
                                                idx + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                            lineNumber: 91,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                        lineNumber: 87,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                    lineNumber: 76,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-2/5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl lg:text-5xl font-serif italic mb-6 block",
                                                style: {
                                                    color: themeColors.primaryButton
                                                },
                                                children: [
                                                    "0",
                                                    idx + 1,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                                lineNumber: 99,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl lg:text-4xl font-semibold mb-6",
                                                style: {
                                                    color: themeColors.lightPrimaryText
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                    content: title
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                                lineNumber: 106,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg leading-relaxed opacity-70",
                                                style: {
                                                    color: themeColors.lightSecondaryText
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                    content: description
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                                lineNumber: 114,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CompanyDetailSection, "5lqYk0qZV62Kcw5Fii0SO6vxrv0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = CompanyDetailSection;
const __TURBOPACK__default__export__ = CompanyDetailSection;
var _c;
__turbopack_context__.k.register(_c, "CompanyDetailSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsSection",
    ()=>ProjectsSection,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const ProjectsSection = ({ projectsSection, className })=>{
    _s();
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const { projects } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    if (!projectsSection?.enabled) return null;
    const publishedProjects = (projects || []).filter((p)=>p.status === 'published');
    const latestProjects = publishedProjects.slice(0, 6);
    const manualProjects = projectsSection.projects || [];
    // Use manual projects if they exist (they have images from page section), otherwise fall back to DB projects
    const displayItems = manualProjects.length > 0 ? manualProjects : latestProjects;
    // DEBUG: Check if projects have images
    if (displayItems.length > 0) {
        const firstItem = displayItems[0];
        console.log('ProjectsSection - First project:', firstItem);
        console.log('ProjectsSection - featuredImage:', firstItem?.featuredImage);
        console.log('ProjectsSection - image:', firstItem?.image);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-24 lg:py-32 overflow-hidden', className),
        style: {
            backgroundColor: themeColors.pageBackground
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] tracking-[0.4em] uppercase font-bold",
                                            style: {
                                                color: themeColors.primaryButton
                                            },
                                            children: "Accommodations"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-[1px]",
                                            style: {
                                                backgroundColor: `${themeColors.primaryButton}40`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                projectsSection.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl lg:text-5xl font-serif leading-tight",
                                    style: {
                                        color: themeColors.lightPrimaryText
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                        content: projectsSection.title
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        projectsSection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-sm text-base font-light leading-relaxed opacity-70",
                            style: {
                                color: themeColors.lightSecondaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: projectsSection.description
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20",
                    children: displayItems.map((item, idx)=>{
                        // Determine if this is a DB project (has featuredImage) or manual project (has image from page section)
                        const isDBProject = !!item.featuredImage;
                        // Extract title - could be string or Tiptap object
                        const rawTitle = item.title;
                        const titleText = typeof rawTitle === 'string' ? rawTitle : rawTitle?.content?.[0]?.content?.[0]?.text || 'Project';
                        // Extract slug safely
                        const slug = item.slug ? `/projects/${item.slug}` : '/project-detail';
                        // Extract image URL - prioritize image for manual projects, featuredImage for DB projects
                        const imageUrl = isDBProject ? item.featuredImage?.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(item.featuredImage.url) : '' : item.image?.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(item.image.url) : '';
                        // Alternating sizes for masonry feel
                        const isEven = idx % 2 === 0;
                        // Generate unique key - use index which is always unique
                        const itemKey = `project-${idx}-${isDBProject ? 'db' : 'manual'}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex flex-col", !isEven && "md:mt-24" // Staggered effect
                            ),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: slug,
                                    className: "block overflow-hidden relative aspect-[4/5] rounded-sm bg-gray-100",
                                    children: [
                                        imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imageUrl,
                                            alt: titleText,
                                            className: "w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                            lineNumber: 114,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center bg-gray-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 text-sm",
                                                children: "No Image"
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                                lineNumber: 121,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-5 h-5 text-black"
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between border-b border-black/5 pb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl lg:text-3xl font-serif",
                                                    style: {
                                                        color: themeColors.lightPrimaryText
                                                    },
                                                    children: typeof rawTitle === 'string' ? rawTitle : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                        content: rawTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 66
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] tracking-widest uppercase opacity-40 font-bold",
                                                    children: "Explore"
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        (!isDBProject ? item.description : item.shortDescription) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 text-base font-light leading-relaxed opacity-60 max-w-md",
                                            style: {
                                                color: themeColors.lightSecondaryText
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                                content: !isDBProject ? item.description : item.shortDescription
                                            }, void 0, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                                lineNumber: 153,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                            lineNumber: 149,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, itemKey, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                publishedProjects.length > latestProjects.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/project-detail",
                        className: "group flex items-center gap-6 px-10 py-5 border rounded-full transition-all duration-500",
                        style: {
                            borderColor: `${themeColors.secondaryText}20`,
                            color: themeColors.lightPrimaryText
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = themeColors.darkPrimaryText;
                            e.currentTarget.style.color = themeColors.lightPrimaryText;
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = themeColors.lightPrimaryText;
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-black uppercase tracking-[0.2em]",
                                style: {},
                                children: "View All Projects"
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                className: "w-4 h-4 group-hover:rotate-45 transition-transform",
                                style: {
                                    color: 'inherit'
                                }
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProjectsSection, "4N1hnyfs2yOkO5DuNusTRrUEwZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"]
    ];
});
_c = ProjectsSection;
const __TURBOPACK__default__export__ = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTA2Section",
    ()=>CTA2Section,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const CTA2Section = ({ cta2Section, className })=>{
    _s();
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const safeCta = cta2Section ?? {
        enabled: false
    };
    const backgroundImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CTA2Section.useMemo[backgroundImageUrl]": ()=>{
            return safeCta.backgroundImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(safeCta.backgroundImage) : '';
        }
    }["CTA2Section.useMemo[backgroundImageUrl]"], [
        safeCta.backgroundImage
    ]);
    if (!safeCta?.enabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden', className),
        style: backgroundImageUrl ? {
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        } : {
            backgroundColor: themeColors.primaryButton
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: backgroundImageUrl ? 'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 52%, rgba(0,0,0,0.15) 100%)' : 'none'
                }
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-16 lg:py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl",
                        children: [
                            safeCta.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight",
                                style: {
                                    color: '#FFFFFF'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: safeCta.title
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            safeCta.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-base sm:text-lg lg:text-xl max-w-2xl",
                                style: {
                                    color: 'rgba(255,255,255,0.88)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: safeCta.description
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            safeCta.primaryButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: safeCta.primaryButton.href,
                                    className: "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-colors",
                                    style: {
                                        backgroundColor: themeColors.pageBackground,
                                        color: themeColors.lightPrimaryText
                                    },
                                    children: safeCta.primaryButton.label
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CTA2Section, "LwSlP8HkGkMe1PvIdSAlon4mcjQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = CTA2Section;
const __TURBOPACK__default__export__ = CTA2Section;
var _c;
__turbopack_context__.k.register(_c, "CTA2Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTA3Section",
    ()=>CTA3Section,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const CTA3Section = ({ cta3Section, className })=>{
    _s();
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const safeCta = cta3Section ?? {
        enabled: false
    };
    const backgroundImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CTA3Section.useMemo[backgroundImageUrl]": ()=>{
            return safeCta.backgroundImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(safeCta.backgroundImage) : '';
        }
    }["CTA3Section.useMemo[backgroundImageUrl]"], [
        safeCta.backgroundImage
    ]);
    if (!safeCta?.enabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden', className),
        style: backgroundImageUrl ? {
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        } : {
            backgroundColor: themeColors.sectionBackground
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: backgroundImageUrl ? 'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.30) 52%, rgba(0,0,0,0.10) 100%)' : `linear-gradient(135deg, ${themeColors.primaryButton}22 0%, rgba(0,0,0,0) 60%)`
                }
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-16 lg:py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl",
                        children: [
                            safeCta.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight",
                                style: {
                                    color: backgroundImageUrl ? '#FFFFFF' : themeColors.lightPrimaryText
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: safeCta.title
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            safeCta.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-base sm:text-lg lg:text-xl max-w-2xl",
                                style: {
                                    color: backgroundImageUrl ? 'rgba(255,255,255,0.88)' : themeColors.lightSecondaryText
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                    content: safeCta.description
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            safeCta.primaryButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: safeCta.primaryButton.href,
                                    className: "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-colors",
                                    style: {
                                        backgroundColor: themeColors.pageBackground,
                                        color: themeColors.lightPrimaryText
                                    },
                                    children: safeCta.primaryButton.label
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CTA3Section, "LwSlP8HkGkMe1PvIdSAlon4mcjQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"]
    ];
});
_c = CTA3Section;
const __TURBOPACK__default__export__ = CTA3Section;
var _c;
__turbopack_context__.k.register(_c, "CTA3Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServingAreasSection",
    ()=>ServingAreasSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/lucide-react@0.302.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ServingAreasSection = ({ enabled = true, title, description, className })=>{
    _s();
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const { site } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const areas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ServingAreasSection.useMemo[areas]": ()=>{
            return Array.isArray(site?.serviceAreas) ? site.serviceAreas.filter(Boolean) : [];
        }
    }["ServingAreasSection.useMemo[areas]"], [
        site?.serviceAreas
    ]);
    if (!site || areas.length === 0 || !enabled) return null;
    const resolvedTitle = title || `${site?.business?.name || site?.name || ''} Locations`.trim() || 'Locations';
    const resolvedDescription = description || 'Discover the locales where we offer our bespoke services.';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-24 lg:py-32', className),
        style: {
            backgroundColor: themeColors.sectionBackground
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] tracking-[0.4em] uppercase font-bold",
                                            style: {
                                                color: themeColors.primaryButton
                                            },
                                            children: "OUR REACH"
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-[1px]",
                                            style: {
                                                backgroundColor: `${themeColors.primaryButton}40`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                resolvedTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl lg:text-7xl font-serif leading-tight",
                                    style: {
                                        color: themeColors.lightPrimaryText
                                    },
                                    children: resolvedTitle
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        resolvedDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-sm text-lg font-light leading-relaxed opacity-70",
                            style: {
                                color: themeColors.lightSecondaryText
                            },
                            children: resolvedDescription
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-y-8 sm:gap-y-12 gap-x-8 sm:gap-x-12 lg:gap-x-16 border-t pt-12 sm:pt-16",
                        style: {
                            borderColor: `${themeColors.inactive}30`
                        },
                        children: areas.map((area, idx)=>{
                            const citySlug = String(area).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 transition-all duration-500",
                                    style: {},
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-bold tracking-tighter opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all",
                                            style: {
                                                color: themeColors.primaryButton
                                            },
                                            children: (idx + 1).toString().padStart(2, '0')
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                            lineNumber: 92,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl lg:text-3xl font-serif transition-colors",
                                                    style: {
                                                        color: themeColors.lightPrimaryText
                                                    },
                                                    children: area
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$302$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-4 h-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500",
                                                    style: {
                                                        color: themeColors.primaryButton
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                            lineNumber: 99,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-0 group-hover:w-full transition-all duration-700",
                                            style: {
                                                backgroundColor: themeColors.primaryButton
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                    lineNumber: 87,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, `${area}-${idx}`, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServingAreasSection, "43jjhROWsJoF6l4ESnN8j+yLev4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"]
    ];
});
_c = ServingAreasSection;
var _c;
__turbopack_context__.k.register(_c, "ServingAreasSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GallerySection",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$embla$2d$carousel$2d$react$40$8$2e$6$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/embla-carousel-react@8.6.0_react@19.2.3/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const GallerySection = ({ gallerySection, className })=>{
    _s();
    // Debug logging
    console.log('GallerySection render - gallerySection:', gallerySection);
    if (!gallerySection?.enabled || !gallerySection.images || gallerySection.images.length === 0) {
        console.log('GallerySection not rendering - enabled:', gallerySection?.enabled, 'images length:', gallerySection?.images?.length);
        return null;
    }
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const { site } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GallerySection.useMemo[images]": ()=>{
            const processedImages = (gallerySection.images || []).map({
                "GallerySection.useMemo[images].processedImages": (image, index)=>{
                    const imageUrl = typeof image === 'string' ? image : image.url;
                    const altText = typeof image === 'object' ? image.altText : '';
                    const caption = typeof image === 'object' ? image.caption : null;
                    return {
                        key: `${imageUrl}-${index}`,
                        imageUrl,
                        altText,
                        caption
                    };
                }
            }["GallerySection.useMemo[images].processedImages"]);
            console.log('GallerySection processed images:', processedImages);
            return processedImages;
        }
    }["GallerySection.useMemo[images]"], [
        gallerySection.images
    ]);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$embla$2d$carousel$2d$react$40$8$2e$6$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        loop: true,
        align: 'center'
    });
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GallerySection.useCallback[onSelect]": ()=>{
            if (!emblaApi) return;
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }["GallerySection.useCallback[onSelect]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GallerySection.useEffect": ()=>{
            if (!emblaApi) return;
            onSelect();
            emblaApi.on('select', onSelect);
            emblaApi.on('reInit', onSelect);
        }
    }["GallerySection.useEffect"], [
        emblaApi,
        onSelect
    ]);
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GallerySection.useCallback[scrollTo]": (index)=>{
            emblaApi?.scrollTo(index);
        }
    }["GallerySection.useCallback[scrollTo]"], [
        emblaApi
    ]);
    const prevIndex = (selectedIndex - 1 + images.length) % images.length;
    const nextIndex = (selectedIndex + 1) % images.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-16 lg:py-24', className),
        style: {
            backgroundColor: themeColors.pageBackground
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs tracking-wide",
                            style: {
                                color: themeColors.darkSecondaryText
                            },
                            children: "2025 Edition →"
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        gallerySection.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 text-4xl lg:text-5xl font-semibold",
                            style: {
                                color: themeColors.darkPrimaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: gallerySection.title
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                lineNumber: 90,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                            lineNumber: 86,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        gallerySection.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-sm max-w-3xl mx-auto",
                            style: {
                                color: themeColors.darkSecondaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: gallerySection.description
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                lineNumber: 99,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                            lineNumber: 95,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid grid-cols-12 gap-8 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "hidden lg:block col-span-2 rounded-2xl overflow-hidden border transition-transform",
                            style: {
                                borderColor: `${themeColors.inactive}30`,
                                backgroundColor: '#fff'
                            },
                            onClick: ()=>scrollTo(prevIndex),
                            "aria-label": "Previous image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-square",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(images[prevIndex]?.imageUrl),
                                    alt: images[prevIndex]?.altText || '',
                                    className: "h-full w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden",
                                    ref: emblaRef,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex",
                                        children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shrink-0 grow-0 basis-full px-2",
                                                "aria-hidden": idx !== selectedIndex,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-3xl overflow-hidden border",
                                                    style: {
                                                        borderColor: `${themeColors.inactive}22`,
                                                        boxShadow: '0 20px 45px rgba(0,0,0,0.10)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative aspect-[16/7] md:aspect-[16/9] lg:aspect-[16/7]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(img.imageUrl),
                                                            alt: img.altText || `Gallery image ${idx + 1}`,
                                                            className: "absolute inset-0 h-full w-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, img.key, false, {
                                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                                lineNumber: 130,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                    lineNumber: 127,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center justify-center gap-2",
                                    children: images.slice(0, 8).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": `Go to slide ${i + 1}`,
                                            onClick: ()=>scrollTo(i),
                                            className: "h-2 rounded-full transition-all",
                                            style: {
                                                width: selectedIndex === i ? 18 : 6,
                                                backgroundColor: selectedIndex === i ? themeColors.darkPrimaryText : `${themeColors.inactive}66`
                                            }
                                        }, i, false, {
                                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                    lineNumber: 155,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "hidden lg:block col-span-2 rounded-2xl overflow-hidden border transition-transform",
                            style: {
                                borderColor: `${themeColors.inactive}30`,
                                backgroundColor: '#fff'
                            },
                            onClick: ()=>scrollTo(nextIndex),
                            "aria-label": "Next image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-square",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageSrc"])(images[nextIndex]?.imageUrl),
                                    alt: images[nextIndex]?.altText || '',
                                    className: "h-full w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                    lineNumber: 184,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                                lineNumber: 183,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                            lineNumber: 173,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
            lineNumber: 76,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx",
        lineNumber: 72,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GallerySection, "OLc34mvCWEBpgiu/RxRyTlMoU8k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$embla$2d$carousel$2d$react$40$8$2e$6$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = GallerySection;
var _c;
__turbopack_context__.k.register(_c, "GallerySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/sections/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/ui/TiptapRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/hooks/useTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/lib/utils.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const DAY_LABELS = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
};
const ContactSection = ({ contactSection, className })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [isCurrentlyOpen, setIsCurrentlyOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"])();
    const themeFonts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"])();
    const { site } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    const businessHours = site?.business?.businessHours;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactSection.useEffect": ()=>{
            if (!businessHours?.isEnabled) return;
            const timer = setInterval({
                "ContactSection.useEffect.timer": ()=>{
                    setCurrentTime(new Date());
                }
            }["ContactSection.useEffect.timer"], 60000);
            return ({
                "ContactSection.useEffect": ()=>clearInterval(timer)
            })["ContactSection.useEffect"];
        }
    }["ContactSection.useEffect"], [
        businessHours?.isEnabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactSection.useEffect": ()=>{
            if (!businessHours?.isEnabled || !businessHours?.hours) return;
            const now = currentTime;
            const currentDay = now.toLocaleDateString('en-US', {
                weekday: 'long'
            }).toLowerCase();
            const currentTimeStr = now.toTimeString().slice(0, 5);
            const todayHours = businessHours.hours.find({
                "ContactSection.useEffect.todayHours": (h)=>h.day === currentDay
            }["ContactSection.useEffect.todayHours"]);
            if (todayHours && todayHours.isOpen) {
                if (todayHours.is24Hours) {
                    setIsCurrentlyOpen(true);
                } else if (todayHours.timeRanges && todayHours.timeRanges.length > 0) {
                    const isOpen = todayHours.timeRanges.some({
                        "ContactSection.useEffect.isOpen": (range)=>{
                            return currentTimeStr >= range.openTime && currentTimeStr <= range.closeTime;
                        }
                    }["ContactSection.useEffect.isOpen"]);
                    setIsCurrentlyOpen(isOpen);
                } else {
                    setIsCurrentlyOpen(false);
                }
            } else {
                setIsCurrentlyOpen(false);
            }
        }
    }["ContactSection.useEffect"], [
        currentTime,
        businessHours
    ]);
    const formatTime = (time)=>{
        if (!time) return '';
        if (businessHours?.displayFormat === '12h') {
            const [hours, minutes] = time.split(':');
            const hour = parseInt(hours);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const displayHour = hour % 12 || 12;
            return `${displayHour}:${minutes} ${ampm}`;
        }
        return time;
    };
    const formatDayHours = (dayHours)=>{
        if (!dayHours.isOpen) return 'Closed';
        if (dayHours.is24Hours) return '24 Hours';
        if (dayHours.timeRanges && dayHours.timeRanges.length > 0) {
            return dayHours.timeRanges.map((range)=>`${formatTime(range.openTime)} - ${formatTime(range.closeTime)}`).join(', ');
        }
        return '';
    };
    const getCurrentStatus = ()=>{
        if (!businessHours?.isEnabled) return null;
        if (businessHours.is24_7) return {
            status: 'Open 24/7',
            color: 'text-green-600',
            bgColor: 'bg-green-100'
        };
        return isCurrentlyOpen ? {
            status: 'Open Now',
            color: 'text-green-600',
            bgColor: 'bg-green-100'
        } : {
            status: 'Closed',
            color: 'text-red-600',
            bgColor: 'bg-red-100'
        };
    };
    const status = getCurrentStatus();
    const currentDay = currentTime.toLocaleDateString('en-US', {
        weekday: 'long'
    }).toLowerCase();
    if (!contactSection?.enabled) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    siteId: site?._id,
                    subject: 'Contact Form Submission from Website'
                })
            });
            const result = await response.json();
            if (response.ok) {
                setSubmitMessage('✅ Message sent successfully! We\'ll get back to you soon.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                setSubmitMessage(`❌ ${result.error || 'Failed to send message. Please try again.'}`);
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setSubmitMessage('❌ Network error. Please check your connection and try again.');
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('py-20 lg:py-28', className),
        style: {
            backgroundColor: themeColors.pageBackground
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm uppercase tracking-widest font-medium",
                            style: {
                                color: themeColors.primaryButton
                            },
                            children: "Location"
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/ContactSection.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-semibold mt-4",
                            style: {
                                color: themeColors.lightPrimaryText
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$ui$2f$TiptapRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiptapRenderer"], {
                                content: contactSection.title
                            }, void 0, false, {
                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/ContactSection.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/sections/ContactSection.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-3 gap-8 items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-8 lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 md:p-6 rounded-[1.5rem] shadow-sm border flex flex-col h-full",
                                style: {
                                    backgroundColor: themeColors.sectionBackground,
                                    borderColor: `${themeColors.inactive}33`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-xl font-semibold mb-6",
                                        children: "Get in Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-4 flex-grow flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "name",
                                                        placeholder: "Name",
                                                        required: true,
                                                        value: formData.name,
                                                        onChange: handleChange,
                                                        className: "w-full bg-white/50 border-b py-2 px-3 text-sm focus:outline-none focus:border-black transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "phone",
                                                        placeholder: "Phone",
                                                        value: formData.phone,
                                                        onChange: handleChange,
                                                        className: "w-full bg-white/50 border-b py-2 px-3 text-sm focus:outline-none focus:border-black transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "email",
                                                type: "email",
                                                placeholder: "Email Address",
                                                required: true,
                                                value: formData.email,
                                                onChange: handleChange,
                                                className: "w-full bg-white/50 border-b py-2 px-3 text-sm focus:outline-none focus:border-black transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "message",
                                                placeholder: "Your Message...",
                                                rows: 3,
                                                required: true,
                                                value: formData.message,
                                                onChange: handleChange,
                                                className: "w-full bg-white/50 border-b py-2 px-3 text-sm focus:outline-none focus:border-black transition-colors resize-none flex-grow"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                className: "group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.01] mt-auto",
                                                style: {
                                                    backgroundColor: themeColors.primaryButton,
                                                    color: themeColors.pageBackground
                                                },
                                                children: [
                                                    isSubmitting ? 'Sending...' : 'Send Message',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowUpRight, {
                                                        size: 18,
                                                        className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-center text-xs font-medium",
                                        children: submitMessage
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/ContactSection.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1 h-full order-3 lg:order-2",
                            children: contactSection.showMap && site?.business?.coordinates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full w-full rounded-[1.5rem] overflow-hidden shadow-lg border-4 border-white min-h-[300px] md:min-h-[400px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    title: "Office Location",
                                    width: "100%",
                                    height: "100%",
                                    frameBorder: "0",
                                    style: {
                                        border: 0
                                    },
                                    src: `https://maps.google.com/maps?q=${site.business.coordinates.latitude},${site.business.coordinates.longitude}&z=15&output=embed`,
                                    allowFullScreen: true,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/sections/ContactSection.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                lineNumber: 232,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/ContactSection.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1 h-full order-2 lg:order-3",
                            children: businessHours?.isEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-[1.5rem] border shadow-sm h-full flex flex-col",
                                style: {
                                    backgroundColor: themeColors.sectionBackground,
                                    borderColor: `${themeColors.inactive}33`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 rounded-full bg-black/5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Clock, {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold",
                                                        children: "Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", status.bgColor, status.color),
                                                children: status.status
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                lineNumber: 262,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 flex-grow",
                                        children: businessHours.hours.map((dayHours)=>{
                                            const isToday = dayHours.day === currentDay;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between py-2 px-3 rounded-lg transition-colors", isToday ? "bg-white shadow-sm border" : "opacity-70"),
                                                style: isToday ? {
                                                    borderColor: `${themeColors.primaryButton}33`
                                                } : {},
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-medium", isToday && "font-bold"),
                                                        children: DAY_LABELS[dayHours.day]
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[11px]", isToday && "font-medium"),
                                                        children: formatDayHours(dayHours)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, dayHours.day, true, {
                                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                                lineNumber: 272,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    businessHours.timezone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-[10px] opacity-40 text-center italic mt-auto",
                                        children: [
                                            "Timezone: ",
                                            businessHours.timezone
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/sections/ContactSection.tsx",
                                        lineNumber: 292,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/sections/ContactSection.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/sections/ContactSection.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/sections/ContactSection.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/sections/ContactSection.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/sections/ContactSection.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactSection, "wbYbI2r4R+J7v9uqsrfmsSyeeNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeColors"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$hooks$2f$useTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeFonts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"]
    ];
});
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/HomeClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_9d8d1bf7a8807769963b5151bd760c41/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/providers/WebBuilderProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$ServicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/ServicesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$ServiceHighlightsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/ServiceHighlightsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$TestimonialsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/TestimonialsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$FAQSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/FAQSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$CTASection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/CTASection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$WhyChooseUsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/WhyChooseUsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$CompanyDetailSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/CompanyDetailSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/ProjectsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$CTA2Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/CTA2Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$CTA3Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/CTA3Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$ServingAreasSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/ServingAreasSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$GallerySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/HomeMaintenanceServices/app/components/sections/GallerySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/sections/ContactSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function HomeClient() {
    _s();
    const { site, pages, testimonials, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"])();
    // Debug testimonials data
    console.log('HomeClient testimonials:', testimonials);
    // Get theme colors from site
    const themeColors = {
        primary: site?.theme?.lightPrimaryColor || '#000000',
        secondary: site?.theme?.lightSecondaryColor || '#EF4444',
        accent: site?.theme?.lightPrimaryColor || '#3B82F6',
        // New theme colors
        mainText: site?.theme?.darkPrimaryColor || '#1F2937',
        secondaryText: site?.theme?.darkSecondaryColor || '#6B7280',
        pageBackground: site?.theme?.pageBackgroundColor || '#FFFFFF',
        sectionBackground: site?.theme?.sectionBackgroundColorLight || '#F9FAFB',
        cardBackground: site?.theme?.cardBackgroundColorLight || '#FFFFFF',
        primaryButton: site?.theme?.primaryButtonColorLight || '#3B82F6',
        hoverActive: site?.theme?.hoverActiveColorLight || '#2563EB',
        inactive: site?.theme?.inactiveColorLight || '#9CA3AF'
    };
    // Get theme fonts from site
    const themeFonts = {
        heading: site?.theme?.headingFont,
        body: site?.theme?.bodyFont
    };
    if (loading && !site) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            style: {
                backgroundColor: themeColors.pageBackground
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2",
                style: {
                    borderTopColor: themeColors.primaryButton,
                    borderBottomColor: themeColors.primaryButton
                }
            }, void 0, false, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/HomeClient.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    }
    if (error && !site) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center p-4",
            style: {
                backgroundColor: themeColors.pageBackground
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 rounded-lg max-w-lg text-center",
                style: {
                    backgroundColor: '#FEE2E2',
                    borderColor: themeColors.secondary,
                    borderWidth: '1px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-2",
                        style: {
                            color: themeColors.secondary,
                            fontFamily: themeFonts.heading
                        },
                        children: "Error"
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: themeColors.secondary,
                            fontFamily: themeFonts.body
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/HomeClient.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    const homePage = pages.find((p)=>p.pageType === 'home');
    const displayPage = homePage;
    if (!displayPage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center p-4",
            style: {
                backgroundColor: themeColors.pageBackground
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4",
                    style: {
                        color: themeColors.mainText,
                        fontFamily: themeFonts.heading
                    },
                    children: "No Home Page Found"
                }, void 0, false, {
                    fileName: "[project]/app/HomeClient.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: themeColors.secondaryText,
                        fontFamily: themeFonts.body
                    },
                    children: 'Please create a page with type "home" in the site builder.'
                }, void 0, false, {
                    fileName: "[project]/app/HomeClient.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/HomeClient.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen selection:bg-blue-100 selection:text-blue-900",
        style: {
            backgroundColor: themeColors.pageBackground,
            fontFamily: themeFonts.body
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                        hero: displayPage.hero
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$ServiceHighlightsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceHighlightsSection"], {
                        serviceHighlightsSection: displayPage.serviceHighlightsSection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {
                        aboutSection: displayPage.aboutSection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$ServicesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServicesSection"], {
                        servicesSection: displayPage.servicesSection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$CTASection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTASection"], {
                        ctaSection: displayPage.ctaSection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$WhyChooseUsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhyChooseUsSection"], {
                        whyChooseUsSection: displayPage.whyChooseUsSection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$CTA3Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTA3Section"], {
                        cta3Section: displayPage.cta3Section
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$CompanyDetailSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompanyDetailSection"], {
                        companyDetailSection: displayPage.companyDetailSection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectsSection"], {
                        projectsSection: displayPage.projectsSection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$CTA2Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTA2Section"], {
                        cta2Section: displayPage.cta2Section
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$TestimonialsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestimonialsSection"], {
                        testimonialsSection: displayPage.testimonialsSection || {
                            enabled: true,
                            testimonials: testimonials?.testimonials || []
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$GallerySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GallerySection"], {
                        gallerySection: displayPage.gallerySection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$ServingAreasSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServingAreasSection"], {}, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$sections$2f$FAQSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQSection"], {
                        faqSection: displayPage.faqSection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {
                        contactSection: displayPage.contactSection
                    }, void 0, false, {
                        fileName: "[project]/app/HomeClient.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_9d8d1bf7a8807769963b5151bd760c41$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/HomeClient.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/HomeClient.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(HomeClient, "f5CmlP2OSdOqfZ7igRqyIDsQJNc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$HomeMaintenanceServices$2f$app$2f$providers$2f$WebBuilderProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebBuilder"]
    ];
});
_c = HomeClient;
var _c;
__turbopack_context__.k.register(_c, "HomeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__383493de._.js.map