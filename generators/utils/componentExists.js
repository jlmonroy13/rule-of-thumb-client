/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const pageComponents = fs.readdirSync(
  path.join(__dirname, '../../src/components'),
);
const pageViews = fs.readdirSync(path.join(__dirname, '../../src/views'));
const components = pageComponents.concat(pageViews);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;