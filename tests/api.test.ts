import { describe, test, expect } from "bun:test";

import mockFetch from './mockFetch';

describe('fetch API', () => {
  test('should return name NYR for abbrevations', async () => {
    const resp = await mockFetch('https://api.nhle.com/stats/rest/en/team/3').then(res => res.json());
    expect(resp[0].abbreviation).toEqual('NYR');
    //expect(mockFetch).toHaveBeenCalledTimes(1);
  });
   test('should return correct "first year active" for NYR', async () => {
    const resp = await mockFetch('https://api.nhle.com/stats/rest/en/team/3').then(res => res.json());
    expect(resp[0].firstYearOfPlay).toEqual('1926');
  });
   test('should return the right division and conference for NYR', async () => {
    const resp = await mockFetch('https://api.nhle.com/stats/rest/en/team/3').then(res => res.json());
    expect(resp[0].division.name).toEqual('Metropolitan');
    expect(resp[0].conference.name).toEqual('Eastern');
  });
});