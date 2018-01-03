import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page/HomePage'
import Message from '@/components/message/Message'
import Information from '@/components/information/Information'
import ShoppingMail from '@/components/shopping-mail/ShoppingMail'
import PersonalCenter from '@/components/personal-center/PersonalCenter'

//func-components
import ShoppingCart from '@/components/func-components/ShoppingCart'
import Payment from '@/components/func-components/Payment'
import DataSet from '@/components/func-components/DataSet'
import Commenting from '@/components/func-components/Commenting'

//home-page
import Location from '@/components/home-page/Location'
import Search from '@/components/home-page/Search'
import Subjects from '@/components/home-page/Subjects'
import ContentsList from '@/components/home-page/ContentsList'
import Subject from '@/components/home-page/Subject'
import SubjectsList from '@/components/home-page/SubjectsList'
import InstitutionsList from '@/components/home-page/InstitutionsList'
import CoursesList from '@/components/home-page/CoursesList'
import Evaluate from '@/components/home-page/Evaluate'
import InstitutionDetails from '@/components/home-page/InstitutionDetails'
import CrowdFunding from '@/components/home-page/CrowdFunding'
import CourseDetails from '@/components/home-page/CourseDetails'
import CourseDetailsUL from '@/components/home-page/CourseDetailsUL'
import CourseContentDetails from '@/components/home-page/CourseContentDetails'
import CourseContentDetailsUL from '@/components/home-page/CourseContentDetailsUL'
import CourseCatalog from '@/components/home-page/CourseCatalog'
import CourseCatalogUL from '@/components/home-page/CourseCatalogUL'
import TeacherDetails from '@/components/home-page/TeacherDetails'
import CourseOrder from '@/components/home-page/CourseOrder'
import SelectKid from '@/components/home-page/SelectKid'
import DownLoadManagement from '@/components/home-page/DownLoadManagement'

//information
import InformationDetails from '@/components/information/InformationDetails'
import InformationComments from '@/components/information/InformationComments'

//shopping-mail
import GoodsDetails from '@/components/shopping-mail/GoodsDetails'
import GoodsCategories from '@/components/shopping-mail/GoodsCategories'
import GoodsSearch from '@/components/shopping-mail/GoodsSearch'

//message
import MessageSearch from '@/components/message/MessageSearch'
import MailList from '@/components/message/MailList'
import AddFriend from '@/components/message/AddFriend'
import MailListPhone from '@/components/message/MailListPhone'
import UserData from '@/components/message/UserData'
import AddApply from '@/components/message/AddApply'
import AddRequestUnread from '@/components/message/AddRequestUnread'
import MyGroups from '@/components/message/MyGroups'
import ChatDetails from '@/components/message/ChatDetails'
import GroupData from '@/components/message/GroupData'

//personal-center
import PersonalData from '@/components/personal-center/PersonalData'
import MyCourses from '@/components/personal-center/MyCourses'
import MyCourseDetails from '@/components/personal-center/MyCourseDetails'
import MyOrders from '@/components/personal-center/MyOrders'
import KidsArchiveList from '@/components/personal-center/KidsArchiveList'
import KidData from '@/components/personal-center/KidData'
import AddKidArchive from '@/components/personal-center/AddKidArchive'
import IdAuthenticate from '@/components/personal-center/IdAuthenticate'
import RelationSelect from '@/components/personal-center/RelationSelect'
import MyCollections from '@/components/personal-center/MyCollections'
import MyComments from '@/components/personal-center/MyComments'
import MyAddresses from '@/components/personal-center/MyAddresses'
import AddAddress from '@/components/personal-center/AddAddress'
import AddressEditing from '@/components/personal-center/AddressEditing'
import Feedback from '@/components/personal-center/Feedback'
import Login from '@/components/personal-center/Login'
import LoginByCode from '@/components/personal-center/LoginByCode'
import LoginByWeChat from '@/components/personal-center/LoginByWeChat'
import LoginByAliPay from '@/components/personal-center/LoginByAliPay'
import LoginByMicroBlog from '@/components/personal-center/LoginByMicroBlog'
import Register from '@/components/personal-center/Register'
import Agreement from '@/components/personal-center/Agreement'


Vue.use(Router);

