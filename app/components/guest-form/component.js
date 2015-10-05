import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['guest-form'],
  guest: null,
  actions: {
    submit() {
      this.attrs.submit();
    }
  }
});
