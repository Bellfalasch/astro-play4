import { describe, test, expect } from "bun:test";

import { imagePathFromLocationName } from '../src/lib/helpers';

describe('getPathNameFromLocationName', () => {
  test('should return the correct IMG path for New York Rangers', () => {
    const locationName = 'New York';
    const pathName = imagePathFromLocationName(locationName, "3");
    expect(pathName).toEqual('newyorkrangers');
  });
  test('should return the correct IMG path for Los Angeles', () => {
    const locationName = 'Los Angeles';
    const pathName = imagePathFromLocationName(locationName, undefined);
    expect(pathName).toEqual('losangeles');
  });
  test('should return the correct IMG path for New York Islanders', () => {
    const locationName = 'New York';
    const pathName = imagePathFromLocationName(locationName, "2");
    expect(pathName).toEqual('newyorkislanders');
  });
  test('should return the correct IMG path for New Jersey', () => {
    const locationName = 'New Jersey';
    const pathName = imagePathFromLocationName(locationName, undefined);
    expect(pathName).toEqual('newjersey');
    //expect(imagePathFromLocationName).toHaveBeenCalledTimes(1);
  });
  test('should return the correct IMG path for San José', () => {
    const locationName = 'San José';
    const pathName = imagePathFromLocationName(locationName, undefined);
    expect(pathName).toEqual('sanjose');
  });
  test('should return the correct IMG path for Washington', () => {
    const locationName = 'Washington';
    const pathName = imagePathFromLocationName(locationName, undefined);
    expect(pathName).toEqual('washington');
  });
});