export default new Router({
  routes: [
    //homepage------------------------------------------------------------------------
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/subjects',
      name: 'Subjects',
      component: Subjects
    },
    //列表页------------------------
    {
      path: "/contents-list",
      name: "ContentsList",
      component: ContentsList,
      children: [
        {
          path: "/contents-list/subjects-list",
          name: "SubjectsList",
          component: SubjectsList
        },
        {
          path: "/contents-list/institutions-list",
          name: "InstitutionsList",
          component: InstitutionsList
        },
        {
          path: "/contents-list/courses-list",
          name: "CoursesList",
          component: CoursesList
        }
      ]
    },
    {
      path: "/subject/:typeId",
      name: "Subject",
      component: Subject
    },
    //详情页------------------------
    {
      path: '/institution-details',
      name: 'InstitutionDetails',
      component: InstitutionDetails,
      children: [
        {
          path: "/institution-details/courses-list",
          name: "CoursesListInInstDetails",
          component: CoursesList
        },
        {
          path: "/institution-details/teachers-list",
          name: "TeachersListInInstDetails",
          component: SubjectsList
        },
        {
          path: "/institution-details/evaluate",
          name: "EvaluateInInstDetails",
          component: Evaluate
        }
      ]
    },
    {
      path: "/course-details",
      name: "CourseDetails",
      component: CourseDetails,
      children: [
        {
          path: "/course-details/content",
          name: "CourseContentDetails",
          component: CourseContentDetails
        },
        {
          path: "/course-details/catalog",
          name: "CourseCatalog",
          component: CourseCatalog
        },
        {
          path: "/course-details/recommend",
          name: "CourseRecommend",
          component: CoursesList
        }
      ]
    },
    {
      path: "/teacher-details",
      name: "TeacherDetails",
      component: TeacherDetails,
      children: [
        {
          path: "/teacher-details/courses",
          name: "CoursesInTDetails",
          component: CoursesList
        },
        {
          path: "/teacher-details/evaluate",
          name: "EvaluateInTDetails",
          component: Evaluate
        }
      ]
    },
    {
      path: "/course-details-underline",
      name: "CourseDetailsUL",
      component: CourseDetailsUL,
      children: [
        {
          path: "/course-details-underline/content",
          name: "CourseContentDetailsUL",
          component: CourseContentDetailsUL
        },
        {
          path: "/course-details-underline/catalog",
          name: "CourseCatalogUL",
          component: CourseCatalogUL
        },
        {
          path: "/course-details-underline/recommend",
          name: "CourseRecommendUL",
          component: CoursesList
        }
      ]
    },
    {
      path: "/crowd-funding",
      name: "CrowdFunding",
      component: CrowdFunding
    },
    //课程订单页--------------------
    {
      path: '/course-order/:type',
      name: 'CourseOrder',
      component: CourseOrder
    },
    {
      path: '/select-kid',
      name: 'SelectKid',
      component: SelectKid
    },
    //课程下载管理页-----------------
    {
      path: '/download-management',
      name: 'DownLoadManagement',
      component: DownLoadManagement
    },
    //message-------------------------------------------------------------------------
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/message-search',
      name: 'MessageSearch',
      component: MessageSearch
    },
    {
      path: '/mail-list',
      name: 'MailList',
      component: MailList
    },
    {
      path: '/add-friend',
      name: 'AddFriend',
      component: AddFriend
    },
    {
      path: '/mail-list-phone',
      name: 'MailListPhone',
      component: MailListPhone
    },
    {
      path: '/user-data',
      name: 'UserData',
      component: UserData
    },
    {
      path: '/add-apply',
      name: 'AddApply',
      component: AddApply
    },
    {
      path: '/addRequest-unread',
      name: 'AddRequestUnread',
      component: AddRequestUnread
    },
    {
      path: '/my-groups',
      name: 'MyGroups',
      component: MyGroups
    },
    {
      path: '/chat-details',
      name: 'ChatDetails',
      component: ChatDetails
    },
    {
      path: '/group-data',
      name: 'GroupData',
      component: GroupData
    },
    //information---------------------------------------------------------------------
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/information-details',
      name: 'InformationDetails',
      component: InformationDetails
    },
    {
      path: '/information-comments',
      name: 'InformationComments',
      component: InformationComments
    },
    //shoppingMail--------------------------------------------------------------------
    {
      path: '/shopping-mail',
      name: 'ShoppingMail',
      component: ShoppingMail
    },
    {
      path: '/goods-details',
      name: 'GoodsDetails',
      component: GoodsDetails
    },
    {
      path: '/goods-categories',
      name: 'GoodsCategories',
      component: GoodsCategories
    },
    {
      path: '/goods-search',
      name: 'GoodsSearch',
      component: GoodsSearch
    },
    //personalCenter------------------------------------------------------------------
    {
      path: '/personal-center',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/personal-data',
      name: 'PersonalData',
      component: PersonalData
    },
    {
      path: '/my-courses',
      name: 'MyCourses',
      component: MyCourses
    },
    {
      path: '/my-course-details',
      name: 'MyCourseDetails',
      component: MyCourseDetails
    },
    {
      path: '/my-orders',
      name: 'MyOrders',
      component: MyOrders
    },
    {
      path: '/kids-archive-list',
      name: 'KidsArchiveList',
      component: KidsArchiveList
    },
    {
      path: '/kid-data',
      name: 'KidData',
      component: KidData
    },
    {
      path: '/add-kidArchive',
      name: 'AddKidArchive',
      component: AddKidArchive
    },
    {
      path: '/id-authenticate',
      name: 'IdAuthenticate',
      component: IdAuthenticate
    },
    {
      path: '/relation-select',
      name: 'RelationSelect',
      component: RelationSelect
    },
    {
      path: '/my-collections',
      name: 'MyCollections',
      component: MyCollections
    },
    {
      path: '/my-comments',
      name: 'MyComments',
      component: MyComments
    },
    {
      path: '/my-addresses',
      name: 'MyAddresses',
      component: MyAddresses
    },
    {
      path: '/add-address',
      name: 'AddAddress',
      component: AddAddress
    },
    {
      path: '/address-editing',
      name: 'AddressEditing',
      component: AddressEditing
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    //登录注册部分-------------------------
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login-by-code',
      name: 'LoginByCode',
      component: LoginByCode
    },
    {
      path: '/login-by-weChat',
      name: 'LoginByWeChat',
      component: LoginByWeChat
    },
    {
      path: '/login-by-aliPay',
      name: 'LoginByAliPay',
      component: LoginByAliPay
    },
    {
      path: '/login-by-microBlog',
      name: 'LoginByMicroBlog',
      component: LoginByMicroBlog
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement
    },
    //functionComponents-------------------------------------------------------------
    {
      path: '/shopping-cart/:active',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/data-set/:type/:id',
      name: 'DataSet',
      component: DataSet
    },
    {
      path: '/commenting',
      name: 'Commenting',
      component: Commenting
    },
  ]
})
