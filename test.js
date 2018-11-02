const {ApiConsoleDevPreview} = require('./lib/dev-preview');

const prev = new ApiConsoleDevPreview({
  projectRoot: './test/api/',
  api: 'api.raml',
  src: './test/api-console-installed.zip',
  sourceIsZip: true,
  noBower: true,
  verbose: true,
  open: true
});
prev.run()
.then(() => console.log('The server is running now'))
.catch((cause) => console.error(cause));
