"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
// importing classes
const WinsAnalysis_1 = require("./anayzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// -------------------------------------------------
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysistWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
