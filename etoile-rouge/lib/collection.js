States = new Mongo.Collection('states');


States.erasNumber = [1, 2, 3, 4];
States.erasBuildings = [
  'curie',
  'temple',
  'curie-plus',
  'atelier',
  'thermes',
  'taverne',
  'boucherie',
];

Meteor.startup(() => {
  if (Meteor.isServer) {
    if (!States.findOne()) {
      // States.insert({
      //   eras: [], 
      //   number: 0 // ++ at each
      // });
      // States.insert({
      //   eras: [], 
      //   number: 1 // ++ at each
      // });
      // States.insert({
      //   eras: [], 
      //   number: 2 // ++ at each
      // });
      // States.insert({
      //   eras: [], 
      //   number: 3 // ++ at each
      // });
    }
  }
});

Meteor.methods({
  state: function (buildings) {
    const lastState = States.find({} ,{
      sort: {
        number: -1
      },
      limit: 1
    }).fetch()[0];

    console.log(lastState);

    const lastNumber = lastState.number || 0;
    console.log(lastNumber);
    States.insert({
      eras: _.map(buildings, (building, idx) => {
        return {
          number: idx+"",
          building,
        };
      }),
      number: lastNumber + 1,
    });
  }
});


