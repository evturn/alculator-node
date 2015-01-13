var BeerItemView = Backbone.View.extend({
	className: 'col-xs-4 align drink-space beer-item',
	template: _.template($('#beer-item-view-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click input': 'addBooze'
	},
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
	addBooze: function(e) {
		e.preventDefault();
		var boozeOnDelivery = this.model;
		boozeOnDelivery.set({selected: true});
		boozeItems.add(boozeOnDelivery);
	}
});

console.log('BeerItemView');
