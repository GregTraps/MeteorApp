/**
 * Created by greg on 17-5-9.
 */
Template.header.helpers({
    pageTitle: function() { return Session.get('pageTitle')? Session.get('pageTitle'):'MyMeteorApp'; }
});