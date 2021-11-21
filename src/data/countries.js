const countries = [
  {
    name: "Afghanistan",
    alphaTwo: "AF",
    numericThree: "004",
  },
  {
    name: "Åland Islands",
    alphaTwo: "AX",
    numericThree: "248",
  },
  {
    name: "Albania",
    alphaTwo: "AL",
    numericThree: "008",
  },
  {
    name: "Algeria",
    alphaTwo: "DZ",
    numericThree: "012",
  },
  {
    name: "American Samoa",
    alphaTwo: "AS",
    numericThree: "016",
  },
  {
    name: "Andorra",
    alphaTwo: "AD",
    numericThree: "020",
  },
  {
    name: "Angola",
    alphaTwo: "AO",
    numericThree: "024",
  },
  {
    name: "Anguilla",
    alphaTwo: "AI",
    numericThree: "660",
  },
  {
    name: "Antarctica",
    alphaTwo: "AQ",
    numericThree: "010",
  },
  {
    name: "Antigua and Barbuda",
    alphaTwo: "AG",
    numericThree: "028",
  },
  {
    name: "Argentina",
    alphaTwo: "AR",
    numericThree: "032",
  },
  {
    name: "Armenia",
    alphaTwo: "AM",
    numericThree: "051",
  },
  {
    name: "Aruba",
    alphaTwo: "AW",
    numericThree: "533",
  },
  {
    name: "Australia",
    alphaTwo: "AU",
    numericThree: "036",
  },
  {
    name: "Austria",
    alphaTwo: "AT",
    numericThree: "040",
  },
  {
    name: "Azerbaijan",
    alphaTwo: "AZ",
    numericThree: "031",
  },
  {
    name: "Bahamas",
    alphaTwo: "BS",
    numericThree: "044",
  },
  {
    name: "Bahrain",
    alphaTwo: "BH",
    numericThree: "048",
  },
  {
    name: "Bangladesh",
    alphaTwo: "BD",
    numericThree: "050",
  },
  {
    name: "Barbados",
    alphaTwo: "BB",
    numericThree: "052",
  },
  {
    name: "Belarus",
    alphaTwo: "BY",
    numericThree: "112",
  },
  {
    name: "Belgium",
    alphaTwo: "BE",
    numericThree: "056",
  },
  {
    name: "Belize",
    alphaTwo: "BZ",
    numericThree: "084",
  },
  {
    name: "Benin",
    alphaTwo: "BJ",
    numericThree: "204",
  },
  {
    name: "Bermuda",
    alphaTwo: "BM",
    numericThree: "060",
  },
  {
    name: "Bhutan",
    alphaTwo: "BT",
    numericThree: "064",
  },
  {
    name: "Bolivia (Plurinational State of)",
    alphaTwo: "BO",
    numericThree: "068",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    alphaTwo: "BQ",
    numericThree: "535",
  },
  {
    name: "Bosnia and Herzegovina",
    alphaTwo: "BA",
    numericThree: "070",
  },
  {
    name: "Botswana",
    alphaTwo: "BW",
    numericThree: "072",
  },
  {
    name: "Bouvet Island",
    alphaTwo: "BV",
    numericThree: "074",
  },
  {
    name: "Brazil",
    alphaTwo: "BR",
    numericThree: "076",
  },
  {
    name: "British Indian Ocean Territory",
    alphaTwo: "IO",
    numericThree: "086",
  },
  {
    name: "Brunei Darussalam",
    alphaTwo: "BN",
    numericThree: "096",
  },
  {
    name: "Bulgaria",
    alphaTwo: "BG",
    numericThree: "100",
  },
  {
    name: "Burkina Faso",
    alphaTwo: "BF",
    numericThree: "854",
  },
  {
    name: "Burundi",
    alphaTwo: "BI",
    numericThree: "108",
  },
  {
    name: "Cabo Verde",
    alphaTwo: "CV",
    numericThree: "132",
  },
  {
    name: "Cambodia",
    alphaTwo: "KH",
    numericThree: "116",
  },
  {
    name: "Cameroon",
    alphaTwo: "CM",
    numericThree: "120",
  },
  {
    name: "Canada",
    alphaTwo: "CA",
    numericThree: "124",
  },
  {
    name: "Cayman Islands",
    alphaTwo: "KY",
    numericThree: "136",
  },
  {
    name: "Central African Republic",
    alphaTwo: "CF",
    numericThree: "140",
  },
  {
    name: "Chad",
    alphaTwo: "TD",
    numericThree: "148",
  },
  {
    name: "Chile",
    alphaTwo: "CL",
    numericThree: "152",
  },
  {
    name: "China",
    alphaTwo: "CN",
    numericThree: "156",
  },
  {
    name: "Christmas Island",
    alphaTwo: "CX",
    numericThree: "162",
  },
  {
    name: "Cocos (Keeling) Islands",
    alphaTwo: "CC",
    numericThree: "166",
  },
  {
    name: "Colombia",
    alphaTwo: "CO",
    numericThree: "170",
  },
  {
    name: "Comoros",
    alphaTwo: "KM",
    numericThree: "174",
  },
  {
    name: "Congo",
    alphaTwo: "CG",
    numericThree: "178",
  },
  {
    name: "Congo, Democratic Republic of the",
    alphaTwo: "CD",
    numericThree: "180",
  },
  {
    name: "Cook Islands",
    alphaTwo: "CK",
    numericThree: "184",
  },
  {
    name: "Costa Rica",
    alphaTwo: "CR",
    numericThree: "188",
  },
  {
    name: "Côte d'Ivoire",
    alphaTwo: "CI",
    numericThree: "384",
  },
  {
    name: "Croatia",
    alphaTwo: "HR",
    numericThree: "191",
  },
  {
    name: "Cuba",
    alphaTwo: "CU",
    numericThree: "192",
  },
  {
    name: "Curaçao",
    alphaTwo: "CW",
    numericThree: "531",
  },
  {
    name: "Cyprus",
    alphaTwo: "CY",
    numericThree: "196",
  },
  {
    name: "Czechia",
    alphaTwo: "CZ",
    numericThree: "203",
  },
  {
    name: "Denmark",
    alphaTwo: "DK",
    numericThree: "208",
  },
  {
    name: "Djibouti",
    alphaTwo: "DJ",
    numericThree: "262",
  },
  {
    name: "Dominica",
    alphaTwo: "DM",
    numericThree: "212",
  },
  {
    name: "Dominican Republic",
    alphaTwo: "DO",
    numericThree: "214",
  },
  {
    name: "Ecuador",
    alphaTwo: "EC",
    numericThree: "218",
  },
  {
    name: "Egypt",
    alphaTwo: "EG",
    numericThree: "818",
  },
  {
    name: "El Salvador",
    alphaTwo: "SV",
    numericThree: "222",
  },
  {
    name: "Equatorial Guinea",
    alphaTwo: "GQ",
    numericThree: "226",
  },
  {
    name: "Eritrea",
    alphaTwo: "ER",
    numericThree: "232",
  },
  {
    name: "Estonia",
    alphaTwo: "EE",
    numericThree: "233",
  },
  {
    name: "Eswatini",
    alphaTwo: "SZ",
    numericThree: "748",
  },
  {
    name: "Ethiopia",
    alphaTwo: "ET",
    numericThree: "231",
  },
  {
    name: "Falkland Islands (Malvinas)",
    alphaTwo: "FK",
    numericThree: "238",
  },
  {
    name: "Faroe Islands",
    alphaTwo: "FO",
    numericThree: "234",
  },
  {
    name: "Fiji",
    alphaTwo: "FJ",
    numericThree: "242",
  },
  {
    name: "Finland",
    alphaTwo: "FI",
    numericThree: "246",
  },
  {
    name: "France",
    alphaTwo: "FR",
    numericThree: "250",
  },
  {
    name: "French Guiana",
    alphaTwo: "GF",
    numericThree: "254",
  },
  {
    name: "French Polynesia",
    alphaTwo: "PF",
    numericThree: "258",
  },
  {
    name: "French Southern Territories",
    alphaTwo: "TF",
    numericThree: "260",
  },
  {
    name: "Gabon",
    alphaTwo: "GA",
    numericThree: "266",
  },
  {
    name: "Gambia",
    alphaTwo: "GM",
    numericThree: "270",
  },
  {
    name: "Georgia",
    alphaTwo: "GE",
    numericThree: "268",
  },
  {
    name: "Germany",
    alphaTwo: "DE",
    numericThree: "276",
  },
  {
    name: "Ghana",
    alphaTwo: "GH",
    numericThree: "288",
  },
  {
    name: "Gibraltar",
    alphaTwo: "GI",
    numericThree: "292",
  },
  {
    name: "Greece",
    alphaTwo: "GR",
    numericThree: "300",
  },
  {
    name: "Greenland",
    alphaTwo: "GL",
    numericThree: "304",
  },
  {
    name: "Grenada",
    alphaTwo: "GD",
    numericThree: "308",
  },
  {
    name: "Guadeloupe",
    alphaTwo: "GP",
    numericThree: "312",
  },
  {
    name: "Guam",
    alphaTwo: "GU",
    numericThree: "316",
  },
  {
    name: "Guatemala",
    alphaTwo: "GT",
    numericThree: "320",
  },
  {
    name: "Guernsey",
    alphaTwo: "GG",
    numericThree: "831",
  },
  {
    name: "Guinea",
    alphaTwo: "GN",
    numericThree: "324",
  },
  {
    name: "Guinea-Bissau",
    alphaTwo: "GW",
    numericThree: "624",
  },
  {
    name: "Guyana",
    alphaTwo: "GY",
    numericThree: "328",
  },
  {
    name: "Haiti",
    alphaTwo: "HT",
    numericThree: "332",
  },
  {
    name: "Heard Island and McDonald Islands",
    alphaTwo: "HM",
    numericThree: "334",
  },
  {
    name: "Holy See",
    alphaTwo: "VA",
    numericThree: "336",
  },
  {
    name: "Honduras",
    alphaTwo: "HN",
    numericThree: "340",
  },
  {
    name: "Hong Kong",
    alphaTwo: "HK",
    numericThree: "344",
  },
  {
    name: "Hungary",
    alphaTwo: "HU",
    numericThree: "348",
  },
  {
    name: "Iceland",
    alphaTwo: "IS",
    numericThree: "352",
  },
  {
    name: "India",
    alphaTwo: "IN",
    numericThree: "356",
  },
  {
    name: "Indonesia",
    alphaTwo: "ID",
    numericThree: "360",
  },
  {
    name: "Iran (Islamic Republic of)",
    alphaTwo: "IR",
    numericThree: "364",
  },
  {
    name: "Iraq",
    alphaTwo: "IQ",
    numericThree: "368",
  },
  {
    name: "Ireland",
    alphaTwo: "IE",
    numericThree: "372",
  },
  {
    name: "Isle of Man",
    alphaTwo: "IM",
    numericThree: "833",
  },
  {
    name: "Israel",
    alphaTwo: "IL",
    numericThree: "376",
  },
  {
    name: "Italy",
    alphaTwo: "IT",
    numericThree: "380",
  },
  {
    name: "Jamaica",
    alphaTwo: "JM",
    numericThree: "388",
  },
  {
    name: "Japan",
    alphaTwo: "JP",
    numericThree: "392",
  },
  {
    name: "Jersey",
    alphaTwo: "JE",
    numericThree: "832",
  },
  {
    name: "Jordan",
    alphaTwo: "JO",
    numericThree: "400",
  },
  {
    name: "Kazakhstan",
    alphaTwo: "KZ",
    numericThree: "398",
  },
  {
    name: "Kenya",
    alphaTwo: "KE",
    numericThree: "404",
  },
  {
    name: "Kiribati",
    alphaTwo: "KI",
    numericThree: "296",
  },
  {
    name: "Korea (Democratic People's Republic of)",
    alphaTwo: "KP",
    numericThree: "408",
  },
  {
    name: "Korea, Republic of",
    alphaTwo: "KR",
    numericThree: "410",
  },
  {
    name: "Kuwait",
    alphaTwo: "KW",
    numericThree: "414",
  },
  {
    name: "Kyrgyzstan",
    alphaTwo: "KG",
    numericThree: "417",
  },
  {
    name: "Lao People's Democratic Republic",
    alphaTwo: "LA",
    numericThree: "418",
  },
  {
    name: "Latvia",
    alphaTwo: "LV",
    numericThree: "428",
  },
  {
    name: "Lebanon",
    alphaTwo: "LB",
    numericThree: "422",
  },
  {
    name: "Lesotho",
    alphaTwo: "LS",
    numericThree: "426",
  },
  {
    name: "Liberia",
    alphaTwo: "LR",
    numericThree: "430",
  },
  {
    name: "Libya",
    alphaTwo: "LY",
    numericThree: "434",
  },
  {
    name: "Liechtenstein",
    alphaTwo: "LI",
    numericThree: "438",
  },
  {
    name: "Lithuania",
    alphaTwo: "LT",
    numericThree: "440",
  },
  {
    name: "Luxembourg",
    alphaTwo: "LU",
    numericThree: "442",
  },
  {
    name: "Macao",
    alphaTwo: "MO",
    numericThree: "446",
  },
  {
    name: "Madagascar",
    alphaTwo: "MG",
    numericThree: "450",
  },
  {
    name: "Malawi",
    alphaTwo: "MW",
    numericThree: "454",
  },
  {
    name: "Malaysia",
    alphaTwo: "MY",
    numericThree: "458",
  },
  {
    name: "Maldives",
    alphaTwo: "MV",
    numericThree: "462",
  },
  {
    name: "Mali",
    alphaTwo: "ML",
    numericThree: "466",
  },
  {
    name: "Malta",
    alphaTwo: "MT",
    numericThree: "470",
  },
  {
    name: "Marshall Islands",
    alphaTwo: "MH",
    numericThree: "584",
  },
  {
    name: "Martinique",
    alphaTwo: "MQ",
    numericThree: "474",
  },
  {
    name: "Mauritania",
    alphaTwo: "MR",
    numericThree: "478",
  },
  {
    name: "Mauritius",
    alphaTwo: "MU",
    numericThree: "480",
  },
  {
    name: "Mayotte",
    alphaTwo: "YT",
    numericThree: "175",
  },
  {
    name: "Mexico",
    alphaTwo: "MX",
    numericThree: "484",
  },
  {
    name: "Micronesia (Federated States of)",
    alphaTwo: "FM",
    numericThree: "583",
  },
  {
    name: "Moldova, Republic of",
    alphaTwo: "MD",
    numericThree: "498",
  },
  {
    name: "Monaco",
    alphaTwo: "MC",
    numericThree: "492",
  },
  {
    name: "Mongolia",
    alphaTwo: "MN",
    numericThree: "496",
  },
  {
    name: "Montenegro",
    alphaTwo: "ME",
    numericThree: "499",
  },
  {
    name: "Montserrat",
    alphaTwo: "MS",
    numericThree: "500",
  },
  {
    name: "Morocco",
    alphaTwo: "MA",
    numericThree: "504",
  },
  {
    name: "Mozambique",
    alphaTwo: "MZ",
    numericThree: "508",
  },
  {
    name: "Myanmar",
    alphaTwo: "MM",
    numericThree: "104",
  },
  {
    name: "Namibia",
    alphaTwo: "NA",
    numericThree: "516",
  },
  {
    name: "Nauru",
    alphaTwo: "NR",
    numericThree: "520",
  },
  {
    name: "Nepal",
    alphaTwo: "NP",
    numericThree: "524",
  },
  {
    name: "Netherlands",
    alphaTwo: "NL",
    numericThree: "528",
  },
  {
    name: "New Caledonia",
    alphaTwo: "NC",
    numericThree: "540",
  },
  {
    name: "New Zealand",
    alphaTwo: "NZ",
    numericThree: "554",
  },
  {
    name: "Nicaragua",
    alphaTwo: "NI",
    numericThree: "558",
  },
  {
    name: "Niger",
    alphaTwo: "NE",
    numericThree: "562",
  },
  {
    name: "Nigeria",
    alphaTwo: "NG",
    numericThree: "566",
  },
  {
    name: "Niue",
    alphaTwo: "NU",
    numericThree: "570",
  },
  {
    name: "Norfolk Island",
    alphaTwo: "NF",
    numericThree: "574",
  },
  {
    name: "North Macedonia",
    alphaTwo: "MK",
    numericThree: "807",
  },
  {
    name: "Northern Mariana Islands",
    alphaTwo: "MP",
    numericThree: "580",
  },
  {
    name: "Norway",
    alphaTwo: "NO",
    numericThree: "578",
  },
  {
    name: "Oman",
    alphaTwo: "OM",
    numericThree: "512",
  },
  {
    name: "Pakistan",
    alphaTwo: "PK",
    numericThree: "586",
  },
  {
    name: "Palau",
    alphaTwo: "PW",
    numericThree: "585",
  },
  {
    name: "Palestine, State of",
    alphaTwo: "PS",
    numericThree: "275",
  },
  {
    name: "Panama",
    alphaTwo: "PA",
    numericThree: "591",
  },
  {
    name: "Papua New Guinea",
    alphaTwo: "PG",
    numericThree: "598",
  },
  {
    name: "Paraguay",
    alphaTwo: "PY",
    numericThree: "600",
  },
  {
    name: "Peru",
    alphaTwo: "PE",
    numericThree: "604",
  },
  {
    name: "Philippines",
    alphaTwo: "PH",
    numericThree: "608",
  },
  {
    name: "Pitcairn",
    alphaTwo: "PN",
    numericThree: "612",
  },
  {
    name: "Poland",
    alphaTwo: "PL",
    numericThree: "616",
  },
  {
    name: "Portugal",
    alphaTwo: "PT",
    numericThree: "620",
  },
  {
    name: "Puerto Rico",
    alphaTwo: "PR",
    numericThree: "630",
  },
  {
    name: "Qatar",
    alphaTwo: "QA",
    numericThree: "634",
  },
  {
    name: "Réunion",
    alphaTwo: "RE",
    numericThree: "638",
  },
  {
    name: "Romania",
    alphaTwo: "RO",
    numericThree: "642",
  },
  {
    name: "Russian Federation",
    alphaTwo: "RU",
    numericThree: "643",
  },
  {
    name: "Rwanda",
    alphaTwo: "RW",
    numericThree: "646",
  },
  {
    name: "Saint Barthélemy",
    alphaTwo: "BL",
    numericThree: "652",
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    alphaTwo: "SH",
    numericThree: "654",
  },
  {
    name: "Saint Kitts and Nevis",
    alphaTwo: "KN",
    numericThree: "659",
  },
  {
    name: "Saint Lucia",
    alphaTwo: "LC",
    numericThree: "662",
  },
  {
    name: "Saint Martin (French part)",
    alphaTwo: "MF",
    numericThree: "663",
  },
  {
    name: "Saint Pierre and Miquelon",
    alphaTwo: "PM",
    numericThree: "666",
  },
  {
    name: "Saint Vincent and the Grenadines",
    alphaTwo: "VC",
    numericThree: "670",
  },
  {
    name: "Samoa",
    alphaTwo: "WS",
    numericThree: "882",
  },
  {
    name: "San Marino",
    alphaTwo: "SM",
    numericThree: "674",
  },
  {
    name: "Sao Tome and Principe",
    alphaTwo: "ST",
    numericThree: "678",
  },
  {
    name: "Saudi Arabia",
    alphaTwo: "SA",
    numericThree: "682",
  },
  {
    name: "Senegal",
    alphaTwo: "SN",
    numericThree: "686",
  },
  {
    name: "Serbia",
    alphaTwo: "RS",
    numericThree: "688",
  },
  {
    name: "Seychelles",
    alphaTwo: "SC",
    numericThree: "690",
  },
  {
    name: "Sierra Leone",
    alphaTwo: "SL",
    numericThree: "694",
  },
  {
    name: "Singapore",
    alphaTwo: "SG",
    numericThree: "702",
  },
  {
    name: "Sint Maarten (Dutch part)",
    alphaTwo: "SX",
    numericThree: "534",
  },
  {
    name: "Slovakia",
    alphaTwo: "SK",
    numericThree: "703",
  },
  {
    name: "Slovenia",
    alphaTwo: "SI",
    numericThree: "705",
  },
  {
    name: "Solomon Islands",
    alphaTwo: "SB",
    numericThree: "090",
  },
  {
    name: "Somalia",
    alphaTwo: "SO",
    numericThree: "706",
  },
  {
    name: "South Africa",
    alphaTwo: "ZA",
    numericThree: "710",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    alphaTwo: "GS",
    numericThree: "239",
  },
  {
    name: "South Sudan",
    alphaTwo: "SS",
    numericThree: "728",
  },
  {
    name: "Spain",
    alphaTwo: "ES",
    numericThree: "724",
  },
  {
    name: "Sri Lanka",
    alphaTwo: "LK",
    numericThree: "144",
  },
  {
    name: "Sudan",
    alphaTwo: "SD",
    numericThree: "729",
  },
  {
    name: "Suriname",
    alphaTwo: "SR",
    numericThree: "740",
  },
  {
    name: "Svalbard and Jan Mayen",
    alphaTwo: "SJ",
    numericThree: "744",
  },
  {
    name: "Sweden",
    alphaTwo: "SE",
    numericThree: "752",
  },
  {
    name: "Switzerland",
    alphaTwo: "CH",
    numericThree: "756",
  },
  {
    name: "Syrian Arab Republic",
    alphaTwo: "SY",
    numericThree: "760",
  },
  {
    name: "Taiwan, Province of China",
    alphaTwo: "TW",
    numericThree: "158",
  },
  {
    name: "Tajikistan",
    alphaTwo: "TJ",
    numericThree: "762",
  },
  {
    name: "Tanzania, United Republic of",
    alphaTwo: "TZ",
    numericThree: "834",
  },
  {
    name: "Thailand",
    alphaTwo: "TH",
    numericThree: "764",
  },
  {
    name: "Timor-Leste",
    alphaTwo: "TL",
    numericThree: "626",
  },
  {
    name: "Togo",
    alphaTwo: "TG",
    numericThree: "768",
  },
  {
    name: "Tokelau",
    alphaTwo: "TK",
    numericThree: "772",
  },
  {
    name: "Tonga",
    alphaTwo: "TO",
    numericThree: "776",
  },
  {
    name: "Trinidad and Tobago",
    alphaTwo: "TT",
    numericThree: "780",
  },
  {
    name: "Tunisia",
    alphaTwo: "TN",
    numericThree: "788",
  },
  {
    name: "Turkey",
    alphaTwo: "TR",
    numericThree: "792",
  },
  {
    name: "Turkmenistan",
    alphaTwo: "TM",
    numericThree: "795",
  },
  {
    name: "Turks and Caicos Islands",
    alphaTwo: "TC",
    numericThree: "796",
  },
  {
    name: "Tuvalu",
    alphaTwo: "TV",
    numericThree: "798",
  },
  {
    name: "Uganda",
    alphaTwo: "UG",
    numericThree: "800",
  },
  {
    name: "Ukraine",
    alphaTwo: "UA",
    numericThree: "804",
  },
  {
    name: "United Arab Emirates",
    alphaTwo: "AE",
    numericThree: "784",
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    alphaTwo: "GB",
    numericThree: "826",
  },
  {
    name: "United States of America",
    alphaTwo: "US",
    numericThree: "840",
  },
  {
    name: "United States Minor Outlying Islands",
    alphaTwo: "UM",
    numericThree: "581",
  },
  {
    name: "Uruguay",
    alphaTwo: "UY",
    numericThree: "858",
  },
  {
    name: "Uzbekistan",
    alphaTwo: "UZ",
    numericThree: "860",
  },
  {
    name: "Vanuatu",
    alphaTwo: "VU",
    numericThree: "548",
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    alphaTwo: "VE",
    numericThree: "862",
  },
  {
    name: "Viet Nam",
    alphaTwo: "VN",
    numericThree: "704",
  },
  {
    name: "Virgin Islands (British)",
    alphaTwo: "VG",
    numericThree: "092",
  },
  {
    name: "Virgin Islands (U.S.)",
    alphaTwo: "VI",
    numericThree: "850",
  },
  {
    name: "Wallis and Futuna",
    alphaTwo: "WF",
    numericThree: "876",
  },
  {
    name: "Western Sahara",
    alphaTwo: "EH",
    numericThree: "732",
  },
  {
    name: "Yemen",
    alphaTwo: "YE",
    numericThree: "887",
  },
  {
    name: "Zambia",
    alphaTwo: "ZM",
    numericThree: "894",
  },
  {
    name: "Zimbabwe",
    alphaTwo: "ZW",
    numericThree: "716",
  },
];

export default countries;
