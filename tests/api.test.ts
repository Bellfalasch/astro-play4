import { describe, test, expect, mock, spyOn, beforeEach } from "bun:test";

import { imagePathFromLocationName } from '../src/lib/utils';
import mockFetch from './mockFetch';

const pathFromLocation = mock((locationName, teamNr?) => imagePathFromLocationName(locationName, teamNr || undefined));
//const spy = spyOn(imagePathFromLocationName);

beforeEach(
  () => { pathFromLocation.mockClear(); }
)

describe('getPathNameFromLocationName', () => {
  test('should return the correct IMG path for New York Rangers', () => {
    const locationName = 'New York';
    const pathName = pathFromLocation(locationName, "3");
    expect(pathName).toEqual('newyorkrangers');
    expect(pathFromLocation).toHaveBeenCalledTimes(1);
  });
  test('should return the correct IMG path for Los Angeles', () => {
    const locationName = 'Los Angeles';
    const pathName = pathFromLocation(locationName);
    expect(pathName).toEqual('losangeles');
    expect(pathFromLocation).toHaveBeenCalledTimes(1);
  });
  test('should return the correct IMG path for New York Islanders', () => {
    const locationName = 'New York';
    const pathName = pathFromLocation(locationName, "2");
    expect(pathName).toEqual('newyorkislanders');
    expect(pathFromLocation).toHaveBeenCalledTimes(1);
  });
  test('should return the correct IMG path for New Jersey', () => {
    const locationName = 'New Jersey';
    const pathName = pathFromLocation(locationName);
    expect(pathName).toEqual('newjersey');
    expect(pathFromLocation).toHaveBeenCalledTimes(1);
  });
  test('should return the correct IMG path for San José', () => {
    const locationName = 'San José';
    const pathName = pathFromLocation(locationName);
    expect(pathName).toEqual('sanjose');
    expect(pathFromLocation).toHaveBeenCalledTimes(1);
  });
  test('should return the correct IMG path for Washington', () => {
    const locationName = 'Washington';
    const pathName = pathFromLocation(locationName);
    expect(pathName).toEqual('washington');
    expect(pathFromLocation).toHaveBeenCalledTimes(1);
  });
  test('should return the correct IMG path for St. Louis', () => {
    const locationName = 'St. Louis';
    const pathName = pathFromLocation(locationName);
    expect(pathName).toEqual('stlouis');
    expect(pathFromLocation).toHaveBeenCalledTimes(1);
  });
});

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