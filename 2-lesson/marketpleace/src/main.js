import express from 'express';
import { config } from 'dotenv';
config();

import { connectDB } from './config/db.js';
import router from './routes/index.route.js';
import { ApiError } from './utils/custom-error.js';
import { errorHandle } from './middlewares/error-handle.js';

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());

await connectDB();

app.use('/api', router);

app.all(/(.*)/, (_req, _res, next) => {
    next(new ApiError('URL not found', 404));
});

app.use(errorHandle);

app.listen(PORT, () => console.log('server running on port', PORT));
