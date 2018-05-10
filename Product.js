class Product {
	constructor (data) {
		this.name = data.name;
		this.price = data.price;
		this.image = data.image;
		console.log(this.name)
	}

	build () 
	{
		var list = $('<li>').addClass('list-group-item');
		var figure = $('<figure>');

		$('<img>', {
			src: this.image,
			alt: 'product',
			width: '100',
			height: '100',
		}).appendTo(figure);

		$('<figcaption>', {
			text: this.name,
			class: 'list-group-item-heading',
		}).appendTo(figure);

		$('<bold>', {
			text: 'price: ' + this.price + ' $',
			class: 'list-group-item-text',
		}).appendTo(figure);

		figure.appendTo(list);

		$('<button>', {
			class:'btn btn-default',
			id: 'add',
			text: 'Add',
			click: this.showCounter, 
		}).appendTo(list);
	return list;

	}
	showCounter (e)
	{
		if((e.target.nextSibling)){
			(e.target.nextSibling).romove();
		}
		
		var parentTarget = e.target.parentNode;
		
		var target = e.target;
		target.remove();
			 
		
		var counter = $('<div>', {
			id: 'counter',
		})
		
		var mnsBtn = $('<button>', {
			text:'-',
			class: 'btn btn-default',
			id: 'minus',
			click: function (e) 
			{
				shoppingCart.remove(this.name, this.price, e)
			}.bind(this),
		}).appendTo(counter);
		
		var output = $('<output>', {
			class: 'output',
			text: 0,
		}).appendTo(counter);
		
		var plsBtn = $('<button>', {
			text:'+',
			class: 'btn btn-default',
			id: 'plus',
			click: function (e) 
			{
				console.log(this.name, e);
				shoppingCart.add(this.name, this.price, e)
			}.bind(this),
		}).appendTo(counter);
		
		var panel = ('li');
		if(counter){
			counter.appendTo(parentTarget)
		};
	};
}


				