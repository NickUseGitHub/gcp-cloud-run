const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@configs': `${__dirname}/configs`,
  '@apis': `${__dirname}/apis`,
  '@utils': `${__dirname}/utils`,
});

moduleAlias();
