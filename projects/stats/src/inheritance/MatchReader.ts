// importing classes
import { CsvFileReader } from './CsvFileReader';

// importing enums
import { MatchResult } from './MatchResult';

// importing custom modules
import { dateStringToDate } from './utils';

// defining types
export type MatchData = [Date, string, string, number, number, MatchResult, string];

//  ----------------------------------------------------------

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]), //
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
