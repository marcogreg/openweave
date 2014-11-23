/*global Ember*/
Myemberapp.User = DS.Model.extend({
    name: DS.attr('string'),
    surname: DS.attr('string'),
    email: DS.attr('string'),
    avatar: DS.attr('string'),
    description: DS.attr('string'),
    projects: DS.attr('number'),
    win: DS.attr('number'),
    zipcode: DS.attr('number')
});

// probably should be mixed-in...
Myemberapp.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Myemberapp.User.FIXTURES = [
  
  {
    id: 0,
    name: 'Brynn',
    surname: 'Evans',
    email: 'bevans@gmail.com',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    projects: '12',
    win: '0',
    description: 'Design Lead. Love adventures, green tea, and the color pink.',
    zipcode: '123456'
    
  }, 
  {
    id: 1,
    name: 'Adham',
    surname: 'Dannaway',
    email: 'dannaway@yahoo.it',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    projects: '12',
    win: '0',
    description: 'Designer, Jedi Master & Trance Music Lover.',
    zipcode: '123456'
    
  }, 
  {
    id: 2,
    name: 'Anna',
    surname: 'Pickard',
    email: 'annapickard@gmail.com',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/annapickard/128.jpg',
    projects: '2',
    win: '0',
    description: 'I like most everything. I like words. Generally sweary. Of the parent persuasion.',
    zipcode: '123456'
    
  }, 
  {
    id: 3,
    name: 'Jon',
    surname: 'Q',
    email: 'jonq@icloud.com',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/itsjonq/128.jpg',
    projects: '18',
    win: '1',
    description: 'Enjoying life more than ever. BE HAPPY! :)',
    zipcode: '123456'
    
  }, 
  {
    id: 4,
    name: 'Sara',
    surname: 'Vieira',
    email: 'sarav@gmail.com',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nikkitaftw/128.jpg',
    projects: '34',
    win: '2',
    description: 'web designer | pianist | for web design: http://www.chillweeb.com ',
    zipcode: '123456'
    
  }
  
];
