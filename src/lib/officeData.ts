export interface Office {
  id: string;
  name: string;
  address: string;
}

export interface OfficeWithDetails extends Office {
  nextAvailable: string;
  availableSlots: number;
  distance: string;
}

export const ALL_OFFICES: Office[] = [
  // Mitte
  { id: 'mitte-1', name: 'Bürgeramt Mitte - Karl-Marx-Allee', address: 'Karl-Marx-Allee 31, 10178 Berlin' },
  { id: 'mitte-2', name: 'Bürgeramt Mitte - Mathilde-Jacob-Platz', address: 'Mathilde-Jacob-Platz 1, 10551 Berlin' },
  { id: 'mitte-3', name: 'Bürgeramt Mitte - Müllerstraße', address: 'Müllerstraße 146, 13353 Berlin' },
  { id: 'mitte-4', name: 'Bürgeramt Mitte - Rathaus Tiergarten', address: 'Mathilde-Jacob-Platz 1, 10551 Berlin' },
  
  // Friedrichshain-Kreuzberg
  { id: 'fk-1', name: 'Bürgeramt Friedrichshain - Frankfurter Allee', address: 'Frankfurter Allee 35/37, 10247 Berlin' },
  { id: 'fk-2', name: 'Bürgeramt Kreuzberg - Yorckstraße', address: 'Yorckstraße 4-11, 10965 Berlin' },
  { id: 'fk-3', name: 'Bürgeramt Kreuzberg - Urbanstraße', address: 'Urbanstraße 24, 10967 Berlin' },
  { id: 'fk-4', name: 'Bürgeramt Friedrichshain - Petersburger Platz', address: 'Petersburger Platz 1, 10249 Berlin' },
  { id: 'fk-5', name: 'Bürgeramt Kreuzberg - Oranienstraße', address: 'Oranienstraße 25, 10999 Berlin' },
  
  // Pankow
  { id: 'pankow-1', name: 'Bürgeramt Pankow', address: 'Fröbelstraße 17, 10405 Berlin' },
  { id: 'pankow-2', name: 'Bürgeramt Weißensee', address: 'Berliner Allee 252-260, 13088 Berlin' },
  { id: 'pankow-3', name: 'Bürgeramt Prenzlauer Berg', address: 'Fröbelstraße 17, 10405 Berlin' },
  { id: 'pankow-4', name: 'Bürgeramt Karow', address: 'Busonistraße 136, 13125 Berlin' },
  { id: 'pankow-5', name: 'Bürgeramt Buch', address: 'Wiltbergstraße 19-23, 13125 Berlin' },
  { id: 'pankow-6', name: 'Bürgeramt Pankow - Neue Schönholzer Straße', address: 'Neue Schönholzer Straße 15, 13187 Berlin' },
  
  // Charlottenburg-Wilmersdorf
  { id: 'cw-1', name: 'Bürgeramt Charlottenburg - Otto-Suhr-Allee', address: 'Otto-Suhr-Allee 100, 10585 Berlin' },
  { id: 'cw-2', name: 'Bürgeramt Wilmersdorf', address: 'Hohenzollerndamm 174-177, 10713 Berlin' },
  { id: 'cw-3', name: 'Bürgeramt Charlottenburg - Kaiserdamm', address: 'Kaiserdamm 1, 14057 Berlin' },
  { id: 'cw-4', name: 'Bürgeramt Wilmersdorf - Fehrbelliner Platz', address: 'Hohenzollerndamm 177, 10713 Berlin' },
  { id: 'cw-5', name: 'Bürgeramt Charlottenburg Nord', address: 'Halemweg 18, 13627 Berlin' },
  { id: 'cw-6', name: 'Bürgeramt Wilmersdorf - Bundesallee', address: 'Bundesallee 31, 10717 Berlin' },
  { id: 'cw-7', name: 'Bürgeramt Charlottenburg - Rathaus', address: 'Otto-Suhr-Allee 100, 10585 Berlin' },
  
  // Spandau
  { id: 'spandau-1', name: 'Bürgeramt Spandau - Carl-Schurz-Straße', address: 'Carl-Schurz-Straße 2/6, 13597 Berlin' },
  { id: 'spandau-2', name: 'Bürgeramt Spandau - Moritzstraße', address: 'Moritzstraße 12, 13597 Berlin' },
  { id: 'spandau-3', name: 'Bürgeramt Hakenfelde', address: 'Streitstraße 5, 13587 Berlin' },
  { id: 'spandau-4', name: 'Bürgeramt Kladow', address: 'Kladower Damm 295, 14089 Berlin' },
  
  // Steglitz-Zehlendorf
  { id: 'sz-1', name: 'Bürgeramt Steglitz - Schloßstraße', address: 'Schloßstraße 37, 12163 Berlin' },
  { id: 'sz-2', name: 'Bürgeramt Zehlendorf', address: 'Kirchstraße 1/3, 14163 Berlin' },
  { id: 'sz-3', name: 'Bürgeramt Lankwitz', address: 'Hanna-Renate-Laurien-Platz 1, 12247 Berlin' },
  { id: 'sz-4', name: 'Bürgeramt Lichterfelde', address: 'Unter den Eichen 82, 12203 Berlin' },
  
  // Tempelhof-Schöneberg
  { id: 'ts-1', name: 'Bürgeramt Tempelhof', address: 'Tempelhofer Damm 165, 12099 Berlin' },
  { id: 'ts-2', name: 'Bürgeramt Schöneberg - John-F.-Kennedy-Platz', address: 'John-F.-Kennedy-Platz, 10825 Berlin' },
  { id: 'ts-3', name: 'Bürgeramt Schöneberg - Rathaus', address: 'Friesenstraße 3, 10965 Berlin' },
  { id: 'ts-4', name: 'Bürgeramt Mariendorf', address: 'Kaiserstraße 46, 12105 Berlin' },
  { id: 'ts-5', name: 'Bürgeramt Friedenau', address: 'Goßlerstraße 18, 12161 Berlin' },
  
  // Neukölln
  { id: 'nk-1', name: 'Bürgeramt Neukölln - Karl-Marx-Straße', address: 'Karl-Marx-Straße 83, 12040 Berlin' },
  { id: 'nk-2', name: 'Bürgeramt Buckow', address: 'Buckower Damm 188, 12349 Berlin' },
  { id: 'nk-3', name: 'Bürgeramt Neukölln - Britz', address: 'Gutschmidtstraße 19, 12359 Berlin' },
  { id: 'nk-4', name: 'Bürgeramt Neukölln - Rudow', address: 'Waßmannsdorfer Chaussee 49, 12355 Berlin' },
  { id: 'nk-5', name: 'Bürgeramt Neukölln - Gropiusstadt', address: 'Johannisthaler Chaussee 301, 12351 Berlin' },
  
  // Treptow-Köpenick
  { id: 'tk-1', name: 'Bürgeramt Treptow', address: 'Neue Krugallee 4, 12435 Berlin' },
  { id: 'tk-2', name: 'Bürgeramt Köpenick', address: 'Alt-Köpenick 21, 12555 Berlin' },
  { id: 'tk-3', name: 'Bürgeramt Adlershof', address: 'Nipkowstraße 2, 12489 Berlin' },
  { id: 'tk-4', name: 'Bürgeramt Baumschulenweg', address: 'Baumschulenstraße 79-81, 12437 Berlin' },
  { id: 'tk-5', name: 'Bürgeramt Friedrichshagen', address: 'Bölschestraße 87-91, 12587 Berlin' },
  
  // Marzahn-Hellersdorf
  { id: 'mh-1', name: 'Bürgeramt Marzahn', address: 'Marzahner Promenade 38-42, 12679 Berlin' },
  { id: 'mh-2', name: 'Bürgeramt Hellersdorf', address: 'Hellersdorfer Promenade 14, 12627 Berlin' },
  { id: 'mh-3', name: 'Bürgeramt Mahlsdorf', address: 'Hönower Straße 83, 12623 Berlin' },
  { id: 'mh-4', name: 'Bürgeramt Biesdorf', address: 'Alt-Biesdorf 55, 12683 Berlin' },
  
  // Lichtenberg
  { id: 'licht-1', name: 'Bürgeramt Lichtenberg - Möllendorffstraße', address: 'Möllendorffstraße 6, 10367 Berlin' },
  { id: 'licht-2', name: 'Bürgeramt Hohenschönhausen', address: 'Große-Leege-Straße 103, 13055 Berlin' },
  { id: 'licht-3', name: 'Bürgeramt Karlshorst', address: 'Treskowallee 112, 10318 Berlin' },
  { id: 'licht-4', name: 'Bürgeramt Rummelsburg', address: 'Hauptstraße 8/9, 10317 Berlin' },
  { id: 'licht-5', name: 'Bürgeramt Friedrichsfelde', address: 'Alfredstraße 12, 10365 Berlin' },
  { id: 'licht-6', name: 'Bürgeramt Fennpfuhl', address: 'Landsberger Allee 202, 10369 Berlin' },
  
  // Reinickendorf
  { id: 'rein-1', name: 'Bürgeramt Reinickendorf', address: 'Eichborndamm 215-239, 13437 Berlin' },
  { id: 'rein-2', name: 'Bürgeramt Tegel', address: 'Gorkistraße 13-17, 13507 Berlin' },
  { id: 'rein-3', name: 'Bürgeramt Waidmannslust', address: 'Halalistraße 2, 13469 Berlin' },
  { id: 'rein-4', name: 'Bürgeramt Frohnau', address: 'Zeltinger Straße 10, 13465 Berlin' }
];

export function getOfficeById(officeId: string | null): Office | null {
  if (!officeId) return null;
  return ALL_OFFICES.find(office => office.id === officeId) || null;
}
