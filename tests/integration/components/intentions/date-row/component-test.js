import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('intentions/date-row', 'Integration | Component | intentions/date row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{intentions/date-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#intentions/date-row}}
      template block text
    {{/intentions/date-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
