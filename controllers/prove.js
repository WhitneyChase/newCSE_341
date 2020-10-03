
//_______WEEK 01________//
exports.getProve01 = (req, res, next) => {
    res.render('pages/prove01/form', { 
        title: 'Prove Week 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};

exports.postProve01 = (req, res, next) => {
    res.render('pages/prove01/display', { 
        title: 'Prove Week 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.animal,
        input2: req.body.name
    });
};




//_______WEEK 02________// 
exports.getProve02 = (req, res, next) => {
    res.render('pages/prove02/bookForm', { 
        title: 'Prove Week 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}; 


exports.postProve02 = (req, res, next) => {
    res.render('pages/prove02/bookDisplay', { 
        title: 'Library', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.bTitle,
        input2: req.body.bAuthur,
        input3: req.body.bSynopsis
    });
};




//_______WEEK 03________//
exports.getProve03 = (req, res, next) => {
    res.render('pages/prove03/bookForm', { 
        title: 'Prove Week 03', 
        path: '/prove03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}; 


exports.postProve03 = (req, res, next) => {
    res.render('pages/prove03/bookDisplay', { 
        title: 'Prove Week 03', 
        path: '/prove03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};
