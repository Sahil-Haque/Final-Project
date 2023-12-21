module.exports = function(app, appData) {

    //Handle our routes
    app.get('/',function(req,res){
        res.render('index.ejs', appData)
    });

    app.get('/register', function (req,res) {
        res.render('register.ejs', appData);                                                                     
    }); 

    app.post('/registered', function(req, res) {
   
        // saving data in database
        res.send(' Hello ' + req.body.firstname + ' ' + req.body.surname + ' You are now registered! We will send you an email at ' + req.body.email);

        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const plainPassword = req.body.password; 

        bcrypt.hash(plainPassword, saltRounds, function(err, hashedPassword){ 
            //store hashed password in database
            let sqlquery = "INSERT INTO user_details (username, firstname, surname,  email, hashedPassword) VALUES (?, ?, ?, ?, ?)";
            //response
            let newrecord = [req.body.username, req.body.firstname, req.body.surname, req.body.email, hashedPassword];
            db.query(sqlquery, newrecord, (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            else
            result = 'Hello' + req.body.firstname + ' ' + req.body.surname + ' you are now registered! We will send an email to you at '+ req.body.email;
            //result += ' Your password is: '+ req.body.hashedPassword + ' and your hashed password is '+ hashedPassword;
            res.send(result);
            })
        })
    })


}