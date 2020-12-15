// WRITE THE ACTUAL FUNCTION HERE
const capitalizeFirst = (str) => {
  return str.replace(/(^\w{1})|(\s{1}\w{1})/g, (sent) => sent.toUpperCase());
};

module.exports = capitalizeFirst;
