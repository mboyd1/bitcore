'use strict';

var should = require('chai').should();
var doriancore = require('../');

describe('#versionGuard', function() {
  it('global._doriancore should be defined', function() {
    should.equal(global._doriancore, doriancore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      doriancore.versionGuard('version');
    }).should.throw('More than one instance of doriancore');
  });
});
