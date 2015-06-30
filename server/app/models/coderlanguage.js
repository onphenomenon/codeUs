var bookshelf = require('../config');
// var Coder = require('./language');

var CoderLanguage = bookshelf.Model.extend({
  tableName: 'coders_languages',
  hasTimestamps: true,
  coders: function() {
    return this.belongsToMany(Coder, 'coder_id');
  },
 
});

module.exports = CoderLanguage;