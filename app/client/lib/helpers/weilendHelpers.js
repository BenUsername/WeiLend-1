/**
The WeiLend.js API Wrapper

Requires:
 - Underscore.js v1.8.3+  <http://underscorejs.org/>
 - Web3.js v0.4.2+ <https://github.com/ethereum/web3.js>

Authors:
 - Massimiliano Terzi <ma.terzi@tiscali.it>

Solidity Interface:
contract WeiLend{function loans(uint256 )constant returns(bytes32 name,bytes32 website,bytes32 video,address owner,address beneficiary,address config,uint256 timelimit,uint256 fundingGoal,uint256 amount,uint256 category,uint256 status,uint256 numFunders){}function userLoans(address _addr,uint256 _u_Lid)returns(uint256 cid){}function refund(uint256 _cid){}function numCampaigns()constant returns(uint256 ){}function contribute(uint256 _cid,address _addr){}function users(address )constant returns(uint256 numCampaigns){}function newCampaign(bytes32 _name,bytes32 _website,bytes32 _video,address _beneficiary,uint256 _goal,uint256 _timelimit,uint256 _category,address _config){}function payout(uint256 _cid){}}
**/

/**
Construct the WeiLend.js API object.

@class [Object] WeiLend
@constructor
**/

window.WeiLend = {};


/**
The WeiLend.js deployed contract instance address.

@var (address)
**/

WeiLend.address;


/**
The use defaults option. If (true) WeiLend.js will use the WeiLend.js default values for transactions and calls, if (false) WeiLend.js will use the Web3.js default values.

@var (useDefault)
**/

WeiLend.useDefaults = true;


/**
The default account number for the WeiLend.js API.

@var (defaultAccount)
**/

WeiLend.defaultAccount = 0;


/**
The default gas value for WeiLend.js transactions.

@var (defaultGas)
**/

WeiLend.defaultGas = 900000;


/**
Use the default deploy or a custom deploy that will also tell you if the contract has been mined.

@var (defaultDeploy)
**/

WeiLend.defaultDeploy = false;


/**
The WeiLend.js ABI contract description.

@var (abi)
**/

WeiLend.abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "loans",
    "outputs": [
      {
        "name": "operationName",
        "type": "bytes32"
      },
      {
        "name": "website",
        "type": "bytes32"
      },
      {
        "name": "video",
        "type": "bytes32"
      },
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "beneficiary",
        "type": "address"
      },
      {
        "name": "config",
        "type": "address"
      },
      {
        "name": "timelimit",
        "type": "uint256"
      },
      {
        "name": "fundingGoal",
        "type": "uint256"
      },
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "balance",
        "type": "uint256"
      },
      {
        "name": "category",
        "type": "uint256"
      },
      {
        "name": "status",
        "type": "uint256"
      },
      {
        "name": "numFunders",
        "type": "uint256"
      },
      {
        "name": "interestRateM",
        "type": "uint256"
      },
      {
        "name": "gracePeriod",
        "type": "uint256"
      },
      {
        "name": "tenorM",
        "type": "uint256"
      },
      {
        "name": "installment",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_addr",
        "type": "address"
      },
      {
        "name": "_u_lid",
        "type": "uint256"
      }
    ],
    "name": "userLoans",
    "outputs": [
      {
        "name": "lid",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_lid",
        "type": "uint256"
      }
    ],
    "name": "refund",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_lid",
        "type": "uint256"
      }
    ],
    "name": "payInstallment",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "numLoans",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_lid",
        "type": "uint256"
      },
      {
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "contribute",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "name": "numLoans",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_operationName",
        "type": "bytes32"
      },
      {
        "name": "_website",
        "type": "bytes32"
      },
      {
        "name": "_video",
        "type": "bytes32"
      },
      {
        "name": "_beneficiary",
        "type": "address"
      },
      {
        "name": "_goal",
        "type": "uint256"
      },
      {
        "name": "_timelimit_m",
        "type": "uint256"
      },
      {
        "name": "_category",
        "type": "uint256"
      },
      {
        "name": "_interest_rate",
        "type": "uint256"
      },
      {
        "name": "_grace_period_m",
        "type": "uint256"
      },
      {
        "name": "_tenor_a",
        "type": "uint256"
      },
      {
        "name": "_config",
        "type": "address"
      }
    ],
    "name": "newLoan",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_lid",
        "type": "uint256"
      }
    ],
    "name": "payout",
    "outputs": [],
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_lid",
        "type": "uint256"
      }
    ],
    "name": "onNewLoan",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_lid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "onContribute",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_lid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "onPayout",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_lid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "onRefund",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_lid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "onpayInstallment",
    "type": "event"
  }
];


