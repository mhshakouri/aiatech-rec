import {
    Meteor
} from 'meteor/meteor'
import {
    Template
} from 'meteor/templating'
import './aboutus.html'
Template.aboutus.onRendered(function() {


})
Template.aboutus.onDestroyed(function() {})

Template.aboutus.helpers({
    homeText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'صفحه نخست';
        }
        return 'Home';
    },
    aboutusText: function() {
        if (Session.get('appLanguage') === 'fa') {
            return 'درباره ما';
        }
        return 'About Us';
    }
})
Template.aboutus.events({})
