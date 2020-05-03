class Utils {

  // calc song rating
  static arcCalcSongRating(score: number, ptt: number): number {

    if (score >= 10000000)
      return ptt + 2;

    else if (score >= 9950000)
      return ptt + 1.5 + (score - 9950000) / 100000;

    else if (score >= 9800000)
      return ptt + 1 + (score - 9800000) / 400000;

    let _value = ptt + (score - 9500000) / 300000;
    return _value < 0 ? 0 : _value;

  }

  // map song difficulty to specific format
  static arcMapDiffFormat(input: string | number, format: number): string | null {

    const _table_format: Array<string> = [
      '0', '1', '2',
      'pst', 'prs', 'ftr',
      'PST', 'PRS', 'FTR',
      'past', 'present', 'future',
      'PAST', 'PRESENT', 'FUTURE'
    ];

    if (typeof input == 'string')
      input = input.toLowerCase();

    // try parse input as an integer
    let _to_format: string | null = null;
    _table_format.every((element: string, index: number) => {
      if (input != element)
        return true;

      _to_format = _table_format[format * 3 + index % 3];
      return false;
    });

    if (!_to_format) return '';

    return _to_format;

  }

  // match client user agent
  static httpMatchUserAgent(ua: string): boolean {

    if (typeof BOTARCAPI_WHITELIST != 'object') return true;
    if (!BOTARCAPI_WHITELIST.length) return true;

    for (const v of BOTARCAPI_WHITELIST) {
      if (v.test(ua)) return true;
    }

    return false;
  }

}

export default Utils;