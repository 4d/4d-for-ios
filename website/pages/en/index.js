/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const translate = require('../../server/translate.js').translate;


const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('logo4DforiOS.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('overview.html', language)}>Overview</Button>
            <Button href={docUrl('create-new-project.html', language)}>Create</Button>
            <Button href={docUrl('simulator.html', language)}>Test</Button>
            <Button href={docUrl('deployment.html', language)}>Deploy</Button>

          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />

  </Container>
);

const Features = props => 

 (
  <Block layout="fourColumn">


    {[
      {
        content: '<translate>Define a subset of your physical structure to replicate.</translate>',
        image: imgUrl('structure.png'),
        imageAlign: 'top',
        title: '<translate>Structure</translate>',
      },
      {
        content: '<translate>Choose the layouts and style of your application in just a few, short steps.</translate>',
        image: imgUrl('design.png'),
        imageAlign: 'top',
        title: '<translate>Design</translate>',
      },
      {
        content: '<translate>Create an Xcode project in one click and run your application on any iPhone.</translate>',
        image: imgUrl('generateTest.png'),
        imageAlign: 'top',
        title: '<translate>Generate & Test</translate>',
      },
      {
        content: '<translate>Choose an in-house or App Store deployment model to distribute your application.</translate>',
        image: imgUrl('deploy.png'),
        imageAlign: 'top',
        title: '<translate>Deploy</translate>',
      },
    ]}

  </Block>

);



const FeatureCallout = props => (
  <div

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('en/overview.html', props.language)}>
          OVERVIEW
        </a>

  </div>
);


const BuildYourApp = props => (

  <Block id="whiteBloc">
 
    {[
      {
        image: imgUrl('Create-iOS-app-from-scratch.png'),
        imageAlign: 'left',
        content: '<translate>Create various applications depending on your needs.<br>Discover multiple tutorials to quickly build your first application.</translate>',
        title: '<translate>Create your 4D for iOS application</translate>',
      },
    ]}

  </Block>

);

const BuildYourAppCallout = props => (
  <div id = "whiteBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('en/create-new-project.html', props.language)}>
          CREATE YOUR APP
        </a>

  </div>
);

const TestYourApp = props => (

  <Block id="greyBloc">
 
    {[
      {
        image: imgUrl('simulator.png'),
        imageAlign: 'right',
        content: '<translate>Test your application in the Simulator or your own device.</translate>',
        title: '<translate>Testing</translate>',
      },
    ]}

  </Block>

);

const TestYourAppCallout = props => (
  <div id = "greyBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('en/simulator.html', props.language)}>
          TEST YOUR APP
        </a>

  </div>
);



const Deploy = props => (
  <Block id="whiteBloc">

    {[
      {
        content: '<translate>Distribute your application in-house or on the App Store.<br>Multiple tutorials are available to guide you through the process.</translate>',
        image: imgUrl('deploy-Enterprise.png'),
        imageAlign: 'left',
        title: '<translate>Deploy your App</translate>',
      },
    ]}
  </Block>
);

const DeployCallout = props => (
    <div id = "whiteBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('en/deployment.html', props.language)}>
        DEPLOY YOUR APP
        </a>

  </div>
);





class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <BuildYourApp />
          <BuildYourAppCallout/>
          <TestYourApp/>
          <TestYourAppCallout/>
          <Deploy/>
          <DeployCallout/>

        </div>
      </div>
    );
  }
}

module.exports = Index;
