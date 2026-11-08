import type { EmergencyNumbers } from './packs';

/**
 * Emergency numbers by country, retrieved 4 November 2026. GENERATED from the table in section 5 of
 * research_notes/PlayNest phase 5 app research/04_first_aid_emergency_safety.md. Review at least once a year.
 *
 * Contains public sector information licensed under the Open Government Licence v3.0 (UK FCDO Foreign Travel Advice),
 * cross-checked against Government of Canada travel pages. It is a merged derivative of two travel-advice services, not a
 * primary list, and needs a sample check before release.
 *
 * How the table became this file:
 *  - `agreed: false` when the table marks the row CONFLICT or complementary, when the number listed as general is really a
 *    police or fire number, or when a number holds for one city.
 *  - `general` holds an all-services number. A general entry that was the police or fire number, while the ambulance has a
 *    different one, is left out. 112 is kept.
 *  - The schema holds one number per service, so where the table lists alternatives one is kept: the mobile one over a
 *    landline one, a short code over a long number, otherwise the first listed. The rest are in the comment on the row.
 *  - Left out: rows with no number, and labels that aren't country codes. XK (Kosovo) is user-assigned, not official ISO.
 */
export const EMERGENCY: Record<string, EmergencyNumbers> = {
  AD: { ambulance: '116', police: '110', fire: '118', agreed: true }, // Andorra
  AE: { ambulance: '998', police: '999', fire: '997', agreed: true }, // United Arab Emirates
  AF: { ambulance: '102', police: '119', agreed: false }, // Afghanistan
  AG: { general: '999', agreed: true }, // Antigua and Barbuda. not kept: general 911
  AI: { general: '911', agreed: true }, // Anguilla
  AL: { ambulance: '127', police: '112', fire: '128', agreed: false }, // Albania
  AM: { general: '911', agreed: true }, // Armenia
  AO: { ambulance: '112', police: '110', fire: '118', agreed: false }, // Angola
  AR: { ambulance: '107', police: '911', fire: '911', agreed: true }, // Argentina. not kept: ambulance 911; police 101; fire 100
  AS: { general: '911', agreed: true }, // American Samoa
  AT: { ambulance: '112', agreed: true }, // Austria
  AU: { general: '000', agreed: true }, // Australia
  AW: { ambulance: '911', police: '100', fire: '911', agreed: true }, // Aruba
  AZ: { ambulance: '103', police: '102', fire: '101', agreed: true }, // Azerbaijan
  BA: { general: '112', ambulance: '124', police: '122', fire: '123', agreed: false }, // Bosnia and Herzegovina
  BB: { ambulance: '511', police: '211', fire: '311', agreed: true }, // Barbados
  BD: { general: '999', agreed: true }, // Bangladesh
  BE: { general: '112', police: '101', agreed: false }, // Belgium
  BF: { ambulance: '18', police: '17', fire: '18', agreed: true }, // Burkina Faso
  BG: { general: '112', agreed: true }, // Bulgaria
  BH: { general: '999', agreed: true }, // Bahrain
  BI: { general: '112', agreed: true }, // Burundi
  BJ: { ambulance: '118', police: '117', fire: '118', agreed: true }, // Benin
  BL: { general: '112', agreed: true }, // Saint-Barthélemy
  BM: { general: '911', agreed: true }, // Bermuda
  BN: { ambulance: '991', police: '993', fire: '995', agreed: true }, // Brunei
  BO: { ambulance: '118', police: '110', fire: '119', agreed: true }, // Bolivia
  BQ: { ambulance: '911', police: '911', fire: '911', agreed: true }, // Bonaire/St Eustatius/Saba. not kept: ambulance 913; fire 912
  BR: { ambulance: '192', police: '190', fire: '193', agreed: false }, // Brazil. not kept: general 911; police 911
  BS: { general: '911', agreed: true }, // Bahamas. not kept: general 919
  BT: { ambulance: '112', police: '113', fire: '110', agreed: true }, // Bhutan
  BW: { ambulance: '997', police: '999', fire: '998', agreed: true }, // Botswana
  BY: { ambulance: '103', police: '102', fire: '101', agreed: true }, // Belarus
  BZ: { general: '911', agreed: true }, // Belize. not kept: general 90
  CA: { general: '911', agreed: true }, // Canada
  CF: { ambulance: '610600', police: '117', fire: '118', agreed: false }, // Central African Republic. not kept: general 117
  CG: { police: '117', fire: '118', agreed: false }, // Congo
  CH: { general: '112', ambulance: '144', police: '117', fire: '118', agreed: true }, // Switzerland
  CI: { ambulance: '185', police: '110', fire: '180', agreed: true }, // Côte d'Ivoire
  CK: { ambulance: '998', police: '999', fire: '996', agreed: false }, // Cook Islands, Tokelau and Niue. not kept: general 999
  CL: { ambulance: '131', police: '133', fire: '132', agreed: true }, // Chile
  CM: { ambulance: '112', police: '117', fire: '119', agreed: false }, // Cameroon
  CN: { ambulance: '120', police: '110', fire: '119', agreed: true }, // China
  CO: { ambulance: '123', police: '123', fire: '119', agreed: true }, // Colombia
  CR: { general: '911', agreed: true }, // Costa Rica
  CU: { ambulance: '104', police: '106', fire: '105', agreed: true }, // Cuba
  CV: { ambulance: '130', police: '132', fire: '131', agreed: true }, // Cape Verde
  CW: { ambulance: '912', police: '911', fire: '911', agreed: true }, // Curaçao
  CY: { general: '112', agreed: true }, // Cyprus
  CZ: { general: '112', agreed: true }, // Czechia
  DE: { ambulance: '112', police: '110', fire: '112', agreed: true }, // Germany
  DJ: { ambulance: '21 35 09 62', police: '17', fire: '18', agreed: false }, // Djibouti. not kept: general 18; ambulance 21 35 27 12
  DK: { general: '112', agreed: true }, // Denmark
  DM: { general: '999', agreed: true }, // Dominica
  DO: { general: '911', agreed: true }, // Dominican Republic
  DZ: { ambulance: '1021', police: '17', fire: '14', agreed: false }, // Algeria. not kept: police 1548
  EC: { general: '911', agreed: true }, // Ecuador
  EE: { general: '112', agreed: true }, // Estonia
  EG: { ambulance: '123', police: '122', fire: '180', agreed: false }, // Egypt
  EH: { general: '150', agreed: true }, // Western Sahara
  ER: { ambulance: '122244', police: '113', fire: '116', agreed: false }, // Eritrea
  ES: { general: '112', ambulance: '112', agreed: true }, // Spain
  ET: { ambulance: '907', police: '911', agreed: false }, // Ethiopia
  FI: { general: '112', agreed: true }, // Finland
  FJ: { general: '911', fire: '910', agreed: false }, // Fiji
  FK: { general: '999', agreed: true }, // Falkland Islands
  FM: { general: '911', police: '911', agreed: true }, // Federated States of Micronesia
  FR: { general: '112', ambulance: '15', police: '17', fire: '18', agreed: false }, // France
  GA: { ambulance: '117', police: '177', fire: '177', agreed: false }, // Gabon
  GB: { general: '999', agreed: true }, // United Kingdom. not kept: general 112
  GD: { ambulance: '434', police: '911', fire: '911', agreed: false }, // Grenada. not kept: general 911
  GE: { general: '112', agreed: true }, // Georgia
  GF: { general: '112', ambulance: '15', police: '17', fire: '18', agreed: true }, // French Guiana
  GH: { general: '999', ambulance: '193', police: '191', fire: '192', agreed: false }, // Ghana. not kept: general 112; police 18555
  GI: { general: '999', agreed: true }, // Gibraltar
  GL: { general: '112', agreed: true }, // Greenland
  GM: { ambulance: '116', police: '117', fire: '118', agreed: false }, // The Gambia
  GN: { police: '122', fire: '1717', agreed: false }, // Guinea
  GP: { general: '112', ambulance: '15', police: '17', fire: '18', agreed: true }, // Guadeloupe
  GQ: { ambulance: '3101', police: '666 404040', fire: '115', agreed: false }, // Equatorial Guinea. not kept: police 666 303030
  GR: { general: '112', agreed: true }, // Greece
  GT: { ambulance: '122', police: '110', fire: '122', agreed: true }, // Guatemala. not kept: ambulance 123; fire 123
  GU: { general: '911', agreed: true }, // Guam
  GW: { ambulance: '1313', police: '117', fire: '1313', agreed: false }, // Guinea-Bissau
  GY: { ambulance: '913', police: '911', fire: '912', agreed: true }, // Guyana
  HK: { general: '999', agreed: true }, // Hong Kong
  HN: { general: '911', agreed: true }, // Honduras
  HR: { general: '112', agreed: true }, // Croatia
  HT: { ambulance: '116', police: '122', fire: '115', agreed: true }, // Haiti
  HU: { general: '112', ambulance: '104', police: '107', fire: '105', agreed: false }, // Hungary
  ID: { ambulance: '118', police: '110', fire: '112', agreed: true }, // Indonesia
  IE: { general: '112', agreed: true }, // Ireland. not kept: general 999
  IL: { ambulance: '101', police: '100', fire: '102', agreed: false }, // Israel
  IN: { general: '112', ambulance: '102', police: '100', fire: '101', agreed: false }, // India. not kept: police 112
  IQ: { ambulance: '122', police: '911', fire: '115', agreed: true }, // Iraq
  IR: { ambulance: '115', police: '110', fire: '125', agreed: true }, // Iran
  IS: { general: '112', agreed: true }, // Iceland
  IT: { general: '112', ambulance: '118', police: '112', fire: '115', agreed: false }, // Italy
  JM: { ambulance: '110', police: '119', fire: '110', agreed: false }, // Jamaica
  JO: { general: '911', agreed: true }, // Jordan
  JP: { ambulance: '119', police: '110', fire: '119', agreed: true }, // Japan
  KE: { general: '999', agreed: true }, // Kenya
  KG: { general: '112', ambulance: '103', police: '102', fire: '101', agreed: false }, // Kyrgyzstan
  KH: { ambulance: '119', police: '117', fire: '118', agreed: true }, // Cambodia
  KI: { ambulance: '994', police: '992', fire: '993', agreed: false }, // Kiribati
  KM: { ambulance: '269 772 03 73', police: '117', fire: '113', agreed: false }, // Comoros. not kept: fire 114
  KN: { ambulance: '911', police: '911', fire: '333', agreed: true }, // St Kitts and Nevis
  KR: { ambulance: '119', police: '112', fire: '119', agreed: true }, // South Korea
  KW: { general: '112', agreed: true }, // Kuwait
  KY: { general: '911', agreed: true }, // Cayman Islands
  KZ: { ambulance: '103', police: '102', fire: '101', agreed: true }, // Kazakhstan
  LA: { ambulance: '1195', police: '1191', fire: '1190', agreed: true }, // Laos. not kept: ambulance 030 525 7239
  LB: { ambulance: '140', police: '112', fire: '175', agreed: true }, // Lebanon
  LC: { general: '911', ambulance: '911', police: '999', fire: '911', agreed: false }, // St Lucia
  LI: { ambulance: '144', police: '117', fire: '118', agreed: true }, // Liechtenstein
  LK: { ambulance: '1990', police: '118', fire: '111', agreed: false }, // Sri Lanka. not kept: ambulance 011 2691111; police 119
  LR: { police: '+231 770 800 911', agreed: true }, // Liberia
  LS: { general: '112', agreed: false }, // Lesotho
  LT: { general: '112', agreed: true }, // Lithuania
  LU: { ambulance: '112', police: '113', fire: '112', agreed: true }, // Luxembourg
  LV: { general: '112', ambulance: '113', police: '110', fire: '112', agreed: false }, // Latvia
  LY: { general: '1415', agreed: true }, // Libya
  MA: { ambulance: '150', police: '190', fire: '150', agreed: true }, // Morocco
  MC: { general: '112', agreed: true }, // Monaco. not kept: general 18 (landline)
  MD: { general: '112', agreed: true }, // Moldova
  ME: { general: '112', ambulance: '124', police: '122', fire: '123', agreed: false }, // Montenegro
  MF: { general: '112', ambulance: '15', police: '17', fire: '18', agreed: false }, // St Martin and St Barthélemy
  MG: { general: '117', ambulance: '117', agreed: true }, // Madagascar
  MH: { ambulance: '625 4142', police: '625 8666', agreed: true }, // Marshall Islands
  MK: { ambulance: '194', police: '192', fire: '193', agreed: true }, // North Macedonia
  ML: { ambulance: '15', police: '17', fire: '18', agreed: true }, // Mali
  MM: { ambulance: '192', police: '199', fire: '191', agreed: true }, // Myanmar (Burma)
  MN: { ambulance: '103', police: '102', fire: '101', agreed: true }, // Mongolia
  MO: { general: '999', agreed: false }, // Macao
  MP: { general: '911', agreed: true }, // Northern Marianas
  MQ: { general: '112', ambulance: '15', police: '17', fire: '18', agreed: true }, // Martinique
  MR: { ambulance: '101', police: '117', fire: '118', agreed: false }, // Mauritania
  MS: { general: '911', police: '999', fire: '911', agreed: true }, // Montserrat. not kept: general 999; police 664
  MT: { general: '112', agreed: true }, // Malta
  MU: { ambulance: '999', police: '999', fire: '999', agreed: true }, // Mauritius. not kept: ambulance 114; police 112; fire 115
  MV: { ambulance: '102', police: '119', fire: '118', agreed: true }, // Maldives
  MW: { ambulance: '998', police: '990', fire: '999', agreed: true }, // Malawi. not kept: police 997
  MX: { general: '911', agreed: true }, // Mexico
  MY: { general: '999', ambulance: '999', police: '999', fire: '994', agreed: false }, // Malaysia
  MZ: { ambulance: '848888', police: '112', fire: '198', agreed: true }, // Mozambique. not kept: ambulance 823388
  NA: { general: '999', ambulance: '10177', police: '10111', fire: '998', agreed: false }, // Namibia. not kept: general 10111 / 112
  NC: { ambulance: '15', police: '17', fire: '18', agreed: true }, // New Caledonia
  NE: { ambulance: '15', police: '17', fire: '18', agreed: true }, // Niger
  NG: { general: '112', ambulance: '112', police: '112', fire: '112', agreed: true }, // Nigeria. not kept: ambulance 199; police 199; fire 199
  NI: { general: '911', ambulance: '128', police: '118', fire: '115', agreed: false }, // Nicaragua
  NL: { general: '112', agreed: true }, // Netherlands
  NO: { ambulance: '113', police: '112', fire: '110', agreed: true }, // Norway
  NP: { ambulance: '102', police: '100', fire: '101', agreed: true }, // Nepal
  NR: { ambulance: '111', police: '110', fire: '112', agreed: true }, // Nauru
  NU: { general: '999', agreed: true }, // Niue
  NZ: { general: '111', agreed: true }, // New Zealand
  OM: { general: '9999', agreed: true }, // Oman
  PA: { general: '911', ambulance: '103', police: '104', fire: '103', agreed: false }, // Panama
  PE: { ambulance: '106', police: '105', fire: '116', agreed: false }, // Peru
  PF: { ambulance: '15', police: '17', fire: '18', agreed: false }, // French Polynesia
  PG: { ambulance: '111', police: '112', fire: '110', agreed: false }, // Papua New Guinea
  PH: { general: '911', agreed: true }, // Philippines
  PK: { ambulance: '1122', police: '15', fire: '1122', agreed: false }, // Pakistan
  PL: { general: '112', ambulance: '999', police: '997', fire: '998', agreed: false }, // Poland
  PM: { general: '112', ambulance: '15', police: '17', fire: '18', agreed: false }, // St Pierre & Miquelon
  PR: { general: '911', agreed: true }, // Puerto Rico
  PS: { ambulance: '101', police: '100', fire: '102', agreed: true }, // Palestine
  PT: { general: '112', agreed: true }, // Portugal
  PW: { general: '911', agreed: true }, // Palau
  PY: { ambulance: '141', police: '911', fire: '132', agreed: false }, // Paraguay. not kept: general 911
  QA: { general: '999', agreed: true }, // Qatar
  RE: { general: '112', ambulance: '15', police: '17', fire: '18', agreed: true }, // Réunion
  RO: { general: '112', agreed: true }, // Romania
  RS: { ambulance: '194', police: '192', fire: '193', agreed: true }, // Serbia
  RU: { general: '112', ambulance: '103', police: '102', fire: '101', agreed: false }, // Russia
  RW: { ambulance: '112', police: '112', fire: '111', agreed: false }, // Rwanda
  SA: { general: '911', ambulance: '997', police: '999', fire: '998', agreed: false }, // Saudi Arabia
  SB: { ambulance: '111', police: '999', fire: '988', agreed: true }, // Solomon Islands
  SC: { general: '999', agreed: true }, // Seychelles
  SD: { ambulance: '333', police: '999', fire: '777', agreed: false }, // Sudan. not kept: general 999
  SE: { general: '112', agreed: true }, // Sweden
  SG: { ambulance: '995', police: '999', fire: '995', agreed: true }, // Singapore
  SH: { ambulance: '5000', police: '5111', agreed: true }, // St Helena, Ascension and Tristan da Cunha
  SI: { ambulance: '112', police: '113', fire: '112', agreed: true }, // Slovenia
  SK: { general: '112', ambulance: '155', police: '158', fire: '150', agreed: false }, // Slovakia
  SL: { general: '117', ambulance: '999', police: '112', fire: '033', agreed: false }, // Sierra Leone. not kept: fire 300 / 301
  SM: { ambulance: '118', police: '112', fire: '115', agreed: false }, // San Marino. not kept: police 113
  SN: { ambulance: '15', police: '17', fire: '18', agreed: true }, // Senegal
  SO: { ambulance: '999', police: '888', fire: '555', agreed: true }, // Somalia
  SR: { ambulance: '113', police: '115', fire: '110', agreed: false }, // Suriname. not kept: general 115
  ST: { ambulance: '222 22 22', police: '113', fire: '112', agreed: true }, // São Tomé and Principe. not kept: police 222 22 22
  SV: { general: '911', agreed: true }, // El Salvador
  SX: { ambulance: '911', police: '911', fire: '919', agreed: false }, // St Maarten
  SY: { ambulance: '110', police: '112', fire: '113', agreed: true }, // Syria
  SZ: { ambulance: '977', police: '999', fire: '933', agreed: true }, // Eswatini
  TC: { general: '911', agreed: true }, // Turks and Caicos Islands
  TD: { ambulance: '112', police: '2020', agreed: true }, // Chad. not kept: ambulance 18; police 117
  TG: { ambulance: '8200', police: '117', fire: '118', agreed: true }, // Togo. not kept: police 177
  TH: { ambulance: '1669', police: '191', fire: '199', agreed: false }, // Thailand. not kept: general 191
  TJ: { general: '112', ambulance: '103', police: '102', fire: '101', agreed: false }, // Tajikistan. not kept: ambulance 03; police 02; fire 01
  TL: { ambulance: '110', police: '112', fire: '115', agreed: true }, // Timor-Leste. not kept: ambulance +670 331 1044; police +670 331 1380; fire +670 331 0340
  TM: { ambulance: '03', police: '02', fire: '01', agreed: true }, // Turkmenistan
  TN: { ambulance: '190', police: '197', fire: '198', agreed: true }, // Tunisia. not kept: police 193
  TO: { general: '911', ambulance: '933', police: '922', fire: '999', agreed: false }, // Tonga
  TR: { general: '112', agreed: true }, // Turkey
  TT: { ambulance: '811', police: '999', fire: '990', agreed: true }, // Trinidad and Tobago
  TV: { ambulance: '999', police: '911', fire: '000', agreed: false }, // Tuvalu. not kept: general 911
  TW: { ambulance: '119', police: '110', fire: '119', agreed: true }, // Taiwan
  TZ: { general: '112', agreed: true }, // Tanzania
  UA: { ambulance: '103', police: '102', fire: '101', agreed: true }, // Ukraine
  UG: { general: '999', agreed: true }, // Uganda
  US: { general: '911', agreed: true }, // USA
  UY: { ambulance: '105', police: '911', fire: '104', agreed: false }, // Uruguay. not kept: general 911
  UZ: { ambulance: '103', police: '102', fire: '101', agreed: true }, // Uzbekistan
  VC: { general: '911', ambulance: '911', police: '999', agreed: false }, // St Vincent and the Grenadines. not kept: general 999
  VE: { general: '911', agreed: true }, // Venezuela
  VG: { general: '911', agreed: false }, // British Virgin Islands
  VI: { general: '911', agreed: true }, // Virgin Islands (U.S.)
  VN: { ambulance: '115', police: '113', fire: '114', agreed: true }, // Vietnam
  VU: { ambulance: '115', police: '111', fire: '113', agreed: true }, // Vanuatu. not kept: police 22222
  WF: { general: '112', ambulance: '15', police: '17', fire: '18', agreed: true }, // Wallis and Futuna. not kept: general 721772 (landline)
  WS: { general: '911', agreed: true }, // Samoa
  XK: { general: '112', ambulance: '194', police: '192', fire: '193', agreed: false }, // Kosovo
  YE: { ambulance: '191', police: '199', fire: '191', agreed: false }, // Yemen. not kept: general 199; police 194
  YT: { general: '112', ambulance: '15', police: '17', fire: '18', agreed: true }, // Mayotte
  ZA: { ambulance: '10177', police: '10111', fire: '10111', agreed: true }, // South Africa. not kept: fire 10112
  ZM: { ambulance: '992', police: '991', fire: '993', agreed: false }, // Zambia
  ZW: { general: '112', agreed: true }, // Zimbabwe
};
