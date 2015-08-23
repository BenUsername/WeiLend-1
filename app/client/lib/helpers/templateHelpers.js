/**
Helper functions

@module Helpers
**/


/**
Global template helpers

@class TemplateHelpers
@constructor
**/

/**
A simple template helper to log objects in the console.

@method (debug)
**/

Template.registerHelper('debug', function(object){
    console.log(object);
});


/**
Formats a timestamp to any format given.

    {{formatTime myTime "YYYY-MM-DD"}}

@method (formatTime)
@param {String} time         The timstamp, can be string or unix format
@param {String} format       the format string, can also be "iso", to format to ISO string, or "fromnow"
//@param {Boolean} realTime    Whether or not this helper should re-run every 10s
@return {String} The formated time
**/

Template.registerHelper('formatTime', Helpers.formatTime);


/**
Add HTTP prefix to a url, if it does not exist already.

    {{addhttp "youtube.com"}} // returns "http://youtube.com"

@method (addhttp)
@param {String} url         The raw URL.
@return {String} The formatted url, prefixed with http
**/

Template.registerHelper('addhttp', Helpers.addhttp);


/**
Clean prefix to a url, if it does not exist already.

    {{cleanURL "http://youtube.com"}} //returns "youtube.com"

@method (cleanURL)
@param {String} url         The raw URL.
@return {String} The formatted url, with the prefixed http(s) removed
**/

Template.registerHelper('cleanURL', Helpers.cleanURL);


/**
Compress a video URL.

    {{parseVideoUrl "http://youtube.com/v/934834"}} //returns "yt 934834"

@method (parseVideoUrl)
@param {String} url         The raw video URL
@return {Object} The compressed video URL object and type (i.e. yt/vm)
**/

Template.registerHelper('parseVideoUrl', Helpers.parseVideoUrl);


/**
Uncompress a compressed video URL.

    {{parseVideo "yt 934834"}} //returns {src: "http://youtube.com/v/934834", [...]}

@method (parseVideo)
@param {String} compressedURL        The compressed and formatted video URL
@return {Object} The uncompressed video url data object, that inclues the SRC, url and type of video format
**/

Template.registerHelper('parseVideo', Helpers.parseVideo);


/**
Formats a number.

    {{formatNumber myNumber "0,0.0[0000]"}}

@method (formatNumber)
@param {String} number
@param {String} format       the format string
@return {String} The formatted number
**/

Template.registerHelper('formatNumber', function(number, format){
    if(format instanceof Spacebars.kw)
        format = null;

    if(number instanceof BigNumber)
        number = number.toNumber();

    format = format || '0,0.0[0000]';


    if(!_.isFinite(number))
        number = numeral().unformat(number);

    if(_.isFinite(number))
        return numeral(number).format(format);
});


/**
Accounts template helper.

    {{accounts 0}} // returns {id: 0, address: '0x0000'}
    {{accounts '0x000000000'}} // returns {id: 0, address: '0x0000'}

@method (accounts)
@param {NumberOrString} idOrAddress      This is the address or id of the users web3 accounts
@return {Array} The account object
**/

Template.registerHelper('accounts', function(idOrAddress){
    var findObject = {address: idOrAddress};
    
    if(_.isNumber(idOrAddress))
        findObject = {id: idOrAddress};
    
    if(idOrAddress != 0 && idOrAddress == '')
        findObject = false;
    
    return !findObject ? Accounts.find({}) : Accounts.findOne(findObject);
});


/**
Categories template helper.

    {{#each categories}} {{id}} {{name}} {{/each}} // returns 0 Buisness

@method (categories)
@param {NumberOrString} idOrName      This is the address or id of the users web3 accounts
@return {Array} The account object
**/

Template.registerHelper('categories', function(idOrName){
    var findObject = {address: idOrName};
    
    if(_.isNumber(idOrName))
        findObject = {id: idOrName};
    
    if(idOrName == '')
        findObject = false;
    
    return !findObject ? Categories.find({}) : Categories.findOne(findObject);
});


/**
Loans template helper.

    {{#each loans}} {{name}} {{id}} {{/each}}

@method (loans)
@param {Number} id      The loan ID number to select the loan
@return {ArrayOrObject} An array or single instance of loan objects.
**/

Template.registerHelper('loans', function(idOrName){
    var findObject = {id: idOrName};
    
    if(idOrName != 0 && idOrName == '')
        findObject = false;
    
    return !findObject ? Loans.find({}) : Loans.findOne(findObject);
});


/**
NameReg helper toName that will get a name given an address from the NameReg contract.

    {{toName 0x000}} // returns Some Name

@method (toName)
@param {String} address     The address to lookup a name
@return {String} name     The name registed at that address
**/

Template.registerHelper('toName', function(address){
    if(_.isUndefined(Session.get('NameReg')))
        Session.set('NameReg', {});
    
    NameReg.toName(address, function(err, name){
        if(err)
            return;
            
        var nameregSession = Session.get('NameReg');
        nameregSession.address = name;
        Session.set('NameReg', nameregSession);
    });
    
    return Session.get('NameReg').address;
});


/**
NameReg template helper to lookup an address based upon a name.

    {{toAddress 'Massimiliano Terzi'}} // returns 0x00

@method (toAddress)
@param {String} address     The address to lookup a name
@return {String} name     The name registed at that address
**/

Template.registerHelper('toAddress', function(name){
    NameReg.toAddress(address, function(err, address){
        if(err)
            return;
            
        var nameregSession = Session.get('NameReg');
        nameregSession[name] = address;
        Session.set('NameReg', nameregSession);
    });
    
    return Session.get('NameReg')[name];
});


/**
To category helper.

    {{toName 0x000}} // returns Some Name

@method (toName)
@param {String} address     The address to lookup a name
@return {String} name     The name registed at that address
**/

Template.registerHelper('toCategory', function(id, property){
    var category = Categories.findOne({id: id});
    
    if(_.isUndefined(category) || _.isEmpty(category))
        category = {};
    
    return category[property];
});


/**
Format a wei value to a selected format like 'ether'.

    {{fromWei 4000000000000000 'ether'}} // returns 40

@method (fromWei)
@param {String|Number} wei     The amount of wei
@param {String} format     The format, such as: 'ether'
@return {Number} The formatted number
**/

Template.registerHelper('fromWei', function(wei, format){
    return web3.fromWei(wei, format);
});