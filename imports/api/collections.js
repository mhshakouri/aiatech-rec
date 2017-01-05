Categories = new Mongo.Collection("Categories");
MenuItems = new Mongo.Collection("MenuItems");

HomeParts = new Mongo.Collection("HomeParts");
HomeParts.attachSchema(new SimpleSchema({
    titleEn: {
        type: String,
        label: "عنوان انگلیسی",
        max: 200
    },
    titleFa: {
        type: String,
        label: "عنوان فارسی",
        max: 200
    },
    bodyEn: {
        type: String,
        label: "توضیحات انگلیسی",
        max: 1000
    },
    bodyFa: {
        type: String,
        label: "توضیحات فارسی",
        max: 1000
    },
    order: {
        type: Number,
    },
    createdOn: {
        type: Date,
        optional: true
    },
    imageFile: {
        label: "تصویر اسلاید",
        type: String
    }
}));
HeaderSection = new Mongo.Collection("HeaderSection");
HeaderSection.attachSchema(new SimpleSchema({
    titleEn: {
        type: String,
        label: "عنوان انگلیسی",
        max: 200
    },
    titleFa: {
        type: String,
        label: "عنوان فارسی",
        max: 200
    },
    imageFile: {
        label: "تصویر پس زمینه",
        type: String
    },
    bottomEn: {
        label: "زیر نویس انگلیسی",
        type: String
    },
    bottomFa: {
        label: "زیر نویس فارسی",
        type: String
    }
}));
AboutUs = new Mongo.Collection('AboutUs');
AboutUs.attachSchema(new SimpleSchema({
  titleEn: {
      type: String,
      label: "عنوان انگلیسی",
      max: 200
  },
  titleFa: {
      type: String,
      label: "عنوان فارسی",
      max: 200
  },
  imageFile: {
      label: "تصویر پس زمینه",
      type: String
  },
  bodyEn: {
      label: "متن انگلیسی",
      type: String
  },
  bodyFa: {
      label: "متن فارسی",
      type: String
  }
}));
auVisions = new Mongo.Collection('auVisions');
auVisions.attachSchema(new SimpleSchema({
  titleEn: {
      type: String,
      label: "عنوان انگلیسی",
      max: 200
  },
  titleFa: {
      type: String,
      label: "عنوان فارسی",
      max: 200
  },
  imageFile: {
      label: "تصویر پس زمینه",
      type: String
  },
  bodyEn: {
      label: "متن انگلیسی",
      type: String
  },
  bodyFa: {
      label: "متن فارسی",
      type: String
  }
}));
auMission = new Mongo.Collection('auMission');
auMission.attachSchema(new SimpleSchema({
  titleEn: {
      type: String,
      label: "عنوان انگلیسی",
      max: 200
  },
  titleFa: {
      type: String,
      label: "عنوان فارسی",
      max: 200
  },
  imageFile: {
      label: "تصویر پس زمینه",
      type: String
  },
  bodyEn: {
      label: "متن انگلیسی",
      type: String
  },
  bodyFa: {
      label: "متن فارسی",
      type: String
  }
}));
/*

// code sent to client and server
// which gets loaded before anything else (since it is in the lib folder)

this.Documents = new Mongo.Collection("documents");
EditingUsers = new Mongo.Collection("editingUsers");
Comments = new Mongo.Collection("comments");

// set up a schema controlling the allowable
// structure of comment objects
Comments.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  body:{
    type: String,
    label: "Comment",
    max: 1000
  },
  docid:{
  	type: String,
  },
  owner:{
  	type: String,
    optional: true
  },
  createdOn:{
    type: Date,
    optional: true
  }
}));

*/
