const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const db = require("./config/database.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize");
const setupAssociations = require('./models/associations');

setupAssociations();
const ResponseRoute = require("./routes/ResponseRoute.js");
const AuthRoute = require("./routes/AuthRoute.js");
const UserRoute = require("./routes/UserRoute.js");
const PegawaiRoute = require("./routes/PegawaiRoute.js");
const KepegawaianRoute = require("./routes/KepegawaianRoute.js");
const PangkatRoute = require("./routes/PangkatRoute.js");
const AlamatRoute = require("./routes/AlamatRoute.js");
const IdentitasRoute = require("./routes/IdentitasRoute.js");
const AnakRoute = require("./routes/AnakRoute.js");
const FisikRoute = require("./routes/FisikRoute.js");
const PendidikanRoute = require("./routes/PendidikanRoute.js");
const PasanganRoute = require("./routes/PasanganRoute.js");
const RekeningRoute = require("./routes/RekeningRoute.js");
const UkuranRoute = require("./routes/UkuranRoute.js");

dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://irvannasyakban.com'
];

// CORS Configuration
app.use(cors({
    origin: function (origin, callback) {
        console.log('CORS Check - Origin:', origin);

        // Allow requests with no origin (mobile apps, curl, postman, etc.)
        if (!origin) {
            console.log('CORS Allowed: No origin (direct access)');
            return callback(null, true);
        }

        if (allowedOrigins.includes(origin)) {
            console.log('CORS Allowed:', origin);
            callback(null, true);
        } else {
            console.log('CORS Rejected:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    optionsSuccessStatus: 200
}));

// Handle preflight OPTIONS requests - PENTING!
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

// Session Configuration
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
    }
}));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use(ResponseRoute);
app.use(AuthRoute);
app.use(UserRoute);
app.use(PegawaiRoute);
app.use(KepegawaianRoute);
app.use(PangkatRoute);
app.use(AlamatRoute);
app.use(IdentitasRoute);
app.use(AnakRoute);
app.use(FisikRoute);
app.use(PendidikanRoute);
app.use(PasanganRoute);
app.use(RekeningRoute);
app.use(UkuranRoute);

// Error handling untuk CORS
app.use((err, req, res, next) => {
    if (err.message === 'Not allowed by CORS') {
        res.status(403).json({
            error: 'CORS policy violation',
            message: 'Origin not allowed',
            origin: req.headers.origin
        });
    } else {
        console.error('Server error:', err);
        res.status(500).json({
            error: 'Internal server error',
            message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
        });
    }
});

app.listen(process.env.APP_PORT, () => console.log(`Server running on port ${process.env.APP_PORT}`));