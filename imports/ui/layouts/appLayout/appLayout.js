import './appLayout.html';
import './classie.js';
import {
    Meteor
} from 'meteor/meteor';
Template.appLayout.helpers({
    switchText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'English'
        }
        return 'فارسی';
    },
});
Template.appLayout.events({
    "click .switchLang": function() {
        if (Session.get('appLanguage') === 'fa') {
            Session.set('appLanguage', 'en');
            Session.set('textDirection', 'ltr');
        } else if (Session.get('appLanguage') === 'en') {
            Session.set('appLanguage', 'fa');
            Session.set('textDirection', 'rtl');
        }
    }
});
Template.appLayout.onRendered(function() {
});
Template.appLayout.onCreated(function() {
    $("html").addClass('js');
});
