const Controller = require('bak/lib/controller');
const auth = require('../lib/auth');

const Config = require('config');
const {jwt_sign} = require('bak/lib/helpers/security');
const {user_usage, user_logout} = require('../lib/acct');

const auth_secret = Config.get('auth.secret');

module.exports = class SiteController extends Controller {

    constructor() {
        super({
            default: {
                auth: {mode: 'try'},
            }
        });
    }

    async _(request, reply) {

        const dst = request.query.dst;

        const error = request.query.error;

        const status = await this._usage(request);

        const external = request.ip.indexOf('192') !== 0;

        if (status) {
            return reply.redirect('/status');
        }

        if (request.user) {
            return reply.redirect('/status');
        }

        reply.view(request.query.next ? 'index' : 'old', {
            dst,
            error,
            external
        });
    }

    async help(request, reply) {
        reply.view('help');
    }


    _usage(request) {
        const ip = request.ip.indexOf('192') === 0 ? request.ip : null;

        return user_usage({
            username: request.user ? request.user.id : null,
            ip,
        });
    }

    async status(request, reply) {
        const status = await this._usage(request);

        let {logout, dst} = request.query;

        if (!status) {
            return reply.redirect('/').unstate('token', {isSecure: false});
        }

        if (dst && dst.indexOf('internet.aut.ac.ir') !== -1) {
            dst = null;
        }

        reply.view('status', {
            username: request.user ? request.user.username : status.username,
            group: request.user ? request.user.group : status.group,
            auth: !!request.user,
            ip: request.ip,
            status,
            logout,
            dst
        });
    }

    async status_logout_$$ip(request, reply, {ip}) {

        const status = await this._usage(request);

        if (!status) {
            return reply.redirect('/')
                .unstate('token', {isSecure: false});
        }

        await user_logout({
            username: status.username,
            ip: ip || request.ip,
        });

        // If self logging out
        if (!ip || ip === request.ip) {
            if (request.user) {
                await request.user.logout(request.session);
            }

            return reply.redirect('/')
                .unstate('token', {isSecure: false});
        }

        return reply.redirect('/status?logout=' + (ip || request.ip));
    }


};