/**
The WeiLend.js Bytecode.

@var (code)
**/

WeiLend.code = '61092a8061000e6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463141961bc811461007b57806319ac74bd146100f4578063278ecde1146101315780632c0f7b6f1461018257806360b0b0f01461018c578063a87430ba146101ac578063c06f4c1d146101c5578063e11523431461020457005b6001602081905260048035600090815260409020805492810154600282015460038301549383015460058401546006850154600786015460088701546009880154600a890154600b909901546102319b9a9899979873ffffffffffffffffffffffffffffffffffffffff9081169897811697961695908c565b60043573ffffffffffffffffffffffffffffffffffffffff1660009081526002602090815260408083206024358452600101825282205480835291f35b600435600081815260016020526040812060068101546102ae93929081908290839042118015610168575060078501546008860154105b801561017957506008850154600090115b61063457610686565b6000546102b49081565b6102be60043560243560006000600060006000600034116104ac576104d7565b6002602052600435600090815260409020546102c49081565b6102ce60043560243560443560643560843560a43560c43560e43560006000600060006000600060008a1180156101fb57504289115b6102da5761049c565b6004356000818152600160205260408120600781015460088201546102d494939190101561080157610839565b8b6000528a602052896040528873ffffffffffffffffffffffffffffffffffffffff166060528773ffffffffffffffffffffffffffffffffffffffff166080528673ffffffffffffffffffffffffffffffffffffffff1660a0528560c0528460e05283610100528261012052816101405280610160526101806000f35b60006000f35b8060005260206000f35b60006000f35b8060005260206000f35b60006000f35b60006000f35b600060008181505480929190600101919050559550600160005060008781526020019081526020016000206000945094508d858550600001600050819055508c858550600101600050819055508b858550600201600050819055503385855060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508a85855060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508985855060070160005081905550888585506006016000508190555087858550600901600050819055508685855060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600260005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000925092508282506000016000818150548092919060010191905055905085838350600101600050600083815260200190815260200160002060005081905550853373ffffffffffffffffffffffffffffffffffffffff167f882da991e52c8933ce57314c9ba3f934798d912d862790c40d0feeb7025af08a6040604090036040a35b5050505050505050505050505050565b60008781526001602052604081206006810154909650909450429010156104e0576104d6565b50505b5b5b50505050505050565b505050600b8201805460018082019092556000818152600c8501602090815260408083208054337fffffffffffffffffffffffff00000000000000000000000000000000000000009182168117835596820180549091168a1790553460028201819055600889018054909101815573ffffffffffffffffffffffffffffffffffffffff909616808552600d89018452828520869055955482529394899290917fc5e578961e5bd7481ccf1d1bdfbad97b9f1ddfad520f061ca764a57018f3febe9190a3600585015473ffffffffffffffffffffffffffffffffffffffff16600014156105cb576104d5565b60058501547e49f068000000000000000000000000000000000000000000000000000000006000908152600489905273ffffffffffffffffffffffffffffffffffffffff33811660245234604452909116906249f068908060648283866161da5a03f16104d257005b73ffffffffffffffffffffffffffffffffffffffff33166000908152600d860160209081526040808320548352600c88019091528120600281015490945090925082901161068e57610685565b50505b5b5b505050505050565b508154600183015473ffffffffffffffffffffffffffffffffffffffff9182169116600014156106bd576106da565b50600182015473ffffffffffffffffffffffffffffffffffffffff165b600283015473ffffffffffffffffffffffffffffffffffffffff82169060009081828384848787f161070857005b505050600283018054600887018054919091039055546040908152869073ffffffffffffffffffffffffffffffffffffffff8316907fe139691e7435f1fb40ec50ed3729009226be49087fd00e9e5bac276c2a8f40cf90602090a3600060028401819055600586015473ffffffffffffffffffffffffffffffffffffffff16141561079257610684565b60058501547fb71f3cde000000000000000000000000000000000000000000000000000000006000908152600488905273ffffffffffffffffffffffffffffffffffffffff83811660245260028601546044529091169063b71f3cde908060648283866161da5a03f161068157005b6004820154600883015473ffffffffffffffffffffffffffffffffffffffff9091169060009081828384848787f161083e57005b50505b5b505050565b50505060088201546040908152839073ffffffffffffffffffffffffffffffffffffffff3316907f6be92574b1386f424263a096e8b66ff6cc223ab0f9d18702563aa339a372cf9890602090a36000600883018190556001600a840155600583015473ffffffffffffffffffffffffffffffffffffffff1614156108c157610838565b60058201547f484ec26c0000000000000000000000000000000000000000000000000000000060009081526004859052600884015460245273ffffffffffffffffffffffffffffffffffffffff9091169063484ec26c908060448283866161da5a03f16108355700';


