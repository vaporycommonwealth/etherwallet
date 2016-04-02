'use strict';
var angular = require('angular');
var ethUtil = require('ethereumjs-util');
ethUtil.crypto = require('crypto');
ethUtil.Tx = require('ethereumjs-tx');
ethUtil.scrypt = require('scryptsy');
ethUtil.uuid = require('uuid');
window.ethUtil = ethUtil;
var Wallet = require('./myetherwallet');
window.Wallet = Wallet;
var globalFuncs = require('./globalFuncs');
window.globalFuncs = globalFuncs;
var tabsCtrl = require('./controllers/tabsCtrl');
var viewCtrl = require('./controllers/viewCtrl');
var walletGenCtrl = require('./controllers/walletGenCtrl');
var bulkGenCtrl = require('./controllers/bulkGenCtrl');
var decryptWalletCtrl = require('./controllers/decryptWalletCtrl');
var viewWalletCtrl = require('./controllers/viewWalletCtrl');
var globalService = require('./services/globalService');
var walletService = require('./services/walletService');
var blockiesDrtv = require('./directives/blockiesDrtv');
var QRCodeDrtv = require('./directives/QRCodeDrtv');
var walletDecryptDrtv = require('./directives/walletDecryptDrtv');
var fileReaderDrtv = require('./directives/fileReaderDrtv');
var app = angular.module('mewApp', []);
app.config(['$compileProvider', function($compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
}]);
app.factory('globalService', globalService);
app.factory('walletService', walletService);
app.directive('blockieAddress', blockiesDrtv);
app.directive('qrCode', QRCodeDrtv);
app.directive('onReadFile', fileReaderDrtv);
app.directive('walletDecryptDrtv', walletDecryptDrtv);
app.controller('tabsCtrl', ['$scope', 'globalService', tabsCtrl]);
app.controller('viewCtrl', ['$scope', 'globalService', viewCtrl]);
app.controller('walletGenCtrl', ['$scope', walletGenCtrl]);
app.controller('bulkGenCtrl', ['$scope', bulkGenCtrl]);
app.controller('decryptWalletCtrl', ['$scope','$sce','walletService', decryptWalletCtrl]);
app.controller('viewWalletCtrl', ['$scope','walletService', viewWalletCtrl]);