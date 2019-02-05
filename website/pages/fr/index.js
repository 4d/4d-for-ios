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
            <Button href={docUrl('overview.html', language)}>Présentation</Button>
            <Button href={docUrl('create-new-project.html', language)}>Creer</Button>
            <Button href={docUrl('simulator.html', language)}>Tester</Button>
            <Button href={docUrl('deployment.html', language)}>Deployer</Button>

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
        content: 'Définissez un sous-ensemble de votre structure physique à répliquer.',
        image: imgUrl('structure.png'),
        imageAlign: 'top',
        title: 'Structure',
      },
      {
        content: 'Choisissez le style de votre application en quelques étapes simples.',
        image: imgUrl('design.png'),
        imageAlign: 'top',
        title: 'Design',
      },
      {
        content: 'Créez un projet Xcode en un clic et exécutez votre application sur n’importe quel iPhone.',
        image: imgUrl('generateTest.png'),
        imageAlign: 'top',
        title: 'Génération & Test',
      },
      {
        content: 'Choisissez un modèle de déploiement interne ou App Store pour distribuer votre application.',
        image: imgUrl('deploy.png'),
        imageAlign: 'top',
        title: 'Déploiement',
      },
    ]}

  </Block>

);



const FeatureCallout = props => (
  <div

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('fr/overview.html', props.language)}>
          Présentation
        </a>

  </div>
);


const BuildYourApp = props => (

  <Block id="whiteBloc">
 
    {[
      {
        image: imgUrl('Create-iOS-app-from-scratch.png'),
        imageAlign: 'left',
        content: 'Créez différentes applications en fonction de vos besoins.<br>Découvrez nos tutoriels pour créer rapidement votre première application.',
        title: 'Creez votre application 4D for iOS',
      },
    ]}

  </Block>

);

const BuildYourAppCallout = props => (
  <div id = "whiteBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('fr/create-new-project.html', props.language)}>
          CRÉEZ VOTRE APP
        </a>

  </div>
);

const TestYourApp = props => (

  <Block id="greyBloc">
 
    {[
      {
        image: imgUrl('simulator.png'),
        imageAlign: 'right',
        content: 'Testez votre application sur le Simulateur ou sur votre iPhone.',
        title: 'Testez',
      },
    ]}

  </Block>

);

const TestYourAppCallout = props => (
  <div id = "greyBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('fr/simulator.html', props.language)}>
          TESTEZ VOTRE APP
        </a>

  </div>
);



const Deploy = props => (
  <Block id="whiteBloc">

    {[
      {
        content: 'Distribuez votre application en interne ou sur l&rsquo;App Store.<br>Plusieurs tutoriels sont disponibles pour vous guider tout au long du processus.',
        image: imgUrl('deploy-Enterprise.png'),
        imageAlign: 'left',
        title: 'Deployez votre App',
      },
    ]}
  </Block>
);

const DeployCallout = props => (
    <div id = "whiteBloc"

    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <a className="button" href={docUrl('fr/deployment.html', props.language)}>
        DEPLOYEZ VOTRE APP
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