/**
The WeiLend.js contract object.

@method (contractObject)
@return {Object} the contract object
**/

WeiLend.ContractObject = function(){
    return web3.eth.contract(this.abi); 
};


/**
The WeiLend.js contract instance.

@method (contract)
@return {Object} the contract instance object
**/

WeiLend.contract = function(){
    return this.ContractObject().at(this.address);
};


/**
The WeiLend.js default from account address

@method (defaultFrom)
@return {String} the default from address
**/

WeiLend.defaultFrom = function(){
    return web3.eth.accounts[this.defaultAccount];
};


/**
The WeiLend.js default options wrapper.

@method (default)
@param {Object} the transaction or call option param's object
@return {Object} the treated options object
**/

WeiLend.default = function(optionsObject){
    if(_.isUndefined(optionsObject)
      || _.isEmpty(optionsObject)
      || !_.isObject(optionsObject))
        optionsObject = {};

    if(!this.useDefaults)
        return optionsObject;

    if(!_.has(optionsObject, 'from'))
        optionsObject.from = this.defaultFrom();

    return optionsObject;
};


/**
The WeiLend.js default options wrapper for transactions.

@method (defaultTransaction)
@param {Object} the transaction or call option object
@return {Object} the treated options object
**/

WeiLend.defaultTransaction = function(optionsObject){
    optionsObject = this.default(optionsObject);

    if(!this.useDefaults)
        return optionsObject;

    if(!_.has(optionsObject, 'gas'))
        optionsObject.gas = this.defaultGas;

    return optionsObject;
};


/**
The WeiLend.js default options object wrapper for calls.

@method (defaultCall)
@param {Object} the call option object
@return {Object} the treated options object
**/

WeiLend.defaultCall = function(optionsObject){
    optionsObject = this.default(optionsObject);

    if(!this.useDefaults)
        return optionsObject;

    return optionsObject;
};


/**
The WeiLend.js deploy function. This can be used to deploy a WeiLend.js contract to the Ethereum blockchain.

@method (deploy)
@param {Object} the transaction object
@param {Function} The function(err, result, mined) that will be called when the transaction is made and when the contract is deployed. The mined bool will describe if the contract was mined or not.
**/

