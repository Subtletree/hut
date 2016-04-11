
import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

let component = Component.extend({
  classNameBindings: ['x_class'],
  times: 0,

  timesArray: computed('times', function() {
    const times = get(this, 'times');
    let timesArray = Ember.A();

    for (let i = 0; i < times; i++) {
      timesArray.push(i);
    }

    return timesArray;
  })
});

component.reopenClass({
  positionalParams: ['times']
});

export default component;
