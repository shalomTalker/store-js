class CartGenerator  {

	constructor () 
	{
		this.cart = {};
	}
		
	add (productName, productPrice, e) 
	{
		var unitCount = e.target.previousSibling;
		var num = Number(unitCount.value);
		unitCount.value = (num += 1);
		console.log(productName)

		if (!this.cart[productName]) 
		{
			this.cart[productName] = {
				price: productPrice, count: 1
			}
		} else {
			this.cart[productName].count++
		}
		$('#cart').text(this.getPrice());
	}

	remove (productName, productPrice, e) 
	{
		var unitCount = e.target.nextSibling;
		var num = Number(unitCount.value);
		if(num > 0) {
			unitCount.value = (num -= 1);
			delete this.cart[productName].productPrice;
			this.cart[productName].count--
		}
		$('#cart').text(this.getPrice());
	} 

	getAll () 
	{
		return this.cart;
	} 

	getPrice () 
	{
		return Object.keys(this.cart).reduce(
		(price, productName) => price + this.cart[productName].price * this.cart[productName].count				
		,0)
	} 

	getCount () 
	{
		return Object.keys(this.cart).reduce(
		(count, productName) => count + this.cart[productName].count 
		,0)
	}
	
}