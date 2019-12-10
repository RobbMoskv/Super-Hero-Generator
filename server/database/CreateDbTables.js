
const AWS = require("aws-sdk");

AWS.config.update({
    region: "eu-west-1",
});

const dynamodb = new AWS.DynamoDB();
const tables = ['SuperHeroColorCollation', 'SuperHeroPowerCollation'];

for (let i = 0; i < tables.length; i++) {
    const params = {
        TableName: `${tables[i]}`,
        KeySchema: [
            { AttributeName: "letter", KeyType: "HASH" },  //Partition key
        ],
        AttributeDefinitions: [
            { AttributeName: "letter", AttributeType: "S" },
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        }
    };

    dynamodb.createTable(params, function (err, data) {
        if (err) {
            console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
        }
    });
}

