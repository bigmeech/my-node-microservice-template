const { get } = require('./config');
const { logger } = require('./external/logger');
const SERVICE_PORT = get('server.port');
const { getApplication } = require('./app');
const application = getApplication();

application.listen(SERVICE_PORT, () => {
    logger.info(`Service is running at http://localhost:${SERVICE_PORT}`);
});