// importing classes
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysistWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
