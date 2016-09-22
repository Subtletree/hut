import DS from 'ember-data';
import Ember from 'ember';
//import moment from "npm:moment";

export default DS.Model.extend({
  bookingType: DS.attr('string', {defaultValue: 'nohut'}),
  hut: DS.belongsTo('hut', {async: true}),
  intention: DS.belongsTo('intention'),
  comment: DS.attr('string'),
  date: DS.attr('momentdate'),
  isoDate: Ember.computed('date', function() {
    return Ember.isPresent(this.get('date')) ? this.get('date').format('YYYY/MM/DD') : '';
  })

});
