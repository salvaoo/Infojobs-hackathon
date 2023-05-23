export interface OffersProps {
   availableSortingMethods: string[];
   currentPage: number;
   currentResults: number;
   dataLayer: DataLayer;
   items: Item[];
   offers: Item[];
   pageSize: number;
   sortBy: string;
   totalPages: number;
   totalResults: number;
}


export interface offersDetailsProps {
   active: boolean;
   applications: number;
   archived: boolean;
   availableForVisualization: boolean;
   blocked: boolean;
   category: Category;
   city: string;
   cityPD: number;
   commissions: string;
   contractDuration: string;
   contractType: Category;
   country: Category;
   creationDate: string;
   deleted: boolean;
   department: string;
   description: string;
   desiredRequirements: string;
   detailedStudiesId: number;
   disponibleForFullVisualization: boolean;
   epreselec: boolean;
   exactLocation: boolean;
   experienceMin: Category;
   exportConsentName: string;
   externalUrlForm: string;
   fiscalAddress: string;
   hasKillerQuestions: number;
   hasOpenQuestions: number;
   id: string;
   jobLevel: Category;
   journey: Category;
   latitude: number;
   link: string;
   longitude: number;
   maxPay: Pay;
   minPay: Pay;
   minRequirements: string;
   multiProvince: boolean;
   profile: Profile;
   province: Category;
   referenceId: string;
   residence: Category;
   salaryDescription: string;
   schedule: string;
   shouldAskExportConsent: boolean;
   showPay: boolean;
   skillsList: SkillsList[];
   staffInCharge: Category;
   state: number;
   studiesMin: Category;
   studying: boolean;
   subSegment: number;
   subcategory: Category;
   title: string;
   updateDate: string;
   upsellings: Upsellings;
   vacancies: number;
   zipCode: string;
}


export interface DataLayer {
   offer_search_page: string;
   offer_search_page_limit: string;
   region_level2_id: string;
   search_category: string;
}

export interface Item {
   applications: string;
   author: Author;
   bold: boolean;
   category: Category;
   city: string;
   color: boolean;
   contractType: Category;
   executive: boolean;
   experienceMin: Category;
   id: string;
   link: string;
   province: Category;
   published: Date;
   requirementMin: string;
   salaryDescription: string;
   salaryMax: Category;
   salaryMin: Category;
   salaryPeriod: Category;
   study: Category;
   subSegment: number;
   subcategory: Category;
   title: string;
   updated: Date;
   urgent: boolean;
   workDay: Category;
}

export interface Author {
   corporateResponsive: boolean;
   id: string;
   logoUrl?: string;
   name: string;
   showCorporativeHeader: boolean;
   uri: string;
}

export interface Category {
   id: number;
   value: string;
}

export interface Pay {
   amount: number;
   amountId: number;
   amountValue: string;
   periodId: number;
   periodValue: string;
}

export interface Profile {
   clientId: number;
   corporateResponsive: boolean;
   corporateWebsiteUrl: string;
   country: Category;
   description: string;
   followable: boolean;
   hidden: boolean;
   id: string;
   logoUrl: string;
   name: string;
   numberWorkers: number;
   province: Category;
   showCorporativeHeader: boolean;
   typeIndustry: Category;
   url: string;
   web: string;
   websiteUrl: string;
}

export interface SkillsList {
   skill: string;
}

export interface Upsellings {
   highlightColor: boolean;
   highlightHomeMonth: boolean;
   highlightHomeWeek: boolean;
   highlightLogo: boolean;
   highlightStandingOffer: boolean;
   highlightSubcategory: boolean;
   highlightUrgent: boolean;
}