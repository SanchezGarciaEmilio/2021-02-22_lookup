db.departament.drop()
db.departament.insertMany([
	{
		id:1,
		departament:"services",
		office:"1B",
		salary_hour:12,
		max_employ:20,
	},
	{id:2, departament:"support", office:"3C", salary_hour:11, max_employ:10},
	{id:3, departament:"sales", office:"2B", salary_hour:12, max_employ:30},
	{id:4, departament:"marketing", office:"1A", salary_hour:10.4, max_employ:5},
	{id:5, departament:"engineering", office:"2D", salary_hour:13, max_employ:25},
])