db.sales.drop()
db.sales.insertMany([
	{
		idClient:201,
		name:"Ciel Leadbitter",
        shirt_size:"XL",
        gender:"F",
        employ:[103,124]
	},
    {idClient:202, name:"Paola Hakeworth", shirt_size:"L", gender:"M", employ:[102,114,101]},
    {idClient:203, name:"Jameson Trask", shirt_size:"XL", gender:"M", employ:[109,119]},
    {idClient:204, name:"Kerrin Burgyn", shirt_size:"XL", gender:"F", employ:[103,121]},
    {idClient:205, name:"Asia Spiteri", shirt_size:"S", gender:"M", employ:[107]},
    {idClient:206, name:"Klement Weond", shirt_size:"XS", gender:"F", employ:[112,114,125]},
    {idClient:207, name:"Ware Tanfield", shirt_size:"XS", gender:"M", employ:[108,102,116,120]},
    {idClient:208, name:"Carlie Kalinsky", shirt_size:"XS", gender:"F", employ:[105,122]},
    {idClient:209, name:"Rudolph Weir", shirt_size:"S", gender:"M", employ:[118,104,123,125]},
])