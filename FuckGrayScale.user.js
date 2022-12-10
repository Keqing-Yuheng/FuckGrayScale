// ==UserScript==
// @name         FuckGrayScale
// @namespace    https://github.com/Keqing-Yuheng/FuckGrayScale
// @version      0.1
// @description  Recover normal color display on websites that use grayscale for some reason.
// @author       Keqing-Yuheng
// @include      http*://*
// @match        http*://*
// @grant        none
// @license      LGPL License
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAADO0lEQVQ4jW2TS2hcZQCFv/+//71zZzKvZCbpNDFNnGpjaSJUBesittiCIkWhFrtpceUioHUpoiAouLDqqhJaBBFBDETEVxExCE1bDaQ+sYI1JLbVmUwyybzv3OfvKhjBszoHvrM6HMH/6P6P5+8td/yDrUCPPf7VJXaXyyUdTy2Ye/Wl58+caW5n1fZw+qMb41+0br6+WKk9ImMJkUBia4UZKNpdj+hHuTR7/Oybx2efmd7qiC1zaub3g2tu/IMqwaAbLbHLNugxJBOfLJBeWaVpReRFhlG1Ez8ppguzTz93nxC+ApiadYpL9dKHoaELRQSpxA7yGZe+eA/ZVBbsJjEhuV0OEIQ+Ztue+uPYOz8B59Ti4jnzpaWLrwX27kLOg2RMsa+/wGh/REwJ2qkUnViSkR1DxNuSWq2NDF1G2rVn9bvfvKfeKOcP+3bthOUuYBpD3NU/xh25FL09ESOFOKXiMK5hM2ClCeo+Mb9FzmnQH3X3VeeuTqp6aBwOlU1Pp0kivoZtxbAMTTG/E4g+8yP3z9H9xZNxTVb8soKVlzh/S4S28ButQ0rKxp1GILFkRMZKYUqXwb6I0KtfHE5lHwNw5679bPne+SAtcGsKrQRhGGKF3V3qaO6tVMNbJZE5QG9yiN50nngqwCQWbC1kOL/WaPqI5gpGsEYiXsPUDVwCQ/VaGzdNo4R2VwmjJEqamJ0f6E8OPhQ5n74fLZWu+d32lEsL4a8iXRcROijhEFhGSSkxNBeI0lNdr0Ixexv7ky16zTJ0AkiMnTRsB6N6i7+aTeToJircIOaYRL5E9WXm1Z78qc/jG6XvJsaXDwybAyA9dGSgG03E5i1YrsLmBnYnQ6dRJ8hUcHTIZjl7Y1duck4ARNGJSZwLX4tuaEU8gG6uQb2JUINw3UNutvA8h0o5h9NySZs+jVTu5T0vXHlFAUg5Mx80Dp2W1tVp6V4WuhKihY8Il9HtBLqlsPDpCTtAjo6V/9IuHjkLV/79AkDkP/mELl1+VVbX9yI8CDQsABsSlCCMEt11857z64++/eL4+HjrP2fakl7VyaD+4MMyqB7B9+7W34tkVHGuy1T6W1mYuCCPzfy2nf8HmYdvQRFjwoEAAAAASUVORK5CYII=
// ==/UserScript==

(function() {
    'use strict';
    console.log("FuckGrayScale is a open-source project licensed on LGPL v2.1, which is published on Github.");
    document.getElementsByTagName("html")[0].setAttribute("style","grayscale(0);-ms-filter: grayscale(0);-moz-filter: grayscale(0);-webkit-filter: grayscale(0);-o-filter: grayscale(0);-webkit-filter: grayscale(0)");
    console.log("FuckGrayScale: GrayScale has been fucked. If the script does not work, probably it is because the website has changed colors of elements, which is impossible to recover unless you know which color they actually are.");
})();
