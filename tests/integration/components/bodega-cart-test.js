import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bodega-cart', 'Integration | Component | bodega-cart', {
  integration: true
});

test('disabling pay when the quantity is zero', function(assert) {
  this.set('order', {
    quantity: 1
  });

  this.render(hbs`{{bodega-cart order=order}}`);

  assert.equal(find('button').disabled, false, 'precondition - button is enabled');

  this.set('order', {
    quantity: 0
  });

  assert.equal(find('button').disabled, true, 'button is disabled');
})
