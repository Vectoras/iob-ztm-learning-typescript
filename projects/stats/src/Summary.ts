// importing classes
import { WinsAnalysis } from './anayzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';
// importing types
import { MatchData } from './MatchData';

// --- defining interfaces -------------------------

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// -------------------------------------------------

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysistWithHtmlReport(team: string) {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
