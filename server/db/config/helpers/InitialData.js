/* Dummy data */

const ProjectData = [{
  userId: 1,
  title: "Draw one painting every day",
  description: "Draw whatever you see on your little sketchbook",
  wishCount: 4
},{
  userId: 1,
  title: "Create one brand logo with illustrator",
  description: "Just keep do it every single day",
  wishCount: 0
},{
  userId: 1,
  title: "Come up with one startup idea",
  description: "Just think of one cool idea and share it with everyone",
  wishCount: 1
},{
  userId: 1,
  title: "Solve one toy problem a day",
  description: "Solving toy problems will train you better",
  wishCount: 5
},{
  userId: 1,
  title: "Learn one aroma scent",
  description: "Smell one theme a day and write your thought!",
  wishCount: 0
},{
  userId: 1,
  title: "Compliment one thing",
  description: "Watch what your friend is good at. And comment on it",
  wishCount: 0
}];

const WishData = [{
  userId: 1,
  projectId: 1
},{
  userId: 2,
  projectId: 1
},{
  userId: 3,
  projectId: 1
},{
  userId: 4,
  projectId: 1
},{
  userId: 1,
  projectId: 3
},{
  userId: 1,
  projectId: 4
},{
  userId: 2,
  projectId: 4
},{
  userId: 3,
  projectId: 4
},{
  userId: 4,
  projectId: 4
},{
  userId: 5,
  projectId: 4
}
];
const UserProjectData = [{
  userId: 1,
  projectId: 1,
  startAt: "2016-06-06",
  endAt: "2016-06-12",
  success: true,
},{
  userId: 1,
  projectId: 3,
  startAt: "2016-06-14",
  endAt: "2016-06-20",
  success: false,
},{
  userId: 1,
  projectId: 2,
  startAt: "2016-06-30",
  endAt: "2016-07-06",
  success: false,
},{
  userId: 1,
  projectId: 4,
  startAt: "2016-07-07",
  endAt: "2016-07-13",
  success: false,
}];

const TransactionData = [{
  userId: 1,
  userProjectId: 1,
  customer_uid: "idforcoding@gmail.com",
  merchant_uid: "Transaction1",
  paymentDue: "2016-06-12",
  amount: 14000
},{
  userId: 1,
  userProjectId: 2,
  customer_uid: "idforcoding@gmail.com",
  merchant_uid: "Transaction2",
  paymentDue: "2016-06-20",
  amount: 7000
},{
  userId: 1,
  userProjectId: 3,
  customer_uid: "1--Lenny",
  merchant_uid: "1-6-1467566615137",
  paymentDue: "2016-06-30",
  amount: 7000
},{
  userId: 1,
  userProjectId: 4,
  customer_uid: "idforcoding@gmail.com",
  merchant_uid: "Transaction4",
  paymentDue: "2016-07-14",
  amount: 7000
}];

