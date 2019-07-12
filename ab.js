// HELLO SLACK FUNCTION
exports.handler = function(context, event, callback) {
    let botName = event.CurrentInput;
    
    if(botName.includes("jus")){ //This is the name we want to use as trigger word
        let question = [
            {
                "question":{
                    "say": "Hi there, can you give the GitHub username? :computer:"
                },
                "name":"bot_name",
            },
        ];
        let responseObject = {
	        "actions": [
		        {
			        "collect": {
				        "name": "ask_name",
				        "questions":question,
					    "on_complete": {
                            "redirect": "task://hello2"
				        },
		    	    }
		        }
	        ]
        };
    callback(null, responseObject);
    }
};