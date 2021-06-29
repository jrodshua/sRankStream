import Stripe from 'stripe';

export default function Product({ product }) {
  return (
    <div>
      {product.data.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.images[0]} alt={product.name} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps({ params: { url } }) {
  const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY);
  const product = await stripe.products.list();

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY);
  const products = await stripe.products.list();

  return {
    paths: products.data.map((product) => ({
      params: { url: String(product.metadata.url) },
    })),
    fallback: false,
  };
}
