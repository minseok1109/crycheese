export type TabType = "BURGER" | "SIDE" | "SET";

export interface MenuItem {
	name: string;
	image: string;
}

export const RECOMMENDED_MENUS: MenuItem[] = [
	{
		name: "버거 치킨 콤보",
		image: "/crycheese/추천 메뉴/cheeseburger_chicken_2types_2pcs_drink.png",
	},
	{
		name: "치즈버거 세트 + 치킨 핑거 2조각",
		image: "/crycheese/추천 메뉴/cheeseburger_fries_chicken_2pcs_drink.png",
	},
	{
		name: "치즈버거 세트 + 불치킨 핑거 2조각",
		image:
			"/crycheese/추천 메뉴/cheeseburger_fries_spicy_chicken_2pcs_drink.png",
	},
];

export const MENUS_BY_CATEGORY: Record<TabType, MenuItem[]> = {
	BURGER: [
		{
			name: "싱글 치즈버거",
			image: "/crycheese/버거/single_cheeseburger_cutout.png",
		},
		{
			name: "더블치즈버거",
			image: "/crycheese/버거/single_double_cheeseburger_cutout.png",
		},
		{
			name: "치킨 버거",
			image: "/crycheese/버거/chicken_burger_cutout.png",
		},
		{
			name: "불치킨 버거",
			image: "/crycheese/버거/spicy_chicken_burger_cutout.png",
		},
	],
	SIDE: [
		{
			name: "치즈 감자",
			image: "/crycheese/사이드 메뉴/cheese_fries_cutout.png",
		},
		{
			name: "치킨핑거 (2pc)",
			image: "/crycheese/사이드 메뉴/chicken_finger_platter_2pcs_cutout.png",
		},
		{
			name: "불치킨핑거 (2pc)",
			image:
				"/crycheese/사이드 메뉴/spicy_chicken_finger_platter_2pcs_cutout.png",
		},
		{
			name: "치킨핑거 플래터 (4pc)",
			image: "/crycheese/사이드 메뉴/chicken_finger_platter_4pcs.jpg",
		},
		{
			name: "불치킨핑거 플래터 (4pc)",
			image: "/crycheese/사이드 메뉴/spicy_chicken_finger_platter_4pcs_cutout.png",
		},
	],
	SET: [
		{
			name: "치즈버거세트",
			image: "/crycheese/세트/set_cheeseburger_fries_drink.jpg",
		},
		{
			name: "더블치즈버거 세트",
			image: "/crycheese/세트/set_cheeseburger_fries_drink_1.jpg",
		},
		{
			name: "치킨샌드위치 세트",
			image: "/crycheese/세트/chicken_burger_set.jpg",
		},
		{
			name: "불치킨샌드위치 세트",
			image: "/crycheese/세트/spicy_chicken_burger_set_cutout.png",
		},
	],
};

export const TABS: { id: TabType; label: string }[] = [
	{ id: "SET", label: "SET" },
	{ id: "BURGER", label: "BURGER" },
	{ id: "SIDE", label: "SIDE" },
];

const CARD_SIZES = {
	BURGER: {
		width: "w-[calc(50%-12px)] sm:w-[280px]",
		imageHeight: "h-[300px]",
	},
	SIDE: {
		width: "w-[calc(50%-12px)] sm:w-[240px]",
		imageHeight: "h-[280px]",
	},
	DEFAULT: {
		width: "w-[calc(60%-12px)] sm:w-[200px]",
		imageHeight: "h-[340px]",
	},
} as const;

export function getCardSizes(tab: TabType): {
	width: string;
	imageHeight: string;
} {
	switch (tab) {
		case "BURGER":
			return CARD_SIZES.BURGER;
		case "SIDE":
			return CARD_SIZES.SIDE;
		default:
			return CARD_SIZES.DEFAULT;
	}
}
