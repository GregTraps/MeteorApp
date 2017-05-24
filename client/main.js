// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';
//
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

// Meteor.subscribe('posts');
// //test-----------------------------------------------------
// MyCollection = new Mongo.Collection('myCollection');
// var myData = {
//     key1 : 'value 1',
//     key2 : 'value 2',
//     key3 : 'value 3',
//     key4 : 'value 4',
//     key5 : 'value 5',
// };
// MyCollection.insert(myData);
// var findCollection = MyCollection.find().fetch();
// console.log(findCollection);

//test END--------------------------