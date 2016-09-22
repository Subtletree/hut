import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sign-up', 'Integration | Component | sign up', {
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

  this.render(hbs`{{sign-up authenticate=(action externalAction)}}`);

  this.$('label:contains("Email")')   .find('input').val('email@example.com').change();
  this.$('label:contains("Password")').find('input').val('passw0rd').change();
  this.$('label:contains("Password confirmation")').find('input').val('passw0rd').change();
  this.$('button').click();

});
