export type RatingState = "active" | "partial" | "inactive";

export type StarRatingItem = {
	index: number;
	state: RatingState;
};

export type StarRatingStarProps = {
	index: number;
	state?: RatingState;
	class?: string;
};