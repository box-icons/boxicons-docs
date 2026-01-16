module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/[[...mdxPath]]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/pages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mdx$2d$components$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mdx-components.jsx [app-rsc] (ecmascript)");
;
;
;
const generateStaticParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStaticParamsFor"])('mdxPath');
async function generateMetadata(props) {
    const params = await props.params;
    const { metadata } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importPage"])(params.mdxPath);
    return metadata;
}
const Wrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mdx$2d$components$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])({}).wrapper;
async function Page(props) {
    const params = await props.params;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importPage"])(params.mdxPath);
    const { default: MDXContent, toc, metadata } = result;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        toc: toc,
        metadata: metadata,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MDXContent, {
            ...props,
            params: params
        }, void 0, false, {
            fileName: "[project]/src/app/[[...mdxPath]]/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[[...mdxPath]]/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[[...mdxPath]]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[[...mdxPath]]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/mdx-components.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMDXComponents",
    ()=>useMDXComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$mdx$2d$components$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra-theme-docs/dist/mdx-components/index.js [app-rsc] (ecmascript)"); // nextra-theme-blog or your custom theme
var __TURBOPACK__imported__module__$5b$project$5d2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/package.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
// Get the default MDX components
const themeComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$mdx$2d$components$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])();
function replaceVersion(node, version) {
    if (typeof node === 'string') {
        return node.replaceAll('{{VERSION}}', version);
    }
    // Handle arrays of children (the source of the key warning)
    if (Array.isArray(node)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Children.map(node, (child)=>replaceVersion(child, version));
    }
    // Handle React elements (spans, etc.)
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isValidElement(node)) {
        const children = node.props && node.props.children;
        if (children) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cloneElement(node, {
                ...node.props,
                // Recursively process children
                children: replaceVersion(children, version)
            });
        }
    }
    return node;
}
function useMDXComponents(components) {
    return {
        ...themeComponents,
        ...components,
        Version: ()=>"" + __TURBOPACK__imported__module__$5b$project$5d2f$package$2e$json__$28$json$29$__["default"].icon_version,
        pre: (props)=>{
            // Process children to replace placeholders before rendering
            const newChildren = replaceVersion(props.children, __TURBOPACK__imported__module__$5b$project$5d2f$package$2e$json__$28$json$29$__["default"].icon_version);
            return themeComponents.pre({
                ...props,
                children: newChildren
            });
        }
    };
}
}),
"[project]/src/components/BoxCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoxCard",
    ()=>BoxCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/cards.js [app-rsc] (ecmascript)");
;
;
function BoxCard({ title, description, href, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Cards"].Card, {
        title: title,
        className: "relative",
        href: href,
        icon: icon,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nextra-card-description  px-4 pb-4 text-sm opacity-70 order-1",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/BoxCard.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BoxCard.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_831f0637._.js.map