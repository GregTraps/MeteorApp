/**
 * Created by greg on 17-5-9.
 */

Meteor.publish('posts',function () {
    return Posts.find();
});
Meteor.publish('allPosts',function () {
    return Posts.find();
});

// 发布同时隐藏掉date字段
Meteor.publish('somePosts',function () {
    return Posts.find({},{fields:{
        date : false
    }});
});
// console.log(Posts.find().fetch());