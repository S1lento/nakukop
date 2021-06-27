// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productsJSON from '../../products.json';

export default function products(req, res) {
  res.status(200).json(productsJSON);
}
