import './collections.js';
import './methods.js';
import './subscriptions.js';


/*

Meteor.subscribe("Documents");
Meteor.subscribe("EditingUsers");
Meteor.subscribe("Comments");


Template.insertCommentForm.helpers({
  docid: function(){
    return Session.get("docid");
  }
});
Template.docMeta.helpers({
  document: function(){
    return Documents.findOne({_id:Session.get("docid")});
  },
  ownerId: function(){
    return Documents.findOne({_id:Session.get("docid")}).owner;
  },
  yourId: function(){
    return Meteor.userId();
  },
  canEdit: function(){
    var doc;
    doc = Documents.findOne({_id:Session.get("docid")});
    if (doc) {
      if (doc.owner === Meteor.userId()){
        return true;
      }
    }
    return false;
  },
  isPrivate: function(){
    var doc;
    doc = Documents.findOne({_id:Session.get("docid")});
    if (doc) {
      if (doc.isPrivate === true){
        return true;
      } else {
        return false;
      }
    }
  }
});
Template.editableText.helpers({
  userCanEdit: function(doc, Collection){
    var document = Documents.findOne({_id:Session.get("docid")});
    var currentUserId = Meteor.userId();
    if (document.owner === currentUserId) {
      return true;
    } else {
      return false;
    }
  }
});

Template.editor.helpers({
  config: function(){
    return function(editor){
      editor.setOption("lineNumbers",true);
      editor.setOption("mode","html");
      editor.setOption("theme","cobalt");
      if(Meteor.user()){
        editor.on("change",function(cm_editor, info){
          $("#viewer_iframe").contents().find("html").html(cm_editor.getValue());
          Meteor.call("addEditingUser", Session.get("docid"));
        });
      }
    }
  },
  docid: function(){
    setupCurrentDocument();
    return Session.get("docid");
  }
});
Template.editingUsers.helpers({
users: function(){
  var doc, eusers, users;
  doc = Documents.findOne({_id:Session.get("docid")});
  if (!doc){return;}
  eusers = EditingUsers.findOne({docid:doc._id});
  if (!eusers){return;}
  users = new Array();
  var i = 0;
  for(var user_id in eusers.users){
    users[i] = fixObjectKeys(eusers.users[user_id]);
    i++;
  }
  return users;
}
});
Template.docMeta.events({
"click .js-tog-private": function(event){
   var doc = {_id:Session.get("docid"), isPrivate:event.target.checked};
   Meteor.call("updateDocPrivacy", doc);
}
});

function setupCurrentDocument(){
	var doc;
	if (!Session.get("docid")){
		doc = Documents.findOne();
		if (doc){
			Session.set("docid",doc._id);
		}
	}
}
function fixObjectKeys(obj){
	var newObj = {};
	for (key in obj){
		var key2 = key.replace("-", "");
		newObj[key2] = obj[key];
	}
	return newObj;
}


*/
