import Ember from 'ember';

export default Ember.Component.extend({
  guest: null,
  actions: {
    submit() {
      this.attrs.submit();
    }
  }
});
