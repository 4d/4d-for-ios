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
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          
            <div>            

            <h5>Community</h5>

            <a
              href="https://www.facebook.com/4Dsoftware"
              target="_blank"
              rel="noreferrer noopener">
              Facebook
            </a>
            <a
              href="https://twitter.com/4Dsoftware"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>

             <a
              href="https://www.youtube.com/user/4Dsoftware"
              target="_blank"
              rel="noreferrer noopener">
              Youtube
            </a>
                     <a
              href="https://blog.4d.com/tag/4d-for-ios/"
              target="_blank"
              rel="noreferrer noopener">
              Blog
            </a>

             <a
              href="http://forums.4d.com"
              target="_blank"
              rel="noreferrer noopener">
              Forum
            </a>
           
          </div>

          <div>
            <h5>About</h5>
            <a href="http://www.4d.com">4D</a>
            <a href="http://www.4d.com/legal.html">Legal</a>

            <a href="https://github.com/4D/4d-for-ios">GitHub</a>
    <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/4D/4d-for-ios/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
               
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
