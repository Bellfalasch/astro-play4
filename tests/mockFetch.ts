const mockedNhlApiTeamResponse = [
    {
      name: 'New York Rangers',
      division: {
        name: 'Metropolitan'
      },
      conference: {
        name: 'Eastern'
      },
      abbreviation: 'NYR',
      locationName: 'New York',
      firstYearOfPlay: '1926'
    }
  ];

export default async function mockFetch(url: string) {
  if(url.startsWith('https://api.nhle.com/stats/rest/en/team/') && url.endsWith('/3')) {
    return {
      ok: true,
      status: 200,
      json: async () => mockedNhlApiTeamResponse
    };
  }

  throw new Error(`Unhandled request: ${url}`);
}