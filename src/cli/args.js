const parseArgs = () => {
    const args = process.argv.slice(2);
    const formattedArgs = [];

    for (let i = 0; i < args.length; i+=2) {
        formattedArgs.push(`${args[i].slice(2)} is ${args[i+1]}`);
    }
    
    console.log(formattedArgs.join(', '));
};

parseArgs();