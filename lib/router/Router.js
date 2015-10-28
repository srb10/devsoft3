/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */

//I *think* thi is the default layout, and I did htis in a config file? check it out
Router.configure({
    layoutTemplate: 'Layout',
    waitOn: function() { return Meteor.subscribe("Stuff"); },
    loadingTemplate: 'Loading'  //this is calling a Loading template hen, exactly?
});

Router.route('/', {
    name: 'Home'
});

Router.route('/list', {
    name: 'ListStuff'
});

Router.route('/add', {
    name: 'AddStuff'
});

//note that this Read method is declared and ran entireley in the router:
//therefore, CRUD methods are distributed between this callback, and the Stuff.js file
//Note that there is no Delete- pull that from devsoft.js
Router.route('/stuff/:_id', {
    name: 'EditStuff',
    data: function() { return Stuff.findOne(this.params._id); }
});
