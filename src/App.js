import React, { Component } from 'react';
import './App.css';
import { Message, Card, Divider, Segment, Grid , Item, Label} from 'semantic-ui-react';
import Header from './components/header'
import profileImg from './assets/profile.jpg'
import dauble from './assets/dauble.png'
import daubleBusiness from './assets/daubleBusiness.png'
import time_machine from './assets/time_machine.png'
import collabpad from './assets/collabpad.png'

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className='Content'>
          <Header/>
          <Divider horizontal>INTRO</Divider>
          <div className="intro">
            <Card className="animated fadeIn"
              image={profileImg}
              header='Bhuvan Malik'
              meta='Web Developer'
              description="Hi! I'm a Web Developer currently working at Dauble. I ♥️ JavaScript and enjoy playing badminton🏸 when I'm not hacking."
            />
          </div>
          <Divider horizontal>What I know</Divider>
          <Segment  padded='very'>
            <Grid relaxed='very' columns={5} className="animated fadeIn">
              <Grid.Column>
                <Card color='olive' header='JavaScript' image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
              </Grid.Column>
              <Grid.Column>
                <Card color='teal' header='HTML & CSS' image="http://abk.po.opole.pl/images/htmlcss.png" />
              </Grid.Column>
              <Grid.Column>
                <Card color='red'  header='React JS' image="https://facebook.github.io/react/img/logo.svg" />
              </Grid.Column>
              <Grid.Column>
                <Card color='yellow' header='Redux' image="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" />
              </Grid.Column>
              <Grid.Column>
                <Card color='orange' header='Angular JS' image="http://codecondo.com/wp-content/uploads/2015/05/15-Directives-to-Extend-Your-Angular.js-Apps.jpg?x94435"/>
              </Grid.Column>
              <Grid.Column>
                <Card color='olive' header='Node JS' image="https://davidwalsh.name/demo/nodejs.png?preview" />
              </Grid.Column>
              <Grid.Column>
                <Card color='green' header='Express' image="https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" />
              </Grid.Column>
              <Grid.Column>
                <Card color='violet' header='Mongo DB' image="http://www.theodo.fr/uploads/blog//2015/11/mongodb.png" />
              </Grid.Column>
              <Grid.Column>
                <Card color='pink' header='Socket.io' image="https://raw.githubusercontent.com/mattleibow/Socket.IO.Client/master/icons/socketio_256x256.png" />
              </Grid.Column>
              <Grid.Column>
                <Card color='brown' header='Vue JS' image="https://camo.githubusercontent.com/4597d7b53cb9a279f84f1350e9ef7d9d0c4e0d0f/687474703a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67" />
              </Grid.Column>
              <Grid.Column>
                <Card color='orange' header='GIT' image="https://garygregory.files.wordpress.com/2016/11/git_logo.png" />
              </Grid.Column>
              <Grid.Column>
                <Card color='red' header='.net Framework' image="http://www.aqies.com/images/net.png" />
              </Grid.Column>
              <Grid.Column>
                <Card color='blue' header='Android' image="http://www.sasken.com/sites/default/files/android-logo_0.jpg" />
              </Grid.Column>
              <Grid.Column>
                <Card color='brown' header='Bootrstrap' image="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png" />
              </Grid.Column>
              <Grid.Column>
                <Card color='violet' header='Rails' image="https://www.simplify.com/blog/wp-content/uploads/2015/03/Ruby_on_Rails.svg_.png" />
              </Grid.Column>
              <Grid.Column>
                <Card color='teal' header='Heroku' image="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461122387heroku-logo.jpg" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Divider horizontal>Projects</Divider>
          <Segment  padded='very'>
            <Item.Group divided>
              <Item>
                <Item.Image src={dauble} />

                <Item.Content>
                  <Item.Header link href="http://www.dauble.com" target="_blank" as='a'>DAUBLE</Item.Header>
                  <Item.Meta>
                    <span className='cinema'>A full fledged social network for the Artworld.</span>
                  </Item.Meta>
                  <Item.Description></Item.Description>
                  <Item.Extra>
                    <Label>Angular JS</Label>
                    <Label>Grunt</Label>
                    <Label>Bower</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={daubleBusiness} />
                <Item.Content>
                  <Item.Header link href="http://business.dauble.com" target="_blank" as='a'>DAUBLE BUSINESS</Item.Header>
                  <Item.Meta>
                    <span className='cinema'>For artists, galleries and museums to expertly manage their inventory, events etc</span>
                  </Item.Meta>
                  {/* <Item.Description>sdf</Item.Description> */}
                  <Item.Extra>
                    <Label>Angular JS</Label>
                    <Label>Grunt</Label>
                    <Label>Bower</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={time_machine} />
                <Item.Content>
                  <Item.Header link href="https://bhuvanmalik007.github.io/time-machine/" target="_blank" as='a'>TIME-MACHINE</Item.Header>
                  <Item.Meta>
                    <span className='cinema'>Transpile JS ES6 to ES5</span>
                  </Item.Meta>
                  <Item.Extra>
                    <Label>React</Label>
                    <Label>Babel</Label>
                    <Label>Ace-Editor</Label>
                    <Label>semantic-ui-react</Label>
                    <Label>React-Router</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image src={collabpad} />
                <Item.Content>
                  <Item.Header link href="http://collabpad007.herokuapp.com/" target="_blank" as='a'>COLLABPAD</Item.Header>
                  <Item.Meta>
                    <span className='cinema'>Real-time collaborative text/code sharing notepad</span>
                  </Item.Meta>
                  <Item.Extra>
                    <Label>Node JS</Label>
                    <Label>Socket.io</Label>
                    <Label>Vue JS</Label>
                    <Label>Bootstrap</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
            <Segment textAlign='center'>
              and many more!
            </Segment>
          </Segment>
        </div>
          <div>
            <Message className="Footer" color='black'>Made with ⚛️  ➕   ♥️ </Message>
          </div>
        </div>
    );
  }
}

export default App;
