const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    let statsCode = res.statsCode === 200 ? 500 : res.statsCode;
    let message = err.message;

    // Check for Mongoose bad ObjectID
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        message = `Resource not found`;
        statsCode = 404;
    }

    res.status(statsCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
};

export { notFound, errorHandler };
