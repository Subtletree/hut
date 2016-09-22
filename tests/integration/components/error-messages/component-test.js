import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('error-messages', 'Integration | Component | error messages', {
  integration: true
});

test('it doesn\'t display when no errors', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{error-messages}}`);

  assert.equal(this.$().text().trim(), '');

});

test('it displays correct error messages', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('resource', {errors: {content: [{attribute: 'firstName', message: 'can\'t be blank'}]}});

  this.render(hbs`{{error-messages resource=resource}}`);

  assert.equal(this.$().text().trim(), 'First name can\'t be blank');

});

test('it displays multiple messages', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('resource', {errors: {content: [{attribute: 'email', message: 'can\'t be blank'},{attribute: 'firstName', message: 'can\'t be blank'}]}});

  this.render(hbs`{{error-messages resource=resource}}`);

  assert.equal(this.$('li').length, 2);

});
