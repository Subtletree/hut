import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('intentions/date-table', 'Integration | Component | intentions/date table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{intentions/date-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#intentions/date-table}}
      template block text
    {{/intentions/date-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
