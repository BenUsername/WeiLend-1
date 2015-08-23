# WeiLend

A decentralized, fully transparent, open source crowdlending DApp built on Ethereum.

<img src="app/public/images/screen0.jpg" />

## <a name="installation"></a> Installation

1. Clone this repo and run the DApp.
   
    ```
    $ git clone https://github.com/WeiLend/WeiLend.git
    $ cd WeiLend/app
    $ meteor
    ```
    
2. Start an eth node open `http://localhost:3000` in *mist*, *mix* or *alethzero* or run geth locally, as follows:

    ```
    $ geth --rpc --rpcaddr="0.0.0.0" --verbosity=5 --maxpeers=0 --rpccorsdomain="http://localhost:3000" --unlock=primary --mine
    ```

3. Go to `http://localhost:3000/admin`

    Click "Deploy" and copy the address provided

4. Edit `app/client/index.js` and deploy WeiLend

    Change `LocalStore.set('weilendAddress', 'YOUR_NEW_ADDRESS');` to the new address provided
    
5. Go to `http://localhost:3000/admin` and deploy NameReg

    Click "Deploy NameReg", copy the provided address
    
6. Edit `app/client/index.js`

    Change `LocalStore.set('nameregAddress', 'YOUR_NEW_ADDRESS');` to the new NameReg address provided

7. Go to `http://localhost:3000/admin` and register your name

    Type in your name in the NameReg input and click "Register"

8. Refresh and run WeiLend!


## <a name="config"></a> Config Integration

WeiLend loan campaigns can be given a configuration ("config") address upon creation. This address allows the extension of campaigns to other contracts. The config contract will be called upon a new vote, campaign, payout or refund. Please refer to the WeiFund.sol contract for further details. Please note, if the config address is too an invalid or non-existent contract, critical contract features for your campaign can become non-assessable.


## <a name="mission"></a> Mission

WeiLend's central mission statement is: to further the development of decentralized crowlending technology and to make crowdlending as free, open, secure and extendable as possible. It extends WeiFund's mission to decentralize crowdfunding. WeiFund is a Nick Dodson's project based on Ethereum (for more information: github.com/WeiFund)


## <a name="milestones"></a> Milestones

###1. NameReg

Complete NameReg contract integration for the management and use of usernames with WeiLend.

###2. Token Systems

A complete token system templating and management system for deploying and operating a basic custom token in tandem with WeiLend campaigns.

###3. Revamp of Landing and Discovery Pages

This will include making WeiLend's landing page more interactive, with various recent, successful and up and coming loan campaigns listed on the landing page.

###4. Share/Embed Widgets

A complete share and embed widget set to integrate WeiLend campaigns into other DApps and web3 enabled websites.

###5. Whisper Integration

A complete review and communication system leveraging Ethereum's Whisper protocol, so that users and campaign operators can securely and reliably communicate with one another.


## <a name="license"></a> License

WeiLend is under the MIT License type.

Copyright (c) 2015 Massimiliano Terzi. <http://github.com/terzim> based on work from Nick Dodson (c) 2015 under the MIT License