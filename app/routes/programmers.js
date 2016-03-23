import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return ["Alan Turing", "Charles Babbage", "Steve Jobs", "Charles Berger"];
	}
});
