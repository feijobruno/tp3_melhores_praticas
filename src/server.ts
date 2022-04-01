import { app } from './infra/config/app';

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
});
