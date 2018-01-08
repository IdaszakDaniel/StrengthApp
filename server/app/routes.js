module.exports = function(app, passport) {


  const path = require('path');
  const express = require('express');
// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/myapp', function(req, res) {
        res.redirect('http://localhost:4200');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        app.use(express.static(path.join(__dirname, 'dist')));
        app.get('/ui', isLoggedIn, function(req, res) {
            res.sendFile(path.join(__dirname + '/dist/index.html'));
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/ui', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['public_profile', 'email'] }));

        // handle the callback after facebook has authenticated the user
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

        // handle the callback after twitter has authenticated the user
        app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // send to google to do the authentication
        app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

        // the callback after google has authenticated the user
        app.get('/auth/google/callback',
            passport.authenticate('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

// =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================

    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/connect/facebook', passport.authorize('facebook', { scope : ['public_profile', 'email'] }));

        // handle the callback after facebook has authorized the user
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

        // handle the callback after twitter has authorized the user
        app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // send to google to do the authentication
        app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

        // the callback after google has authorized the user
        app.get('/connect/google/callback',
            passport.authorize('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });


            // var Nerd = require('./models/nerd');
            // app.get('/api/nerds', function(req, res) {
            //     // use mongoose to get all nerds in the database
            //     console.log("reqres:",req.user);
            //     Nerd.find(function(err, nerds) {
            //
            //         // if there is an error retrieving, send the error.
            //                         // nothing after res.send(err) will execute
            //         if (err)
            //             res.send(err);
            //
            //         res.json(nerds); // return all nerds in JSON format
            //     });
            // });

            var Routines = require('./models/routines');
            app.get('/api/workouts', isLoggedIn, function(req, res) {
              console.log("MYUSER", req.session.passport.user);
                Routines.find({_userId : req.session.passport.user}, function(err, nerds) {
                    if (err)
                        res.send(err);
                    res.json(nerds);
                });
            });

            app.post('/api/workouts', function(req, res){
              workouts = new Workouts;
              workouts.workouts = 'lamiglowki'
              workouts.save(function(err){
                if(err) res.send(err);
                res.json(task);
                res.json({ message: 'Bear created!' });
              })
            })

            // app.route('/tasks')
            //   .get(todoList.list_all_tasks)
            //   .post(todoList.create_a_task);
            //
            //
            // app.route('/tasks/:taskId')
            //   .get(todoList.read_a_task)
            //   .put(todoList.update_a_task)
            //   .delete(todoList.delete_a_task);


            app.route('/workouts').post((req, res) => {
              let new_task = new Workouts(req.body);
              new_task.save((err, task) => {
                            if(err) {
                              console.log(err);
                              res.send(err);
                            }
                            res.json(task);
                          });
            });

            app.route('/workouts/:taskId').put((req, res) => {
              console.log(req.params.taskId, req.body);
              Workouts.findOneAndUpdate({_id: req.params.taskId},
                                        {$push : req.body},
                                        {safe: true, upsert:true},
                                        (err) => {
                                          if(err) {
                                            console.log(err);
                                            res.send(err);
                                          }
                                        });
            });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  //console.log(req.session);
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
