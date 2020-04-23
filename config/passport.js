const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const secretOrKey = process.env.SECRET_OR_KEY || require('../config/keys').secretOrKey;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = secretOrKey;


module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    // return the user to the frontend
                    return done(null, user);
                }
                // return false since there is no user
                return done(null, false);
            })
            .catch(err => console.log(err));
    }));
};