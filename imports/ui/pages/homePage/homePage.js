import {
    Meteor
} from 'meteor/meteor'
import {
    Template
} from 'meteor/templating'
import './homePage.html'
Template.homePage.onRendered(function() {
    Meteor.setTimeout(function() {
        if (Meteor.userId()) {
        } else {}
    }, 1000)
    new WOW().init();

})
Template.homePage.onDestroyed(function() {})
Template.headerSection.helpers({
    headerItem: function() {
        return HeaderSection.findOne();
    },
    isPersian: function() {
        if (Session.get('appLanguage') === 'fa') {
            return true
        }
        return false
    }
})
Template.parts.helpers({
    parts: function() {
        return HomeParts.find({}, {
            sort: {
                order: 1
            }
        }).fetch()
    }
})
Template.part.helpers({
    partItem: function() {
        return HomeParts.findOne({
            _id: this._id
        })
    },
    title: function() {
        if (Session.get('appLanguage') === 'fa') {
            return this.titleFa
        }
        return this.titleEn
    },
    isPersian: function() {
        if (Session.get('appLanguage') === 'fa') {
            return true
        }
        return false
    }
})
Template.part.events({
    'click .js-remove-slide': function() {
        var partid = this._id
        if (!Meteor.user()) {
            alert('ابتدا با نام کاربری خود وارد شوید')
        } else {
            if (confirm('Are you sure?')) {
                Meteor.call('removePart', partid)
            }
        }
    }
})
Template.homePage.events({
    'click .js-add-slide': function(event) {
        event.preventDefault()
        if (!Meteor.user()) {
            alert('ابتدا با نام کاربری خود وارد شوید')
        } else {
            Meteor.call('addHomePart', function(error, result) {
                if (error) {
                    console.log('error', error)
                }
                if (result) {
                    console.log(result)
                }
            })
        }
    },
    'click button.down': function(event) {
        $('html,body').animate({
            scrollTop: $(event.target).parent().closest('section').next().offset().top
        }, 'slow');
    }
})
