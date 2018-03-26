module.exports = function(source, map) {
  const moduleExports = 'module.exports = ';
  const packageJSON = JSON.parse(source.replace(moduleExports, ''));
  const about = {
    name: packageJSON.name,
    description: packageJSON.description,
    version: packageJSON.version
  };
  const output = moduleExports.concat(JSON.stringify(about));
  this.callback(null, output, map);
};
