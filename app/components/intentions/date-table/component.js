import Ember from 'ember';
import moment from "npm:moment";

export default Ember.Component.extend({
  tagName: 'table',
  dates: Ember.computed('intention.start_date', 'intention.end_date' , function() {
    if (Ember.isBlank(this.get('intention.start_date'))) {
      return [];
    }

    var current = moment(this.get('intention.start_date'), 'DD/MM/YYYY'),
    end = moment(this.get('intention.end_date'), 'DD/MM/YYYY'),
    dateHolder = [];

    while(current <= end) {
      console.log(current.format('DD/MM/YYYY'));
      dateHolder.push(current.format('DD/MM/YYYY'));
      current.add(1,'d');
    }

    return dateHolder;
  })
});
