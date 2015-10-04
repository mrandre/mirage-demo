import Ember from 'ember';

export default Ember.Controller.extend({
  listController: Ember.inject.controller('guests.list'),
  actions: {
    submit() {
      this.get('model').save()
        .then( () => { this.transitionToRoute('guests.list'); });
    }
  }
});
