import { describe, test, expect, mock, beforeEach } from "bun:test";

import { imagePathFromLocationName } from '../src/lib/utils';

const pathFromLocation = mock((locationName, teamNr?) => imagePathFromLocationName(locationName, teamNr || undefined));

beforeEach(
  () => { pathFromLocation.mockClear(); }
);

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