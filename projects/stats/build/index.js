"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing classes
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = Summary_1.Summary.winsAnalysistWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
