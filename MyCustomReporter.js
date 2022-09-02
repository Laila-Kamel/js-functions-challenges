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
        axios({
            url:"https://formspree.io/f/xlevgrzj",
            method: 'post',
        headers: {
          'Accept': 'application/json'
        },
        data: results
      }).then((response) => { console.log(response); })
      
    }
}

module.exports=MyCustomReporter;