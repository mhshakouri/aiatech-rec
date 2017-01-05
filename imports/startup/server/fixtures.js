// run at Meteor app startup
Meteor.startup(function() {
    // if users database is empty, seed these values
    if (Meteor.users.find().count() < 1) {
        // users array
        var users = [{
            name: 'Hossein Shakouri',
            username: 'mhshakouri',
            email: 'mhshakouri@gmail.com',
            password: 'mainadmin',
            roles: ['admin']
        }, {
            name: 'AIATech Admin',
            username: 'aiatechadmin',
            email: 'info@aiatech.ir',
            password: 'admin',
            roles: ['admin']
        }];
        // user creation
        _.each(users, function(d) {
            // return id for use in roles assignment below
            var userId = Accounts.createUser({
                email: d.email,
                password: d.password,
                username: d.email,
                profile: {
                    name: d.name
                }
            });
            // verify user email
            Meteor.users.update({
                _id: userId
            }, {
                $set: {
                    'emails.0.verified': true
                }
            });
            // add roles to user
        });
    }
    if (AboutUs.find().count() < 1){
          newPart = {
            titleEn : 'Slide Title',
            titleFa : 'عنوان اسلاید',
            bodyEn : 'Slide Content',
            bodyFa : 'محتوای اسلاید',
            imageFile : 'noImage.png'
          };
          var id = AboutUs.insert(newPart);
    }
    if (HeaderSection.find().count() < 1) {
        var headerSection = {
            titleEn: 'AIATECH',
            titleFa: 'آیاتک',
            imageFile: '/homepage/smart-house.jpg',
            bottomEn: 'Smart House Technology',
            bottomFa: 'تکنولوژی خانه هوشمند'
        };
        var headSectionId = HeaderSection.insert({
            titleEn: headerSection.titleEn,
            titleFa: headerSection.titleFa,
            imageFile: headerSection.imageFile,
            bottomEn: headerSection.bottomEn,
            bottomFa: headerSection.bottomFa,
        });
    }
    if (Categories.find().count() < 1) {
        var categories = [{
            nameEn: 'Home',
            nameFa: 'صفحه اصلی',
            slug: '',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            order: 0,
            createdOn: new Date(),
        }, {
            nameEn: 'About us',
            nameFa: 'درباره ما',
            slug: 'aboutus',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            order: 1,
            createdOn: new Date(),
        }, {
            nameEn: 'Products',
            nameFa: 'محصولات',
            slug: 'products',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            order: 2,
            createdOn: new Date(),
        }, {
            nameEn: 'Optional Features',
            nameFa: 'امکانات جانبی',
            slug: 'optional-features',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            order: 3,
            createdOn: new Date(),
        }, {
            nameEn: 'Partners',
            nameFa: 'همکاران',
            slug: 'partners',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            order: 4,
            createdOn: new Date(),
        }, {
            nameEn: 'Contact us',
            nameFa: 'تماس با ما',
            slug: 'contact-us',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            order: 5,
            createdOn: new Date(),
        }, ];
        _.each(categories, function(d) {
            // return id for use in roles assignment below
            var categoryId = Categories.insert({
                nameEn: d.nameEn,
                nameFa: d.nameFa,
                slug: d.slug,
                keywordsEn: d.keywordsEn,
                keywordsFa: d.keywordsFa,
                descriptionEn: d.descriptionEn,
                descriptionFa: d.descriptionFa,
                order: d.order,
                createdOn: d.createdOn,
            });
        });
    }
    if (MenuItems.find().count() < 1) {
        var menus = [{
            nameEn: 'Home',
            nameFa: 'صفحه اصلی',
            slug: '',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 0,
            createdOn: new Date(),
            parent: 'root'
        }, {
            nameEn: 'About us',
            nameFa: 'درباره ما',
            slug: 'aboutus',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: true,
            order: 1,
            createdOn: new Date(),
            parent: 'root'
        }, {
            nameEn: 'Company',
            nameFa: 'شرکت',
            slug: 'company',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 0,
            createdOn: new Date(),
            parent: 'aboutus'
        }, {
            nameEn: 'Insight',
            nameFa: 'دیدگاه',
            slug: 'insight',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 1,
            createdOn: new Date(),
            parent: 'aboutus'
        }, {
            nameEn: 'Mission',
            nameFa: 'ماموریت',
            slug: 'mission',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 2,
            createdOn: new Date(),
            parent: 'aboutus'
        }, {
            nameEn: 'Products',
            nameFa: 'محصولات',
            slug: 'products',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: true,
            order: 2,
            createdOn: new Date(),
            parent: 'root'
        }, {
            nameEn: 'About z-wave',
            nameFa: 'درباره z-wave',
            slug: 'about-z-wave',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 0,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Central Controller',
            nameFa: 'کنترلگر مرکزی',
            slug: 'central-controller',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 1,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Motion Sensor',
            nameFa: 'حسگر حرکتی',
            slug: 'motion-sensor',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 2,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Water Leak Sensor',
            nameFa: 'حسگر نشت آب',
            slug: 'water-leak-sensor',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 3,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Water Leak Sensor',
            nameFa: 'حسگر دود',
            slug: 'smoke-sensor',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 4,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Water Leak Sensor',
            nameFa: 'حسگر درب و پنجره',
            slug: 'door-window-sensor',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 4,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Smart Power Plug',
            nameFa: 'پریز هوشمند',
            slug: 'smart-power-plug',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 4,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'NT|کنترلگر قطع و وصل',
            nameFa: 'کنترلگر قطع و وصل',
            slug: 'on-off-controller',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 4,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Light Density Controller',
            nameFa: 'کنترلگر شدت نور',
            slug: 'light-density-controller',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 5,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Light Color Controller',
            nameFa: 'کنترلگر رنگ نور',
            slug: 'light-color-controller',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 6,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Motor Controller',
            nameFa: 'کنترلگر موتور',
            slug: 'motor-controller',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 7,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Door Lock',
            nameFa: 'قفل درب',
            slug: 'door-lock',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 8,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Thermostats',
            nameFa: 'ترموستات ها',
            slug: 'thermostats',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: true,
            order: 9,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'NT|ترموستات فنکوئل',
            nameFa: 'ترموستات فنکوئل',
            slug: 'fanquel-termostat',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 9,
            createdOn: new Date(),
            parent: 'products/thermostats'
        }, {
            nameEn: 'NT|کنترلگر هواسازها',
            nameFa: 'کنترلگر هواسازها',
            slug: 'bubble-controllers',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: true,
            order: 10,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'NT| ترموستات شوفاژ',
            nameFa: 'ترموستات شوفاژ',
            slug: 'shoufage-thermostat',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 11,
            createdOn: new Date(),
            parent: 'products/bubble-controllers'
        }, {
            nameEn: 'NT|شیر برقی',
            nameFa: 'شیر برقی',
            slug: 'electrical-faucet',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 12,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Air Quality Controller',
            nameFa: 'کنترلگر کیفیت هوا',
            slug: 'air-quality-controller',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 13,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Curtain Motor',
            nameFa: 'موتور پرده',
            slug: 'curtain-motor',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 14,
            createdOn: new Date(),
            parent: 'products'
        }, {
            nameEn: 'Optional Features',
            nameFa: 'امکانات جانبی',
            slug: 'optional-features',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 3,
            createdOn: new Date(),
            parent: 'root'
        }, {
            nameEn: 'Partners',
            nameFa: 'همکاران',
            slug: 'partners',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 4,
            createdOn: new Date(),
            parent: 'root'
        }, {
            nameEn: 'Contact us',
            nameFa: 'تماس با ما',
            slug: 'contact-us',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: true,
            order: 5,
            createdOn: new Date(),
            parent: 'root'
        }, {
            nameEn: 'Centrall Office',
            nameFa: 'دفتر مرکزی',
            slug: 'central-office',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 0,
            createdOn: new Date(),
            parent: 'contact-us'
        }, {
            nameEn: 'Job Opportunities',
            nameFa: 'اطلاعیه استخدام',
            slug: 'job-opportunities',
            keywordsEn: [],
            keywordsFa: [],
            descriptionEn: [],
            descriptionFa: [],
            hasChilds: false,
            order: 1,
            createdOn: new Date(),
            parent: 'contact-us'
        }];
        _.each(menus, function(d) {
            // return id for use in roles assignment below
            var menuId = MenuItems.insert({
                nameEn: d.nameEn,
                nameFa: d.nameFa,
                slug: d.slug,
                keywordsEn: d.keywordsEn,
                keywordsFa: d.keywordsFa,
                descriptionEn: d.descriptionEn,
                descriptionFa: d.descriptionFa,
                hasChilds: d.hasChilds,
                order: d.order,
                createdOn: d.createdOn,
                parent: d.parent
            });
        });
    }
});
