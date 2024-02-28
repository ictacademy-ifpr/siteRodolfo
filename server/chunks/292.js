"use strict";
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 4025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/headerStyle.tsx

const HeaderStyle = external_styled_components_default().header.withConfig({
  displayName: "headerStyle__HeaderStyle",
  componentId: "sc-dn3q4f-0"
})(["   #transparent{background-color:transparent;}#white{background-color:#fff;}.head{padding:5px 10px;border-bottom:0px solid #eaedf2;position:fixed;z-index:2;width:100%;cursor:pointer;.container{display:flex;align-items:center;justify-content:left;margin-left:10px;width:80%;.imagesBox{position:relative;display:flex;align-items:center;width:80%;.logoRodolfo{padding:5px;margin-right:40px;max-width:150px;width:100%;img{width:100%;}}}}.menu_links{position:absolute;display:flex;right:0px;top:30px;align-items:center;justify-content:center;flex-direction:row;border:none;.links{margin-right:90px;right:180px;top:25px;}a{color:black;&:hover{font-weight:bold;transition:0.1s;}}}.btn_menu{position:absolute;right:80px;top:15px;border:none;background-color:transparent;font-size:35px;cursor:pointer;outline:none;}.menu{position:absolute;background-color:#ffff;max-width:500px;width:100%;right:0;top:74px;flex-direction:column;justify-content:center;align-items:center;padding:20px 5px;border-radius:30px 0 0 30px;transition:all 0.3s linear 0.3s;display:flex;a:last-child{margin-bottom:0;}a{margin-bottom:20px;color:#000;font-weight:600;width:100%;text-align:center;border-radius:30px 0 0 30px;padding:10px 0;&:hover{background:-webkit-radial-gradient(30% 30%,#5047ED,#5CE1E6);color:#fff;transition:0.3s;}}}#open{width:100%;height:300px;}#close{width:0%;height:0px;}}@media (max-width:735px){.head{.btn_menu{right:10px;}.container{display:flex;align-items:center;justify-content:center;margin:0 auto;max-width:400px;width:100%;.imagesBox{position:relative;display:flex;align-items:center;justify-content:center;margin:0 auto;width:100%;}}.menu_links{position:relative;right:0;top:0;align-self:center;.links{position:relative;right:0;top:0;margin:0 auto;align-self:center;}}}}@media (max-width:540px){.head{.container{display:flex;align-items:center;justify-content:center;margin:0 auto;max-width:400px;width:100%;.imagesBox{position:relative;display:flex;align-items:center;justify-content:center;margin:0 auto;width:100%;}}.menu_links{position:relative;right:0;top:0;align-self:center;.links{position:relative;right:0;top:0;margin:0 auto;align-self:center;}}.menu{top:75px;}}}@media (max-width:490px){.head{.menu{top:65px;}}}@media (max-width:4350px){.head{.menu{top:60px;}}}"]);
/* harmony default export */ const headerStyle = (HeaderStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/header.tsx





function Header(props) {
  const {
    0: menuOpen,
    1: setMenuOpen
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    let head = document.getElementById('transparent');

    function handleScroll() {
      if (window.scrollY < 98 && head != null) {
        head.style.backgroundColor = 'transparent';
        head.style.transition = '1s';
      } else if (window.scrollY >= 98 && head != null) {
        head.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(headerStyle, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: props.class,
      className: "head",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "imagesBox",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "logoRodolfo",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/logoRodolfo.png",
                alt: "logo doprofRodolfo"
              })
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "menu_links",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "links",
          children: [" ", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Home"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "links",
          children: [" ", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "http://www.ictacademyifpr.com.br/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "ICT Academy"
            })
          })]
        })]
      })]
    })
  });
}

/***/ }),

/***/ 6819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().footer.withConfig({
  displayName: "FooterStyle",
  componentId: "sc-1rmys7k-0"
})(["background:ffff;padding:10px 10px;img{max-width:50px;width:100%;padding:5%;margin-right:50px;margin-left:50px;&:hover{transform:scale(1.4);}}.container{display:flex;align-items:center;justify-content:center;.logo_huawei{max-width:50px;width:100%;}.logo_ifpr{max-width:50px;width:100%;}.logo_ict{max-width:150px;width:100%;}.city{color:#fff;font-size:20px;margin:0 65px;}}"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterStyle);

/***/ })

};
;