/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2017-11-02 10:02
 * @description
 */

'use strict';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

class MS {
  init({ app, appDir }) {
    this._app = app
    this.appDir = appDir
    this.setAppConfig()
  }

  setAppConfig() {
    //https://github.com/expressjs/body-parser#limit
    this._app.use(bodyParser.json({ limit: '500kb' }));
    //https://github.com/expressjs/body-parser#extended
    this._app.use(bodyParser.urlencoded({ extended: true }));
    this._app.use(cookieParser());
  }
}

module.exports = MS