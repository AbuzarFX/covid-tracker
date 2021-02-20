export const GLOBAL_STATS_URL="https://disease.sh/v3/covid-19/all";

export type CaseType ="recovered" | "deaths" | "cases" | "all";

export const GLOBAL_HISTORY_STAT_URL="https://disease.sh/v3/covid-19/historical/all?lastdays=120"

export const caseTypeColors={
	"deaths":{
		color:"#d35d6e",
		backgroundColor:"rgba(211, 93, 110, 0.5)",
		multiplier:1500
	},
	"recovered":{
		color:"#5aa469",
		backgroundColor:"rgba(90, 164, 105, 0.5)",
		multiplier:400
	},
	"cases":{
		color:"#db6400",
		backgroundColor:"rgba(219, 100, 0, 0.5)",
		multiplier:500
	},
	"all":{
		color:"",
		backgroundColor:"",
		multiplier:0
	}
}


export const mapCenter:[number,number]=[20.593683,78.962883];