const PostData = [{
  userId: 1,
  userProjectId: 1,
  projectId: 1,
  day: 1,
  text: "Lorem ipsum dolor sit amet, mea cu tota mucius corrumpit. Ex debitis meliore mea, an invidunt rationibus nec, eius principes prodesset ei nam.",
  likeCount: 4
},{
  userId: 1,
  userProjectId: 1,
  projectId: 1,
  day: 2,
  text: "Lorem ipsum dolor sit amet, mea cu tota mucius corrumpit. Ex debitis meliore mea, an invidunt rationibus nec, eius principes prodesset ei nam.",
  likeCount: 2
},{
  userId: 1,
  userProjectId: 1,
  projectId: 1,
  day: 3,
  text: "Lorem ipsum dolor sit amet, mea cu tota mucius corrumpit. Ex debitis meliore mea, an invidunt rationibus nec, eius principes prodesset ei nam.",
  likeCount: 1
},{
  userId: 1,
  userProjectId: 1,
  projectId: 1,
  day: 4,
  text: "Lorem ipsum dolor sit amet, mea cu tota mucius corrumpit. Ex debitis meliore mea, an invidunt rationibus nec, eius principes prodesset ei nam."
},{
  userId: 1,
  userProjectId: 1,
  projectId: 1,
  day: 5,
  text: "Lorem ipsum dolor sit amet, mea cu tota mucius corrumpit. Ex debitis meliore mea, an invidunt rationibus nec, eius principes prodesset ei nam.",
  likeCount: 1
},{
  userId: 1,
  userProjectId: 1,
  projectId: 1,
  day: 6,
  text: "Lorem ipsum dolor sit amet, mea cu tota mucius corrumpit. Ex debitis meliore mea, an invidunt rationibus nec, eius principes prodesset ei nam.",
  likeCount: 55
},{
  userId: 1,
  userProjectId: 1,
  projectId: 1,
  day: 7,
  text: "Lorem ipsum dolor sit amet, mea cu tota mucius corrumpit. Ex debitis meliore mea, an invidunt rationibus nec, eius principes prodesset ei nam.",
  likeCount: 8
},{
  userId: 1,
  userProjectId: 2,
  projectId: 3,
  day: 1,
  text: "Lorem ipsum dolor sit amet, mea cu tota mucius corrumpit. Ex debitis meliore mea, an invidunt rationibus nec, eius principes prodesset ei nam."
},{
  userId: 1,
  userProjectId: 2,
  projectId: 3,
  day: 3,
  text: "Lorem ipsum dolor sit amet, mea cu tota mucius corrumpit. Ex debitis meliore mea, an invidunt rationibus nec, eius principes prodesset ei nam.",
  likeCount: 2
}];

const LikeData = [{
  userId: 1,
  postId: 1
},{
  userId: 1,
  postId: 3
},{
  userId: 1,
  postId: 4
},{
  userId: 1,
  postId: 5
},{
  userId: 1,
  postId: 7
},{
  userId: 1,
  postId: 8
},{
  userId: 1,
  postId: 9
}];

const ReportData = [{
  userId: 1,
  postId: 1,
  description: "Personal Assault"
},{
  userId: 1,
  postId: 3,
  description: "Politics"
},{
  userId: 1,
  postId: 5,
  description: "Government"
},{
  userId: 1,
  postId: 7,
  description: "Fake Rumors"
},{
  userId: 1,
  postId: 8,
  description: "Spy / Agent"
},{
  userId: 1,
  postId: 9,
  description: "Illegal Drugs"
}];

const PostImageData = [{
  postId: 1,
  index: 0,
  url: "http://www.gpension.co.kr/data/portal/terra/ext/1437028828_A3E2z9px_ECA3BCEAB2BD4.jpg"
},{
  postId: 1,
  index: 1,
  url: "http://www.koreatrails.or.kr/upload/photo/FILE_20130913012239760006.jpg"
},{
  postId: 2,
  index: 0,
  url: "http://www.koreatrails.or.kr/upload/photo/FILE_20160526122629602524.jpg"
},{
  postId: 3,
  index: 0,
  url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5ql_TWZAtvJ2MXVhAMsWK01zH99KZ3QUeorJUJiOObRR48wZSvQ"
},{
  postId: 4,
  index: 0,
  url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSmPMXDOWYqZT8QiawpJacw_bGrLlp6YO59MEKpNI5yAChy4Xq"
},{
  postId: 5,
  index: 0,
  url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKtBxLURMoqlIrmmkPlBEkfH8qqEWMIjUI_20oisHz1OllkZKk"
},{
  postId: 6,
  index: 0,
  url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdBIUVuaWAQyS1F1s3X35_BxgZWV5Bz_0dTlFReknpaEiSIvxM"
},{
  postId: 7,
  index: 0,
  url: "http://www.koreatrails.or.kr/upload/photo/FILE_20130913012239760006.jpg"
},{
  postId: 8,
  index: 0,
  url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuS8U_VndUKp-USyOACRsoH4w3GcCHPdIHQbj9mxxcZduvdx8-UQ"
},{
  postId: 9,
  index: 0,
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcwb3ZYc3_Kmz8LtE1mjVMiYN26E9dB31uSDNLoZoSIoenStrIA"
}];

const InitialData = {
  ProjectData: ProjectData,
  UserProjectData: UserProjectData,
  PostData: PostData,
  PostImageData: PostImageData,
  LikeData: LikeData,
  WishData: WishData,
  ReportData: ReportData,
  TransactionData: TransactionData
};

export default InitialData;
