import app from './app';

const port = process.env.PORT;

// Start server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`**** Server is listening on port ${port} ****`);
});