WeiLend.deploy = function(transactionObject, callback){
    if(_.isFunction(transactionObject))
        callback = transactionObject;

    transactionObject = _.extend(this.defaultTransaction(transactionObject), {data: this.code});
    this.ContractObject().new(transactionObject, function(err, result){
        callback(err, result, false);

        if(err || this.defaultDeploy)
            return;

        var contractWatch = web3.eth.filter('latest');
        contractWatch.watch(function (err, hash) {
            if(err){
                callback(err, hash, false);
                contractWatch.stopWatching();
                return;
            }

            var block = web3.eth.getBlock(hash, true);
            var contractMined = block.transactions.reduce(function (mined, th) {
                var defaultAccount = WeiLend.useDefaults ? WeiLend.defaultFrom() : web3.eth.defaultAccount;

                return mined || (th.from === defaultAccount && th.input.indexOf(WeiLend.code) !== -1);
            }, false);

            if (contractMined) {
                callback(err, result, true);
                contractWatch.stopWatching();
            }
        });
    });
};


/**
The WeiLend.js onNewLoan event listener.

@method (onNewLoan)
@param {Object} the filter object; onVote inputs are: [_from address, _lid uint256]
@param {Function} the callback function(err, result, filter)
**/

WeiLend.onNewLoan = function(filterObject, callback){
    if(_.isFunction(filterObject))
        callback = filterObject;

    var filter = this.contract().onNewLoan(filterObject);
    filter.watch(function(error, result){
        callback(error, result, filter);
    });
};


/**
The WeiLend.js onContribute event listener.

@method (onContribute)
@param {Object} the filter object; onVote inputs are: [_from address, _lid uint256, _value uint256]
@param {Function} the callback function(err, result, filter)
**/

WeiLend.onContribute = function(filterObject, callback){
    if(_.isFunction(filterObject))
        callback = filterObject;

    var filter = this.contract().onContribute(filterObject);
    filter.watch(function(error, result){
        callback(error, result, filter);
    });
};


/**
The WeiLend.js onPayout event listener.

@method (onPayout)
@param {Object} the filter object; onVote inputs are: [_from address, _lid uint256, _value uint256]
@param {Function} the callback function(err, result, filter)
**/

WeiLend.onPayout = function(filterObject, callback){
    if(_.isFunction(filterObject))
        callback = filterObject;

    var filter = this.contract().onPayout(filterObject);
    filter.watch(function(error, result){
        callback(error, result, filter);
    });
};


/**
The WeiLend.js onRefund event listener.

@method (onRefund)
@param {Object} the filter object; onVote inputs are: [_from address, _lid uint256, _value uint256]
@param {Function} the callback function(err, result, filter)
**/

WeiLend.onRefund = function(filterObject, callback){
    if(_.isFunction(filterObject))
        callback = filterObject;

    var filter = this.contract().onRefund(filterObject);
    filter.watch(function(error, result){
        callback(error, result, filter);
    });
};

/**
The WeiLend.js onpayInstallment event listener.

@method (onpayInstallment)
@param {Object} the filter object; onVote inputs are: [_from address, _lid uint256, _value uint256]
@param {Function} the callback function(err, result, filter)
**/

WeiLend.onpayInstallment = function(filterObject, callback){
    if(_.isFunction(filterObject))
        callback = filterObject;

    var filter = this.contract().onpayInstallment(filterObject);
    filter.watch(function(error, result){
        callback(error, result, filter);
    });
};

/**
This method will parse a resulting loan array into loan object.

@method (parseLoan)
@param {Number} The loan ID variable
@param {Array} The loan result array from a loans call [String(name),String(website),String(video),String(owner),String(beneficiary),String(config),Number(timelimit),Number(fundingGoal),Number(amount),Number(category),Number(status),Number(numFunders)]
@return {Object} the parsed and formatted loan object
**/

