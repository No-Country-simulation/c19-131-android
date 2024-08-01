const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('../app/models/User');
const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
    console.error('Falta la variable de entorno JWT_SECRET');
    process.exit(1);
}

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
};

passport.use(new Strategy(jwtOptions, async (jwtPayload, done) => {
    console.log('JWT Payload:', jwtPayload); // Mensaje de depuración
    try {
        const user = await User.findById(jwtPayload.id);
        if (user) {
            console.log('User found:', user); // Mensaje de depuración
            return done(null, user);
        } else {
            console.log('User not found'); // Mensaje de depuración
            return done(null, false);
        }
    } catch (error) {
        console.error('Error in JWT strategy:', error); // Mensaje de depuración
        return done(error, false);
    }
}));

passport.serializeUser((user, done) => {
    console.log('Serializing user:', user); // Mensaje de depuración
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log('Deserializing user with ID:', id); // Mensaje de depuración
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        console.error('Error in deserializing user:', error); // Mensaje de depuración
        done(error, null);
    }
});

module.exports = passport;
