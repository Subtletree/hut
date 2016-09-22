import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('intentions/show/booking-row', 'Integration | Component | intentions/show/booking row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{intentions/show/booking-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#intentions/show/booking-row}}
      template block text
    {{/intentions/show/booking-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