WeiLend.parseLoan = function(lid, array) {
    var return_object = {
        id: lid,
        operationName: array[0],
        website: array[1],
        video: array[2],
        owner: array[3],
        beneficiary: array[4],
        config: array[5],
        timelimit: array[6].toNumber(10),
        timelimitBN: array[6],
        fundingGoal: array[7].toNumber(10),
        fundingGoalBN: array[7],
        amount: array[8].toNumber(10),
        amountBN: array[8],
        balance: array[9].toNumber(10),
        balanceBN: array[9],        
        category: array[11].toNumber(10),
        categoryBN: array[11],
        status: {type: 'open'}, //array[10].toNumber(10),
        statusBN: array[10],
        numFunders: array[12].toNumber(10),
        numFundersBN: array[12],
        interestRateM: array[13].toNumber(10),
        interestRateMBN: array[13],
        gracePeriod: array[14].toNumber(10),
        gracePeriodBN: array[14],
        tenorM: array[15].toNumber(10),
        tenorMBN: array[15],
        installment: array[16].toNumber(10),
        installmentBN: array[16],
        progress: 0,
    };
    
    return_object.progress = Math.round((return_object.amount/return_object.fundingGoal) * 100);
    
    if(return_object.progress < 0 || return_object.progress == null)
        return_object.progress = 0;
    
    if(return_object.progress > 100)
        return_object.progress = 100;
    
    if(moment().unix() > return_object.timelimit && return_object.amount < return_object.fundingGoal)
        return_object.status = {type: 'failed', reason: 'expired'};
    
    if(return_object.fundingGoal == 0)
        return_object.status = {type: 'failed', reason: 'invalidGoal'};

    if(return_object.interestRateM < 0)
        return_object.status = {type: 'failed', reason: 'negativeInterest'};

    if(return_object.tenorM < 0)
        return_object.status = {type: 'failed', reason: 'negativeTenor'};
    
    if(return_object.beneficiary == '0x0000000000000000000000000000000000000000')
        return_object.status = {type: 'failed', reason: 'invalidBenificiary'};
        
    if(_.isEmpty(return_object.operationName))
        return_object.status = {type: 'failed', reason: 'invalidName'};
        
    if(return_object.amount >= return_object.fundingGoal)
        return_object.status = {type: 'success'};
    
    if(return_object.statusBN.toNumber(10) == 1) {
        return_object.amount = return_object.fundingGoal;
        return_object.progress = 100;
        return_object.status = {type: 'payedout'};    
    }
    
    return return_object;
};


/**
The WeiLend.js loans call method.

@method (loans)
@param {Number} The lid (uint256) var
@param {Object} The options object
@param {Function} The method callback function
@return {Object} Returns a loan object
**/

WeiLend.loans = function(lid, callObject, callback) {
    if(_.isFunction(callObject))
        callback = callObject;

    this.contract().loans.call(lid, this.defaultCall(callObject), function(err, result){
        if(err) {
            callback(err, result);
            return;
        }
        
        callback(err, WeiLend.parseLoan(lid, result));
    });
};


/**
The WeiLend.js loans minimongo db.

@method (LoansMinimongo)
@param {Object} A mongodb database.
**/

WeiLend.LoansMinimongo = function(mongodb){
    /**
    The WeiLend.js loans minimongo db load function. Will fire callback everytime a loan is loaded, with the parsed loan data object.

    @method (load)
    @param {Number} start    The start position to load loans from
    @param {Number} depth    The depth position to load into the loans object, defaults to 1
    @param {Object} callObject    The web3 call object
    @param {Function} callback     The callback function that will return [err, loanObject]
    **/
    
    mongodb.load = function(start, depth, callObject, callback){ 
        if(_.isUndefined(depth) 
           || _.isObject(depth) 
           || _.isFunction(depth))
            depth = 1;

        if(_.isUndefined(start))
            start = 0;
        
        if(_.isObject(depth))
            callObject = depth;
        
        if(_.isFunction(depth)) {
            callback = depth;
            callObject = {};
        }

        if(_.isFunction(callObject))
            callback = callObject;
        
        if(_.isUndefined(callback))
            callback = function(e, r){};
        
        for(var lid = start; lid < start + depth; lid ++) {
            WeiLend.loans(lid, WeiLend.defaultCall(callObject), function(err, loan){
                if(!loan)
                    return;
                
                var findId = mongodb.findOne({id: parseInt(loan.id)});
                
                if(!_.isUndefined(findId) && _.has(findId, '_id'))
                    findId = findId._id;
                else
                    findId = chance.hash({length: 15});
                
                if(loan.owner == web3.address(0)
                  || loan.id == false)
                    return;
            
                mongodb.update({_id: findId}, {$set: loan, $setOnInsert: loan}, {upsert: true});
                callback(err, loan);
            });
        }
            
        /*var batch = web3.createBatch();
        
        for(var lid = start; lid < start + depth; lid ++) { batch.add(web3.eth.contract(WeiLend.abi).at(WeiLend.address).loans.call(lid, {from: Accounts.findOne({id: 0})}WeiLend.defaultCall(callObject), function(err, loanResult){
                if(err){
                    callback(err, null);
                    return;
                }

                var loan = WeiLend.parseLoan(lid, loanResult);
                mongodb.update({id: lid}, {$set: loan, $setOnInsert:  loan}, {upsert: true});
                callback(err, loan);
            }));
        }
        
        batch.execute();*/
    };
};


