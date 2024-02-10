
username = kadokan81
password =  N4dhag96FLFqjlQC



mongoKey = tH9iqELzFAUNXpfA2svNJXRngQlfqvpgpPGQt3UiHYAbc20nUcEPBzXSsMImpv7K


stepzen import curl --request POST 'https://eu-central-1.aws.data.mongodb-api.com/app/data-kpcvf/endpoint/data/v1/action/find' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: tH9iqELzFAUNXpfA2svNJXRngQlfqvpgpPGQt3UiHYAbc20nUcEPBzXSsMImpv7K' \
--data-raw '{
    "collection":"sets",
    "database":"workouts",
    "dataSource":"Cluster0"
}'

 
 
 