export const Campaigns = [
  {
    title: '일도참위', // orpg\src\campaigns에서 세션 로그가 들어있는 폴더 이름
    label: '일도참위 추포령', // 저장소에서 표시할 캠페인 이름
    platform: 'FVTT', // 롤20이면 "roll20", FVTT면 "FVTT"
    npcs: [
    ],
    logs: [
      {
        index: '1', // orpg\src\campaigns\TEST\logs 폴더 내에 있는 html 파일 이름
        name: '1화', // 저장소에서 표시할 파일 이름
        images: [
          {
            id: `JOAcO7zbKryN3QH9`, // 롤20 로그 html에서 data-messageid 부분이다. 그 아래로 내려갈 시 아래에 적힌 이름의 이미지로 바뀐다.
            file: '1.png',
          },
          {
            id: `CvpylhnNof7CkdHn`,
            file: '2.png',
          },
          {
            id: `uMYC6RhV2Ss6jsGS`,
            file: '3.png',
          },

        ],
        interfaces: [
        ],
      },
      
      
    ]
  },
];

export interface Campaign {
  title: string;
  label: string;
  platform: string;
  npcs: NPC[];
  logs: Log[];
}

export interface NPC {
  name: string;
  avatar: string;
}

export interface Log {
  index: string;
  name: string;
  images?: Image[];
  interfaces?: Image[];
}

export interface Image {
  id: string;
  file: string;
}
