// Boilerplate code for hashing passwords.

const bcrypt = require('bcrypt');

async function hashPassword() {

    try {
        // Plain text password
        const saltRounds = 10;
        const originalPassword = 'Passward123';
        const passward = 'Passward1233';

        //Hashing password
        const hashPassword = await bcrypt.hash(originalPassword, saltRounds);

        //Storing password into db or returning to the model
        console.log(hashPassword);

        //Declaring a constant that checks if passwords match
        const passwordMatch = await bcrypt.compare(passward, hashPassword);

        //Show if passwords match or no
        console.log(passwordMatch);
    }

    catch (error) {
        console.log(error);
    }

};

hashPassword();