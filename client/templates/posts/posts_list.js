/**
 * Created by greg on 17-5-9.
 */

Template.postsList.helpers({
    posts : function () {
        return Posts.find();
    }
});