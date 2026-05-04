import { DurationPipe } from './duration-pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('formats hours and minutes correctly', () => {
    const pipe = new DurationPipe();
    const duration = pipe.transform(90);

    expect(duration).toBe('1h 30min');
  });

  it('formats hours correctly', () => {
    const pipe = new DurationPipe();
    const duration = pipe.transform(60);

    expect(duration).toBe('1h');
  });

  it('formats minutes correctly', () => {
    const pipe = new DurationPipe();
    const duration = pipe.transform(45);

    expect(duration).toBe('45min');
  });
});
