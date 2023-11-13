export function imagePathFromLocationName(
  locationName: string,
  teamNr: string | undefined
): string {
  let pathName = locationName
    .replaceAll(" ", "")
    .replaceAll(".", "")
    .replaceAll("é", "e")
    .toLowerCase();

  //if (pathName === "newyork") {
  if (teamNr === "2") {
    pathName += "islanders";
  }
  if (teamNr === "3") {
    pathName += "rangers";
  }
  //}
  return pathName;
}