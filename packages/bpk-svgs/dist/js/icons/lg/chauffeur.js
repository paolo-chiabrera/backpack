function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
    width: "1.5rem",
    height: "1.5rem"
  }} {...props}><path d="M7 20c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-2H7v2zM17.3 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2l1-1h-2l1 1zm2-1l-2 3-2-3c-.3 0-.6.2-.8.3l-.2.1-.1.1-2.3 2.7c-.3-.8-1-1.3-1.9-1.3l-1-5C8.8 3.8 7.8 3 6.7 3H3v1.9h3.7c.4 0 .7.3.8.6L8 10H3v7h9v-2.9c.1-.1.2-.1.2-.2l2.4-2.8.7 3.9 1 6h2l1-6h.5c.3 0 .5-.2.5-.5l.7-4.2c.1-1.1-.7-2.1-1.7-2.3zM8.5 15c-.8 0-1.5-.7-1.5-1.5S7.7 12 8.5 12s1.5.7 1.5 1.5S9.3 15 8.5 15z" /></svg>;
});