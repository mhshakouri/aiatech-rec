import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';
import '/imports/startup/client';

Session.set('appLanguage', 'fa');
Session.set('textDirection', 'rtl');
Template.body.onCreated(function makeDirection() {
    Tracker.autorun(function() {
        document.dir = Session.get('textDirection');
        $('html').attr('lang', Session.get('appLanguage'));
    });
});
Template.body.helpers({
    isPersian: function() {
        if (Session.get('appLanguage') === 'fa') {
            return true;
        }
        return false;
    }
});


Template.editableText.helpers({
    userCanEdit: function() {
        if (!Meteor.user()) {
            console.log('not logged in');
            return false;
        }
        return true;
    }
});
