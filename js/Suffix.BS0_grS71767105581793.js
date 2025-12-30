import { importShared } from './index.BxB45aCK1767105581793.js';
import { configProviderInjectionKey, cB, c, cE, resolveSlot, cM, cNotM } from './light.CLUJsvFB1767105581793.js';
import { useStyle } from './use-style.DNeB6HHX1767105581793.js';
import { replaceable, NBaseIcon, ErrorIcon } from './Close.VNV_OzKM1767105581793.js';
import { iconSwitchTransition, NIconSwitchTransition, NBaseLoading } from './Loading.DMQwrvK31767105581793.js';

const {createTextVNode} = await importShared('vue');

function render(r, ...args) {
  if (typeof r === 'function') {
    return r(...args);
  } else if (typeof r === 'string') {
    return createTextVNode(r);
  } else if (typeof r === 'number') {
    return createTextVNode(String(r));
  } else {
    return null;
  }
}

const enUS$1 = {
  name: 'en-US',
  global: {
    undo: 'Undo',
    redo: 'Redo',
    confirm: 'Confirm',
    clear: 'Clear'
  },
  Popconfirm: {
    positiveText: 'Confirm',
    negativeText: 'Cancel'
  },
  Cascader: {
    placeholder: 'Please Select',
    loading: 'Loading',
    loadingRequiredMessage: label => `Please load all ${label}'s descendants before checking it.`
  },
  Time: {
    dateFormat: 'yyyy-MM-dd',
    dateTimeFormat: 'yyyy-MM-dd HH:mm:ss'
  },
  DatePicker: {
    yearFormat: 'yyyy',
    monthFormat: 'MMM',
    dayFormat: 'eeeeee',
    yearTypeFormat: 'yyyy',
    monthTypeFormat: 'yyyy-MM',
    dateFormat: 'yyyy-MM-dd',
    dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
    quarterFormat: 'yyyy-qqq',
    weekFormat: 'YYYY-w',
    clear: 'Clear',
    now: 'Now',
    confirm: 'Confirm',
    selectTime: 'Select Time',
    selectDate: 'Select Date',
    datePlaceholder: 'Select Date',
    datetimePlaceholder: 'Select Date and Time',
    monthPlaceholder: 'Select Month',
    yearPlaceholder: 'Select Year',
    quarterPlaceholder: 'Select Quarter',
    weekPlaceholder: 'Select Week',
    startDatePlaceholder: 'Start Date',
    endDatePlaceholder: 'End Date',
    startDatetimePlaceholder: 'Start Date and Time',
    endDatetimePlaceholder: 'End Date and Time',
    startMonthPlaceholder: 'Start Month',
    endMonthPlaceholder: 'End Month',
    monthBeforeYear: true,
    firstDayOfWeek: 6,
    today: 'Today'
  },
  DataTable: {
    checkTableAll: 'Select all in the table',
    uncheckTableAll: 'Unselect all in the table',
    confirm: 'Confirm',
    clear: 'Clear'
  },
  LegacyTransfer: {
    sourceTitle: 'Source',
    targetTitle: 'Target'
  },
  Transfer: {
    selectAll: 'Select all',
    unselectAll: 'Unselect all',
    clearAll: 'Clear',
    total: num => `Total ${num} items`,
    selected: num => `${num} items selected`
  },
  Empty: {
    description: 'No Data'
  },
  Select: {
    placeholder: 'Please Select'
  },
  TimePicker: {
    placeholder: 'Select Time',
    positiveText: 'OK',
    negativeText: 'Cancel',
    now: 'Now',
    clear: 'Clear'
  },
  Pagination: {
    goto: 'Goto',
    selectionSuffix: 'page'
  },
  DynamicTags: {
    add: 'Add'
  },
  Log: {
    loading: 'Loading'
  },
  Input: {
    placeholder: 'Please Input'
  },
  InputNumber: {
    placeholder: 'Please Input'
  },
  DynamicInput: {
    create: 'Create'
  },
  ThemeEditor: {
    title: 'Theme Editor',
    clearAllVars: 'Clear All Variables',
    clearSearch: 'Clear Search',
    filterCompName: 'Filter Component Name',
    filterVarName: 'Filter Variable Name',
    import: 'Import',
    export: 'Export',
    restore: 'Reset to Default'
  },
  Image: {
    tipPrevious: 'Previous picture (←)',
    tipNext: 'Next picture (→)',
    tipCounterclockwise: 'Counterclockwise',
    tipClockwise: 'Clockwise',
    tipZoomOut: 'Zoom out',
    tipZoomIn: 'Zoom in',
    tipDownload: 'Download',
    tipClose: 'Close (Esc)',
    // TODO: translation
    tipOriginalSize: 'Zoom to original size'
  },
  Heatmap: {
    less: 'less',
    more: 'more',
    monthFormat: 'MMM',
    weekdayFormat: 'eee'
  }
};

function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};

const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];

const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};

const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};

const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};

/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

const dateEnUs = {
  name: 'en-US',
  locale: enUS
};

const {computed,inject} = await importShared('vue');
function useLocale(ns) {
  const {
    mergedLocaleRef,
    mergedDateLocaleRef
  } = inject(configProviderInjectionKey, null) || {};
  const localeRef = computed(() => {
    var _a, _b;
    return (_b = (_a = mergedLocaleRef === null || mergedLocaleRef === void 0 ? void 0 : mergedLocaleRef.value) === null || _a === void 0 ? void 0 : _a[ns]) !== null && _b !== void 0 ? _b : enUS$1[ns];
  });
  const dateLocaleRef = computed(() => {
    var _a;
    return (_a = mergedDateLocaleRef === null || mergedDateLocaleRef === void 0 ? void 0 : mergedDateLocaleRef.value) !== null && _a !== void 0 ? _a : dateEnUs;
  });
  return {
    dateLocaleRef,
    localeRef
  };
}

