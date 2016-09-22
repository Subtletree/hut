import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it passes credentials to external action', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // test double for the external action
  this.set('externalAction', (actual) => {
    let expected = {identification: "email@example.com", password: "passw0rd"};
    assert.deepEqual(actual, expected);
  });

  this.render(hbs`{{login-form authenticate=(action externalAction)}}`);

  this.$('#email').val('email@example.com').change();
  this.$('#password').val('passw0rd').change();
  this.$('button').click();

});
