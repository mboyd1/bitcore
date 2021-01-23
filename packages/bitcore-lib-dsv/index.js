'use strict';

var doriancore = module.exports;

// module information
doriancore.version = 'v' + require('./package.json').version;
doriancore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of doriancore-lib found. ' +
      'Please make sure to require doriancore-lib and check that submodules do' +
      ' not also include their own doriancore-lib dependency.';
    throw new Error(message);
  }
};
doriancore.versionGuard(global._doriancore);
global._doriancore = doriancore.version;

// crypto
doriancore.crypto = {};
doriancore.crypto.BN = require('./lib/crypto/bn');
doriancore.crypto.ECDSA = require('./lib/crypto/ecdsa');
doriancore.crypto.Hash = require('./lib/crypto/hash');
doriancore.crypto.Random = require('./lib/crypto/random');
doriancore.crypto.Point = require('./lib/crypto/point');
doriancore.crypto.Signature = require('./lib/crypto/signature');

// encoding
doriancore.encoding = {};
doriancore.encoding.Base58 = require('./lib/encoding/base58');
doriancore.encoding.Base58Check = require('./lib/encoding/base58check');
doriancore.encoding.BufferReader = require('./lib/encoding/bufferreader');
doriancore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
doriancore.encoding.Varint = require('./lib/encoding/varint');

// utilities
doriancore.util = {};
doriancore.util.buffer = require('./lib/util/buffer');
doriancore.util.js = require('./lib/util/js');
doriancore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
doriancore.errors = require('./lib/errors');

// main bitcoin library
doriancore.Address = require('./lib/address');
doriancore.Block = require('./lib/block');
doriancore.MerkleBlock = require('./lib/block/merkleblock');
doriancore.BlockHeader = require('./lib/block/blockheader');
doriancore.HDPrivateKey = require('./lib/hdprivatekey.js');
doriancore.HDPublicKey = require('./lib/hdpublickey.js');
doriancore.Networks = require('./lib/networks');
doriancore.Opcode = require('./lib/opcode');
doriancore.PrivateKey = require('./lib/privatekey');
doriancore.PublicKey = require('./lib/publickey');
doriancore.Script = require('./lib/script');
doriancore.Transaction = require('./lib/transaction');
doriancore.URI = require('./lib/uri');
doriancore.Unit = require('./lib/unit');

// dependencies, subject to change
doriancore.deps = {};
doriancore.deps.bnjs = require('bn.js');
doriancore.deps.bs58 = require('bs58');
doriancore.deps.Buffer = Buffer;
doriancore.deps.elliptic = require('elliptic');
doriancore.deps.scryptsy = require('scryptsy');
doriancore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
doriancore._HDKeyCache = require('./lib/hdkeycache');
doriancore.Transaction.sighash = require('./lib/transaction/sighash');
