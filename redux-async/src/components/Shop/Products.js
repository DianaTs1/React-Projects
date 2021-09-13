import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: "m1",
    price: 30,
    title: "New Book",
    description: 'This is a first product - amazing!'
  },
  {
    id: "m2",
    price: 20,
    title: "Old Book",
    description: 'This is a second product - amazing!'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(item => (
           <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}/>
        ))};
      
      </ul>
    </section>
  );
};

export default Products;
