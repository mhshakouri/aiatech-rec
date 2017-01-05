import '/imports/ui/layouts/appLayout/appLayout.js';
import '/imports/ui/components/navbar/navbar.js';
import '/imports/ui/pages/homePage/homePage.js';
import '/imports/ui/pages/userPanel/userPanel.js';
import '/imports/ui/pages/aboutus/aboutus.js';
//include user AccountsTemplates configuration here
// do routing here

Router.configure({
    layoutTemplate: 'appLayout',
    yieldTemplates: {
        'myNavbar': {to: 'pagesnav'}
    }
});
AccountsTemplates.configure({
    defaultLayout: 'appLayout',
});
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');

Router.route('/', function() {
    this.render("homePage");
    this.render("myNavbar", {
        to: "pagesnav"
    });
}, {
    name: 'home'
});

Router.route('/aboutus', function() {
    this.render("aboutus");
    this.render("myNavbar", {
        to: "pagesnav"
    });
}, {
    name: 'aboutus'
});
Router.route('/products', function() {
    this.render("products");
    this.render("myNavbar", {
        to: "pagesnav"
    });
}, {
    name: 'products'
});
Router.route('/optional-features', function() {
    this.render("optionalFeatures");
    this.render("myNavbar", {
        to: "pagesnav"
    });
}, {
    name: 'optionalFeatures'
});
Router.route('/partners', function() {
    this.render("partners");
    this.render("myNavbar", {
        to: "pagesnav"
    });
}, {
    name: 'partners'
});
Router.route('/contact-us', function() {
    this.render("contactus");
    this.render("myNavbar", {
        to: "pagesnav"
    });
}, {
    name: 'contactus'
});
Router.route('/admin', function() {
    this.render("userPanel");
    this.render("myNavbar", {
        to: "pagesnav"
    });
}, {
    name: 'admin'
});
Router.route('/logout', {
    name: 'signOut',
    onBeforeAction: function() {
        AccountsTemplates.logout(); // onLogoutHook is configured to redirect to home
        this.next();
    }
});



AccountsTemplates.configure({
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: true,
    sendVerificationEmail: true,
    lowercaseUsername: true,
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,
    continuousValidation: true,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,
    homeRoutePath: '/',
    redirectTimeout: 4000,
});
/*

Router.configure({
    layoutTemplate: "appLayout"
});
Router.route("/",function(){
  this.render("navbar",{to:"header"});
  this.render("docList",{to:"main"});
});

Router.route('/documents/:_id',function(){
  Session.set("docid", this.params._id);
  this.render("navbar",{to:"header"});
  this.render("docItem",{to:"main"});
});

*/
