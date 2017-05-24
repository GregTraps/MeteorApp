/**
 * Created by greg on 17-5-9.
 */
if (Posts.find().count() === 0) {
    console.log(Posts.find().fetch());
    Posts.insert({
        title : 'Meteor1',
        url : 'http://meteor.com'
    });
    Posts.insert({
        title : 'Meteor2',
        url : 'http://meteor.com'
    });
    Posts.insert({
        title : 'Meteor3',
        url : 'http://meteor.com'
    });
    console.log('pub');
}