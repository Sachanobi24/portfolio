"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req) {\n    const { pathname } = req.nextUrl;\n    // Ne pas protéger la page login elle-même\n    if (pathname === \"/admin/login\") return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    if (pathname.startsWith(\"/admin\")) {\n        const authCookie = req.cookies.get(\"admin_auth\");\n        if (!authCookie || authCookie.value !== process.env.ADMIN_SECRET) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/admin/login\", req.url));\n        }\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        \"/admin/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRWhELFNBQVNDLFdBQVdDLEdBQWdCO0lBQ3pDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdELElBQUlFLE9BQU87SUFFaEMsMENBQTBDO0lBQzFDLElBQUlELGFBQWEsZ0JBQWdCLE9BQU9ILHFEQUFZQSxDQUFDSyxJQUFJO0lBRXpELElBQUlGLFNBQVNHLFVBQVUsQ0FBQyxXQUFXO1FBQ2pDLE1BQU1DLGFBQWFMLElBQUlNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQ25DLElBQUksQ0FBQ0YsY0FBY0EsV0FBV0csS0FBSyxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLFlBQVksRUFBRTtZQUNoRSxPQUFPYixxREFBWUEsQ0FBQ2MsUUFBUSxDQUFDLElBQUlDLElBQUksZ0JBQWdCYixJQUFJYyxHQUFHO1FBQzlEO0lBQ0Y7SUFFQSxPQUFPaEIscURBQVlBLENBQUNLLElBQUk7QUFDMUI7QUFFTyxNQUFNWSxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7S0FBZ0I7QUFDNUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSByZXEubmV4dFVybFxuXG4gIC8vIE5lIHBhcyBwcm90w6lnZXIgbGEgcGFnZSBsb2dpbiBlbGxlLW3Dqm1lXG4gIGlmIChwYXRobmFtZSA9PT0gJy9hZG1pbi9sb2dpbicpIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXG5cbiAgaWYgKHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9hZG1pbicpKSB7XG4gICAgY29uc3QgYXV0aENvb2tpZSA9IHJlcS5jb29raWVzLmdldCgnYWRtaW5fYXV0aCcpXG4gICAgaWYgKCFhdXRoQ29va2llIHx8IGF1dGhDb29raWUudmFsdWUgIT09IHByb2Nlc3MuZW52LkFETUlOX1NFQ1JFVCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvYWRtaW4vbG9naW4nLCByZXEudXJsKSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbJy9hZG1pbi86cGF0aConXSxcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsInBhdGhuYW1lIiwibmV4dFVybCIsIm5leHQiLCJzdGFydHNXaXRoIiwiYXV0aENvb2tpZSIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInByb2Nlc3MiLCJlbnYiLCJBRE1JTl9TRUNSRVQiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});