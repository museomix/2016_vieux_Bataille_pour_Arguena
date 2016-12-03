import { Template } from 'meteor/templating';
import { TemplateController } from 'meteor/space:template-controller';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import videojs from 'video.js';

TemplateController('main', {
  private: {
    stateKeys: [
      "videoPlaying",
      "videoUrl",
      "videoText",
      "planUrl",
      "textTitle",
      "textText",
    ]
  },

  onCreated() {
    const self = this;
    // this.autorun(() => {
    //   const lastStates = States.find({} ,{
    //     sort: {
    //       number: -1
    //     },
    //     limit: 2
    //   });
    //   debugger;
    //   if (newSate)
    //   const newState = getGameState({
    //     lastState: lastStates[0],
    //     previousState: lastStates[1],
    //   });

    //   for(let key of self.stateKeys) {
    //     console.log(key, newState[key]);
    //     if (newState[key]) {
    //       self.state[key] = newState[key];
    //     }
    //   } 
    // });
  },

  state: {
    stateId: "",
    stateKey: "home",
    comesFromFuture: false,
    videoPlaying: false,
    videoUrl: "videos/titus.gif",
    videoText: "Bats-toi pour Aregenua",
    textTitle: "IIè siècle - Croissance",
    textText: "Aregenua est en plein développement: quel bâtiment faites-vous construire ?",
    planUrl: "plans/home_calque.png",
  },
  helpers:{
    $and(a, b) {
      return a && b;
    },
    $not(a) {
      return !a;
    },
    $eq(a,b) {
      return a === b;
    },
    count() {
      const self = this;
      const count = States.find({}).count();

      const lastStates = States.find({} ,{
        sort: {
          number: -1
        },
        limit: 2
      }).fetch();

      if (!_.isEmpty(lastStates)) {
        console.log(lastStates);
        const {newState, newStateKey} = getGameState({
          lastState: lastStates[0],
          previousState: lastStates[1], // Not used
        });

        // On change d'etat
        if (newState && newStateKey !== self.state.stateKey) {
          self.state.stateId = lastStates[0]._id;
          self.state.comesFromFuture = newStateKey == "home" || self.state.stateKey.indexOf(newStateKey) === 0;

          self.state.stateKey = newStateKey;
          console.log('keys', newState);
          for(let key of self.stateKeys) {
            console.log(key, newState[key]);
            if (newState[key]) {
              self.state[key] = newState[key];
            }
          }

          if (!self.state.comesFromFuture) {
            self.state.videoPlaying = true;
          }
        }
      }

      return count;
    },
    showText() {
      return () => (this.state.videoPlaying = false);
    },
  },

});
// width="1920" height="1080"
TemplateController('videoPlayer', {
  props: new SimpleSchema({
    videoUrl: { type: String },
    atEndOfVideo: { type: Function },
    stateId: { type: String },
  }),

  onRendered() {
    console.log('playing video', this.props.videoUrl);
    const player = videojs(`state-video-${this.props.stateId}`, {
      controls: false,
      autoplay: true,
      preload: "auto",
    });
    player.on('ended', this.props.atEndOfVideo);
  },
});

TemplateController('controls', {
  state: {
    coups: [],
    objets: [
      'curie',
      'temple',
      'curie-plus',
      'atelier',
      'thermes',
      'taverne',
      'boucherie'
    ],
  },
  events: {
    'click .js-reset'(e) {
      Meteor.call('state', []);
    },
    'click .js-remove'(e) {
     this.state.coups = _.difference(this.state.coups, [_.last(this.state.coups)]);
      Meteor.call('state', this.state.coups)
    },
    'click .js-add-object'(e) {
      const objet = this.$(e.target).text();
      console.log(objet);
      this.state.coups = _.union(this.state.coups, [objet])
      Meteor.call('state', this.state.coups);
    },
  },
  helpers: {
    coupsRestants() {
      return _.difference(this.state.objets, this.state.coups);
    },
  },
});



