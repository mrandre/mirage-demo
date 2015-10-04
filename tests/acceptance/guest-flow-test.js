import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mirage-demo/tests/helpers/start-app';

module('Acceptance | guest flow', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Visiting guests/list shows a list of guests', assert => {
  assert.expect(3);
  server.createList('guest', 10);
  visit('/guests/list');

  andThen(() => {
    assert.equal(currentURL(), '/guests/list');
    assert.equal(currentRouteName(), 'guests.list');
    assert.equal(find('.guest').length, 10);
  });
});

test('Visiting guests/new displays a new guest form', assert => {
  assert.expect(6);
  visit('/guests/new');
  
  andThen(() => {
    assert.equal(currentURL(), '/guests/new');
    assert.equal(currentRouteName(), 'guests.new');
    assert.ok(find('.first-name').length);
    assert.ok(find('.last-name').length);
    assert.ok(find('.location').length);
    assert.ok(find('.message').length);
  });
});

test('Guest form saves new guest.', assert => {
  assert.expect(3);
  server.createList('guest', 10);
  visit('/guests/new');
  fillIn('.first-name', 'Roger');
  fillIn('.last-name', 'Sterling');
  fillIn('.location', 'Manhattan');
  fillIn('.message', 'Loved the bit about gibsons. Best drink ever!');
  click('.save');

  andThen(() => {
    assert.equal(currentURL(), '/guests/list');
    assert.equal(currentRouteName(), 'guests.list');
    assert.equal(find('.guest').length, 11);
  });
});

test('First and last name are required', assert => {
  assert.expect(3);
  visit('/guests/new');
  click('.save');

  andThen(() => {
    assert.equal(currentURL(), 'guests/new');
    assert.equal(currentRouteName(), 'guests.new');
    assert.equal(find('.error').length, 2);
  });
});
