import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building2 } from 'lucide-react';
import { OfficeCard } from './OfficeCard';
import { useLanguage } from '../lib/LanguageContext';

interface DistrictAccordionProps {
  selectedOffice: string | null;
  onSelectOffice: (officeId: string, officeData?: {
    nextAvailable: string;
    availableSlots: number;
    name: string;
    address: string;
  }) => void;
}

interface Office {
  id: string;
  name: string;
  address: string;
  nextAvailable: string;
  availableSlots: number;
  distance: string;
}

interface District {
  name: string;
  officeCount: number;
  offices: Office[];
}

export function DistrictAccordion({ selectedOffice, onSelectOffice }: DistrictAccordionProps) {
  const [expandedDistrict, setExpandedDistrict] = useState<string | null>(null);
  const { t } = useLanguage();

  const districts: District[] = [
    {
      name: 'Mitte',
      officeCount: 4,
      offices: [
        {
          id: 'mitte-1',
          name: 'Bürgeramt Mitte - Karl-Marx-Allee',
          address: 'Karl-Marx-Allee 31, 10178 Berlin',
          nextAvailable: `${t.timeLabels.today}, 14:30`,
          availableSlots: 3,
          distance: '2.3 km'
        },
        {
          id: 'mitte-2',
          name: 'Bürgeramt Mitte - Mathilde-Jacob-Platz',
          address: 'Mathilde-Jacob-Platz 1, 10551 Berlin',
          nextAvailable: t.officeCard.noAppointments,
          availableSlots: 0,
          distance: '3.8 km'
        },
        {
          id: 'mitte-3',
          name: 'Bürgeramt Mitte - Müllerstraße',
          address: 'Müllerstraße 146, 13353 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 15:00`,
          availableSlots: 4,
          distance: '4.2 km'
        },
        {
          id: 'mitte-4',
          name: 'Bürgeramt Mitte - Rathaus Tiergarten',
          address: 'Mathilde-Jacob-Platz 1, 10551 Berlin',
          nextAvailable: t.officeCard.noAppointments,
          availableSlots: 0,
          distance: '3.5 km'
        }
      ]
    },
    {
      name: 'Friedrichshain-Kreuzberg',
      officeCount: 5,
      offices: [
        {
          id: 'fk-1',
          name: 'Bürgeramt Friedrichshain - Frankfurter Allee',
          address: 'Frankfurter Allee 35/37, 10247 Berlin',
          nextAvailable: `${t.timeLabels.today}, 15:45`,
          availableSlots: 2,
          distance: '3.1 km'
        },
        {
          id: 'fk-2',
          name: 'Bürgeramt Kreuzberg - Yorckstraße',
          address: 'Yorckstraße 4-11, 10965 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 10:00`,
          availableSlots: 4,
          distance: '5.2 km'
        },
        {
          id: 'fk-3',
          name: 'Bürgeramt Kreuzberg - Urbanstraße',
          address: 'Urbanstraße 24, 10967 Berlin',
          nextAvailable: t.officeCard.noAppointments,
          availableSlots: 0,
          distance: '5.5 km'
        },
        {
          id: 'fk-4',
          name: 'Bürgeramt Friedrichshain - Petersburger Platz',
          address: 'Petersburger Platz 1, 10249 Berlin',
          nextAvailable: `${t.timeLabels.today}, 16:30`,
          availableSlots: 3,
          distance: '3.8 km'
        },
        {
          id: 'fk-5',
          name: 'Bürgeramt Kreuzberg - Ora',
          address: 'Oranienstraße 25, 10999 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 14:00`,
          availableSlots: 5,
          distance: '5.8 km'
        }
      ]
    },
    {
      name: 'Pankow',
      officeCount: 6,
      offices: [
        {
          id: 'pankow-1',
          name: 'Bürgeramt Pankow',
          address: 'Fröbelstraße 17, 10405 Berlin',
          nextAvailable: `${t.timeLabels.today}, 16:00`,
          availableSlots: 5,
          distance: '4.7 km'
        },
        {
          id: 'pankow-2',
          name: 'Bürgeramt Weißensee',
          address: 'Berliner Allee 252-260, 13088 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 11:30`,
          availableSlots: 6,
          distance: '7.1 km'
        },
        {
          id: 'pankow-3',
          name: 'Bürgeramt Prenzlauer Berg',
          address: 'Fröbelstraße 17, 10405 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 09:45`,
          availableSlots: 8,
          distance: '4.9 km'
        },
        {
          id: 'pankow-4',
          name: 'Bürgeramt Karow',
          address: 'Busonistraße 136, 13125 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 13:00`,
          availableSlots: 9,
          distance: '12.3 km'
        },
        {
          id: 'pankow-5',
          name: 'Bürgeramt Buch',
          address: 'Wiltbergstraße 19-23, 13125 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 10:00`,
          availableSlots: 7,
          distance: '13.8 km'
        },
        {
          id: 'pankow-6',
          name: 'Bürgeramt Pankow - Neue Schönholzer Straße',
          address: 'Neue Schönholzer Straße 15, 13187 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 15:30`,
          availableSlots: 4,
          distance: '8.2 km'
        }
      ]
    },
    {
      name: 'Charlottenburg-Wilmersdorf',
      officeCount: 7,
      offices: [
        {
          id: 'cw-1',
          name: 'Bürgeramt Charlottenburg - Otto-Suhr-Allee',
          address: 'Otto-Suhr-Allee 100, 10585 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 13:00`,
          availableSlots: 3,
          distance: '6.3 km'
        },
        {
          id: 'cw-2',
          name: 'Bürgeramt Wilmersdorf',
          address: 'Hohenzollerndamm 174-177, 10713 Berlin',
          nextAvailable: t.officeCard.noAppointments,
          availableSlots: 0,
          distance: '7.5 km'
        },
        {
          id: 'cw-3',
          name: 'Bürgeramt Charlottenburg - Kaiserdamm',
          address: 'Kaiserdamm 1, 14057 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 10:00`,
          availableSlots: 5,
          distance: '8.1 km'
        },
        {
          id: 'cw-4',
          name: 'Bürgeramt Wilmersdorf - Fehrbelliner Platz',
          address: 'Hohenzollerndamm 177, 10713 Berlin',
          nextAvailable: t.officeCard.noAppointments,
          availableSlots: 0,
          distance: '7.8 km'
        },
        {
          id: 'cw-5',
          name: 'Bürgeramt Charlottenburg Nord',
          address: 'Halemweg 18, 13627 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 14:30`,
          availableSlots: 7,
          distance: '9.2 km'
        },
        {
          id: 'cw-6',
          name: 'Bürgeramt Wilmersdorf - Bundesallee',
          address: 'Bundesallee 31, 10717 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 09:00`,
          availableSlots: 4,
          distance: '8.5 km'
        },
        {
          id: 'cw-7',
          name: 'Bürgeramt Charlottenburg - Rathaus',
          address: 'Otto-Suhr-Allee 100, 10585 Berlin',
          nextAvailable: `${t.timeLabels.today}, 15:00`,
          availableSlots: 3,
          distance: '6.3 km'
        }
      ]
    },
    {
      name: 'Spandau',
      officeCount: 4,
      offices: [
        {
          id: 'spandau-1',
          name: 'Bürgeramt Spandau - Carl-Schurz-Straße',
          address: 'Carl-Schurz-Straße 2/6, 13597 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 14:30`,
          availableSlots: 8,
          distance: '11.2 km'
        },
        {
          id: 'spandau-2',
          name: 'Bürgeramt Spandau - Moritzstraße',
          address: 'Moritzstraße 12, 13597 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 10:30`,
          availableSlots: 6,
          distance: '11.5 km'
        },
        {
          id: 'spandau-3',
          name: 'Bürgeramt Hakenfelde',
          address: 'Streitstraße 5, 13587 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 13:00`,
          availableSlots: 9,
          distance: '14.2 km'
        },
        {
          id: 'spandau-4',
          name: 'Bürgeramt Kladow',
          address: 'Kladower Damm 295, 14089 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 11:00`,
          availableSlots: 10,
          distance: '16.8 km'
        }
      ]
    },
    {
      name: 'Steglitz-Zehlendorf',
      officeCount: 4,
      offices: [
        {
          id: 'sz-1',
          name: 'Bürgeramt Steglitz - Schloßstraße',
          address: 'Schloßstraße 37, 12163 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 11:00`,
          availableSlots: 7,
          distance: '10.3 km'
        },
        {
          id: 'sz-2',
          name: 'Bürgeramt Zehlendorf',
          address: 'Kirchstraße 1/3, 14163 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 09:30`,
          availableSlots: 8,
          distance: '12.7 km'
        },
        {
          id: 'sz-3',
          name: 'Bürgeramt Lankwitz',
          address: 'Hanna-Renate-Laurien-Platz 1, 12247 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 14:00`,
          availableSlots: 6,
          distance: '11.8 km'
        },
        {
          id: 'sz-4',
          name: 'Bürgeramt Lichterfelde',
          address: 'Unter den Eichen 82, 12203 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 13:30`,
          availableSlots: 5,
          distance: '11.2 km'
        }
      ]
    },
    {
      name: 'Tempelhof-Schöneberg',
      officeCount: 5,
      offices: [
        {
          id: 'ts-1',
          name: 'Bürgeramt Tempelhof',
          address: 'Tempelhofer Damm 165, 12099 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 10:30`,
          availableSlots: 4,
          distance: '7.8 km'
        },
        {
          id: 'ts-2',
          name: 'Bürgeramt Schöneberg - John-F.-Kennedy-Platz',
          address: 'John-F.-Kennedy-Platz, 10825 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 09:00`,
          availableSlots: 6,
          distance: '8.2 km'
        },
        {
          id: 'ts-3',
          name: 'Bürgeramt Schöneberg - Rathaus',
          address: 'Friesenstraße 3, 10965 Berlin',
          nextAvailable: `${t.timeLabels.today}, 16:00`,
          availableSlots: 3,
          distance: '8.5 km'
        },
        {
          id: 'ts-4',
          name: 'Bürgeramt Mariendorf',
          address: 'Kaiserstraße 46, 12105 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 11:45`,
          availableSlots: 7,
          distance: '9.3 km'
        },
        {
          id: 'ts-5',
          name: 'Bürgeramt Friedenau',
          address: 'Goßlerstraße 18, 12161 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 10:15`,
          availableSlots: 5,
          distance: '9.7 km'
        }
      ]
    },
    {
      name: 'Neukölln',
      officeCount: 5,
      offices: [
        {
          id: 'nk-1',
          name: 'Bürgeramt Neukölln - Karl-Marx-Straße',
          address: 'Karl-Marx-Straße 83, 12040 Berlin',
          nextAvailable: `${t.timeLabels.today}, 17:00`,
          availableSlots: 3,
          distance: '9.1 km'
        },
        {
          id: 'nk-2',
          name: 'Bürgeramt Buckow',
          address: 'Buckower Damm 188, 12349 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 14:00`,
          availableSlots: 5,
          distance: '12.5 km'
        },
        {
          id: 'nk-3',
          name: 'Bürgeramt Neukölln - Britz',
          address: 'Gutschmidtstraße 19, 12359 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 09:30`,
          availableSlots: 8,
          distance: '13.2 km'
        },
        {
          id: 'nk-4',
          name: 'Bürgeramt Neukölln - Rudow',
          address: 'Waßmannsdorfer Chaussee 49, 12355 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 12:00`,
          availableSlots: 9,
          distance: '14.8 km'
        },
        {
          id: 'nk-5',
          name: 'Bürgeramt Neukölln - Gropiusstadt',
          address: 'Johannisthaler Chaussee 301, 12351 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 11:30`,
          availableSlots: 7,
          distance: '15.1 km'
        }
      ]
    },
    {
      name: 'Treptow-Köpenick',
      officeCount: 5,
      offices: [
        {
          id: 'tk-1',
          name: 'Bürgeramt Treptow',
          address: 'Neue Krugallee 4, 12435 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 10:00`,
          availableSlots: 6,
          distance: '10.5 km'
        },
        {
          id: 'tk-2',
          name: 'Bürgeramt Köpenick',
          address: 'Alt-Köpenick 21, 12555 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 13:30`,
          availableSlots: 8,
          distance: '16.2 km'
        },
        {
          id: 'tk-3',
          name: 'Bürgeramt Adlershof',
          address: 'Nipkowstraße 2, 12489 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 14:30`,
          availableSlots: 5,
          distance: '12.8 km'
        },
        {
          id: 'tk-4',
          name: 'Bürgeramt Baumschulenweg',
          address: 'Baumschulenstraße 79-81, 12437 Berlin',
          nextAvailable: `${t.timeLabels.today}, 15:30`,
          availableSlots: 4,
          distance: '11.2 km'
        },
        {
          id: 'tk-5',
          name: 'Bürgeramt Friedrichshagen',
          address: 'Bölschestraße 87-91, 12587 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 10:30`,
          availableSlots: 7,
          distance: '17.5 km'
        }
      ]
    },
    {
      name: 'Marzahn-Hellersdorf',
      officeCount: 4,
      offices: [
        {
          id: 'mh-1',
          name: 'Bürgeramt Marzahn',
          address: 'Marzahner Promenade 38-42, 12679 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 09:00`,
          availableSlots: 9,
          distance: '14.3 km'
        },
        {
          id: 'mh-2',
          name: 'Bürgeramt Hellersdorf',
          address: 'Hellersdorfer Promenade 14, 12627 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 11:00`,
          availableSlots: 10,
          distance: '17.8 km'
        },
        {
          id: 'mh-3',
          name: 'Bürgeramt Mahlsdorf',
          address: 'Hönower Straße 83, 12623 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 13:00`,
          availableSlots: 8,
          distance: '19.2 km'
        },
        {
          id: 'mh-4',
          name: 'Bürgeramt Biesdorf',
          address: 'Alt-Biesdorf 55, 12683 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 14:30`,
          availableSlots: 6,
          distance: '16.5 km'
        }
      ]
    },
    {
      name: 'Lichtenberg',
      officeCount: 6,
      offices: [
        {
          id: 'licht-1',
          name: 'Bürgeramt Lichtenberg - Möllendorffstraße',
          address: 'Möllendorffstraße 6, 10367 Berlin',
          nextAvailable: `${t.timeLabels.today}, 14:00`,
          availableSlots: 5,
          distance: '6.8 km'
        },
        {
          id: 'licht-2',
          name: 'Bürgeramt Hohenschönhausen',
          address: 'Große-Leege-Straße 103, 13055 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 10:30`,
          availableSlots: 7,
          distance: '11.5 km'
        },
        {
          id: 'licht-3',
          name: 'Bürgeramt Karlshorst',
          address: 'Treskowallee 112, 10318 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 09:30`,
          availableSlots: 8,
          distance: '9.3 km'
        },
        {
          id: 'licht-4',
          name: 'Bürgeramt Rummelsburg',
          address: 'Hauptstraße 8/9, 10317 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 15:00`,
          availableSlots: 6,
          distance: '8.7 km'
        },
        {
          id: 'licht-5',
          name: 'Bürgeramt Friedrichsfelde',
          address: 'Alfredstraße 12, 10365 Berlin',
          nextAvailable: `${t.timeLabels.today}, 16:30`,
          availableSlots: 4,
          distance: '7.9 km'
        },
        {
          id: 'licht-6',
          name: 'Bürgeramt Fennpfuhl',
          address: 'Landsberger Allee 202, 10369 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 12:00`,
          availableSlots: 5,
          distance: '8.2 km'
        }
      ]
    },
    {
      name: 'Reinickendorf',
      officeCount: 4,
      offices: [
        {
          id: 'rein-1',
          name: 'Bürgeramt Reinickendorf',
          address: 'Eichborndamm 215-239, 13437 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 11:00`,
          availableSlots: 7,
          distance: '9.8 km'
        },
        {
          id: 'rein-2',
          name: 'Bürgeramt Tegel',
          address: 'Gorkistraße 13-17, 13507 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 10:00`,
          availableSlots: 8,
          distance: '11.5 km'
        },
        {
          id: 'rein-3',
          name: 'Bürgeramt Waidmannslust',
          address: 'Halalistraße 2, 13469 Berlin',
          nextAvailable: `${t.timeLabels.tomorrow}, 14:00`,
          availableSlots: 6,
          distance: '12.3 km'
        },
        {
          id: 'rein-4',
          name: 'Bürgeramt Frohnau',
          address: 'Zeltinger Straße 10, 13465 Berlin',
          nextAvailable: `${t.timeLabels.dayAfterTomorrow}, 13:00`,
          availableSlots: 9,
          distance: '14.7 km'
        }
      ]
    }
  ];

  const toggleDistrict = (districtName: string) => {
    setExpandedDistrict(expandedDistrict === districtName ? null : districtName);
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="w-5 h-5 text-gray-700" />
        <h2 className="text-xl font-semibold text-gray-900">
          {t.allOffices.title}
        </h2>
      </div>

      <div className="space-y-3">
        {districts.map((district) => (
          <div key={district.name} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
            {/* Accordion Header */}
            <button
              onClick={() => toggleDistrict(district.name)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-gray-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">{district.name}</h3>
                  <p className="text-sm text-gray-600">
                    {district.officeCount} {district.officeCount === 1 ? t.allOffices.officeCount : t.allOffices.officesCount}
                  </p>
                </div>
              </div>
              
              {expandedDistrict === district.name ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Accordion Content */}
            {expandedDistrict === district.name && (
              <div className="border-t border-gray-200 bg-gray-50 p-4">
                <div className="space-y-3">
                  {district.offices.map((office) => (
                    <OfficeCard
                      key={office.id}
                      office={office}
                      isSelected={selectedOffice === office.id}
                      onSelect={() => onSelectOffice(office.id, {
                        nextAvailable: office.nextAvailable,
                        availableSlots: office.availableSlots,
                        name: office.name,
                        address: office.address
                      })}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}