import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: 1,
    title: "Macbook Air M3",
    price: 1299,
    description: "Powerful! Light!",
  },
  {
    id: 2,
    title: "Samsung Odessy G9 Monitor",
    price: 2499,
    description: "Immersive experience",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
