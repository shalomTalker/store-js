var shoppingCart = new CartGenerator();

fetch('products.json')
.then(response => response.json())
.then(products => buildProducts(products))

function buildProducts(products) {
	console.log(products);
	products.forEach(productObj => 
	{
		var product = new Product(productObj)
		return product.build(product).appendTo('ul');
	})
}





