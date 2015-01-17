var UserInputView = Backbone.View.extend({
	el: $('#user-input'),
	template: _.template($('#user-input-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #bac-submit-btn': 'calculate'
	},
	render: function() {
		this.$el.html(this.template());
	},
	calculate: function(e) {
		e.preventDefault;
		$('#booze-queue').hide();
		abvArray    = [];
		ouncesArray = [];
		boozeItems.shift();
		boozeItems.forEach(function(model) {
		 	drink = {abv: model.get('abv'),
		 		ounces: model.get('ounces')};
			abvArray.push(drink.abv);
			ouncesArray.push(drink.ounces);
		});
	 	var lbs						 = parseInt(document.getElementById('lbs').value);
		var	hours 				 = parseInt(document.getElementById('hours').value);		
		var	sex   				 = document.getElementById('male').value;
	 	var rate           = sex === 'male' ? 0.73 : 0.66;
    var fluidOunces 	 = ouncesArray.reduce(function(prev, cur) {
    	return prev + cur;
  	});
  	var manyDrinks = abvArray.length;
  	console.log(manyDrinks);
		var abvSum 				 = abvArray.reduce(function(prev, cur) {
    	return prev + cur;
  	});
  	var pureAbv = abvSum / manyDrinks;
	 	var ethanolOunces  = fluidOunces * (pureAbv * 0.01);
	 	var metricOunces   = (ethanolOunces * 5.14).toFixed(2);
		var metabolism 	 	 = lbs * rate;
		var subLevel 		 	 = (metricOunces /  metabolism).toFixed(2);
		var soberingRate   = 0.015 * hours;
		var bac 			     = (subLevel - soberingRate).toFixed(2);
		var round          = new Round({lbs: lbs, hours: hours, drinks: boozeQueue, abv: abvSum, sex: sex, rate: rate, bac: bac});
		var roundView      = new RoundView({model: round});
			if (bac < 0.02) {
				var stageZero  = new StageView({});
			} else if (bac < 0.04) {
				var stageOne   = new StageView({});
			} else if (bac < 0.06) {
				var stageTwo	 = new StageView({});
			} else if (bac < 0.07) {
				var stageThree = new StageView({});
			} else if (bac < 0.10) {
				var stageFour  = new StageView({});
			} else if (bac < 0.13) {
				var stageFive	 = new StageView({});
			} else if (bac < 0.16) {
				var stageSix	 = new StageView({});
			} else if (bac < 0.20) {
				var stageSeven = new StageView({});
			} else if (bac < 0.25) {
				var stageEight = new StageView({});
			} else if (bac < 0.30) {
				var stageNine	 = new StageView({});
			} else if (bac >= 0.30) {
				var stageTen 	 = new StageView({});
			} else {
				alert('You sure you entered all your info?');
			}
	}
});

console.log('UserInputView');