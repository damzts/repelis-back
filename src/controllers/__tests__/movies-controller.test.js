const Chance = require('chance');

const MoviesController = require('../movies-controller');
const MovieService = require('../../services/movie-service');

const chance = new Chance();


jest.mock("../../services/movie-service");


describe("When calling saveMovie controller method", () => {
    let movie, req, res;
    beforeEach(() => {
        movie = {
            title: chance.string(),
            description: chance.string(),
            genre: chance.string(),
            year: chance.integer(),
            length: chance.integer(),
            imageUrl: chance.url(),
            videoUrl: chance.url(),
        };

        req = {
            body: movie,
        };

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        MovieService.saveMovie = jest.fn().mockResolvedValue(movie);
    });

    it("should call saveMovie service method with the proper data", async () => {
        await MoviesController.saveMovie(req, res);

        expect(MovieService.saveMovie).toBeCalledWith(movie);
    });


    it("should call res.json with the saved movie data", async () => {
        await MoviesController.saveMovie(req, res);

        expect(res.json).toBeCalledWith(movie);
    });

    it("should call res.status with a 201 when the saveMovie Controller method is okay", async () => {
        await MoviesController.saveMovie(req, res);

        expect(res.status).toBeCalledWith(201);
    });

    it("should call res.status with 500 when saveMovie Controller method fails", async () => {
        const error = new Error();
        MovieService.saveMovie = jest.fn().mockRejectedValue(error);

        await MoviesController.saveMovie(req, res);

        expect(res.status).toBeCalledWith(500);
    });

});

describe("When calling getMovies controller method", () => {
    let movies, req, res;
    beforeEach(() => {
        req = {
            body: ""
        };

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        MovieService.getMovies = jest.fn().mockResolvedValue(movies);
    });

    it("should call getMovies service method ", async () => {
        await MoviesController.getMovies(req, res);
        expect(MovieService.getMovies).toBeCalled();
    });

});
