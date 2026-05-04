import { TestBed } from '@angular/core/testing';

import { FilmsService } from './films.service';

const FILMS_MOCK = [
  {
    id: 1,
    title: 'Parasite',
    year: 2019,
    genre: 'Thriller',
    rating: 8.5,
    duration: 132,
    description:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    posterUrl: 'https://media-amazon.com',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'The Prestige',
    year: 2006,
    genre: 'Sci-Fi',
    rating: 8.5,
    duration: 130,
    description:
      'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outsmart each other.',
    posterUrl: 'https://media-amazon.com',
    isFavorite: true,
  },
  {
    id: 3,
    title: 'The Departed',
    year: 2006,
    genre: 'Crime',
    rating: 8.5,
    duration: 151,
    description:
      'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    posterUrl: 'https://media-amazon.com',
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Whiplash',
    year: 2014,
    genre: 'Drama',
    rating: 8.5,
    duration: 106,
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    posterUrl: 'https://media-amazon.com',
    isFavorite: false,
  },
  {
    id: 5,
    title: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    genre: 'Animation',
    rating: 8.6,
    duration: 140,
    description:
      'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
    posterUrl: 'https://media-amazon.com',
    isFavorite: true,
  },
];

describe('Films', () => {
  let service: FilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsService);
    service.setFilms(FILMS_MOCK);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show all films', () => {
    expect(service.getFilms().length).toBe(5);
  });

  it('should filter films by exact title match', () => {
    expect(service.getFilms({ title: 'Spider-Man: Across the Spider-Verse' }).length).toBe(1);
  });

  it('should filter films by partial title match', () => {
    expect(service.getFilms({ title: 'Ar' }).length).toBe(2);
  });

  it('should filter films by no title match', () => {
    expect(service.getFilms({ title: 'Dangerous Liaisons' }).length).toBe(0);
  });

  it('should filter favorite films', () => {
    expect(service.getFavoriteFilms().length).toBe(2);
  });

  it('should find film by id', () => {
    const targetFilm = FILMS_MOCK.at(3);

    expect(service.getFilmById(4)).toEqual(targetFilm);
  });

  it('should return undefined when there is no film by id', () => {
    expect(service.getFilmById(999)).toBeUndefined();
  });

  it('should return favorite films', () => {
    expect(service.getFavoriteFilms().length).toBe(2);
    service.toggleFavoriteStatus(1);
    service.toggleFavoriteStatus(2);
    service.toggleFavoriteStatus(3);
    expect(service.getFavoriteFilms().length).toBe(3);
  });
});
