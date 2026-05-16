import app from './src/app.js';
import {PORT} from './src/config/env.js';
import connectToDb from './src/database/mongodb.js';

app.listen(PORT, async() => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectToDb();
});