/**
The WeiLend.js categories minimongo db.

@method (CategoriesMinimongo)
@param {Object} A mongodb database.
**/

WeiLend.CategoriesMinimongo = function(mongodb){
    /**
    This will load in the categories from a categories array.

    @method (load)
    @param {Array} categories    The categories array
    **/
    
    mongodb.load = function(categories){
        mongodb.remove({});
        
        _.each(categories, function(category, categoryIndex) {
            var categoryObject = {id: categoryIndex, name: category};
            
            mongodb.update({id: categoryIndex}, {$set: categoryObject, $setOnInsert: categoryObject}, {upsert: true});
        });
    };
};


/**
The WeiLend.js userLoans call method.

@method (userLoans)
@param {String} The _addr (address) var
@param {Number} The _u_lid (uint256) var
@param {Object} The options object
@param {Function} The method callback function
@return {Number} Returns a Number
**/

WeiLend.userLoans = function(_addr, _u_lid, callObject, callback) {
    if(_.isFunction(callObject))
        callback = callObject;

    var call = this.contract().userLoans.call(_addr, _u_lid, this.defaultCall(callObject), callback);

    if(_.isUndefined(callback))
        return call;
};


/**
The WeiLend.js refund transaction method.

@method (refund)
@param {Number} The _lid (uint256) var
@param {Object} The options object
@param {Function} The method callback function (err, result, refunded)
**/

WeiLend.refund = function(_lid, transactionObject, callback) {
    if(_.isFunction(transactionObject))
        callback = transactionObject;

    this.contract().refund.sendTransaction(_lid, this.defaultTransaction(transactionObject), function(err, result){
        callback(err, result, false);
        
        if(err)
            return;
        
        WeiLend.onRefund({_from: transactionObject.from, _lid: _lid}, function(err, eventResult){
            callback(err, result, false);
            
            if(err)
                return;
            
            callback(err, result, true);             
        });
    });
};


/**
The WeiLend.js numLoans call method.

@method (numLoans)
@param {Object} The options object
@param {Function} The method callback function
@return {Number} Returns a Number
**/

WeiLend.numLoans = function(callObject, callback) {
    if(_.isFunction(callObject))
        callback = callObject;

    var call = this.contract().numLoans.call(this.defaultCall(callObject), callback);

    if(_.isUndefined(callback))
        return call;
};


/**
The WeiLend.js contribute transaction method.

@method (contribute)
@param {Number} The _lid (uint256) var
@param {String} The _addr (address) var
@param {Object} The options object
@param {Function} The method callback function (err, result, contributed)
**/

WeiLend.contribute = function(_lid, _addr, transactionObject, callback) {
    if(_.isFunction(transactionObject))
        callback = transactionObject;

    this.contract().contribute.sendTransaction(_lid, _addr, this.defaultTransaction(transactionObject), function(err, result){
        callback(err, result, false);
        
        if(err)
            return;
        
        WeiLend.onContribute({_from: transactionObject.from, _lid: _lid}, function(err, eventResult){
            callback(err, result, false);
            
            if(err)
                return;
            
            callback(err, result, true);
        });
    });
};


