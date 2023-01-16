(function (internal) {
    'use strict';

    /* src/pages/home.svelte generated by Svelte v3.55.1 */

    class Home extends internal.SvelteComponent {
    	constructor(options) {
    		super();
    		internal.init(this, options, null, null, internal.safe_not_equal, {});
    	}
    }

    const express = require('express');
    const path = require('path');
    const router = express.Router();
    const app = express();

    app.set('views', path.join(__dirname, '../views'));

    router.get('/', (req, res) => {
        res.render('home.ejs', {
            Home
        });
    });

    module.exports = router;

})(internal);
