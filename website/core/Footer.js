/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
		 <a href="https://www.4d.com" className="nav-home">
            {this.props.config.footerIcon && (
              <img
				src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                //width="300"
                //height="15"
              />
            )}
          </a>
          <div>
            <h5>Community</h5>
                <a href="https://developer.4D.com">4D Developer Center</a>
				<a href="https://blog.4d.com/">4D Blog</a>
				<a href="https://forums.4d.com/">4D Forum</a>
				<a href="https://www.facebook.com/4Dsoftware/">Facebook</a>
				<a href="https://twitter.com/4Dsoftware">Twitter</a>
				<a href="https://www.youtube.com/user/4Dsoftware">Youtube</a>
				<a href="https://github.com/4D/">GitHub</a>
          </div>
          <div>
            <h5>Support</h5>
                <a href="https://doc.4d.com/">4D Doc Center <i>(Where It All Began)</i></a>
				<a href="http://kb.4d.com/">Knowledge Base</a>
				<a href="https://us.4d.com/product-download">Downloads</a>
				<a href="https://us.4d.com/resources">Resources</a>
				<a href="https://us.4d.com/4d-technical-support">Get Support</a>

          </div>
          <div>
            <h5>Company</h5>
		        <a href="https://us.4d.com/about-us">About 4D</a>
		        <a href="https://us.4d.com/contact-us">Contact us</a>
				<a href="https://us.4d.com/4d-around-the-world">4D around the world</a>
                <a href="https://us.4d.com/careers">Careers</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
		<section className="copyright"><a className="cp2" href="https://us.4d.com/terms-and-conditions">Terms & Conditions</a> | <a className="cp2" href="https://us.4d.com/legal-notices">Legal Notices</a> | <a className="cp2" href="https://us.4d.com/data-policy">Data Policy</a> | <a className="cp2" href="https://us.4d.com/cookies-policy">Cookie Policy</a> | <a className="cp2" href="https://us.4d.com/license">Product license</a></section>
      </footer>
    );
  }
}

module.exports = Footer;