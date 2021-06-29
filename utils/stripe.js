import { loadStripe } from '@stripe/stripe-js';

let stripe;
const getStripe = () => {
  if (!stripe) {
    stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY);
  }

  return stripe;
};

export default getStripe;
