import animation404 from "../../../assets/svg/404-animation.svg?raw";
import balancePending from "../../../assets/svg/balance-pending.svg?raw";
import bubbleExpand from "../../../assets/svg/bubble-expand.svg?raw";
import email from "../../../assets/svg/email.svg?raw";
import loadingTravel from "../../../assets/svg/loading-travel.svg?raw";
import messagePhone from "../../../assets/svg/message-phone.svg?raw";
import passportTravel from "../../../assets/svg/passport-travel.svg?raw";
import rejected from "../../../assets/svg/rejected.svg?raw";
import traveler from "../../../assets/svg/traveler.svg?raw";

export const svgMap = {
	"404-animation": animation404,
	"balance-pending": balancePending,
	"bubble-expand": bubbleExpand,
	email,
	"loading-travel": loadingTravel,
	"message-phone": messagePhone,
	"passport-travel": passportTravel,
	rejected,
	traveler,
} as const;

export type SvgAnimateKey = keyof typeof svgMap;
