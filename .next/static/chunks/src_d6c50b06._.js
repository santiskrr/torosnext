(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/componentes/CartaPerfil.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const DEFAULT_BEHIND_GRADIENT = "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";
const DEFAULT_INNER_GRADIENT = "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";
const ANIMATION_CONFIG = {
    SMOOTH_DURATION: 600,
    INITIAL_DURATION: 1500,
    INITIAL_X_OFFSET: 70,
    INITIAL_Y_OFFSET: 60
};
const clamp = (value, min = 0, max = 100)=>Math.min(Math.max(value, min), max);
const round = (value, precision = 3)=>parseFloat(value.toFixed(precision));
const adjust = (value, fromMin, fromMax, toMin, toMax)=>round(toMin + (toMax - toMin) * (value - fromMin) / (fromMax - fromMin));
const easeInOutCubic = (x)=>x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const ProfileCardComponent = ({ avatarUrl = "<Placeholder for avatar URL>", iconUrl = "<Placeholder for icon URL>", grainUrl = "<Placeholder for grain URL>", behindGradient, innerGradient, showBehindGradient = true, className = "", enableTilt = true, miniAvatarUrl, name = "Javi A. Torres", title = "Software Engineer", handle = "javicodes", status = "Online", contactText = "Contact", showUserInfo = true, onContactClick })=>{
    _s();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfileCardComponent.useMemo[animationHandlers]": ()=>{
            if (!enableTilt) return null;
            let rafId = null;
            const updateCardTransform = {
                "ProfileCardComponent.useMemo[animationHandlers].updateCardTransform": (offsetX, offsetY, card, wrap)=>{
                    const width = card.clientWidth;
                    const height = card.clientHeight;
                    const percentX = clamp(100 / width * offsetX);
                    const percentY = clamp(100 / height * offsetY);
                    const centerX = percentX - 50;
                    const centerY = percentY - 50;
                    const properties = {
                        "--pointer-x": `${percentX}%`,
                        "--pointer-y": `${percentY}%`,
                        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
                        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
                        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
                        "--pointer-from-top": `${percentY / 100}`,
                        "--pointer-from-left": `${percentX / 100}`,
                        "--rotate-x": `${round(-(centerX / 5))}deg`,
                        "--rotate-y": `${round(centerY / 4)}deg`
                    };
                    Object.entries(properties).forEach({
                        "ProfileCardComponent.useMemo[animationHandlers].updateCardTransform": ([property, value])=>{
                            wrap.style.setProperty(property, value);
                        }
                    }["ProfileCardComponent.useMemo[animationHandlers].updateCardTransform"]);
                }
            }["ProfileCardComponent.useMemo[animationHandlers].updateCardTransform"];
            const createSmoothAnimation = {
                "ProfileCardComponent.useMemo[animationHandlers].createSmoothAnimation": (duration, startX, startY, card, wrap)=>{
                    const startTime = performance.now();
                    const targetX = wrap.clientWidth / 2;
                    const targetY = wrap.clientHeight / 2;
                    const animationLoop = {
                        "ProfileCardComponent.useMemo[animationHandlers].createSmoothAnimation.animationLoop": (currentTime)=>{
                            const elapsed = currentTime - startTime;
                            const progress = clamp(elapsed / duration);
                            const easedProgress = easeInOutCubic(progress);
                            const currentX = adjust(easedProgress, 0, 1, startX, targetX);
                            const currentY = adjust(easedProgress, 0, 1, startY, targetY);
                            updateCardTransform(currentX, currentY, card, wrap);
                            if (progress < 1) {
                                rafId = requestAnimationFrame(animationLoop);
                            }
                        }
                    }["ProfileCardComponent.useMemo[animationHandlers].createSmoothAnimation.animationLoop"];
                    rafId = requestAnimationFrame(animationLoop);
                }
            }["ProfileCardComponent.useMemo[animationHandlers].createSmoothAnimation"];
            return {
                updateCardTransform,
                createSmoothAnimation,
                cancelAnimation: ({
                    "ProfileCardComponent.useMemo[animationHandlers]": ()=>{
                        if (rafId) {
                            cancelAnimationFrame(rafId);
                            rafId = null;
                        }
                    }
                })["ProfileCardComponent.useMemo[animationHandlers]"]
            };
        }
    }["ProfileCardComponent.useMemo[animationHandlers]"], [
        enableTilt
    ]);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handlePointerMove]": (event)=>{
            const card = cardRef.current;
            const wrap = wrapRef.current;
            if (!card || !wrap || !animationHandlers) return;
            const rect = card.getBoundingClientRect();
            animationHandlers.updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap);
        }
    }["ProfileCardComponent.useCallback[handlePointerMove]"], [
        animationHandlers
    ]);
    const handlePointerEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handlePointerEnter]": ()=>{
            const card = cardRef.current;
            const wrap = wrapRef.current;
            if (!card || !wrap || !animationHandlers) return;
            animationHandlers.cancelAnimation();
            wrap.classList.add("active");
            card.classList.add("active");
        }
    }["ProfileCardComponent.useCallback[handlePointerEnter]"], [
        animationHandlers
    ]);
    const handlePointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handlePointerLeave]": (event)=>{
            const card = cardRef.current;
            const wrap = wrapRef.current;
            if (!card || !wrap || !animationHandlers) return;
            animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.SMOOTH_DURATION, event.offsetX, event.offsetY, card, wrap);
            wrap.classList.remove("active");
            card.classList.remove("active");
        }
    }["ProfileCardComponent.useCallback[handlePointerLeave]"], [
        animationHandlers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileCardComponent.useEffect": ()=>{
            if (!enableTilt || !animationHandlers) return;
            const card = cardRef.current;
            const wrap = wrapRef.current;
            if (!card || !wrap) return;
            const pointerMoveHandler = handlePointerMove;
            const pointerEnterHandler = handlePointerEnter;
            const pointerLeaveHandler = handlePointerLeave;
            card.addEventListener("pointerenter", pointerEnterHandler);
            card.addEventListener("pointermove", pointerMoveHandler);
            card.addEventListener("pointerleave", pointerLeaveHandler);
            const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
            const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
            animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
            animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY, card, wrap);
            return ({
                "ProfileCardComponent.useEffect": ()=>{
                    card.removeEventListener("pointerenter", pointerEnterHandler);
                    card.removeEventListener("pointermove", pointerMoveHandler);
                    card.removeEventListener("pointerleave", pointerLeaveHandler);
                    animationHandlers.cancelAnimation();
                }
            })["ProfileCardComponent.useEffect"];
        }
    }["ProfileCardComponent.useEffect"], [
        enableTilt,
        animationHandlers,
        handlePointerMove,
        handlePointerEnter,
        handlePointerLeave
    ]);
    const cardStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfileCardComponent.useMemo[cardStyle]": ()=>({
                "--icon": iconUrl ? `url(${iconUrl})` : "none",
                "--grain": grainUrl ? `url(${grainUrl})` : "none",
                "--behind-gradient": showBehindGradient ? behindGradient ?? DEFAULT_BEHIND_GRADIENT : "none",
                "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT
            })
    }["ProfileCardComponent.useMemo[cardStyle]"], [
        iconUrl,
        grainUrl,
        showBehindGradient,
        behindGradient,
        innerGradient
    ]);
    const handleContactClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handleContactClick]": ()=>{
            onContactClick?.();
        }
    }["ProfileCardComponent.useCallback[handleContactClick]"], [
        onContactClick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: `pc-card-wrapper ${className}`.trim(),
        style: cardStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: cardRef,
            className: "pc-card",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pc-inside",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-shine"
                    }, void 0, false, {
                        fileName: "[project]/src/componentes/CartaPerfil.jsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-glare"
                    }, void 0, false, {
                        fileName: "[project]/src/componentes/CartaPerfil.jsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-content pc-avatar-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "avatar",
                                src: avatarUrl,
                                alt: `${name || "User"} avatar`,
                                loading: "lazy",
                                onError: (e)=>{
                                    const target = e.target;
                                    target.style.display = "none";
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            showUserInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pc-user-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pc-user-details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pc-mini-avatar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: miniAvatarUrl || avatarUrl,
                                                    alt: `${name || "User"} mini avatar`,
                                                    loading: "lazy",
                                                    onError: (e)=>{
                                                        const target = e.target;
                                                        target.style.opacity = "0.5";
                                                        target.src = avatarUrl;
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pc-user-text",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pc-handle",
                                                        children: [
                                                            "@",
                                                            handle
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pc-status",
                                                        children: status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "pc-contact-btn",
                                        onClick: handleContactClick,
                                        style: {
                                            pointerEvents: "auto"
                                        },
                                        type: "button",
                                        "aria-label": `Contact ${name || "user"}`,
                                        children: contactText
                                    }, void 0, false, {
                                        fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                        lineNumber: 283,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/componentes/CartaPerfil.jsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pc-details",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/componentes/CartaPerfil.jsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/componentes/CartaPerfil.jsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/componentes/CartaPerfil.jsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/componentes/CartaPerfil.jsx",
                lineNumber: 249,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/componentes/CartaPerfil.jsx",
            lineNumber: 248,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/componentes/CartaPerfil.jsx",
        lineNumber: 243,
        columnNumber: 5
    }, this);
};
_s(ProfileCardComponent, "0Xx+EuYdZUNzn3GzQddOjoLGcQk=");
_c = ProfileCardComponent;
const ProfileCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(ProfileCardComponent);
_c1 = ProfileCard;
const __TURBOPACK__default__export__ = ProfileCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfileCardComponent");
__turbopack_context__.k.register(_c1, "ProfileCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/devs/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Devs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$componentes$2f$CartaPerfil$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/componentes/CartaPerfil.jsx [app-client] (ecmascript)");
"use client";
;
;
function Devs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black min-h-screen flex items-center justify-center p-4 sm:p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-4xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/santiskrr",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-full max-w-md mx-auto sm:mx-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$componentes$2f$CartaPerfil$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "Santiskrr",
                        title: "Software Engineer",
                        handle: "Santicodes",
                        status: "Online",
                        contactText: "Contact Me",
                        avatarUrl: "https://media.istockphoto.com/id/1142192548/es/vector/perfil-de-avatar-hombre-silueta-de-cara-masculina-o-icono-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=O6KtgzjlrIvoGi2Cb1ZyppWKlqGL_5IXVHLUdLN33Ag=",
                        showUserInfo: true,
                        enableTilt: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/devs/page.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/devs/page.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/Ale754-bot",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-full max-w-md mx-auto sm:mx-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$componentes$2f$CartaPerfil$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "Alebot",
                        title: "Software Engineer",
                        handle: "Alecodes",
                        status: "Online",
                        contactText: "Contact Me",
                        avatarUrl: "https://media.istockphoto.com/id/1142192548/es/vector/perfil-de-avatar-hombre-silueta-de-cara-masculina-o-icono-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=O6KtgzjlrIvoGi2Cb1ZyppWKlqGL_5IXVHLUdLN33Ag=",
                        showUserInfo: true,
                        enableTilt: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/devs/page.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/devs/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/devs/page.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/devs/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Devs;
var _c;
__turbopack_context__.k.register(_c, "Devs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d6c50b06._.js.map