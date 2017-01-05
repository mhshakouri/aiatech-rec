Meteor.methods({
  addHomePart: function(){
		var partPlaceOrder = HomeParts.find().count();
		var part;
		if(!this.userId){
			return;
		} else {
	    	newPart = {
	    		titleEn : 'Slide Title',
	    		titleFa : 'عنوان اسلاید',
	    		bodyEn : 'Slide Content',
	    		bodyFa : 'محتوای اسلاید',
	    		order	 : 	partPlaceOrder++,
	    		createdOn : new Date(),
	    		imageFile : 'noImage.png'
	    	};
			var id = HomeParts.insert(newPart);
			console.log("add doc method "+ id);
			return id;

		}
	},
	removePart: function(part){
		HomeParts.remove(part);
	},
	addAboutUs: function(){
		var part;
	    	newPart = {
	    		titleEn : 'Slide Title',
	    		titleFa : 'عنوان اسلاید',
	    		bodyEn : 'Slide Content',
	    		bodyFa : 'محتوای اسلاید',
	    		imageFile : 'noImage.png'
	    	};
			var id = AboutUs.insert(newPart);
			console.log("add doc method "+ id);
			return id;

		}
    /*
  addComment: function(comment){
    console.log("i am running");
    if(this.userId){
      comment.owner = this.userId;
      comment.createdOn = new Date();
      return Comments.insert(comment);
    }
  },
  updateDocPrivacy: function(doc){
		var realDoc = Documents.findOne({_id:doc._id, owner:this.userId});
		if (realDoc) {
			idSelector = doc._id;
			realDoc.isPrivate = doc.isPrivate;
			Documents.update({_id:idSelector}, realDoc);
		}
  },
  addDoc: function(){
		var doc;
		if(!this.userId){
			return;
		} else {
			newRecord = {owner:this.userId, createdOn: new Date(), title: "New document", isPrivate: false};
			var id = Documents.insert(newRecord);
			console.log("add doc method "+ id);
			return id;
		}
  },
  addEditingUser: function(arg){
		var doc, user;
		doc = Documents.findOne({_id:arg});
		if (!doc){return;}
		if (!this.userId){return;}
		user = Meteor.user().profile;
		eusers = EditingUsers.findOne({docid:doc._id});
		if (!eusers){
			eusers = {
				docid : doc._id,
				users:{},
			};
		}
		user.lastEdit = new Date();
		eusers.users[this.userId] = user;
    EditingUsers.upsert({_id:eusers._id}, eusers);
  }
  */
});
