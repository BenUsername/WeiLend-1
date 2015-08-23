/**
Template Controllers

@module Templates
**/

/**
The view1 template

@class [template] views_view1
@constructor
**/

Template['views_discover'].helpers({
	/**
    Get the loan

    @method (loans)
    **/
    
	'loans': function(){
		var	params = this.category == false ? {} : {category: this.category};
        
		return Loans.find(params, {sort: {id: -1}});
	},
	
	/**
    Get the categories

    @method (categories)
    **/
    
	'categories': function(){
		return Categories.find({});
	},
});

Template['views_discover'].events({
	/**
    On Load More

    @event (click #loadMore)
    **/
    
	'click #loadMore': function(){
        var start = Session.get('start');
        Loans.load(start, 8);
        Session.set('start', start + 8);
	},
});

Template['views_discover'].created = function(){	
	Meta.setSuffix(TAPi18n.__("dapp.views.discover.title"));
};

Template['views_discover'].rendered = function(){	
    
    Loans.load(0, 8, function(err, result){
        
    });
    
};
