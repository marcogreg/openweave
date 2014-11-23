/*global Ember*/
Myemberapp.Contest = DS.Model.extend({
    name: DS.attr('string'),
    status: DS.attr('string'),
    collection: DS.attr('string'),
    targett: DS.attr('string'),
    gr: DS.attr('string'),
    cloth: DS.attr('string'),
    fabric: DS.attr('string'),
    description: DS.attr('string'),
    projects: DS.attr('string'),
    win: DS.attr('string'),
    meters: DS.attr('string')
});

// probably should be mixed-in...
Myemberapp.Contest.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Myemberapp.Contest.FIXTURES = [
  
  {
    id: 0,
    name: 'Abito raso spring summer',
    status: 'default',
    description: 'Una fantasia floreale dai colori caldi che sappia rappresentare al meglio la stagione estiva. Lasciatevi ispirare dagli anni \'50 e dal loro particolare mood',
    projects: '32',
    collection:'Spring/Summer',
    targett: 'Woman',
    gr: '80 gr',
    cloth: 'Abito',
    fabric: 'Raso',
    win: '5.000',
    meters : '12.000'
  },
  {
    id: 1,
    name: 'F/W Capo spalla Misto poliestere',
    status: 'success',
    description: 'Una fantasia originale che sappia mixare al meglio l\'animalier ed il floreale. Una fantasia in cui entrambi gli elementi mantengano la loro singolarità, fondendosi però tra loro e donando impressione di totale uniformità',
    projects: '150',
    collection:'F/W ',
    targett: 'Woman',
    gr: '350 gr',
    cloth: 'Capo spalla',
    fabric: 'Misto poliestere',
    win: '2.000',
    meters : '3000'
  },
  {
    id: 2,
    name: 'Woman Foulard',
    status: 'danger',
    description: 'Una fantasia raffinata che richiami gli stemmi araldici rinascimentali. Una proposta che rispecchi uno stile di alta classe, perfetta per un target over 45',
    projects: '86',
    collection:'Spring/Summer',
    targett: 'Woman',
    gr: '14 momi',
    cloth: 'Foulard',
    fabric: 'Seta',
    win: '500',
    meters : '4000'
  },
  {
    id: 3,
    name: 'Man - Capo in vita',
    status: 'default',
    description: 'Una fantasia dandy, indicata ad un uomo elegante ed attento allo stile. Il design dovrà richiamare motivi classici quali il Prince of Walles e il Pied de Poule',
    projects: '86',
    collection:'Fall Winter',
    targett: 'Man',
    gr: '180 gr',
    cloth: 'capo in vita',
    fabric: 'Drill di cotone stone wash',
    win: '1.500',
    meters : '5000'
  },
  {
    id: 4,
    name: 'Woman - Abito, giacca - Fall Winter',
    status: 'success',
    description: ' per una serie di capi chiediamo una fantasia tenue ed elegante, improntata sui colori pastello. ',
    projects: '28',
    collection:'Fall Winter',
    targett: 'Woman',
    gr: '110 gr',
    cloth: 'abito, giacca',
    fabric: 'Raso',
    win: '1.500',
    meters : '3000'
  }
  
];
