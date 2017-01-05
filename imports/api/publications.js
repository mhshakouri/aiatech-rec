/*
Meteor.publish("Documents", function(){
  return Documents.find({
    $or:[
      {isPrivate:{$ne:true}},
      {owner:this.userId}
    ]
  });
});
Meteor.publish("EditingUsers", function(){
  return EditingUsers.find();
});
Meteor.publish("Comments", function(argument){
  return Comments.find();
});
Meteor.startup(function(){
  var doc = Documents.findOne();
  if (!doc){
    var newRecord = {title:"Main Document",createdOn:new Date()}
    Documents.insert(newRecord);

  }

});
*/

Meteor.publish("HomeParts", function(){
  return HomeParts.find();
});
Meteor.publish("HeaderSection", function(){
  return HeaderSection.find();
});