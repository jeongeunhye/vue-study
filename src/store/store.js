import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const REF_INPUT = 'REF_INPUT';
export const REF_SWIPER = 'REF_SWIPER';
export const REF_SPINNER = 'REF_SPINNER';
export const HEADER_SEARCH_FOCUSOUT_CHECK = 'HEADER_SEARCH_FOCUSOUT_CHECK';
export const ALL_MENU_OPEN_CHECK = 'ALL_MENU_OPEN_CHECK';
export const CART_ARR = 'CART_ARR';

// 전체메뉴
export const allMenuList = [
	// s : repeat
	{
		id: 'm01000',
		title: 'TV쇼핑', // 1depth
		subList: [
			{id: 'm01100', title: 'TV쇼핑-1',
				subList: [ // 2depth
					{id: 'm01110', title: 'TV쇼핑-1-1',
						subList: [ // 3depth
							{id: 'm01111', title: 'TV쇼핑-1-1-1',}, // 4depth // allMenuList[0].subList[0].subList[0].subList[0].title
							{id: 'm01112', title: 'TV쇼핑-1-1-2',}, // 4depth // allMenuList[0].subList[0].subList[0].subList[1].title
							{id: 'm01113', title: 'TV쇼핑-1-1-3',}, // 4depth // allMenuList[0].subList[0].subList[0].subList[2].title
						],
					},
					{id: 'm01120', title: 'TV쇼핑-1-2',
						subList: [ // 3depth
							{id: 'm01121', title: 'TV쇼핑-1-2-1',}, // 4depth // allMenuList[0].subList[0].subList[1].subList[0].title
							{id: 'm01122', title: 'TV쇼핑-1-2-2',}, // 4depth // allMenuList[0].subList[0].subList[1].subList[1].title
							{id: 'm01123', title: 'TV쇼핑-1-2-3',}, // 4depth // allMenuList[0].subList[0].subList[1].subList[2].title
						],
					},
					{id: 'm01130', title: 'TV쇼핑-1-3',
						subList: [ // 3depth
							{id: 'm01131', title: 'TV쇼핑-1-3-1',}, // 4depth
							{id: 'm01132', title: 'TV쇼핑-1-3-2',},
						],
					},
				],
			},
			{id: 'm01200', title: 'TV쇼핑-2',
				subList: [ // 2depth
					{id: 'm01210', title: 'TV쇼핑-2-1',
						subList: [ // 3depth
							{id: 'm01211', title: 'TV쇼핑-2-1-1',}, // 4depth
							{id: 'm01212', title: 'TV쇼핑-2-1-2',},
							{id: 'm01213', title: 'TV쇼핑-2-1-3',},
						],
					},
					{id: 'm01220', title: 'TV쇼핑-2-2',
						subList: [ // 3depth
							{id: 'm01221', title: 'TV쇼핑-2-2-1',}, // 4depth
							{id: 'm01222', title: 'TV쇼핑-2-2-2',},
							{id: 'm01223', title: 'TV쇼핑-2-2-3',},
						],
					},
					{id: 'm01230', title: 'TV쇼핑-2-3',
						subList: [ // 3depth
							{id: 'm01231', title: 'TV쇼핑-2-3-1',}, // 4depth
							{id: 'm01232', title: 'TV쇼핑-2-3-2',},
						],
					},
				],
			},
			{id: 'm01300', title: 'TV쇼핑-3',
				subList: [
					{id: 'm01310', title: 'TV쇼핑-3-1',
						subList: [
							{id: 'm01311', title: 'TV쇼핑-3-1-1',},
							{id: 'm01312', title: 'TV쇼핑-3-1-2',},
							{id: 'm01313', title: 'TV쇼핑-3-1-3',},
						],
					},
					{id: 'm01320', title: 'TV쇼핑-3-2',
						subList: [
							{id: 'm01321', title: 'TV쇼핑-3-2-1',},
							{id: 'm01322', title: 'TV쇼핑-3-2-2',},
							{id: 'm01323', title: 'TV쇼핑-3-2-3',},
						],
					},
					{id: 'm01330', title: 'TV쇼핑-3-3',
						subList: [
							{id: 'm01331', title: 'TV쇼핑-3-3-1',},
							{id: 'm01332', title: 'TV쇼핑-3-3-2',},
						],
					},
				],
			},
		],
		test: [
			{cnt: 1, prodInfo: []},
			{cnt: 1, prodInfo: []},
			{cnt: 1, prodInfo: []}
		]
	},
	// e : repeat
	// s : repeat
	{
		id: 'm02000',
		title: '패션의류/속옷', // 1depth
		subList: [
			{id: 'm02100', title: '패션의류/속옷-1',
				subList: [ // 2depth
					{id: 'm02110', title: '패션의류/속옷-1-1',
						subList: [ // 3depth
							{id: 'm02111', title: '패션의류/속옷-1-1-1',}, // 4depth
							{id: 'm02112', title: '패션의류/속옷-1-1-2',},
							{id: 'm02113', title: '패션의류/속옷-1-1-3',},
						],
					},
					{id: 'm02120', title: '패션의류/속옷-1-2',
						subList: [ // 3depth
							{id: 'm02121', title: '패션의류/속옷-1-2-1',}, // 4depth
							{id: 'm02122', title: '패션의류/속옷-1-2-2',},
							{id: 'm02123', title: '패션의류/속옷-1-2-3',},
						],
					},
					{id: 'm02130', title: '패션의류/속옷-1-3',
						subList: [ // 3depth
							{id: 'm02131', title: '패션의류/속옷-1-3-1',}, // 4depth
							{id: 'm02132', title: '패션의류/속옷-1-3-2',},
						],
					},
				],
			},
			{id: 'm02200', title: '패션의류/속옷-2',
				subList: [ // 2depth
					{id: 'm02210', title: '패션의류/속옷-2-1',
						subList: [ // 3depth
							{id: 'm02211', title: '패션의류/속옷-2-1-1',}, // 4depth
							{id: 'm02212', title: '패션의류/속옷-2-1-2',},
							{id: 'm02213', title: '패션의류/속옷-2-1-3',},
						],
					},
					{id: 'm02220', title: '패션의류/속옷-2-2',
						subList: [ // 3depth
							{id: 'm02221', title: '패션의류/속옷-2-2-1',}, // 4depth
							{id: 'm02222', title: '패션의류/속옷-2-2-2',},
							{id: 'm02223', title: '패션의류/속옷-2-2-3',},
						],
					},
					{id: 'm02230', title: '패션의류/속옷-2-3',
						subList: [ // 3depth
							{id: 'm02231', title: '패션의류/속옷-2-3-1',}, // 4depth
							{id: 'm02232', title: '패션의류/속옷-2-3-2',},
						],
					},
				],
			},
			{id: 'm02300', title: '패션의류/속옷-3',
				subList: [
					{id: 'm02310', title: '패션의류/속옷-3-1',
						subList: [
							{id: 'm02311', title: '패션의류/속옷-3-1-1',},
							{id: 'm02312', title: '패션의류/속옷-3-1-2',},
							{id: 'm02313', title: '패션의류/속옷-3-1-3',},
						],
					},
					{id: 'm02320', title: '패션의류/속옷-3-2',
						subList: [
							{id: 'm02321', title: '패션의류/속옷-3-2-1',},
							{id: 'm02322', title: '패션의류/속옷-3-2-2',},
							{id: 'm02323', title: '패션의류/속옷-3-2-3',},
						],
					},
					{id: 'm02330', title: '패션의류/속옷-3-3',
						subList: [
							{id: 'm02331', title: '패션의류/속옷-3-3-1',},
							{id: 'm02332', title: '패션의류/속옷-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm03000',
		title: '식품', // 1depth
		subList: [
			{id: 'm03100', title: '식품-1',
				subList: [ // 2depth
					{id: 'm03110', title: '식품-1-1',
						subList: [ // 3depth
							{id: 'm03111', title: '식품-1-1-1',}, // 4depth
							{id: 'm03112', title: '식품-1-1-2',},
							{id: 'm03113', title: '식품-1-1-3',},
						],
					},
					{id: 'm03120', title: '식품-1-2',
						subList: [ // 3depth
							{id: 'm03121', title: '식품-1-2-1',}, // 4depth
							{id: 'm03122', title: '식품-1-2-2',},
							{id: 'm03123', title: '식품-1-2-3',},
						],
					},
					{id: 'm03130', title: '식품-1-3',
						subList: [ // 3depth
							{id: 'm03131', title: '식품-1-3-1',}, // 4depth
							{id: 'm03132', title: '식품-1-3-2',},
						],
					},
				],
			},
			{id: 'm03200', title: '식품-2',
				subList: [ // 2depth
					{id: 'm03210', title: '식품-2-1',
						subList: [ // 3depth
							{id: 'm03211', title: '식품-2-1-1',}, // 4depth
							{id: 'm03212', title: '식품-2-1-2',},
							{id: 'm03213', title: '식품-2-1-3',},
						],
					},
					{id: 'm03220', title: '식품-2-2',
						subList: [ // 3depth
							{id: 'm03221', title: '식품-2-2-1',}, // 4depth
							{id: 'm03222', title: '식품-2-2-2',},
							{id: 'm03223', title: '식품-2-2-3',},
						],
					},
					{id: 'm03230', title: '식품-2-3',
						subList: [ // 3depth
							{id: 'm03231', title: '식품-2-3-1',}, // 4depth
							{id: 'm03232', title: '식품-2-3-2',},
						],
					},
				],
			},
			{id: 'm03300', title: '식품-3',
				subList: [
					{id: 'm03310', title: '식품-3-1',
						subList: [
							{id: 'm03311', title: '식품-3-1-1',},
							{id: 'm03312', title: '식품-3-1-2',},
							{id: 'm03313', title: '식품-3-1-3',},
						],
					},
					{id: 'm03320', title: '식품-3-2',
						subList: [
							{id: 'm03321', title: '식품-3-2-1',},
							{id: 'm03322', title: '식품-3-2-2',},
							{id: 'm03323', title: '식품-3-2-3',},
						],
					},
					{id: 'm03330', title: '식품-3-3',
						subList: [
							{id: 'm03331', title: '식품-3-3-1',},
							{id: 'm03332', title: '식품-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm04000',
		title: '가전/디지털', // 1depth
		subList: [
			{id: 'm04100', title: '가전/디지털-1',
				subList: [ // 2depth
					{id: 'm04110', title: '가전/디지털-1-1',
						subList: [ // 3depth
							{id: 'm04111', title: '가전/디지털-1-1-1',}, // 4depth
							{id: 'm04112', title: '가전/디지털-1-1-2',},
							{id: 'm04113', title: '가전/디지털-1-1-3',},
						],
					},
					{id: 'm04120', title: '가전/디지털-1-2',
						subList: [ // 3depth
							{id: 'm04121', title: '가전/디지털-1-2-1',}, // 4depth
							{id: 'm04122', title: '가전/디지털-1-2-2',},
							{id: 'm04123', title: '가전/디지털-1-2-3',},
						],
					},
					{id: 'm04130', title: '가전/디지털-1-3',
						subList: [ // 3depth
							{id: 'm04131', title: '가전/디지털-1-3-1',}, // 4depth
							{id: 'm04132', title: '가전/디지털-1-3-2',},
						],
					},
				],
			},
			{id: 'm04200', title: '가전/디지털-2',
				subList: [ // 2depth
					{id: 'm04210', title: '가전/디지털-2-1',
						subList: [ // 3depth
							{id: 'm04211', title: '가전/디지털-2-1-1',}, // 4depth
							{id: 'm04212', title: '가전/디지털-2-1-2',},
							{id: 'm04213', title: '가전/디지털-2-1-3',},
						],
					},
					{id: 'm04220', title: '가전/디지털-2-2',
						subList: [ // 3depth
							{id: 'm04221', title: '가전/디지털-2-2-1',}, // 4depth
							{id: 'm04222', title: '가전/디지털-2-2-2',},
							{id: 'm04223', title: '가전/디지털-2-2-3',},
						],
					},
					{id: 'm04230', title: '가전/디지털-2-3',
						subList: [ // 3depth
							{id: 'm04231', title: '가전/디지털-2-3-1',}, // 4depth
							{id: 'm04232', title: '가전/디지털-2-3-2',},
						],
					},
				],
			},
			{id: 'm04300', title: '가전/디지털-3',
				subList: [
					{id: 'm04310', title: '가전/디지털-3-1',
						subList: [
							{id: 'm04311', title: '가전/디지털-3-1-1',},
							{id: 'm04312', title: '가전/디지털-3-1-2',},
							{id: 'm04313', title: '가전/디지털-3-1-3',},
						],
					},
					{id: 'm04320', title: '가전/디지털-3-2',
						subList: [
							{id: 'm04321', title: '가전/디지털-3-2-1',},
							{id: 'm04322', title: '가전/디지털-3-2-2',},
							{id: 'm04323', title: '가전/디지털-3-2-3',},
						],
					},
					{id: 'm04330', title: '가전/디지털-3-3',
						subList: [
							{id: 'm04331', title: '가전/디지털-3-3-1',},
							{id: 'm04332', title: '가전/디지털-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm05000',
		title: '뷰티', // 1depth
		subList: [
			{id: 'm05100', title: '뷰티-1',
				subList: [ // 2depth
					{id: 'm05110', title: '뷰티-1-1',
						subList: [ // 3depth
							{id: 'm05111', title: '뷰티-1-1-1',}, // 4depth
							{id: 'm05112', title: '뷰티-1-1-2',},
							{id: 'm05113', title: '뷰티-1-1-3',},
						],
					},
					{id: 'm05120', title: '뷰티-1-2',
						subList: [ // 3depth
							{id: 'm05121', title: '뷰티-1-2-1',}, // 4depth
							{id: 'm05122', title: '뷰티-1-2-2',},
							{id: 'm05123', title: '뷰티-1-2-3',},
						],
					},
					{id: 'm05130', title: '뷰티-1-3',
						subList: [ // 3depth
							{id: 'm05131', title: '뷰티-1-3-1',}, // 4depth
							{id: 'm05132', title: '뷰티-1-3-2',},
						],
					},
				],
			},
			{id: 'm05200', title: '뷰티-2',
				subList: [ // 2depth
					{id: 'm05210', title: '뷰티-2-1',
						subList: [ // 3depth
							{id: 'm05211', title: '뷰티-2-1-1',}, // 4depth
							{id: 'm05212', title: '뷰티-2-1-2',},
							{id: 'm05213', title: '뷰티-2-1-3',},
						],
					},
					{id: 'm05220', title: '뷰티-2-2',
						subList: [ // 3depth
							{id: 'm05221', title: '뷰티-2-2-1',}, // 4depth
							{id: 'm05222', title: '뷰티-2-2-2',},
							{id: 'm05223', title: '뷰티-2-2-3',},
						],
					},
					{id: 'm05230', title: '뷰티-2-3',
						subList: [ // 3depth
							{id: 'm05231', title: '뷰티-2-3-1',}, // 4depth
							{id: 'm05232', title: '뷰티-2-3-2',},
						],
					},
				],
			},
			{id: 'm05300', title: '뷰티-3',
				subList: [
					{id: 'm05310', title: '뷰티-3-1',
						subList: [
							{id: 'm05311', title: '뷰티-3-1-1',},
							{id: 'm05312', title: '뷰티-3-1-2',},
							{id: 'm05313', title: '뷰티-3-1-3',},
						],
					},
					{id: 'm05320', title: '뷰티-3-2',
						subList: [
							{id: 'm05321', title: '뷰티-3-2-1',},
							{id: 'm05322', title: '뷰티-3-2-2',},
							{id: 'm05323', title: '뷰티-3-2-3',},
						],
					},
					{id: 'm05330', title: '뷰티-3-3',
						subList: [
							{id: 'm05331', title: '뷰티-3-3-1',},
							{id: 'm05332', title: '뷰티-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm06000',
		title: '주얼리/시계', // 1depth
		subList: [
			{id: 'm06100', title: '주얼리/시계-1',
				subList: [ // 2depth
					{id: 'm06110', title: '주얼리/시계-1-1',
						subList: [ // 3depth
							{id: 'm06111', title: '주얼리/시계-1-1-1',}, // 4depth
							{id: 'm06112', title: '주얼리/시계-1-1-2',},
							{id: 'm06113', title: '주얼리/시계-1-1-3',},
						],
					},
					{id: 'm06120', title: '주얼리/시계-1-2',
						subList: [ // 3depth
							{id: 'm06121', title: '주얼리/시계-1-2-1',}, // 4depth
							{id: 'm06122', title: '주얼리/시계-1-2-2',},
							{id: 'm06123', title: '주얼리/시계-1-2-3',},
						],
					},
					{id: 'm06130', title: '주얼리/시계-1-3',
						subList: [ // 3depth
							{id: 'm06131', title: '주얼리/시계-1-3-1',}, // 4depth
							{id: 'm06132', title: '주얼리/시계-1-3-2',},
						],
					},
				],
			},
			{id: 'm06200', title: '주얼리/시계-2',
				subList: [ // 2depth
					{id: 'm06210', title: '주얼리/시계-2-1',
						subList: [ // 3depth
							{id: 'm06211', title: '주얼리/시계-2-1-1',}, // 4depth
							{id: 'm06212', title: '주얼리/시계-2-1-2',},
							{id: 'm06213', title: '주얼리/시계-2-1-3',},
						],
					},
					{id: 'm06220', title: '주얼리/시계-2-2',
						subList: [ // 3depth
							{id: 'm06221', title: '주얼리/시계-2-2-1',}, // 4depth
							{id: 'm06222', title: '주얼리/시계-2-2-2',},
							{id: 'm06223', title: '주얼리/시계-2-2-3',},
						],
					},
					{id: 'm06230', title: '주얼리/시계-2-3',
						subList: [ // 3depth
							{id: 'm06231', title: '주얼리/시계-2-3-1',}, // 4depth
							{id: 'm06232', title: '주얼리/시계-2-3-2',},
						],
					},
				],
			},
			{id: 'm06300', title: '주얼리/시계-3',
				subList: [
					{id: 'm06310', title: '주얼리/시계-3-1',
						subList: [
							{id: 'm06311', title: '주얼리/시계-3-1-1',},
							{id: 'm06312', title: '주얼리/시계-3-1-2',},
							{id: 'm06313', title: '주얼리/시계-3-1-3',},
						],
					},
					{id: 'm06320', title: '주얼리/시계-3-2',
						subList: [
							{id: 'm06321', title: '주얼리/시계-3-2-1',},
							{id: 'm06322', title: '주얼리/시계-3-2-2',},
							{id: 'm06323', title: '주얼리/시계-3-2-3',},
						],
					},
					{id: 'm06330', title: '주얼리/시계-3-3',
						subList: [
							{id: 'm06331', title: '주얼리/시계-3-3-1',},
							{id: 'm06332', title: '주얼리/시계-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm07000',
		title: '잡화/슈즈/명품', // 1depth
		subList: [
			{id: 'm07100', title: '잡화/슈즈/명품-1',
				subList: [ // 2depth
					{id: 'm07110', title: '잡화/슈즈/명품-1-1',
						subList: [ // 3depth
							{id: 'm07111', title: '잡화/슈즈/명품-1-1-1',}, // 4depth
							{id: 'm07112', title: '잡화/슈즈/명품-1-1-2',},
							{id: 'm07113', title: '잡화/슈즈/명품-1-1-3',},
						],
					},
					{id: 'm07120', title: '잡화/슈즈/명품-1-2',
						subList: [ // 3depth
							{id: 'm07121', title: '잡화/슈즈/명품-1-2-1',}, // 4depth
							{id: 'm07122', title: '잡화/슈즈/명품-1-2-2',},
							{id: 'm07123', title: '잡화/슈즈/명품-1-2-3',},
						],
					},
					{id: 'm07130', title: '잡화/슈즈/명품-1-3',
						subList: [ // 3depth
							{id: 'm07131', title: '잡화/슈즈/명품-1-3-1',}, // 4depth
							{id: 'm07132', title: '잡화/슈즈/명품-1-3-2',},
						],
					},
				],
			},
			{id: 'm07200', title: '잡화/슈즈/명품-2',
				subList: [ // 2depth
					{id: 'm07210', title: '잡화/슈즈/명품-2-1',
						subList: [ // 3depth
							{id: 'm07211', title: '잡화/슈즈/명품-2-1-1',}, // 4depth
							{id: 'm07212', title: '잡화/슈즈/명품-2-1-2',},
							{id: 'm07213', title: '잡화/슈즈/명품-2-1-3',},
						],
					},
					{id: 'm07220', title: '잡화/슈즈/명품-2-2',
						subList: [ // 3depth
							{id: 'm07221', title: '잡화/슈즈/명품-2-2-1',}, // 4depth
							{id: 'm07222', title: '잡화/슈즈/명품-2-2-2',},
							{id: 'm07223', title: '잡화/슈즈/명품-2-2-3',},
						],
					},
					{id: 'm07230', title: '잡화/슈즈/명품-2-3',
						subList: [ // 3depth
							{id: 'm07231', title: '잡화/슈즈/명품-2-3-1',}, // 4depth
							{id: 'm07232', title: '잡화/슈즈/명품-2-3-2',},
						],
					},
				],
			},
			{id: 'm07300', title: '잡화/슈즈/명품-3',
				subList: [
					{id: 'm07310', title: '잡화/슈즈/명품-3-1',
						subList: [
							{id: 'm07311', title: '잡화/슈즈/명품-3-1-1',},
							{id: 'm07312', title: '잡화/슈즈/명품-3-1-2',},
							{id: 'm07313', title: '잡화/슈즈/명품-3-1-3',},
						],
					},
					{id: 'm07320', title: '잡화/슈즈/명품-3-2',
						subList: [
							{id: 'm07321', title: '잡화/슈즈/명품-3-2-1',},
							{id: 'm07322', title: '잡화/슈즈/명품-3-2-2',},
							{id: 'm07323', title: '잡화/슈즈/명품-3-2-3',},
						],
					},
					{id: 'm07330', title: '잡화/슈즈/명품-3-3',
						subList: [
							{id: 'm07331', title: '잡화/슈즈/명품-3-3-1',},
							{id: 'm07332', title: '잡화/슈즈/명품-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat

	{
		id: 'm08000',
		title: '침구/카페트/커튼', // 1depth
		subList: [
			{id: 'm08100', title: '침구/카페트/커튼-1',
				subList: [ // 2depth
					{id: 'm08110', title: '침구/카페트/커튼-1-1',
						subList: [ // 3depth
							{id: 'm08111', title: '침구/카페트/커튼-1-1-1',}, // 4depth
							{id: 'm08112', title: '침구/카페트/커튼-1-1-2',},
							{id: 'm08113', title: '침구/카페트/커튼-1-1-3',},
						],
					},
					{id: 'm08120', title: '침구/카페트/커튼-1-2',
						subList: [ // 3depth
							{id: 'm08121', title: '침구/카페트/커튼-1-2-1',}, // 4depth
							{id: 'm08122', title: '침구/카페트/커튼-1-2-2',},
							{id: 'm08123', title: '침구/카페트/커튼-1-2-3',},
						],
					},
					{id: 'm08130', title: '침구/카페트/커튼-1-3',
						subList: [ // 3depth
							{id: 'm08131', title: '침구/카페트/커튼-1-3-1',}, // 4depth
							{id: 'm08132', title: '침구/카페트/커튼-1-3-2',},
						],
					},
				],
			},
			{id: 'm08200', title: '침구/카페트/커튼-2',
				subList: [ // 2depth
					{id: 'm08210', title: '침구/카페트/커튼-2-1',
						subList: [ // 3depth
							{id: 'm08211', title: '침구/카페트/커튼-2-1-1',}, // 4depth
							{id: 'm08212', title: '침구/카페트/커튼-2-1-2',},
							{id: 'm08213', title: '침구/카페트/커튼-2-1-3',},
						],
					},
					{id: 'm08220', title: '침구/카페트/커튼-2-2',
						subList: [ // 3depth
							{id: 'm08221', title: '침구/카페트/커튼-2-2-1',}, // 4depth
							{id: 'm08222', title: '침구/카페트/커튼-2-2-2',},
							{id: 'm08223', title: '침구/카페트/커튼-2-2-3',},
						],
					},
					{id: 'm08230', title: '침구/카페트/커튼-2-3',
						subList: [ // 3depth
							{id: 'm08231', title: '침구/카페트/커튼-2-3-1',}, // 4depth
							{id: 'm08232', title: '침구/카페트/커튼-2-3-2',},
						],
					},
				],
			},
			{id: 'm08300', title: '침구/카페트/커튼-3',
				subList: [
					{id: 'm08310', title: '침구/카페트/커튼-3-1',
						subList: [
							{id: 'm08311', title: '침구/카페트/커튼-3-1-1',},
							{id: 'm08312', title: '침구/카페트/커튼-3-1-2',},
							{id: 'm08313', title: '침구/카페트/커튼-3-1-3',},
						],
					},
					{id: 'm08320', title: '침구/카페트/커튼-3-2',
						subList: [
							{id: 'm08321', title: '침구/카페트/커튼-3-2-1',},
							{id: 'm08322', title: '침구/카페트/커튼-3-2-2',},
							{id: 'm08323', title: '침구/카페트/커튼-3-2-3',},
						],
					},
					{id: 'm08330', title: '침구/카페트/커튼-3-3',
						subList: [
							{id: 'm08331', title: '침구/카페트/커튼-3-3-1',},
							{id: 'm08332', title: '침구/카페트/커튼-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm09000',
		title: '생활/주방', // 1depth
		subList: [
			{id: 'm09100', title: '생활/주방-1',
				subList: [ // 2depth
					{id: 'm09110', title: '생활/주방-1-1',
						subList: [ // 3depth
							{id: 'm09111', title: '생활/주방-1-1-1',}, // 4depth
							{id: 'm09112', title: '생활/주방-1-1-2',},
							{id: 'm09113', title: '생활/주방-1-1-3',},
						],
					},
					{id: 'm09120', title: '생활/주방-1-2',
						subList: [ // 3depth
							{id: 'm09121', title: '생활/주방-1-2-1',}, // 4depth
							{id: 'm09122', title: '생활/주방-1-2-2',},
							{id: 'm09123', title: '생활/주방-1-2-3',},
						],
					},
					{id: 'm09130', title: '생활/주방-1-3',
						subList: [ // 3depth
							{id: 'm09131', title: '생활/주방-1-3-1',}, // 4depth
							{id: 'm09132', title: '생활/주방-1-3-2',},
						],
					},
				],
			},
			{id: 'm09200', title: '생활/주방-2',
				subList: [ // 2depth
					{id: 'm09210', title: '생활/주방-2-1',
						subList: [ // 3depth
							{id: 'm09211', title: '생활/주방-2-1-1',}, // 4depth
							{id: 'm09212', title: '생활/주방-2-1-2',},
							{id: 'm09213', title: '생활/주방-2-1-3',},
						],
					},
					{id: 'm09220', title: '생활/주방-2-2',
						subList: [ // 3depth
							{id: 'm09221', title: '생활/주방-2-2-1',}, // 4depth
							{id: 'm09222', title: '생활/주방-2-2-2',},
							{id: 'm09223', title: '생활/주방-2-2-3',},
						],
					},
					{id: 'm09230', title: '생활/주방-2-3',
						subList: [ // 3depth
							{id: 'm09231', title: '생활/주방-2-3-1',}, // 4depth
							{id: 'm09232', title: '생활/주방-2-3-2',},
						],
					},
				],
			},
			{id: 'm09300', title: '생활/주방-3',
				subList: [
					{id: 'm09310', title: '생활/주방-3-1',
						subList: [
							{id: 'm09311', title: '생활/주방-3-1-1',},
							{id: 'm09312', title: '생활/주방-3-1-2',},
							{id: 'm09313', title: '생활/주방-3-1-3',},
						],
					},
					{id: 'm09320', title: '생활/주방-3-2',
						subList: [
							{id: 'm09321', title: '생활/주방-3-2-1',},
							{id: 'm09322', title: '생활/주방-3-2-2',},
							{id: 'm09323', title: '생활/주방-3-2-3',},
						],
					},
					{id: 'm09330', title: '생활/주방-3-3',
						subList: [
							{id: 'm09331', title: '생활/주방-3-3-1',},
							{id: 'm09332', title: '생활/주방-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm10000',
		title: '스포츠/레저', // 1depth
		subList: [
			{id: 'm10100', title: '스포츠/레저-1',
				subList: [ // 2depth
					{id: 'm10110', title: '스포츠/레저-1-1',
						subList: [ // 3depth
							{id: 'm10111', title: '스포츠/레저-1-1-1',}, // 4depth
							{id: 'm10112', title: '스포츠/레저-1-1-2',},
							{id: 'm10113', title: '스포츠/레저-1-1-3',},
						],
					},
					{id: 'm10120', title: '스포츠/레저-1-2',
						subList: [ // 3depth
							{id: 'm10121', title: '스포츠/레저-1-2-1',}, // 4depth
							{id: 'm10122', title: '스포츠/레저-1-2-2',},
							{id: 'm10123', title: '스포츠/레저-1-2-3',},
						],
					},
					{id: 'm10130', title: '스포츠/레저-1-3',
						subList: [ // 3depth
							{id: 'm10131', title: '스포츠/레저-1-3-1',}, // 4depth
							{id: 'm10132', title: '스포츠/레저-1-3-2',},
						],
					},
				],
			},
			{id: 'm10200', title: '스포츠/레저-2',
				subList: [ // 2depth
					{id: 'm10210', title: '스포츠/레저-2-1',
						subList: [ // 3depth
							{id: 'm10211', title: '스포츠/레저-2-1-1',}, // 4depth
							{id: 'm10212', title: '스포츠/레저-2-1-2',},
							{id: 'm10213', title: '스포츠/레저-2-1-3',},
						],
					},
					{id: 'm10220', title: '스포츠/레저-2-2',
						subList: [ // 3depth
							{id: 'm10221', title: '스포츠/레저-2-2-1',}, // 4depth
							{id: 'm10222', title: '스포츠/레저-2-2-2',},
							{id: 'm10223', title: '스포츠/레저-2-2-3',},
						],
					},
					{id: 'm10230', title: '스포츠/레저-2-3',
						subList: [ // 3depth
							{id: 'm10231', title: '스포츠/레저-2-3-1',}, // 4depth
							{id: 'm10232', title: '스포츠/레저-2-3-2',},
						],
					},
				],
			},
			{id: 'm10300', title: '스포츠/레저-3',
				subList: [
					{id: 'm10310', title: '스포츠/레저-3-1',
						subList: [
							{id: 'm10311', title: '스포츠/레저-3-1-1',},
							{id: 'm10312', title: '스포츠/레저-3-1-2',},
							{id: 'm10313', title: '스포츠/레저-3-1-3',},
						],
					},
					{id: 'm10320', title: '스포츠/레저-3-2',
						subList: [
							{id: 'm10321', title: '스포츠/레저-3-2-1',},
							{id: 'm10322', title: '스포츠/레저-3-2-2',},
							{id: 'm10323', title: '스포츠/레저-3-2-3',},
						],
					},
					{id: 'm10330', title: '스포츠/레저-3-3',
						subList: [
							{id: 'm10331', title: '스포츠/레저-3-3-1',},
							{id: 'm10332', title: '스포츠/레저-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm11000',
		title: '가구/인테리어 소품', // 1depth
		subList: [
			{id: 'm11100', title: '가구/인테리어 소품-1',
				subList: [ // 2depth
					{id: 'm11110', title: '가구/인테리어 소품-1-1',
						subList: [ // 3depth
							{id: 'm11111', title: '가구/인테리어 소품-1-1-1',}, // 4depth
							{id: 'm11112', title: '가구/인테리어 소품-1-1-2',},
							{id: 'm11113', title: '가구/인테리어 소품-1-1-3',},
						],
					},
					{id: 'm11120', title: '가구/인테리어 소품-1-2',
						subList: [ // 3depth
							{id: 'm11121', title: '가구/인테리어 소품-1-2-1',}, // 4depth
							{id: 'm11122', title: '가구/인테리어 소품-1-2-2',},
							{id: 'm11123', title: '가구/인테리어 소품-1-2-3',},
						],
					},
					{id: 'm11130', title: '가구/인테리어 소품-1-3',
						subList: [ // 3depth
							{id: 'm11131', title: '가구/인테리어 소품-1-3-1',}, // 4depth
							{id: 'm11132', title: '가구/인테리어 소품-1-3-2',},
						],
					},
				],
			},
			{id: 'm11200', title: '가구/인테리어 소품-2',
				subList: [ // 2depth
					{id: 'm11210', title: '가구/인테리어 소품-2-1',
						subList: [ // 3depth
							{id: 'm11211', title: '가구/인테리어 소품-2-1-1',}, // 4depth
							{id: 'm11212', title: '가구/인테리어 소품-2-1-2',},
							{id: 'm11213', title: '가구/인테리어 소품-2-1-3',},
						],
					},
					{id: 'm11220', title: '가구/인테리어 소품-2-2',
						subList: [ // 3depth
							{id: 'm11221', title: '가구/인테리어 소품-2-2-1',}, // 4depth
							{id: 'm11222', title: '가구/인테리어 소품-2-2-2',},
							{id: 'm11223', title: '가구/인테리어 소품-2-2-3',},
						],
					},
					{id: 'm11230', title: '가구/인테리어 소품-2-3',
						subList: [ // 3depth
							{id: 'm11231', title: '가구/인테리어 소품-2-3-1',}, // 4depth
							{id: 'm11232', title: '가구/인테리어 소품-2-3-2',},
						],
					},
				],
			},
			{id: 'm11300', title: '가구/인테리어 소품-3',
				subList: [
					{id: 'm11310', title: '가구/인테리어 소품-3-1',
						subList: [
							{id: 'm11311', title: '가구/인테리어 소품-3-1-1',},
							{id: 'm11312', title: '가구/인테리어 소품-3-1-2',},
							{id: 'm11313', title: '가구/인테리어 소품-3-1-3',},
						],
					},
					{id: 'm11320', title: '가구/인테리어 소품-3-2',
						subList: [
							{id: 'm11321', title: '가구/인테리어 소품-3-2-1',},
							{id: 'm11322', title: '가구/인테리어 소품-3-2-2',},
							{id: 'm11323', title: '가구/인테리어 소품-3-2-3',},
						],
					},
					{id: 'm11330', title: '가구/인테리어 소품-3-3',
						subList: [
							{id: 'm11331', title: '가구/인테리어 소품-3-3-1',},
							{id: 'm11332', title: '가구/인테리어 소품-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm12000',
		title: '여행/렌탈/서비스', // 1depth
		subList: [
			{id: 'm12100', title: '여행/렌탈/서비스-1',
				subList: [ // 2depth
					{id: 'm12110', title: '여행/렌탈/서비스-1-1',
						subList: [ // 3depth
							{id: 'm12111', title: '여행/렌탈/서비스-1-1-1',}, // 4depth
							{id: 'm12112', title: '여행/렌탈/서비스-1-1-2',},
							{id: 'm12113', title: '여행/렌탈/서비스-1-1-3',},
						],
					},
					{id: 'm12120', title: '여행/렌탈/서비스-1-2',
						subList: [ // 3depth
							{id: 'm12121', title: '여행/렌탈/서비스-1-2-1',}, // 4depth
							{id: 'm12122', title: '여행/렌탈/서비스-1-2-2',},
							{id: 'm12123', title: '여행/렌탈/서비스-1-2-3',},
						],
					},
					{id: 'm12130', title: '여행/렌탈/서비스-1-3',
						subList: [ // 3depth
							{id: 'm12131', title: '여행/렌탈/서비스-1-3-1',}, // 4depth
							{id: 'm12132', title: '여행/렌탈/서비스-1-3-2',},
						],
					},
				],
			},
			{id: 'm12200', title: '여행/렌탈/서비스-2',
				subList: [ // 2depth
					{id: 'm12210', title: '여행/렌탈/서비스-2-1',
						subList: [ // 3depth
							{id: 'm12211', title: '여행/렌탈/서비스-2-1-1',}, // 4depth
							{id: 'm12212', title: '여행/렌탈/서비스-2-1-2',},
							{id: 'm12213', title: '여행/렌탈/서비스-2-1-3',},
						],
					},
					{id: 'm12220', title: '여행/렌탈/서비스-2-2',
						subList: [ // 3depth
							{id: 'm12221', title: '여행/렌탈/서비스-2-2-1',}, // 4depth
							{id: 'm12222', title: '여행/렌탈/서비스-2-2-2',},
							{id: 'm12223', title: '여행/렌탈/서비스-2-2-3',},
						],
					},
					{id: 'm12230', title: '여행/렌탈/서비스-2-3',
						subList: [ // 3depth
							{id: 'm12231', title: '여행/렌탈/서비스-2-3-1',}, // 4depth
							{id: 'm12232', title: '여행/렌탈/서비스-2-3-2',},
						],
					},
				],
			},
			{id: 'm12300', title: '여행/렌탈/서비스-3',
				subList: [
					{id: 'm12310', title: '여행/렌탈/서비스-3-1',
						subList: [
							{id: 'm12311', title: '여행/렌탈/서비스-3-1-1',},
							{id: 'm12312', title: '여행/렌탈/서비스-3-1-2',},
							{id: 'm12313', title: '여행/렌탈/서비스-3-1-3',},
						],
					},
					{id: 'm12320', title: '여행/렌탈/서비스-3-2',
						subList: [
							{id: 'm12321', title: '여행/렌탈/서비스-3-2-1',},
							{id: 'm12322', title: '여행/렌탈/서비스-3-2-2',},
							{id: 'm12323', title: '여행/렌탈/서비스-3-2-3',},
						],
					},
					{id: 'm12330', title: '여행/렌탈/서비스-3-3',
						subList: [
							{id: 'm12331', title: '여행/렌탈/서비스-3-3-1',},
							{id: 'm12332', title: '여행/렌탈/서비스-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm13000',
		title: '문구/취미/반려', // 1depth
		subList: [
			{id: 'm13100', title: '문구/취미/반려-1',
				subList: [ // 2depth
					{id: 'm13110', title: '문구/취미/반려-1-1',
						subList: [ // 3depth
							{id: 'm13111', title: '문구/취미/반려-1-1-1',}, // 4depth
							{id: 'm13112', title: '문구/취미/반려-1-1-2',},
							{id: 'm13113', title: '문구/취미/반려-1-1-3',},
						],
					},
					{id: 'm13120', title: '문구/취미/반려-1-2',
						subList: [ // 3depth
							{id: 'm13121', title: '문구/취미/반려-1-2-1',}, // 4depth
							{id: 'm13122', title: '문구/취미/반려-1-2-2',},
							{id: 'm13123', title: '문구/취미/반려-1-2-3',},
						],
					},
					{id: 'm13130', title: '문구/취미/반려-1-3',
						subList: [ // 3depth
							{id: 'm13131', title: '문구/취미/반려-1-3-1',}, // 4depth
							{id: 'm13132', title: '문구/취미/반려-1-3-2',},
						],
					},
				],
			},
			{id: 'm13200', title: '문구/취미/반려-2',
				subList: [ // 2depth
					{id: 'm13210', title: '문구/취미/반려-2-1',
						subList: [ // 3depth
							{id: 'm13211', title: '문구/취미/반려-2-1-1',}, // 4depth
							{id: 'm13212', title: '문구/취미/반려-2-1-2',},
							{id: 'm13213', title: '문구/취미/반려-2-1-3',},
						],
					},
					{id: 'm13220', title: '문구/취미/반려-2-2',
						subList: [ // 3depth
							{id: 'm13221', title: '문구/취미/반려-2-2-1',}, // 4depth
							{id: 'm13222', title: '문구/취미/반려-2-2-2',},
							{id: 'm13223', title: '문구/취미/반려-2-2-3',},
						],
					},
					{id: 'm13230', title: '문구/취미/반려-2-3',
						subList: [ // 3depth
							{id: 'm13231', title: '문구/취미/반려-2-3-1',}, // 4depth
							{id: 'm13232', title: '문구/취미/반려-2-3-2',},
						],
					},
				],
			},
			{id: 'm13300', title: '문구/취미/반려-3',
				subList: [
					{id: 'm13310', title: '문구/취미/반려-3-1',
						subList: [
							{id: 'm13311', title: '문구/취미/반려-3-1-1',},
							{id: 'm13312', title: '문구/취미/반려-3-1-2',},
							{id: 'm13313', title: '문구/취미/반려-3-1-3',},
						],
					},
					{id: 'm13320', title: '문구/취미/반려-3-2',
						subList: [
							{id: 'm13321', title: '문구/취미/반려-3-2-1',},
							{id: 'm13322', title: '문구/취미/반려-3-2-2',},
							{id: 'm13323', title: '문구/취미/반려-3-2-3',},
						],
					},
					{id: 'm13330', title: '문구/취미/반려-3-3',
						subList: [
							{id: 'm13331', title: '문구/취미/반려-3-3-1',},
							{id: 'm13332', title: '문구/취미/반려-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	// s : repeat
	{
		id: 'm14000',
		title: '중소기업 테마관', // 1depth
		subList: [
			{id: 'm14100', title: '중소기업 테마관-1',
				subList: [ // 2depth
					{id: 'm14110', title: '중소기업 테마관-1-1',
						subList: [ // 3depth
							{id: 'm14111', title: '중소기업 테마관-1-1-1',}, // 4depth
							{id: 'm14112', title: '중소기업 테마관-1-1-2',},
							{id: 'm14113', title: '중소기업 테마관-1-1-3',},
						],
					},
					{id: 'm14120', title: '중소기업 테마관-1-2',
						subList: [ // 3depth
							{id: 'm14121', title: '중소기업 테마관-1-2-1',}, // 4depth
							{id: 'm14122', title: '중소기업 테마관-1-2-2',},
							{id: 'm14123', title: '중소기업 테마관-1-2-3',},
						],
					},
					{id: 'm14130', title: '중소기업 테마관-1-3',
						subList: [ // 3depth
							{id: 'm14131', title: '중소기업 테마관-1-3-1',}, // 4depth
							{id: 'm14132', title: '중소기업 테마관-1-3-2',},
						],
					},
				],
			},
			{id: 'm14200', title: '중소기업 테마관-2',
				subList: [ // 2depth
					{id: 'm14210', title: '중소기업 테마관-2-1',
						subList: [ // 3depth
							{id: 'm14211', title: '중소기업 테마관-2-1-1',}, // 4depth
							{id: 'm14212', title: '중소기업 테마관-2-1-2',},
							{id: 'm14213', title: '중소기업 테마관-2-1-3',},
						],
					},
					{id: 'm14220', title: '중소기업 테마관-2-2',
						subList: [ // 3depth
							{id: 'm14221', title: '중소기업 테마관-2-2-1',}, // 4depth
							{id: 'm14222', title: '중소기업 테마관-2-2-2',},
							{id: 'm14223', title: '중소기업 테마관-2-2-3',},
						],
					},
					{id: 'm14230', title: '중소기업 테마관-2-3',
						subList: [ // 3depth
							{id: 'm14231', title: '중소기업 테마관-2-3-1',}, // 4depth
							{id: 'm14232', title: '중소기업 테마관-2-3-2',},
						],
					},
				],
			},
			{id: 'm14300', title: '중소기업 테마관-3',
				subList: [
					{id: 'm14310', title: '중소기업 테마관-3-1',
						subList: [
							{id: 'm14311', title: '중소기업 테마관-3-1-1',},
							{id: 'm14312', title: '중소기업 테마관-3-1-2',},
							{id: 'm14313', title: '중소기업 테마관-3-1-3',},
						],
					},
					{id: 'm14320', title: '중소기업 테마관-3-2',
						subList: [
							{id: 'm14321', title: '중소기업 테마관-3-2-1',},
							{id: 'm14322', title: '중소기업 테마관-3-2-2',},
							{id: 'm14323', title: '중소기업 테마관-3-2-3',},
						],
					},
					{id: 'm14330', title: '중소기업 테마관-3-3',
						subList: [
							{id: 'm14331', title: '중소기업 테마관-3-3-1',},
							{id: 'm14332', title: '중소기업 테마관-3-3-2',},
						],
					},
				],
			},
		],
	},
	// e : repeat
	{
		id: 'm15000',
		title: '브랜드 찾기',
	},
];

// 상품리스트
export const prodList = [
	// s: repeat
	{
		id: 'p0101',
		menuId: 'm01111', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' TV쇼핑-1-1-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 0, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b01',
	},
	{
		id: 'p0102',
		menuId: 'm01112',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-1-1-2 TV쇼핑-1-1-2 TV쇼핑-1-1-2 TV쇼핑-1-1-2 TV쇼핑-1-1-2 TV쇼핑-1-1-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b02',
	},
	{
		id: 'p0103',
		menuId: 'm01113',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-1-1-3',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b03',
	},
	{
		id: 'p0104',
		menuId: 'm01121', // 4depth id
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' TV쇼핑-1-2-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b01',
	},
	{
		id: 'p0105',
		menuId: 'm01122',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-1-2-2 TV쇼핑-1-2-2 TV쇼핑-1-2-2 TV쇼핑-1-2-2 TV쇼핑-1-2-2 TV쇼핑-1-2-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b02',
	},
	{
		id: 'p0106',
		menuId: 'm01123',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-1-2-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b03',
	},
	{
		id: 'p0107',
		menuId: 'm01131', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' TV쇼핑-1-3-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b01',
	},
	{
		id: 'p0108',
		menuId: 'm01132',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-1-3-2 TV쇼핑-1-3-2 TV쇼핑-1-3-2 TV쇼핑-1-3-2 TV쇼핑-1-3-2 TV쇼핑-1-3-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b02',
	},
	{
		id: 'p0109',
		menuId: 'm01211', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' TV쇼핑-2-1-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b03',
	},
	{
		id: 'p0110',
		menuId: 'm01212',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-2-1-2 TV쇼핑-2-1-2 TV쇼핑-2-1-2 TV쇼핑-2-1-2 TV쇼핑-2-1-2 TV쇼핑-2-1-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b01',
	},
	{
		id: 'p0111',
		menuId: 'm01213',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-2-1-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b02',
	},
	{
		id: 'p0112',
		menuId: 'm01221', // 4depth id
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' TV쇼핑-2-2-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b03',
	},
	{
		id: 'p0113',
		menuId: 'm01222',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-2-2-2 TV쇼핑-2-2-2 TV쇼핑-2-2-2 TV쇼핑-2-2-2 TV쇼핑-2-2-2 TV쇼핑-2-2-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b01',
	},
	{
		id: 'p0114',
		menuId: 'm01223',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-2-2-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b02',
	},
	{
		id: 'p0115',
		menuId: 'm01231', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' TV쇼핑-2-3-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b03',
	},
	{
		id: 'p0116',
		menuId: 'm01232',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-2-3-2 TV쇼핑-2-3-2 TV쇼핑-2-3-2 TV쇼핑-2-3-2 TV쇼핑-2-3-2 TV쇼핑-2-3-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b01',
	},
	{
		id: 'p0117',
		menuId: 'm01311', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' TV쇼핑-3-1-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b02',
	},
	{
		id: 'p0118',
		menuId: 'm01312',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-3-1-2 TV쇼핑-3-1-2 TV쇼핑-3-1-2 TV쇼핑-3-1-2 TV쇼핑-3-1-2 TV쇼핑-3-1-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b03',
	},
	{
		id: 'p0119',
		menuId: 'm01313',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-3-1-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b01',
	},
	{
		id: 'p0120',
		menuId: 'm01321', // 4depth id
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' TV쇼핑-3-2-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b02',
	},
	{
		id: 'p0121',
		menuId: 'm01322',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-3-2-2 TV쇼핑-3-2-2 TV쇼핑-3-2-2 TV쇼핑-3-2-2 TV쇼핑-3-2-2 TV쇼핑-3-2-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b03',
	},
	{
		id: 'p0122',
		menuId: 'm01323',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-3-2-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b01',
	},
	{
		id: 'p0123',
		menuId: 'm01331', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' TV쇼핑-3-3-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b02',
	},
	{
		id: 'p0124',
		menuId: 'm01332',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' TV쇼핑-3-3-2 TV쇼핑-3-3-2 TV쇼핑-3-3-2 TV쇼핑-3-3-2 TV쇼핑-3-3-2 TV쇼핑-3-3-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b03',
	},
	// e: repeat

	// s: repeat
	{
		id: 'p0201',
		menuId: 'm02111', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 패션의류/속옷-1-1-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b01',
	},
	{
		id: 'p0202',
		menuId: 'm02112',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-1-1-2 패션의류/속옷-1-1-2 패션의류/속옷-1-1-2 패션의류/속옷-1-1-2 패션의류/속옷-1-1-2 패션의류/속옷-1-1-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b02',
	},
	{
		id: 'p0203',
		menuId: 'm02113',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-1-1-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b03',
	},
	{
		id: 'p0204',
		menuId: 'm02121', // 4depth id
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 패션의류/속옷-1-2-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b01',
	},
	{
		id: 'p0205',
		menuId: 'm02122',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-1-2-2 패션의류/속옷-1-2-2 패션의류/속옷-1-2-2 패션의류/속옷-1-2-2 패션의류/속옷-1-2-2 패션의류/속옷-1-2-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b02',
	},
	{
		id: 'p0206',
		menuId: 'm02123',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-1-2-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b03',
	},
	{
		id: 'p0207',
		menuId: 'm02131', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 패션의류/속옷-1-3-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b01',
	},
	{
		id: 'p0208',
		menuId: 'm02132',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-1-3-2 패션의류/속옷-1-3-2 패션의류/속옷-1-3-2 패션의류/속옷-1-3-2 패션의류/속옷-1-3-2 패션의류/속옷-1-3-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b02',
	},
	{
		id: 'p0209',
		menuId: 'm02211', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 패션의류/속옷-2-1-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b03',
	},
	{
		id: 'p0210',
		menuId: 'm02212',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-2-1-2 패션의류/속옷-2-1-2 패션의류/속옷-2-1-2 패션의류/속옷-2-1-2 패션의류/속옷-2-1-2 패션의류/속옷-2-1-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b01',
	},
	{
		id: 'p0211',
		menuId: 'm02213',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-2-1-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b02',
	},
	{
		id: 'p0212',
		menuId: 'm02221', // 4depth id
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 패션의류/속옷-2-2-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b03',
	},
	{
		id: 'p0213',
		menuId: 'm02222',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-2-2-2 패션의류/속옷-2-2-2 패션의류/속옷-2-2-2 패션의류/속옷-2-2-2 패션의류/속옷-2-2-2 패션의류/속옷-2-2-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b01',
	},
	{
		id: 'p0214',
		menuId: 'm02223',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-2-2-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b02',
	},
	{
		id: 'p0215',
		menuId: 'm02231', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 패션의류/속옷-2-3-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b03',
	},
	{
		id: 'p0216',
		menuId: 'm02232',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-2-3-2 패션의류/속옷-2-3-2 패션의류/속옷-2-3-2 패션의류/속옷-2-3-2 패션의류/속옷-2-3-2 패션의류/속옷-2-3-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b01',
	},
	{
		id: 'p0217',
		menuId: 'm02311', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 패션의류/속옷-3-1-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b02',
	},
	{
		id: 'p0218',
		menuId: 'm02312',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-3-1-2 패션의류/속옷-3-1-2 패션의류/속옷-3-1-2 패션의류/속옷-3-1-2 패션의류/속옷-3-1-2 패션의류/속옷-3-1-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b03',
	},
	{
		id: 'p0219',
		menuId: 'm02313',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-3-1-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b01',
	},
	{
		id: 'p0220',
		menuId: 'm02321', // 4depth id
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 패션의류/속옷-3-2-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b02',
	},
	{
		id: 'p0221',
		menuId: 'm02322',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-3-2-2 패션의류/속옷-3-2-2 패션의류/속옷-3-2-2 패션의류/속옷-3-2-2 패션의류/속옷-3-2-2 패션의류/속옷-3-2-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b03',
	},
	{
		id: 'p0222',
		menuId: 'm02323',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-3-2-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b01',
	},
	{
		id: 'p0223',
		menuId: 'm02331', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 패션의류/속옷-3-3-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b02',
	},
	{
		id: 'p0224',
		menuId: 'm02332',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 패션의류/속옷-3-3-2 패션의류/속옷-3-3-2 패션의류/속옷-3-3-2 패션의류/속옷-3-3-2 패션의류/속옷-3-3-2 패션의류/속옷-3-3-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b03',
	},
	// e: repeat

	// s: repeat
	{
		id: 'p0301',
		menuId: 'm03111', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 식품-1-1-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b01',
	},
	{
		id: 'p0302',
		menuId: 'm03112',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-1-1-2 식품-1-1-2 식품-1-1-2 식품-1-1-2 식품-1-1-2 식품-1-1-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b02',
	},
	{
		id: 'p0303',
		menuId: 'm03113',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-1-1-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b03',
	},
	{
		id: 'p0304',
		menuId: 'm03121', // 4depth id
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 식품-1-2-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b01',
	},
	{
		id: 'p0305',
		menuId: 'm03122',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-1-2-2 식품-1-2-2 식품-1-2-2 식품-1-2-2 식품-1-2-2 식품-1-2-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b02',
	},
	{
		id: 'p0306',
		menuId: 'm03123',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-1-2-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b03',
	},
	{
		id: 'p0307',
		menuId: 'm03131', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 식품-1-3-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b01',
	},
	{
		id: 'p0308',
		menuId: 'm03132',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-1-3-2 식품-1-3-2 식품-1-3-2 식품-1-3-2 식품-1-3-2 식품-1-3-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b02',
	},
	{
		id: 'p0309',
		menuId: 'm03211', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 식품-2-1-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b03',
	},
	{
		id: 'p0310',
		menuId: 'm03212',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-2-1-2 식품-2-1-2 식품-2-1-2 식품-2-1-2 식품-2-1-2 식품-2-1-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b01',
	},
	{
		id: 'p0311',
		menuId: 'm03213',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-2-1-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b02',
	},
	{
		id: 'p0312',
		menuId: 'm03221', // 4depth id
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 식품-2-2-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b03',
	},
	{
		id: 'p0313',
		menuId: 'm03222',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-2-2-2 식품-2-2-2 식품-2-2-2 식품-2-2-2 식품-2-2-2 식품-2-2-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b01',
	},
	{
		id: 'p0314',
		menuId: 'm03223',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-2-2-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b02',
	},
	{
		id: 'p0315',
		menuId: 'm03231', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 식품-2-3-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b03',
	},
	{
		id: 'p0316',
		menuId: 'm03232',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-2-3-2 식품-2-3-2 식품-2-3-2 식품-2-3-2 식품-2-3-2 식품-2-3-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b01',
	},
	{
		id: 'p0317',
		menuId: 'm03311', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 식품-3-1-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b02',
	},
	{
		id: 'p0318',
		menuId: 'm03312',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-3-1-2 식품-3-1-2 식품-3-1-2 식품-3-1-2 식품-3-1-2 식품-3-1-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b03',
	},
	{
		id: 'p0319',
		menuId: 'm03313',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-3-1-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b01',
	},
	{
		id: 'p0320',
		menuId: 'm03321', // 4depth id
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 식품-3-2-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b02',
	},
	{
		id: 'p0321',
		menuId: 'm03322',
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-3-2-2 식품-3-2-2 식품-3-2-2 식품-3-2-2 식품-3-2-2 식품-3-2-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b03',
	},
	{
		id: 'p0322',
		menuId: 'm03323',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-3-2-3',
		discountPercent: 10,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 100000},
		savePrice: 20000,
		stockCnt: 100,
		purchaseCnt: 15,
		benefitVal: [],
		brandId: 'b01',
	},
	{
		id: 'p0323',
		menuId: 'm03331', // 4depth id
		tvShoppingVal: true,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		labelText: '[ODV]',
		prodTitle: ' 식품-3-3-1',
		discountPercent: 10,
		prodPrice: 10000,
		rating: {val: 4.5, reviewCnt: 10},
		savePrice: 40000,
		stockCnt: 100, // 재고 count
		purchaseCnt: 1, // 구매 count
		benefitVal: ['농협 10%', '쿠폰', '무이자', '무료배송', '일시불할인', '사은품'], // 할인혜택
		brandId: 'b02',
	},
	{
		id: 'p0324',
		menuId: 'm03332',
		tvShoppingVal: false,
		thumbnail: ['temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png', 'temp/temp_prd.png', 'temp/temp_prd_2.png'],
		alt: ['상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지', '상품 임시 이미지'],
		prodTitle: ' 식품-3-3-2 식품-3-3-2 식품-3-3-2 식품-3-3-2 식품-3-3-2 식품-3-3-2',
		discountPercent: 0,
		prodPrice: 88000,
		rating: {val: 1.0, reviewCnt: 8003},
		savePrice: 20000,
		stockCnt: 0,
		purchaseCnt: 10,
		benefitVal: ['농협 10%', '쿠폰'],
		brandId: 'b03',
	},
	// e: repeat
];

// 브랜드리스트
export const brandList = [
	{id: 'b01', title: '플리거 바이 제네럴', deliveryPrice: 2500},
	{id: 'b02', title: '나이키', deliveryPrice: 0},
	{id: 'b03', title: '아디다스', deliveryPrice: 3000},
];

// 회원정보
export const memberList = [
	{id: 'm01', name: '글림', phoneNumber: '010-2620-7631', address: '서울시 강남구 봉은사로 5길 6', detailAddress: '코너빌딩 5층', zipCode: '06120'},
];

export const store = new Vuex.Store({
	state:{
		focusIpEl: '',
		focusOutChk: false,
		swiperEl: '',
		allMenuList: allMenuList,
		allMenuOpenCheck: false,
		prodList: prodList,
		brandList: brandList,
		memberList: memberList,
		spinnerIpVal: '',
		cartList: new Object(),
	},// vue의 computed와 비슷
	mutations: {
		// swiper 객체 참조
		[REF_SWIPER](state, swiper) {
			state.swiperEl = swiper;
		},
		// input 객체 참조
		[REF_INPUT](state, input){
			state.focusIpEl = input;
			return state.focusIpEl;
		},
		// spinner 객체 참조
		[REF_SPINNER](state, input){
			state.spinnerIpVal = input;
			return state.spinnerIpVal;
		},
		// 헤더 검색어 영역 input focusout check
		[HEADER_SEARCH_FOCUSOUT_CHECK](state, ipVal){
			ipVal === '' ? state.focusOutChk = true : state.focusOutChk = false;
		},
		// 메인 > 전체 카테고리 열림 check
		[ALL_MENU_OPEN_CHECK](state, bool) {
			state.allMenuOpenCheck = bool;
			return state.allMenuOpenCheck;
		},
		// 장바구니 count
		[CART_ARR](state, {brandIdVal, prodIdVal, cntVal}){
			// 페이지 이동 시, pram 없는 경우 return
			if(brandIdVal === undefined && prodIdVal === undefined && cntVal === undefined) return;

			// 브랜드 중복 없는 경우
			if(state.cartList[brandIdVal] === undefined) {
				state.cartList[brandIdVal] = new Object(); // 브랜드 오브젝트 생성
				state.cartList[brandIdVal].prodList = new Object(); // 브랜드 상품 오브젝트 생성
				state.cartList[brandIdVal].brandPrice = 0; // 브랜드 내 상품가격 초기화

				// 브랜드 정보 저장
				for(let i of Object.values(state.brandList)) {
					if(i.id === brandIdVal){
						state.cartList[brandIdVal].brandName = i.title;
						state.cartList[brandIdVal].brandDeliveryPrice = i.deliveryPrice;
					}
				}
			}

			// 상품 중복인 경우 cntVal만 계산
			if(state.cartList[brandIdVal].prodList[prodIdVal] !== undefined){
				state.cartList[brandIdVal].prodList[prodIdVal].cntVal += cntVal;
				return false;
			}


			// 상품 obj 임의 생성
			let prodObj =  new Object();

			// 상품 정보 저장
			for(let i of Object.values(state.prodList)) {
				if(i.id === prodIdVal){
					prodObj.prodInfo = new Object();
					prodObj.prodInfo = i;
				}
			}

			// 상품 수량 저장
			prodObj.cntVal = cntVal;

			// 임의 상품 obj를 prodList에 저장
			state.cartList[brandIdVal].prodList[prodIdVal] = prodObj;

			// 브랜드 내 상품가격 total 계산
			state.cartList[brandIdVal].brandPrice += prodObj.prodInfo.prodPrice - ((prodObj.prodInfo.prodPrice * 0.01) * prodObj.prodInfo.discountPercent);

			return state.cartList;
		},
	},
});
