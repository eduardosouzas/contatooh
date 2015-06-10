var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');


module.exports = function() {
    var Usuario = mongoose.model('Usuario');
    passport.use(new GitHubStrategy({
        clientID: '256ddab9ddf939321f6e',
        clientSecret: '08abfa6a1a3731d7d5565466a55abf1e5c74d69a',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate(
            { "login" : profile.username},
            { "nome" : profile.username},
            function(erro, usuario) {
                if(erro) {
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
    }));
    /*
     Chamado apenas UMA vez e recebe o usuário do nosso
     banco disponibilizado pelo callback da estratégia de
     autenticação. Realizará a serialização apenas do
     ObjectId do usuário na sessão.
     */
    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });
    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
            .then(function(usuario) {
                done(null, usuario);
            });
    });
};