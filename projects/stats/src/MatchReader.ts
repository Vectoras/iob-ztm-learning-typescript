// importing custom modules
import { dateStringToDate } from './utils';
// importing enums
import { MatchResult } from './MatchResult';
// importing types
import { MatchData } from './MatchData';
// importing classes
import { CsvFileReader } from './CsvFileReader';

// defining interfaces
interface DataReader {
  read(): void;
  data: string[][];
}

//  -----------------------------------------------------

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]), //
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
