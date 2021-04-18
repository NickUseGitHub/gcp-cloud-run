const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@configs': `${__dirname}/configs`,
});

moduleAlias();
