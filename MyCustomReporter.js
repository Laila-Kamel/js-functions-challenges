const { default: axios } = require("axios");

class MyCustomReporter{
    constructor(globalConfig, options){
        this.globalConfig=globalConfig;
        this.options=options;
    }
    onRunComplete(contexts, results){
        console.log("Custom reporter output:");
        console.log("Options:", this.options);
        console.log("Failed tests:", results.numFailedTests);
        const {numFailedTests, numPassedTests,numFailedTestSuites,numPassedTestSuites}=results;
        axios({
            url:"https://formspree.io/f/xlevgrzj",
            method: 'post',
        headers: {
          'Accept': 'application/json'
        },
        data:{Student_Name: process.env.Student_Name, Passed_Test_Suite:numPassedTestSuites,Passed_Tests:numPassedTests,Failed_Test_Suite:numFailedTestSuites,Failed_Tests:numFailedTests}
      })
      
    }
}

module.exports=MyCustomReporter;