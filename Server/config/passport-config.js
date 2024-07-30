const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('../app/models/User'); // Verifica la ruta correcta
const jwtSecret = process.env.JWT_SECRET; // Asegúrate de que esta variable esté definida en tu .env

if (!jwtSecret) {
    console.error('Falta la variable de entorno JWT_SECRET');
    process.exit(1);
}

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
};

passport.use(new Strategy(jwtOptions, async (jwtPayload, done) => {
    try {
        const user = await User.findById(jwtPayload.id);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

module.exports = passport;
