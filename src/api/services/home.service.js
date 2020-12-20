import {refactoryAPI} from "../baseAPI";

const callAPIPartners = () => refactoryAPI("partner.json");

const callAPIAsSeeOn = () => refactoryAPI.get("seen_on.json");

export {callAPIPartners, callAPIAsSeeOn}
