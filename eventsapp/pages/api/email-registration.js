export default function handler(req, res) {
  const { email } = req.body;
  if (!email) {
    res.status(422).json({ message: 'Invalid email address.' });
    return;
  }
  // Store it in a database or send an email
  res.status(201).json({ message: 'Signed up!' });
}
