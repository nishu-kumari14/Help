const router = require('express').Router();
const customers = require('../model/allUsers');


router.get('/', (req, res) => {
    res.render('home');
});

// ADD USER
router.get('/adduser', (req, res) => {
    res.render('addUser', { title: "Add User", msg: '' })
});

router.post('/adduser', (req, res) => {
    const { userName, userEmail, userNumber, userAmount } = req.body;
    const User = new customers({
        name: userName,
        email: userEmail,
        contact: userNumber,
        amount: userAmount,
    });
    User.save()
        .then(() => {
            res.render('addUser', { title: "Add User", msg: 'Product Added Succefully'});
        })
        .catch((err) => {
            console.log(err);
        });
});

// View all User
router.get('/data', (req, res) => {
    customers.find({})
        .then(data => {
            res.render('viewUser', { title: "View Users", data: data })
        })
        .catch(err => {
            throw err;
        });
});

// Delete User Id
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    customers.findByIdAndDelete(id)
        .then(data => {
            res.redirect('/data');
        })
        .catch(err => {
            throw err;
        });
});

// View Id
router.get("/view/:id", (req, res) => {
    const id = req.params.id;
    customers.findById(id)
        .then(uData => {
            customers.find({})
                .then(rData => {
                    res.render('view', { title: 'view', data: uData, records: rData })
                })
                .catch(err => {
                    throw err;
                });
        })
        .catch(err => {
            throw err;
        });
});


// Remove ID
router.get('/remove/:id', (req, res) => {
    const id = req.params.id;
    historyModel.findByIdAndDelete(id)
        .then(data => {
            res.redirect('/history');
        })
        .catch(err => {
            throw err;
        });
});
module.exports = router;
