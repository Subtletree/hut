import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('date-range-picker', 'Integration | Component | date range picker', {
  integration: true
});

test('it creates 2 inputs', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{date-range-picker start='' end=''}}`);
  assert.equal(this.$('input').length, 2);

});