const {defineComponent: defineComponent$3,h: h$4} = await importShared('vue');

const ChevronDownIcon = defineComponent$3({
  name: 'ChevronDown',
  render() {
    return h$4("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h$4("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
});

const {h: h$3} = await importShared('vue');
const ClearIcon = replaceable('clear', () => h$3("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h$3("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h$3("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h$3("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
})))));

// vars:
// --n-bezier
// --n-clear-color
// --n-clear-size
// --n-clear-color-hover
// --n-clear-color-pressed
const style$1 = cB('base-clear', `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [c('>', [cE('clear', `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [c('&:hover', `
 color: var(--n-clear-color-hover)!important;
 `), c('&:active', `
 color: var(--n-clear-color-pressed)!important;
 `)]), cE('placeholder', `
 display: flex;
 `), cE('clear, placeholder', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [iconSwitchTransition({
  originalTransform: 'translateX(-50%) translateY(-50%)',
  left: '50%',
  top: '50%'
})])])]);

const {defineComponent: defineComponent$2,h: h$2,toRef: toRef$1} = await importShared('vue');
const NBaseClear = defineComponent$2({
  name: 'BaseClear',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    show: Boolean,
    onClear: Function
  },
  setup(props) {
    useStyle('-base-clear', style$1, toRef$1(props, 'clsPrefix'));
    return {
      handleMouseDown(e) {
        e.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h$2("div", {
      class: `${clsPrefix}-base-clear`
    }, h$2(NIconSwitchTransition, null, {
      default: () => {
        var _a, _b;
        return this.show ? h$2("div", {
          key: "dismiss",
          class: `${clsPrefix}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": true
        }, resolveSlot(this.$slots.icon, () => [h$2(NBaseIcon, {
          clsPrefix: clsPrefix
        }, {
          default: () => h$2(ClearIcon, null)
        })])) : h$2("div", {
          key: "icon",
          class: `${clsPrefix}-base-clear__placeholder`
        }, (_b = (_a = this.$slots).placeholder) === null || _b === void 0 ? void 0 : _b.call(_a));
      }
    }));
  }
});

// vars:
// --n-close-border-radius
// --n-close-color-hover
// --n-close-color-pressed
// --n-close-icon-color
// --n-close-icon-color-hover
// --n-close-icon-color-pressed
// --n-close-icon-color-disabled
const style = cB('base-close', `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`, [cM('absolute', `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), c('&::before', `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), cNotM('disabled', [c('&:hover', `
 color: var(--n-close-icon-color-hover);
 `), c('&:hover::before', `
 background-color: var(--n-close-color-hover);
 `), c('&:focus::before', `
 background-color: var(--n-close-color-hover);
 `), c('&:active', `
 color: var(--n-close-icon-color-pressed);
 `), c('&:active::before', `
 background-color: var(--n-close-color-pressed);
 `)]), cM('disabled', `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), cM('round', [c('&::before', `
 border-radius: 50%;
 `)])]);

const {defineComponent: defineComponent$1,h: h$1,toRef} = await importShared('vue');
const NBaseClose = defineComponent$1({
  name: 'BaseClose',
  props: {
    isButtonTag: {
      type: Boolean,
      default: true
    },
    clsPrefix: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    focusable: {
      type: Boolean,
      default: true
    },
    round: Boolean,
    onClick: Function,
    absolute: Boolean
  },
  setup(props) {
    useStyle('-base-close', style, toRef(props, 'clsPrefix'));
    return () => {
      const {
        clsPrefix,
        disabled,
        absolute,
        round,
        isButtonTag
      } = props;
      const Tag = isButtonTag ? 'button' : 'div';
      return h$1(Tag, {
        type: isButtonTag ? 'button' : undefined,
        tabindex: disabled || !props.focusable ? -1 : 0,
        "aria-disabled": disabled,
        "aria-label": "close",
        role: isButtonTag ? undefined : 'button',
        disabled: disabled,
        class: [`${clsPrefix}-base-close`, absolute && `${clsPrefix}-base-close--absolute`, disabled && `${clsPrefix}-base-close--disabled`, round && `${clsPrefix}-base-close--round`],
        onMousedown: e => {
          if (!props.focusable) {
            e.preventDefault();
          }
        },
        onClick: props.onClick
      }, h$1(NBaseIcon, {
        clsPrefix: clsPrefix
      }, {
        default: () => h$1(ErrorIcon, null)
      }));
    };
  }
});

const {defineComponent,h} = await importShared('vue');
const NBaseSuffix = defineComponent({
  name: 'InternalSelectionSuffix',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    showArrow: {
      type: Boolean,
      default: undefined
    },
    showClear: {
      type: Boolean,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    },
    onClear: Function
  },
  setup(props, {
    slots
  }) {
    return () => {
      const {
        clsPrefix
      } = props;
      return h(NBaseLoading, {
        clsPrefix: clsPrefix,
        class: `${clsPrefix}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: props.loading
      }, {
        default: () => props.showArrow ? h(NBaseClear, {
          clsPrefix: clsPrefix,
          show: props.showClear,
          onClear: props.onClear
        }, {
          placeholder: () => h(NBaseIcon, {
            clsPrefix: clsPrefix,
            class: `${clsPrefix}-base-suffix__arrow`
          }, {
            default: () => resolveSlot(slots.default, () => [h(ChevronDownIcon, null)])
          })
        }) : null
      });
    };
  }
});

export { ChevronDownIcon, NBaseClear, NBaseClose, NBaseSuffix, buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn, dateEnUs, enUS, enUS$1, render, useLocale };
//# sourceMappingURL=Suffix.BS0_grS71767105581793.js.map
