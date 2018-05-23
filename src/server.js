const { get } = require('./config');
const SERVICE_PORT = get('server.port');
const { getApplication } = require('./app');
const application = getApplication();

application.listen(SERVICE_PORT, () => {
    console.log(`Service running at http://localhost:${SERVICE_PORT}`);
});