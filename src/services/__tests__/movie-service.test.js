const Chance = require('chance');

const MovieService = require('../../services/movie-service');

const Movie = require('../../models/movie-model');

const chance = new Chance();

jest.mock('../../models/movie-model');

describe("When calling saveMovie service method", () => {
    let movie;
    beforeEach(() => {
        movie = {
            title: chance.name(),
            description: chance.string(),
            genre: chance.name(),
            year: chance.age(),
            length: chance.age(),
            imageUrl: chance.url(),
            videoUrl: chance.url()
        };

        MovieSaveSpy = jest
            .spyOn(new Movie(), "save")
            .mockImplementation(() => { Promise.resolve(movie) });

    });

    it("should create a new movie instance with the movie data", async () => {
        await MovieService.saveMovie(movie);

        expect(Movie).toBeCalledWith(movie);
    });

    it("should call the Movie model save instance method", async () => {
        await MovieService.saveMovie(movie);

        expect(MovieSaveSpy).toBeCalled();
    });

    it("should return the saved movie object from db", async () => {
        const newMovie = await MovieService.saveMovie(movie);
        expect(newMovie);
    });

});


