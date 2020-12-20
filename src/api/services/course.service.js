import { refactoryAPI } from "../baseAPI";

const callAPIAlumniList = () => refactoryAPI.get("alumni-report.json");

export { callAPIAlumniList };
