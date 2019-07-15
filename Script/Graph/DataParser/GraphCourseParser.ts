import { GraphUrlParser } from "./GraphUrlParser";
import { LoggedUser } from "../../LoggedUser";
import { GraphData } from "../GraphData";

export class GraphCourseParser{
	public static async GetGraphData(courseId: number): Promise<GraphData>{
		return GraphUrlParser.GetGraphData(
			`${LoggedUser.WisProxyUrl}/FIT/st/course-g.php?ects=1&id=${courseId}`
		);
	}
}