/**
The WeiLend.js users call method.

@method (users)
@param {String} The address (address) var
@param {Object} The options object
@param {Function} The method callback function
@return {Number} Returns a Number
**/

WeiLend.users = function(address, callObject, callback) {
    if(_.isFunction(callObject))
        callback = callObject;

    var call = this.contract().users.call(address, this.defaultCall(callObject), callback);

    if(_.isUndefined(callback))
        return call;
};


/**
The WeiLend.js newLoan transaction method.

@method (newLoan)
@param {String} The _operationName (bytes32) var
@param {String} The _website (bytes32) var
@param {String} The _video (bytes32) var
@param {String} The _beneficiary (address) var
@param {Number} The _goal (uint256) var
@param {Number} The _timelimit_m (uint256) var
@param {Number} The _category (uint256) var
@param {Number} The _interest_rate (uint256) var
@param {Number} The _grace_period_m (uint256) var
@param {Number} The _tenor_a (uint256) var
@param {String} The _config (address) var
@param {Object} The options object
@param {Function} The method callback function
@return {Null} No return, callback is fired: [err Object, userCampaignId BigNumber, isMined Bool]
**/

WeiLend.newLoan = function(_operationName, _website, _video, _beneficiary, _goal, _timelimit_m, _category, _interest_rate, _grace_period_m, _tenor_a, _config, transactionObject, callback) {
    if(_.isFunction(transactionObject))
        callback = transactionObject;
    
    transactionObject = this.defaultTransaction(transactionObject);

    this.contract().newLoan.sendTransaction(_operationName, _website, _video, _beneficiary, _goal, _timelimit_m, _category, _interest_rate, _grace_period_m, _tenor_a, _config, transactionObject, function(err, result){
        callback(err, result, false);
        
        if(err)
            return;
        
        WeiLend.onNewLoan({_from: transactionObject.from}, function(err, eventResult, filter){
            callback(err, result, false);
            
            if(err)
                return;
            
            filter.stopWatching();
            
            WeiLend.users(transactionObject.from, function(err, numLoans){
                callback(err, result, false);
                var latestLoan = numLoans.toNumber(10) - 1;
            
                if(err || numLoans == 0)
                    return;
                
                WeiLend.userLoans(transactionObject.from, latestLoan, function(err, uLid){
                    callback(err, result, false);

                    if(err || (_.isUndefined(uLid) && uLid !== 0))
                        return;
                    
                    callback(err, uLid, true);
                });
            });
        });
    });
};


/**
The WeiLend.js payout transaction method.

@method (payout)
@param {Number} The _lid (uint256) var
@param {Object} The options object
@param {Function} The method callback function
**/

WeiLend.payout = function(_lid, transactionObject, callback) {
    if(_.isFunction(transactionObject))
        callback = transactionObject;

    this.contract().payout.sendTransaction(_lid, this.defaultTransaction(transactionObject), function(err, result){
        callback(err, result, false);
        
        if(err)
            return;
        
        WeiLend.onPayout({_lid: _lid, _from: transactionObject.from}, function(err, eventResult){
            callback(err, result, false);
            
            if(err)
                return;
            
            callback(err, result, true);
        });
    });
};

/**
The WeiLend.js payInstallment transaction method.

@method (payInstallment)
@param {Number} The _lid (uint256) var
@param {Object} The options object
@param {Function} The method callback function (err, result, installmentpaid)
**/

WeiLend.payInstallment = function(_lid, transactionObject, callback) {
    if(_.isFunction(transactionObject))
        callback = transactionObject;

    this.contract().payInstallment.sendTransaction(_lid, this.defaultTransaction(transactionObject), function(err, result){
        callback(err, result, false);
        
        if(err)
            return;
        
        WeiLend.onpayInstallment({_from: transactionObject.from, _lid: _lid}, function(err, eventResult){
            callback(err, result, false);
            
            if(err)
                return;
            
            callback(err, result, true);             
        });
    });
};