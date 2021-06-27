// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import namesJSON from '../../names.json';

export default function names(req, res) {
  res.status(200).json(namesJSON);
}
