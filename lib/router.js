/**
 * Created by greg on 17-5-9.
 */
Router.configure({
    //defau template
    layoutTemplate : 'layout',
// Page Not Found------------------
    notFoundTemplate : 'notFound',
    //loading temp
    loadingTemplate : 'loading',
    waitOn : function () {
        return Meteor.subscribe('posts');
    }
});
Router.route('/',{name: 'postsList'});

// Single Post Page-----------------------
Router.route('/posts/:_id',{
    name : 'postPage',
    data : function() { return Posts.findOne(this.params._id);}
});
// Single Page data not found issue
Router.onBeforeAction('dataNotFound',{only: 'postPage'});

// submits
Router.route('/submit',{name : 'postSubmit'});